import {useEffect, useState} from "react";
// import "react-input-range/lib/css/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import {Provider, useDispatch} from "react-redux";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import "react-responsive-modal/styles.css";
// import WOW from 'wowjs';
// Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import "../public/assets/css/main.css";
import store from "../redux/store";
import Preloader from "./../components/elements/Preloader";
import {apiSlice, apiSliceUrl} from "@/redux/reducer/api";
import {setSettingProps} from "@/redux/reducer/setting";

// import { wrapper } from "@/redux/store";

function MyApp({Component, pageProps, setting}) {


    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    //
    //     // new WOW.WOW({
    //     //     live: false
    //     //   }).init()
    // }, []);

    return (
        <>
            {/*{!loading ? (*/}
                <Provider store={store}>
                    <StorageWrapper>
                        <AppWithData setting={setting}>
                     {setting.owner_information.company_name }
                            <Component {...pageProps} />
                            <ToastContainer/>
                        </AppWithData>
                    </StorageWrapper>
                </Provider>
            {/*) : (*/}
            {/*    <Preloader/>*/}
            {/*)}*/}
        </>
    );
}

function AppWithData({children, setting}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSettingProps(setting));
    }, [setting, dispatch]);
    return children;
}

MyApp.getInitialProps = async (appContext) => {
    try {
        await store.dispatch(apiSlice.endpoints.getConfig.initiate(apiSliceUrl.public_info)).unwrap();
    } catch (error) {
        // Handle the error accordingly
        console.log("my error", error)
    }
    const state = store.getState();
    const setting = state[apiSlice.reducerPath].queries[`getConfig("${apiSliceUrl.public_info}")`].data;
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    return {pageProps, setting};
};
// export default wrapper.withRedux(MyApp);
export default MyApp;


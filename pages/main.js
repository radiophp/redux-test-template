import IntroPopup from "./../components/elements/IntroPopup";
import Layout from "./../components/layout/Layout";
import Intro4 from "@/components/sliders/intro4";
import CategoryTab from "@/components/ecommerce/categoryTab";
import Link from "next/link";
import FeatchDeals from "@/components/ecommerce/fetchDeals";
import Banner5 from "@/components/elements/Banner5";
import CategoryProduct from "@/components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "@/components/ecommerce/Filter/PriceRangeSlider";
import VendorFilter from "@/components/ecommerce/Filter/VendorFilter";
import SizeFilter from "@/components/ecommerce/Filter/SizeFilter";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";
import store from '@/redux/store';
import {apiSlice, apiSliceUrl,getConfig, useGetConfigQuery} from '@/redux/reducer/api';
import { useDispatch } from 'react-redux';
import {setProductsProps ,selectProducts,selectProductsState} from "@/redux/reducer/products";



const NameComponent = () => {
    const [name, setName] = useState('mamad');
    const handleName = useCallback(() => {
        let curName = (name === 'ali') ? 'mamad' : 'ali';
        setName(curName);
        console.log("from handleName: " + curName);
    }, [name]);
    console.log("from NameComponent: " + name);
    return useMemo(
        () => (<>
            <p onClick={handleName}>
                man {name}
            </p>
        </>),
        [name, handleName]
    );


}

const Home = (props) => {
    const dispatch = useDispatch();
    dispatch(setProductsProps(props.allProducts));
    const products = useSelector(selectProducts);



    return <>
        <NameComponent/>

        {/*<IntroPopup/>*/}

        <Layout noBreadcrumb="d-none">
            {/*<section className="home-slider position-relative mb-30">*/}
            {/*    <div className="home-slide-cover">*/}
            {/*        <Intro4 />*/}
            {/*    </div>*/}
            {/*</section>*/}
            <div className="container mb-30">
                <div className="row">
                    <div className="col-lg-4-5">
                        <section className="product-tabs section-padding position-relative">
                            <CategoryTab allProducts={props.allProducts}/>
                        </section>

                        {/*<section className="section-padding pb-5">*/}
                        {/*    <div className="section-title" data-wow-delay="0">*/}
                        {/*        <h3 className="">Deals Of The Day</h3>*/}
                        {/*        <Link href="/shop-grid-right" className="show-all">All Deals<i className="fi-rs-angle-right"></i>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*    <FeatchDeals />*/}
                        {/*</section>*/}
                        {/*<section className="banners mb-15">*/}
                        {/*    <div className="container">*/}
                        {/*        <div className="row">*/}
                        {/*            <Banner5 />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                    </div>
                    {/*<div className="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">*/}
                    {/*    <div className="sidebar-widget widget-category-2 mb-30">*/}
                    {/*        <h5 className="section-title style-1 mb-30">*/}
                    {/*            Category*/}
                    {/*        </h5>*/}
                    {/*        <CategoryProduct />*/}
                    {/*    </div>*/}

                    {/*    <div className="sidebar-widget price_range range mb-30">*/}
                    {/*        <h5 className="section-title style-1 mb-30">*/}
                    {/*            Fill by price*/}
                    {/*        </h5>*/}
                    {/*        <div className="bt-1 border-color-1"></div>*/}

                    {/*        <div className="price-filter">*/}
                    {/*            <div className="price-filter-inner">*/}
                    {/*                <br />*/}
                    {/*                <PriceRangeSlider />*/}

                    {/*                <br />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="list-group">*/}
                    {/*            <div className="list-group-item mb-10 mt-10">*/}
                    {/*                <label className="fw-900">Color</label>*/}
                    {/*                <VendorFilter />*/}
                    {/*                <label className="fw-900 mt-15">*/}
                    {/*                    Item Condition*/}
                    {/*                </label>*/}
                    {/*                <SizeFilter />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <br />*/}
                    {/*    </div>*/}

                    {/*    <div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">*/}
                    {/*        <h5 className="section-title style-1 mb-30">*/}
                    {/*            New products*/}
                    {/*        </h5>*/}
                    {/*        <div className="bt-1 border-color-1"></div>*/}

                    {/*        <div className="single-post clearfix">*/}
                    {/*            <div className="image">*/}
                    {/*                <img*/}
                    {/*                    src="/assets/imgs/shop/thumbnail-3.jpg"*/}
                    {/*                    alt="#"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div className="content pt-10">*/}
                    {/*                <h5>*/}
                    {/*                    <a>Chen Cardigan</a>*/}
                    {/*                </h5>*/}
                    {/*                <p className="price mb-0 mt-5">*/}
                    {/*                    $99.50*/}
                    {/*                </p>*/}
                    {/*                <div className="product-rate">*/}
                    {/*                    <div*/}
                    {/*                        className="product-rating"*/}
                    {/*                        style={{ width: "90%" }}*/}
                    {/*                    ></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="single-post clearfix">*/}
                    {/*            <div className="image">*/}
                    {/*                <img*/}
                    {/*                    src="/assets/imgs/shop/thumbnail-4.jpg"*/}
                    {/*                    alt="#"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div className="content pt-10">*/}
                    {/*                <h6>*/}
                    {/*                    <a>Chen Sweater</a>*/}
                    {/*                </h6>*/}
                    {/*                <p className="price mb-0 mt-5">*/}
                    {/*                    $89.50*/}
                    {/*                </p>*/}
                    {/*                <div className="product-rate">*/}
                    {/*                    <div*/}
                    {/*                        className="product-rating"*/}
                    {/*                        style={{ width: "80%" }}*/}
                    {/*                    ></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="single-post clearfix">*/}
                    {/*            <div className="image">*/}
                    {/*                <img*/}
                    {/*                    src="/assets/imgs/shop/thumbnail-5.jpg"*/}
                    {/*                    alt="#"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div className="content pt-10">*/}
                    {/*                <h6>*/}
                    {/*                    <a>Colorful Jacket</a>*/}
                    {/*                </h6>*/}
                    {/*                <p className="price mb-0 mt-5">$25</p>*/}
                    {/*                <div className="product-rate">*/}
                    {/*                    <div*/}
                    {/*                        className="product-rating"*/}
                    {/*                        style={{ width: "60%" }}*/}
                    {/*                    ></div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">*/}
                    {/*        <img*/}
                    {/*            src="/assets/imgs/banner/banner-11.png"*/}
                    {/*            alt=""*/}
                    {/*        />*/}
                    {/*        <div className="banner-text">*/}
                    {/*            <span>Oganic</span>*/}
                    {/*            <h4>*/}
                    {/*                Save 17% <br />*/}
                    {/*                on{" "}*/}
                    {/*                <span className="text-brand">Oganic</span>*/}
                    {/*                <br />*/}
                    {/*                Juice*/}
                    {/*            </h4>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

        </Layout>

    </>;
}

export const getServerSideProps = async () =>{
    try {
        await store.dispatch(apiSlice.endpoints.getProducts.initiate(apiSliceUrl.products)).unwrap();
    } catch (error) {
        // Handle the error accordingly
        console.log("my error", error)
    }
    const state = store.getState();
    const allProducts = state[apiSlice.reducerPath].queries[`getProducts("${apiSliceUrl.products}")`].data;


    // const request = await fetch(`${server}/static/product.json`);
    // const allProducts = await request.json();
    // Pass the Data to your component as a prop
    return {
        props: {
            allProducts
        },
    };
}
export default Home;
import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const FooterStyles = styled('div')(({ theme }) => ({
    backgroundColor: '#3B80FF',
    position: 'absolute',
    bottom: 0,
    width: '100vw',
    '& .rootBox': {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
    '& .footerNav': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(0),
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 'auto',
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2),
        },
    },
    '& .footerLink': {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(2),
        },
    },
}));

export default function Footer(props) {
    const content = {
        'brand': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
        'copy': '© 2020 Nereus All rights reserved.',
        'link1': 'First Link',
        'link2': 'Second Link',
        'link3': 'Third Link',
        'link4': 'Fourth Link',
        ...props.content
    };

    let brand;

    if (content.brand.image) {
        brand = <img src={content.brand.image} alt="" width={content.brand.width} />;
    } else {
        brand = content.brand.text || '';
    }

    return (
        <>
        <FooterStyles>
        <footer>
            <Container maxWidth="lg">

                    <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className="rootBox">
                        <Link href="#" color="inherit" underline="none">
                            {brand}
                        </Link>
                        <Box component="nav" className="footerNav">
                            <Link href="#" variant="body1" color="textPrimary" className="footerLink">{content['link1']}</Link>
                            <Link href="#" variant="body1" color="textPrimary" className="footerLink">{content['link2']}</Link>
                            <Link href="#" variant="body1" color="textPrimary" className="footerLink">{content['link3']}</Link>
                            <Link href="#" variant="body1" color="textPrimary" className="footerLink">{content['link4']}</Link>
                        </Box>
                        <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography>
                    </Box>

            </Container>
        </footer>
        </FooterStyles>
        </>
    );
}

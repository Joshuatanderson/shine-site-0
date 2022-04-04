import { Box } from "@mui/system";
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Footer from "../components/Footer";

const _document = () => {
    const classes = {
        contentContainer: {
            minHeight: "calc(100vh)",
        },
    };

    return (
        <Html>
            <Head>
                {/* Integrated based on this guide: https://www.learnbestcoding.com/post/9/easiest-way-to-integrate-google-analytics-with-react-js-and-next-js */}
                {/* <!-- Google Tag Manager --> */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NX8RL48');`,
                    }}
                ></script>
                {/* <!-- End Google Tag Manager --> */}

                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                {/* Google Tag Script */}
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                ></noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default _document;

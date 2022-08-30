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
                {/* Integrated based on this guide:https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/*/}
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                        `,
                    }}
                />
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

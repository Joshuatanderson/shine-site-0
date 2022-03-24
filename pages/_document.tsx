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
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default _document;

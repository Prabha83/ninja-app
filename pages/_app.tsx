import React, { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Head from "next/head";
import { lightTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Ninja app</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
export default MyApp;

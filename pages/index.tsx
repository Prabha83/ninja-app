import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { Typography } from "@material-ui/core";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>

            <Typography variant="h5" component="h5">
                Ninja app page
            </Typography>
            <Link href="/products/new">
                <a>New products</a>
            </Link>
        </Layout>
    );
}

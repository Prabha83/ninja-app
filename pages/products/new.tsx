import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import ProductsComponent from "../../components/Products";

export default function NewProduct() {
    return (
        <Layout>
            <Head>
                <title>Add product</title>
            </Head>
            <ProductsComponent />
        </Layout>
    );
}

import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import Head from "next/head";


export default function Events() {
    return(
        <Layout>
            <Head>
                <title>Akce</title>
                <meta name="events" content="Tactica The Game events" />
            </Head>
            <Box
                width='80vw'
                height='80vh'
                padding='20px'
                bg='green'
            >

            </Box>

        </Layout>
    )
}
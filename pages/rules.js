import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import Head from "next/head";
import styles from '../styles/Home.module.css';


export default function Rules() {
    return(
        <Layout>
            <div className={styles.container}>
                <Head>
                <title>Tactica The Game</title>
                <meta name="description" content="Tactica The Game website" />
                </Head>

                <main className={styles.main}>
                <body>
                    <Box 
                    width='80vw'
                    height='80vh'
                    padding='20px'
                    
                    >
                        {/* <Image 
                            src="/Pravidla_CZ_3.7-01"
                        /> */}
                    </Box>
                </body>
                </main>

                <footer className={styles.footer}>
                </footer>
            </div>
        </Layout>
    )
}
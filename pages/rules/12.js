import { Box, Flex, Link } from "@chakra-ui/react";
import Layout from "../../components/layout";
import Head from "next/head";
import styles from '../../styles/Home.module.css';
import Image from "next/image";


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
                    height='100vh'
                    padding='20px'
                    backgroundImage="url(/Pravidla_CZ_3.7-12.png)"
                    backgroundPosition="center"
                    backgroundSize="50%"
                    backgroundRepeat="no-repeat"
                    >
                        <Box
                            paddingTop="80vh"
                            display="inline-block"
                        >
                            <Link href="/rules/11"
                                    // hidden="True"
                                    marginTop="90vh"
                                    marginRight="0vw"
                            >
                                <a>
                                    <Image alt="Tactica rules previous page" src="/back.png"
                                            width="60"
                                            height="60"
                                    />
                                </a>
                            </Link>
                            <Link href="/rules/12"
                                    hidden="True"
                                    marginTop="90vh"
                                    marginLeft="60vw"
                            >
                                <a>
                                    <Image alt="Tactica rules next page" src="/next.png"
                                            width="60"
                                            height="60"
                                    />
                                </a>
                            </Link>
                        </Box>
                    </Box>
                </body>
                </main>

                <footer className={styles.footer}>
                </footer>
            </div>
        </Layout>
    )
}
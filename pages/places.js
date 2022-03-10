import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Places() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Tactica The Game</title>
          <meta name="description" content="Tactica The Game website" />
        </Head>

        <main className={styles.main}>
          <body>
            <Box width="80vw" height="80vh" padding="20px">
              <h1 className={styles.title}>Kde hrát Tacticu</h1>
              {/* <iframe
                width="450"
                height="250"
                style="border:0"
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&${PARAMETERS}`}
              ></iframe> */}
            </Box>
          </body>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}

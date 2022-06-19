import { Grid, GridItem, Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import MyDocument from "./_document";
import Intro from "../components/intro";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Tactica The Game</title>
          <meta name="description" content="Tactica The Game website" />
          <link
            href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main className={styles.main}>
          <body>
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
              gap={{ base: 6, md: "10vw" }}
            >
              {/* first row */}
              <GridItem>
                <Intro />
              </GridItem>
              <GridItem></GridItem>
              {/* second row */}
              <GridItem></GridItem>
              <GridItem></GridItem>
              {/* third row */}
              <GridItem></GridItem>
              <GridItem></GridItem>
            </Grid>
          </body>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}

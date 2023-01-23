import { Grid, GridItem, Box } from "@chakra-ui/react";
import Head from "next/head";
import { Intro, PatchNotes, Rules, Layout, Navbar } from "../components";
import client from "../resources/contentfulClient";
import { Dict } from "@chakra-ui/utils";

export default function Home({ rules, patchNotes, introduction }) {
  const styles: Dict = {
    Grid: {
      templateColumns: { base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" },
      gap: { base: 6, md: "10vw" },
    },
  };

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
            <Grid {...styles.Grid}>
              {/* first row */}
              <GridItem>
                <Intro content={introduction} />
              </GridItem>
              <GridItem></GridItem>
              {/* second row */}
              <GridItem>
                <Rules content={rules} preview />
              </GridItem>
              <GridItem></GridItem>
              {/* third row */}
              <GridItem>
                <PatchNotes content={patchNotes} preview />
              </GridItem>
              <GridItem></GridItem>
            </Grid>
          </body>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const [rules, patchNotes, introduction] = await Promise.all([
    client.getEntries({ content_type: "rules" }),
    client.getEntries({ content_type: "patchNotes" }),
    client.getEntries({ content_type: "introduction" }),
  ]);

  return {
    props: {
      rules,
      patchNotes,
      introduction,
    },
  };
}

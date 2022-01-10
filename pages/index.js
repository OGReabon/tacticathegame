import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import MyDocument from './_document'

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
            <Box 
              width='80vw'
              height='80vh'
              padding='20px'
              alignContent="center"
            >
              <h1 className={styles.title}>
                Vítejte na hlavní stránce hry Tactica
              </h1>
              <div className='content'>
                <article>
                  <p>Vítejte na webových stránkách TACTICY, kde najdete veškeré potřebné informace o hře, jak a kde ji vyzkoušet i poslední novinky a změny.</p>
                </article>
                <article >
                  <p>
                    TACTICA je stolní a online tahová strategická hra, ve které hráči využívají různé druhy jednotek a akčních karet k obsazení držav a nakonec i k dobytí hradů soupeřů. Pro vítězství v TACTICE je důležitá strategie, reagování na činnost soupeřů a předvídavost. TACTICU si můžete zahrát online pomocí odkazu níže, nebo fyzicky v některém z podniků, ve kterých je k dispozici k veřejnému hraní. Pokud se chcete do TACTICY zapojit, připojte se na <a href="https://discord.gg/7mHQeFCDjX">Discord</a> server, kde sídlí komunita.
                  </p>
                </article>
              </div>
              <iframe 
                width="680" 
                height="340" 
                src="https://tabletopia.com/games/tactica/680x340">

                </iframe>

            </Box>
          </body>
        </main>

        <footer className={styles.footer}>
        </footer>
      </div>
    </Layout>
  )
}

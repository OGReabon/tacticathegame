import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function PatchNotes() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Tactica The Game</title>
          <meta name="description" content="Tactica The Game website" />
        </Head>

        <main className={styles.main}>
          <body>
            <div>
              <h1>Patch 3.8</h1>
              <h3>Rolby:</h3>
              <p>
                Na Hory se nyní může vstoupit i s Bojovým vozem. Modus operandi:
                Nově se TACTICA oficiálně dá hrát ve více módech. K dispozici je
                kompetitivní (klasický), multiplayer a nově i Casual mód, ve
                kterém hráči nevypadávají a získávají body i za ocenění.
              </p>{" "}
              <h3>Time’s up, let’s do this:</h3>
              <p>
                Jak se cítíte, když je někdo na tahu už deset minut a pohnul
                přitom s dvěma jednotkami z dvaceti? No fun heh? Od extrémního
                promýšlení bychom rádi TACTICU dostali spíš do vod promýšlení v
                časovém presu. V kompetitivním módu (ale doporučujeme i v
                ostatních) se proto nyní bude hrát s časovým omezením na každý
                tah. Nejedná se prozatím o nic striktního, dodržování časového
                limitu je nyní spíše v rámci fair play. S jedním hradem byste
                měli svůj tah dokončit do tří minut, s každým dalším hradem pak
                o minutu navíc. Pokud hráč limit extrémně překračuje nikoli
                proto, že má zkrátka moc jednotek, ale protože extrémně dlouho
                nečinně přemýšlí, bude rozhodčími uděleno napomenutí a následně
                penalizace v (G). Hráčův tah by neměl trvat více než tři minuty
                (kumulativně). V praxi byste tedy např. na konci pátého tahu
                neměli mít odehráno více než 15 minut. Za každý obsazený hrad se
                tento limit prodlouží o 1 minutu.
              </p>
            </div>
          </body>
        </main>
      </div>
    </Layout>
  );
}

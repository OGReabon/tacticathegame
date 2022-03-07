import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { Flex, Stack, Link, UnorderedList, ListItem } from "@chakra-ui/react";

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
            <Flex direction="row">
              <Stack width="20vw">
                <Stack direction="column" position="fixed" flexBasis="33vw">
                  <Link variant="contextualLink" href="#3.8">
                    Patch 3.8
                  </Link>
                  <Link variant="contextualLink" href="#3.7">
                    Patch 3.7
                  </Link>
                </Stack>
              </Stack>
              <Stack flexBasis="60vw" paddingRight="10vw" paddingLeft="10vw">
                <div id="3.8">
                  <h1 className="patch">Patch 3.8</h1>
                  <h3 className="hotfix">HOTFIX</h3>
                  <h3 className="patch-point">Speeding ticket 3.0:</h3>
                  <p>
                    Nejmenovaní PRO hráči na malé mapě při horečném
                    playtestování a tvrdé přípravě na playoffs nalezli ultimátní
                    začáteční build pro prvního hráče, díky kterému získá
                    nesmírnou výhodu, a to i přes původní Speeding ticket. Po
                    odkoukání této strategie by tak další 1v1 hry mohly vypadat
                    poněkud stroze a nezajímavě, když by ten první vždy vyhrál.
                    Omezení goldů tedy cestou nebylo, a protože filosofií
                    TACTICY je spíše proaktivní plays podporovat než je
                    omezovat, první hráč by měl mít možnost zvolit si optimální
                    play a mít na něj na začátku hry dostatek (G). Druhý hráč je
                    však v zásadní nevýhodě, a měl by tak mít dostatek (G) na
                    to, aby na prvního hráče mohl adekvátně reagovat. Tomu jsme
                    tedy přizpůsobili i tento hotfix, který snad lépe přináší
                    prvnímu i druhému hráči to, po čem jen mohou toužit.
                  </p>
                  <ul>
                    <li>
                      Začínající hráč na malé mapě má na začátku hry 25(G),
                      druhý hráč má 30(G).
                    </li>
                  </ul>
                  <h3 className="patch-point">Rolby:</h3>
                  <p>
                    Na Hory se nyní může vstoupit i s Bojovým vozem. Modus
                    operandi: Nově se TACTICA oficiálně dá hrát ve více módech.
                    K dispozici je kompetitivní (klasický), multiplayer a nově i
                    Casual mód, ve kterém hráči nevypadávají a získávají body i
                    za ocenění.
                  </p>{" "}
                  <h3 className="patch-point">Time’s up, let’s do this:</h3>
                  <p>
                    Jak se cítíte, když je někdo na tahu už deset minut a pohnul
                    přitom s dvěma jednotkami z dvaceti? No fun heh? Od
                    extrémního promýšlení bychom rádi TACTICU dostali spíš do
                    vod promýšlení v časovém presu. V kompetitivním módu (ale
                    doporučujeme i v ostatních) se proto nyní bude hrát s
                    časovým omezením na každý tah. Nejedná se prozatím o nic
                    striktního, dodržování časového limitu je nyní spíše v rámci
                    fair play. S jedním hradem byste měli svůj tah dokončit do
                    tří minut, s každým dalším hradem pak o minutu navíc. Pokud
                    hráč limit extrémně překračuje nikoli proto, že má zkrátka
                    moc jednotek, ale protože extrémně dlouho nečinně přemýšlí,
                    bude rozhodčími uděleno napomenutí a následně penalizace v
                    (G). Hráčův tah by neměl trvat více než tři minuty
                    (kumulativně). V praxi byste tedy např. na konci pátého tahu
                    neměli mít odehráno více než 15 minut. Za každý obsazený
                    hrad se tento limit prodlouží o 1 minutu.
                  </p>
                </div>
                <div id="3.7">
                  <h1>Patch 3.7 </h1>
                  <h3 className="patch-point">Make Mountains Great Again:</h3>
                  <p>
                    Hory jsou trošku useless, žejo? Not anymore! Protože
                    Quicksand de facto plní roli, kterou na mapě pro 3 hráče
                    hory původně měly hrát (a lépe…), zkoušíme jim najít jinačí
                    angažmá. Ačkoli je na hory složité vylézt a zase z nich
                    slézt, čerstvý vzduch, pramenitá voda a pobyt v panenské
                    přírodě dělá jednotkám moc dobře, tedy aspoň než se opět
                    setkají s nepřítelem.
                  </p>
                  <UnorderedList>
                    <ListItem>
                      - Nový typ pole: <b>Hory</b>
                    </ListItem>
                    <UnorderedList>
                      <ListItem>
                        - Nyní na ně lze vstoupit jednotkami,{" "}
                        <b>nikoli však s vozem.</b>
                      </ListItem>
                      <ListItem>
                        - - Výstup na Hory i sestup z nich na vedlejší pole
                        stojí jednotku <b>2 body pohybu.</b>
                      </ListItem>
                      <ListItem>
                        -- Kdykoli vstoupí jakákoli jednotka na Hory, obdrží
                        <b>bonusový žeton na +1/+1</b>, který se spotřebuje v
                        jejím příštím souboji.
                      </ListItem>
                    </UnorderedList>
                  </UnorderedList>
                  <h3 className="patch-point">Hory mají oči: </h3>
                  <p>
                    No a když jsou teď Hory tak super, tak proč si je neužít,
                    že?? Experimentálně je zkusíme umístit i na velkou mapu pro
                    6 hráčů, koldokola pouště. Pokud hrajete stolní verzi, kde
                    na mapě pro 6 nejsou, můžete si je tam dočasně dodělat třeba
                    lihovkou :D ale pls nic permanentního, aby to pak šlo
                    smazat, kdo ví jestli se nám zase z velké mapy neodstěhují
                    :(
                  </p>
                  <h3 className="patch-point">Vodstřel: </h3>
                  <p>
                    Lučištníků na voze se obecně zbavuje hůř, než by bylo
                    optimální. Lehká jízda k tomu není výhodná, protože na to
                    musíte mít dvě a Těžká jízda či Těžká pěchota (na voze) se
                    pak zřídkakdy dostanou dostatečně blízko na to, aby juicy
                    Lučištníka sjela i s vozem. Mírně oslabit Lučištníky a
                    zároveň jim nesebrat jejich identitu glasscanonů co s
                    perfektním využitím dokáží na bojišti dominovat je nicméně
                    poněkud oříšek. Let’s try this then. Cílem tohoto nerfu je
                    umožnit zejména Lehké jízdě a zřídkakdy i jiným jednotkám
                    (LP na voze?) v melee střetu s Lučištníkem nepřijít o život,
                    jak by to asi mělo správně být.
                  </p>
                  <UnorderedList>
                    <ListItem>
                      - Lučištníkův základní útok při boji na blízko je nyní
                      vždy roven 0.
                    </ListItem>
                  </UnorderedList>
                  <h3 className="patch-point">Sekularizace: </h3>
                  <p>
                    Změna <b>“Víc modlení”</b> z minulého patche se ruší.
                  </p>
                  <h3 className="patch-point">Proroctví: </h3>
                  <p>
                    V Chrámu nyní namísto Více modlení bydlí proroci. No a
                    protože jsou hrozně vzácní, bydlí jich tam právě tolik,
                    kolik zrovna vlastníte hradů. Deal with it.
                  </p>
                  <UnorderedList>
                    <ListItem>
                      - Hráč vlastnící chrám se může tolikrát za tah před
                      líznutím Akční karty podívat na vrchní kartu balíčku,
                      kolik má hradů. Kartu, na kterou se dívá, může vždy nechat
                      na vrchu balíčku a líznout si ji, nebo ji umístit na
                      spodek a líznout si tu další.
                    </ListItem>
                  </UnorderedList>
                  <h3 className="patch-point">S kým že máš poměr? </h3>
                  <p>
                    Poměr akčních karet je z hlediska herního designu TACTICY
                    poněkud mystickou věcí. Dokud nebudeme mít přístup k nějakým
                    algoritmům, které by nám ukázaly poměr optimální, takový aby
                    byly akční karty ideálním balancem mezi možností líznout si
                    něco super a zároveň ne čistým RNG stylu “líznul jsem si
                    random kartu a díky tomu vyhrál hru LMFAO”, budeme muset
                    hádat. Nyní proto zkoušíme experimentálně změnit poměr
                    akčních karet v balíčku tak, aby bylo komparativně
                    pravděpodobnější vytáhnout některou z kreativních akčních
                    karet - Nucený pochod, Noví koně, Meče v pluhy - a
                    podněcovat tak dále větší proaktivitu. Ubíráme zároveň na
                    počtu karet shitózních - hrdinských a překvapivých všech
                    úrovní:
                  </p>
                  <UnorderedList>
                    <ListItem>
                      <b>NOVÝ POMĚR AKČNÍCH KARET: </b>
                      10x Intuice, 6x Nucený pochod, 6x Noví koně, 6x Meče v
                      pluhy, 4x Zpravodajství, 4x Posily, 4x Reflex, 4x Otrávené
                      ostří, 4x Hrdinská obrana, 4x Hrdinštější obrana 4x
                      Překvapivý útok, 4x Překvapivější útok. V případě stolních
                      verzí, kde karet není pro tuto změnu v poměru dostatek,
                      lze počty všech karet napůlit a hrát s 30-karetním
                      balíčkem.
                    </ListItem>
                  </UnorderedList>
                  <h3 className="patch-point">Speeding ticket 2.0: </h3>
                  <p>
                    O několik měsíců později od prvního speeding ticketu je
                    třeba začínajícím hráčům na malé mapě pro 3 hráče udělit
                    další :( Začínající hráč na malé mapě má zkrátka příliš
                    velkou výhodu, plynoucí z toho, že je první na tahu a může
                    jako první obsazovat všechny Državy, které se mu zamanou. Na
                    druhého hráče jsou pak kladeny nevyrovnaně vysoké nároky,
                    aby se s tím vypořádal. Nepatrným snížením počtu začátečních
                    (G) pro začínajícího hráče se jeho možnosti lehce omezí na
                    více vyrovnanou úroveň.
                  </p>
                  <UnorderedList>
                    <ListItem>
                      - Na malé mapě začínající hráč začíná s 23(G) namísto
                      25(G).
                    </ListItem>
                  </UnorderedList>
                  <h3 className="patch-point">Tutti Frutti: </h3>
                  <p>
                    Přidána pravidla pro hru ve více hráčích (2v2v2 nebo 3v3).
                  </p>
                </div>
                <div id="3.6">
                  <h1>Patch 3.6</h1>
                  <h3 className="patch-point"></h3>
                </div>
              </Stack>
            </Flex>
          </body>
        </main>
      </div>
    </Layout>
  );
}

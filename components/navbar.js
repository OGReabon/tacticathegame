import { Box, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <Flex
      basis="100wv"
      width="100%"
      direction="row"
      justify="space-evenly"
      bg="white"
      paddingTop="20px"
      boxShadow="0px 5px #CDE876"
      top={0}
      position="fixed"
    >
      <Box>
        <Image
          alt="Tactica logo"
          src="/tactica_logo.png"
          width="80"
          height="80"
        />
      </Box>
      <Box>
        <h3 className="navButton">
          <Link href="/">
            <a>Home</a>
          </Link>
        </h3>
      </Box>
      <Box>
        <h3 className="navButton">
          <Link href="https://cdn.discordapp.com/attachments/846356967681032273/937426814073208922/Pravidla_CZ_3.8.pdf">
            <a>Pravidla</a>
          </Link>
        </h3>
      </Box>
      <Box>
        <h3 className="navButton">
          <Link href="/patch_notes">
            <a>Patch Notes</a>
          </Link>
        </h3>
      </Box>
      <Box hidden="True">
        <h3 className="navButton">
          <Link href="/places">
            <a>Kde hrát?</a>
          </Link>
        </h3>
      </Box>
      <HStack spacing="15px">
        <Box paddingTop="10px">
          <a href="https://www.facebook.com/TACTICAthegame" target="blank">
            <Image
              alt="Tactica facebook link"
              src="/facebook.png"
              width="25"
              height="25"
            />
          </a>
        </Box>
        <Box paddingTop="10px">
          <a href="https://discord.gg/7mHQeFCDjX" target="blank">
            <Image
              alt="Tactica discord link"
              src="/discord.png"
              width="25"
              height="25"
            />
          </a>
        </Box>
        <Box paddingTop="10px">
          <a
            href="https://www.youtube.com/channel/UCUeSBJ3h8k2IMaDH8oKHwng"
            target="blank"
          >
            <Image
              alt="Tactica youtube link"
              src="/youtube.png"
              width="25"
              height="25"
            />
          </a>
        </Box>
        <Box paddingTop="10px">
          <a href="https://www.twitch.tv/tacticathegame" target="blank">
            <Image
              alt="Tactica Twitch link"
              src="/twitch.png"
              width="25"
              height="25"
            />
          </a>
        </Box>
      </HStack>
    </Flex>
  );
}

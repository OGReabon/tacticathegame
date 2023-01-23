import { createClient } from "contentful";
// import * as dotenv from "dotenv";

// dotenv.config();

const CONTENTFUL_SPACE_ID = "xv88ko2wx4ky";
const CONTENTFUL_ACCESS_TOKEN = "ihAeecYaeTMEZKpTC0OGHbLN1SPzoOTx83rY_t6kFNM";

const client = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
});

export default client;

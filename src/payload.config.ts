// import Examples from './collections/Examples';
import Users from "./collections/Users";
import path from "path";
import { buildConfig } from "payload/config";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { viteBundler } from "@payloadcms/bundler-vite";
import Posts from "./collections/Posts";
import Categories from "./collections/Categories";
import Tags from "./collections/Tags";

export default buildConfig({
  // serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  db: mongooseAdapter({
    url: process.env.MONGODB_URI
  }),
  admin: {
    user: Users.slug,
    bundler: viteBundler()
  },
  editor: lexicalEditor(),
  collections: [
    Users,
    Posts,
    Categories,
    Tags
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts")
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql")
  }
});

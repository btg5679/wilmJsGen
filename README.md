# WilmingtonJS Code-Generation

A simple [nodeJS](https://nodejs.org/en/) app using [expressJS](https://expressjs.com/) and [typescript](https://www.typescriptlang.org/)

The purpose of this repo is to demonstrate generating Typescript Definition files from an OpenAPI specification file. A user should place their `openapi.yml` file into the `openapi` folder at the project root, and then run `npm run generate`. The `package.json generate` script specifies the inputs and outputs for the generator.

[dtsgenerator](https://www.npmjs.com/package/dtsgenerator) is the library used for generation

**To run the project**
`npm install`
`npm run build` compiles the TS
`npm run start` serves the project to localhost
`npm run buildAndStart`

**To generate types.d.ts**
`npm run generate`

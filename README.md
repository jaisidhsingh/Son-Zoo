# OpenAI TLDR

### Dependancies:
> React

> Node

> Concurrently 

> Nodemon 

### Requires an authorized account with OpenAI's API (beta) and a genuine secret API key

Clone this to your machine, cd into TLDR and run:

```
npm install
```
Concurrently and Nodemon are configured such that the express server and the front-end can be deployed together with:
```
npm run dev
```
The package.json file (TLDR/package.json) has the following which enables the above:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon index.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

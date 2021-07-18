# Son Zoo
## The comedic revelations of Sun Tzu's wisdom.
Produces a swirling vortex of entropy as responses, and of course that's funny.
Started off as a TL;DR generator.


#### ~ with GPT-3 and React

### Dependancies:
> ReactJS

> NodeJS

> Concurrently 

> Nodemon 

> Axios

> Express

### Requires an authorized account with OpenAI's API (beta) and a genuine secret API key

Clone this to your machine, cd into TLDR and run:

```
npm install
```
Concurrently and Nodemon are configured such that the express server and the front-end can be deployed together with:
```
npm run dev
```
or 
```
yarn dev
```
The package.json file (./TLDR/package.json) has the following which enables the above:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon index.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

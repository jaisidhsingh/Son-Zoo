const querystring = require('querystring');
const express = require('express');
const app = express();
const axios = require('axios');

const API_KEY = "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";
const PORT = process.env.PORT || 8000;

const openaiURL = "https://api.openai.com/v1/engines/davinci/completions";


// sublime text 4 testing mode seems to be working fine damn nigga this shit fast and tight
const headers = {
  Authorization: 'Bearer '+ String(API_KEY),
  "Content-Type": "application/json",
}

const PROMPT =  "A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich.[1] Neutron stars are the smallest and densest stellar objects, excluding black holes and hypothetical white holes, quark stars, and strange stars.[2] Neutron stars have a radius on the order of 10 kilometres (6.2 mi) and a mass of about 1.4 solar masses.[3] They result from the supernova explosion of a massive star, combined with gravitational collapse, that compresses the core past white dwarf star density to that of atomic nuclei.\n\ntl;dr:"
const body = {
  "prompt": PROMPT,
  "max_tokens": 60
}

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.post('/api', (req, res)=>{
   axios.post(openaiURL, JSON.stringify({"prompt":req.body.prompt, "max_tokens": 120}), {headers}) 
      .then(response=>{
        res.send({message: response.data})
      }).catch(error => console.error(error));
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
//this is a test in vim in windows terminal. working pretty well to be perfectly honest better than the older vim inside windows terminal

const querystring = require('querystring');
const express = require('express');
const app = express();
const axios = require('axios');

const API_KEY = "YOUR API KEY";
const PORT = process.env.PORT || 8000;

const openaiURL = "https://api.openai.com/v1/engines/davinci/completions";


const headers = {
  Authorization: 'Bearer '+ String(API_KEY),
  "Content-Type": "application/json",
}


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.post('/api', (req, res)=>{
   axios.post(openaiURL, JSON.stringify({"prompt":req.body.prompt, "max_tokens": 10}), {headers}) 
      .then(response=>{
        res.send({message: response.data})
      }).catch(error => console.error(error));
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

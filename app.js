const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8082;

app.use(express.json());
// cors error
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to include cookies in the request
  };
  
  app.use(cors(corsOptions));
  
app.post('/login', async (req, res) => {
    try {
      console.log('Received login request:', req.body);
  
      const javaApiResponse = await axios.post('http://localhost:8080/client/login', req.body);
  
      console.log('Java API Response:', javaApiResponse.data);
  
      res.json(javaApiResponse.data);
    } catch (error) {
        if (error.response) {
          res.status(error.response.status);
          res.send(error.response.data);
        } else {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
  });
  app.get('/ping', async (req, res) => {
    try {
      console.log('Received ping request');
  
      const javaApiResponse = await axios.get('http://localhost:8080/ping');
  
      console.log('Java API Response:', javaApiResponse.data);
  
      res.json(javaApiResponse.data);
    } catch (error) {
      if (error.response) {
        res.status(error.response.status);
        res.send(error.response.data);
      } else {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });

  // todo verify email doesnt work is not reading email from request
  app.post('/client/verifyEmail', async (req, res) => {
    try {
      console.log('Received verifyEmail request:', req);
      const headers = {
        'Content-Type': 'text/plain',
      };
  
      req
      const javaApiResponse = await axios.post('http://localhost:8080/client/verifyEmail', req.body,{headers});
  
      console.log('Java API Response:', javaApiResponse.status);
      res.set('Content-Type', 'text/plain');
      if(javaApiResponse.status === 204){
        res.status(204).send();
      }
      else{
        res.json(javaApiResponse.data);
      }
  
    } catch (error) {
        if (error.response) {
          res.status(error.response.status);
          res.send(error.response.data);
        } else {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
  });
  // write an app get request which has a path varibale client id and pass it off to the java endpoint the same way
    app.get('/client/:id', async (req, res) => {
        try {
        console.log('Received client request:', req.params.id);
    
        const javaApiResponse = await axios.get(`http://localhost:8080/client/${req.params.id}`);
    
        console.log('Java API Response:', javaApiResponse.data);
    
        res.json(javaApiResponse.data);
        } catch (error) {
            if (error.response) {
            res.status(error.response.status);
            res.send(error.response.data);
            } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    });
    app.put('/client/register', async (req, res) => {
        try {
        console.log('Received register request:', req.body);
    
        const javaApiResponse = await axios.put('http://localhost:8080/client/register', req.body);
    
        if(javaApiResponse.status === 204){
            res.status(204).send();
        }
    
        // if(javaApiResponse)
        } catch (error) {
            if (error.response) {
            res.status(error.response.status);
            res.send(error.response.data);
            } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    });

    app.get('/prices'   , async (req, res) => {
        try {
        console.log('Received prices request');
    
        const javaApiResponse = await axios.get('http://localhost:8080/prices');
    
        console.log('Java API Response:', javaApiResponse.data);
    
        res.json(javaApiResponse.data);
        } catch (error) {
            if (error.response) {
            res.status(error.response.status);
            res.send(error.response.data);
            } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    });
    app.get('/tradehistory/:id', async (req, res) => {
        try {
        console.log('Received trades request:', req.params.id);
    
        const javaApiResponse = await axios.get(`http://localhost:8080/tradehistory/${req.params.id}`);
    
        console.log('Java API Response:', javaApiResponse.data);
        if(javaApiResponse.status === 204){
            res.status(204).send();
        }else
        {
            res.json(javaApiResponse.data);

        }
    
        } catch (error) {
            if (error.response) {
            res.status(error.response.status);
            res.send(error.response.data);
            } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    });
    app.post('/trade', async (req, res) => {
        try {
        console.log('Received trade request:', req.body);
    
        const javaApiResponse = await axios.post('http://localhost:8080/trade', req.body);
    
        console.log('Java API Response:', javaApiResponse.data);
    
        res.json(javaApiResponse.data);
        } catch (error) {
            if (error.response) {
            res.status(error.response.status);
            res.send(error.response.data);
            } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    });
    app.get('/portfolio/:id', async (req, res) => {
        try {
        console.log('Received portfolio request:', req.params.id);
    
        const javaApiResponse = await axios.get(`http://localhost:8080/portfolio/${req.params.id}`);
    
        console.log('Java API Response:', javaApiResponse.data);
        if(javaApiResponse.status === 204){
            res.status(204).send();
        }else{

            res.json(javaApiResponse.data);
        }
    
        } catch (error) {
            if (error.response) {
            res.status(error.response.status);
            res.send(error.response.data);
            } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    });
    app.get('/cash/:id', async (req, res) => {
        try {
        console.log('Received cash request:', req.params.id);
    
        const javaApiResponse = await axios.get(`http://localhost:8080/cash/${req.params.id}`);
    
        console.log('Java API Response:', javaApiResponse.data);
    
        if(javaApiResponse.status === 204){
            res.status(204).send();
        }else{
            
            res.json(javaApiResponse.data);
        }
        } catch (error) {
            if (error.response) {
            res.status(error.response.status);
            res.send(error.response.data);
            } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    });
app.listen(port, () => {
  console.log(`Node.js REST API listening on port ${port}`);
});

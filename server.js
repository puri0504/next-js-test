const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/profile', (req, res) => {
      const actualPage = '/profile';
      const queryParams = { user: 'ksenia' };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/test', (req, res) => {
      res.send('Hello World!');
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.post('/user', (req, res) => {
      res.send('Got a POST request');
    });

    server.listen(3002, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3002')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  });
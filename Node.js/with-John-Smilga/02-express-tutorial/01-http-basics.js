const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method) as GET or POST
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })// if text/plain it's as textContent
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page
  else if (url === '/about') {//! important as subdomains
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)//this is called port, there're many types, one of them is
// http that has the number 80, ssh, ftp, dns are some types, search for it
// 443 is https, //! server ip addresses as 225.225.225.225:443 are as HTTPS
//? we can access same server with many ports, ssh, http, etc...
//! in development, it's arbitrary, 5000 8080 whatever
//? but ports between 0-1024 are already taken in the majority
// deploying has its own lesson

// we'll always need to response to requests,
//  if we don't //! the browser will stick with loading situation,
//  waiting for response. using res.end() is one of the methods to response

// search for //! mime Types mdn
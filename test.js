const http = require('http');

http.get('http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&quality=highestaudio', (res) => {
  console.log('Status Base Download:', res.statusCode);
  res.on('data', (d) => {
    // console.log('data', d.length); 
    // too much output
  });
  res.on('end', () => console.log('end'));
}).on('error', (e) => {
  console.error(e);
});

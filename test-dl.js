import fs from 'fs';
import http from 'http';

const url = 'http://localhost:3000/api/download?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&quality=highestaudio';

http.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  
  if (res.statusCode !== 200) {
    res.setEncoding('utf8');
    res.on('data', (chunk) => console.log('Error Body:', chunk));
    return;
  }
  
  let size = 0;
  res.on('data', (chunk) => {
    size += chunk.length;
  });
  
  res.on('end', () => {
    console.log('Download finished. Total size (bytes):', size);
  });
}).on('error', (err) => {
  console.error('Request Error:', err.message);
});

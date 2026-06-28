const https = require('https');

const data = 'grant_type=client_credentials&client_id=bca55b906b7c9cd6a0c0ccfa8dece121&client_secret=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';

const options = {
  hostname: 'royyd-3.myshopify.com',
  path: '/admin/oauth/access_token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('STATUS:', res.statusCode);
    console.log('BODY:', body);
  });
});

req.on('error', (e) => console.error('Error:', e));
req.write(data);
req.end();

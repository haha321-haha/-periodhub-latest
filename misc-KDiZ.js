const fs = require('fs');
const config = JSON.parse(fs.readFileSync('vercel.json'));

config.redirects?.forEach(rule => {
  if ('statusCode' in rule) {
    console.error(`非法 statusCode 存在于规则: ${JSON.stringify(rule)}`);
    process.exit(1);
  }
});
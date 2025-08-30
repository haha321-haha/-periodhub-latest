const fetch = require('node-fetch');

const apiKey = 'TUShoBwkNxSRAp2RHtXCdi0pkmdVZYudTBCH-xDh';
const email = 'dutinglove@gmail.com';
const zoneId = 'fa4da4315fb5703f5dc1e0c1f9d2b86b';

async function addTxtRecord() {
    const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
    const data = {
        type: 'TXT',
        name: '_github-pages-challenge-nodownloadgames.click',
        content: '723712c9886bb0ddeb4dc075217143',
        ttl: 120,
        proxied: false
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'X-Auth-Email': email,
            'X-Auth-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        console.log("TXT record added successfully");
    } else {
        console.error("Failed to add TXT record", await response.json());
    }
}

addTxtRecord();




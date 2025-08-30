const fetch = require('node-fetch');

const apiKey = 'TUShoBwkNxSRAp2RHtXCdi0pkmdVZYudTBCH-xDh'; // 替换为你的API密钥
const email = 'dutinglove@gmail.com'; // 替换为你的Cloudflare账户邮箱
const zoneId = 'fa4da4315fb5703f5dc1e0c1f9d2b86b'; // 替换为你的Zone ID

async function addTxtRecord() {
    const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
    const data = {
        type: 'TXT',
        name: '_github-pages-challenge-nodownloadgames.click',
        content: '723712c9886bb0ddeb4dc075217143',
        ttl: 120,
        proxied: false
    };

    try {
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
            const errorData = await response.json();
            console.error("Failed to add TXT record", errorData);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

addTxtRecord();




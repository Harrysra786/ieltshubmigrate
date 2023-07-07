import { promises as fs } from 'fs';
import fetch from 'node-fetch';

async function sendToWebhook(essays: any[], index: number = 0) {
    if (index >= essays.length) {
        console.log('All essays sent successfully.');
        return;
    }

    try {
        const essay = essays[index];

        // Send the topic to the webhook
        const response = await fetch('https://h.albato.com/wh/38/1lfuq9k/65uAwE5kYWHmwF_u-naSKRM_G6gDC_MLrBVIm0fj2NM/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: essay.Topic
            })
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(`Essay ${essay.Essay} sent successfully.`);

        // Call the next essay after 5 seconds
        setTimeout(() => sendToWebhook(essays, index + 1), 5000);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function startSending() {
    try {
        // Read the Discuss.json file
        const data = await fs.readFile('./Discuss.json', 'utf-8');

        // Parse the JSON data
        const essays = JSON.parse(data);

        // Start sending the essays
        sendToWebhook(essays);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

startSending();

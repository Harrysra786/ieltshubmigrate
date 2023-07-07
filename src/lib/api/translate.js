import fetch from 'node-fetch';
import cors from 'cors';
import { translate } from 'bing-translate-api';

const corsMiddleware = cors();

export default async function handler(req, res) {
    await new Promise((resolve, reject) => {
        corsMiddleware(req, res, (result) => {
            if (result instanceof Error) {
                reject(result);
            } else {
                resolve(result);
            }
        });
    });

    if (req.method === 'POST') {
        try {
            const { text, type } = req.body;

            if (type === 'definition') {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
                const data = await response.json();
                res.json(data);
            } else if (type === 'translation') {
                const hindiTranslation = await translate(text, 'en', 'hi');
                const punjabiTranslation = await translate(text, 'en', 'pa');
                res.json({ hindi: hindiTranslation.translation, punjabi: punjabiTranslation.translation });
            } else {
                res.status(400).json({ error: 'Invalid request type' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

import { translate } from 'bing-translate-api';
import fetch from 'node-fetch';

export async function POST(event) {
    const { text } = await event.request.json();

    const hindiTranslation = await translate(text, 'en', 'hi');
    const punjabiTranslation = await translate(text, 'en', 'pa');
    const definitionResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
    const definitions = await definitionResponse.json();

    return new Response(JSON.stringify({ hindiTranslation, punjabiTranslation, definitions }), {
        headers: { 'Content-Type': 'application/json' },
    });
}

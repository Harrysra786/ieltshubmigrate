import { json } from '@sveltejs/kit';

export async function get() {
    let sheetId = '1Np1xkDIcD9B_2OrSQxvB9JKxrX3t9pjHxzUiAUWK3Ro'; // Replace with your Google Sheet ID
    let apiKey = 'AIzaSyDrmOfQ79ecXaNsI9J0TvQEId2lN4tWrcQ'; // Replace with your Google API Key
    let sheetRange = 'Sheet1!A46:A152'; // Replace 'Sheet1' with your sheet name

    let response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}?key=${apiKey}`);
    let data = await response.json();

    let values = data.values;
    let promises = values.map((value, i) => {
        return new Promise(resolve => {
            setTimeout(() => {
                let payload = { 'text': value[0] };
                fetch('https://h.albato.com/wh/38/1lfuq9k/65uAwE5kYWHmwF_u-naSKRM_G6gDC_MLrBVIm0fj2NM/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }).then(() => resolve(null));
            }, i * 1000);
        });
    });

    await Promise.all(promises);

    return json({ success: true });
};

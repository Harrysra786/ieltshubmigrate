export default async (req, res) => {
  const { productName, price } = req.body;

  const params = new URLSearchParams();
  params.append('purpose', productName);
  params.append('amount', price);
  params.append('redirect_url', 'http://www.example.com');
  params.append('send_email', 'false');
  params.append('send_sms', 'false');
  params.append('webhook', 'http://www.example.com/webhook');

  try {
    const response = await fetch('https://www.instamojo.com/api/1.1/payment-requests/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Api-Key': process.env.VITE_INSTAMOJO_CLIENT_ID, 
        'X-Auth-Token': process.env.VITE_INSTAMOJO_CLIENT_SECRET 
      },
      body: params,
    });

    if (!response.ok) {
      throw new Error('Error creating payment request');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

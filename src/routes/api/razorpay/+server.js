import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env['VITE_RAZORPAY_KEY'],
  key_secret: process.env['VITE_RAZORPAY_SECRET'],
});

export async function POST(event) {
  const rawData = await event.request.clone().text();
  const { productName, price } = JSON.parse(rawData);
  try {
    const options = {
      amount: price * 100, // Convert to paise
      currency: 'INR',
      receipt: productName,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    return new Response(JSON.stringify(order), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

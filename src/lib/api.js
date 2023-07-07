export async function createRazorpayOrder(productName, productPrice) {
  const response = await fetch("/api/razorpay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productName, productPrice }),
  });

  if (!response.ok) {
    throw new Error(`Error creating Razorpay order: ${response.statusText}`);
  }

  return await response.json();
}

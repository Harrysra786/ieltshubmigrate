exports.GET = async function(event) {
  const isSupported = 'webkitSpeechRecognition' in window;

  return new Response(JSON.stringify({ isSupported }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

import annyang from 'annyang';

export const isSpeechRecognitionSupported = () => {
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
};

export const initializeSpeechRecognition = (callback) => {
    let recognition = null;

    if ('SpeechRecognition' in window) {
      recognition = new SpeechRecognition();
    } else if ('webkitSpeechRecognition' in window) {
      recognition = new webkitSpeechRecognition();
    }

    if (recognition) {
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript;
        callback(text);
      };

      recognition.start();
      return recognition;
    } else if (annyang) {
      annyang.addCallback('result', (phrases) => {
        callback(phrases[0]);
      });

      annyang.start();
      return annyang;
    }

    return null;
};

export const stopSpeechRecognition = (recognition) => {
  if (isSpeechRecognitionSupported()) {
    recognition.stop();
  } else if (annyang) {
    annyang.abort();
  }
};

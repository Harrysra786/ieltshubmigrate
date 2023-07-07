class VoiceType {
  constructor() {
    this.finalTranscript = "";
    this.targetElement = null;

    if ("SpeechRecognition" in window) {
      this.speechRecognition = new window.SpeechRecognition();
      this.initializeSpeechRecognition();
    } else if ("webkitSpeechRecognition" in window) {
      this.speechRecognition = new window.webkitSpeechRecognition();
      this.initializeSpeechRecognition();
    } else {
      console.log("Speech Recognition Not Available");
    }
  }

  initializeSpeechRecognition() {
    this.speechRecognition.continuous = true;
    this.speechRecognition.interimResults = true;
    this.speechRecognition.lang = "en-IN";

    this.speechRecognition.onresult = (event) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          this.finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      if (this.targetElement) {
        this.targetElement.value = this.finalTranscript + interimTranscript;
      }
    };
  }

  start(target) {
    this.targetElement = target;
    this.speechRecognition.start();
  }

  stop() {
    this.speechRecognition.stop();
  }
}

export default VoiceType;

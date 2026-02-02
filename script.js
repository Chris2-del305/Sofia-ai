let recognition;
let started = false;

function startMic() {
  if (started) return;
  started = true;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;

  recognition.start();

  recognition.onresult = function (event) {
    const spoken =
      event.results[event.results.length - 1][0].transcript;

    alert("You said: " + spoken);
  };
}

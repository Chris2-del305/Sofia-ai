recognition.onresult = function (event) {
  const spoken =
    event.results[event.results.length - 1][0].transcript;

  // Log it
  console.log("User said:", spoken);

  // Sofia replies using browser voice
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(
    "You said: " + spoken
  );
  utterance.lang = "en-US";
  synth.speak(utterance);
};

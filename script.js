const recordBtn = document.querySelector("#convert_speech"),
  result = document.querySelector("textarea"),
  downloadBtn = document.querySelector("#downloadBtn"),
  copyBtn = document.querySelector("#copyBtn"),
  inputLanguage = document.querySelector("#language"),
  clearBtn = document.querySelector("#clearBtn");

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition,
    recognition, recording = false;

function languagesOption() {
  languages.forEach(lang => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.innerHTML = lang.name;
    inputLanguage.appendChild(option);
  });
}

languagesOption();

function speechToText() {
  try {
    recognition = new SpeechRecognition();
    recognition.lang = inputLanguage.value;
    recognition.interimResults = true;
    recordBtn.innerHTML = "Listening...";
    recognition.start();

    recognition.onresult = event => {
      const speechResult = event.results[0][0].transcript;
      if (event.results[0].isFinal) {
        result.innerHTML += speechResult + " ";
      }

      clearBtn.classList.add("show");
      downloadBtn.classList.add("show");
      copyBtn.classList.add("show");
    };

    recognition.onspeechend = () => speechToText();

    recognition.onerror = event => handleError(event);
  } catch (error) {
    console.log(error);
    recording = false;
  }
}

recordBtn.addEventListener("click", () => {
  if (!recording) {
    speechToText();
    recording = true;
  } else {
    stopRecording();
  }
});

function stopRecording() {
  recognition.stop();
  recordBtn.innerHTML = "Start Converting";
  recording = false;
}

function hideBtns() {
  result.innerHTML = "";
  clearBtn.classList.add("hide");
  downloadBtn.classList.add("hide");
  copyBtn.classList.add("hide");
}

function download() {
  const text = result.innerHTML;
  const filename = "speech.txt";
  const element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  hideBtns();
}

downloadBtn.addEventListener("click", download);

clearBtn.addEventListener("click", hideBtns);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(result.innerHTML);
  copyBtn.innerHTML = "Copied!";
  setTimeout(() => copyBtn.innerText = "Copy Text", 1000);
});

function handleError(event) {
  stopRecording();
  const errors = {
    "no-speech": "No speech detected. Stopping...",
    "audio-capture": "No microphone found.",
    "not-allowed": "Microphone access blocked.",
    "aborted": "Listening stopped."
  };
  alert(errors[event.error] || `Error occurred: ${event.error}`);
}

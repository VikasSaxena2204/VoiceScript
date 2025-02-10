# VoiceScript
- **Code By: Vikas Saxena**
## A Web-Based Speech-to-Text Converter

VoiceScript is an easy-to-use, web-based Speech-to-Text converter that allows users to speak into their device's microphone and have their speech transcribed into text in real time. The application features an intuitive interface with options like language selection, speech conversion, and actions to copy, download, and clear the transcribed text. The project is built using HTML, CSS, and JavaScript, utilizing the Web Speech API for speech recognition.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

- **Speech Recognition:** Convert speech to text using the device's microphone.
- **Language Selection:** Choose from a variety of languages for speech recognition.
- **Text Display:** View the transcribed text in real-time in a dynamic text area.
- **Actions:** Copy, download, or clear the transcribed text with a simple click.
- **Responsive Interface:** Optimized for use across different devices with a clean and modern design.

---

## Project Structure

### HTML File (`index.html`)

This file provides the foundational structure of the web page, including:
- **Header:** Displays the app's logo and title.
- **Speech-to-Text Section:** Contains the UI for selecting the language, converting speech to text, and displaying action buttons.
- **External Script References:** Links to external JavaScript files (`languages-option.js` and `script.js`) for managing language options and speech-to-text conversion.

### CSS File (`style.css`)

Responsible for the visual styling and layout of the application, which includes:
- **Font and Styling:** Uses the Poppins font from Google Fonts for modern typography.
- **Color Scheme:** Defines custom color variables for background gradients and box shadows to enhance the interface.
- **Responsive Layout:** Styles that ensure the app works well on both desktop and mobile devices.
- **User Interactivity:** Adds hover effects, transitions, and animations to improve user experience.

### JavaScript File (`script.js`)

Handles the main functionality of the Speech-to-Text converter:
- **`languagesOption()`**: Populates the language selection dropdown with available languages.
- **`speechToText()`**: Initializes the Web Speech API and starts the speech-to-text conversion.
- **`stopRecording()`**: Stops speech recognition when the user ends the transcription.
- **`hideBtns()`**: Hides action buttons when no text is available.
- **`download()`**: Allows the user to download the transcribed text as a `.txt` file.

### JavaScript File (`languages-option.js`)

Contains a list of available languages for speech recognition:
- **Languages Array:** Defines various language codes and names, allowing users to select their preferred language for transcription.

---

## How It Works

1. **Language Selection:** Users can choose a language for the speech-to-text conversion from a dropdown populated by `languages-option.js`.
2. **Speech Recognition:** Upon clicking the "Start" button, the Web Speech API activates the device's microphone, converting speech into text.
3. **Text Display:** The transcribed text is displayed immediately in a text area.
4. **Actions:**
   - **Copy:** Users can copy the transcribed text to their clipboard.
   - **Download:** Users can download the text as a `.txt` file.
   - **Clear:** Clears the text area to start over.

---

## Technologies Used

- **HTML:** For structuring the user interface.
- **CSS:** For styling the web page, ensuring responsiveness and a polished look.
- **JavaScript:** For managing user interactions, speech recognition, and file management.
- **Web Speech API:** For real-time speech-to-text conversion.

---

## Installation and Setup

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/VikasSaxena2204/VoiceScript.git

2. Navigate to the project directory:

   ```bash
   cd VoiceScript

3. Open the index.html file in your preferred web browser.

4. Ensure your microphone is enabled and grant necessary permissions for browser access for output.

## 📸 Screenshots

### Login Page
![Login Page Screenshot](https://github.com/VikasSaxena2204/VoiceScript/blob/main/VoiceScript.png)

## Future Improvements
- **Multi-Language Support:** Add the ability to switch between languages in real-time during transcription.
- **Text Formatting Options:** Provide options to adjust text formatting, such as font size and style.
- **Accuracy Enhancement:** Implement better noise reduction for clearer speech recognition.
- **Voice Feedback:** Add auditory cues to indicate when the speech recognition starts and stops.

## License
### This project is licensed under the MIT License - see the LICENSE file for details.

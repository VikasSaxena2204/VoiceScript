# VoiceScript

## A web-based Speech to Text Converter

 VoiceScript is an easy-to-use, web-based Speech-to-Text converter that allows users to speak into their device's microphone and have their speech transcribed into text in real time. The application offers an intuitive interface with features like language selection, speech conversion, text display, and actions to copy, download, and clear the transcribed text. The project is built using HTML, CSS, and JavaScript with the Web Speech API to handle speech recognition.

## Features:

Speech Recognition: Convert speech to text using the device's microphone.
Language Selection: Choose from a variety of languages for speech recognition.
Text Display: View the transcribed text in a dynamic text area.
Actions: Copy, download, or clear the transcribed text.
Responsive Interface: Optimized for use across devices, with a clean and modern design.
Project Structure
HTML File (index.html)
The HTML file provides the foundational structure of the web page.

### Header: Includes a logo and the main heading for the app.

### Speech-to-Text Section: Contains the UI for language selection, conversion button, result textarea, and action buttons.
External Script References: Links to external JavaScript files that handle language options (languages-option.js) and core functionality (script.js).
CSS File (style.css)
The CSS file is responsible for the visual styling and layout of the application.

Font and Styling: Uses the Poppins font from Google Fonts.
Color Scheme: Defines color variables, including background gradients, and box shadows for depth.
Responsive Layout: Provides styles for the main container, header, and Speech-to-Text section.
User Interactivity: Includes hover effects, transitions, and button animations for better user experience.
JavaScript File (script.js)
This JavaScript file manages the functionality of the Speech-to-Text converter.

languagesOption(): Populates the language selection dropdown with available languages.
speechToText(): Initializes the Web Speech API for speech recognition and converts speech into text.
stopRecording(): Stops speech recognition when the user chooses to stop the transcription process.
hideBtns(): Hides buttons related to results (e.g., download, copy) when no text is available.
download(): Allows users to download the transcribed text as a .txt file.
Event listeners are used to trigger actions for starting/stopping the speech-to-text process, clearing the text area, copying text, and downloading text.
JavaScript File (languages-option.js)
This file contains the language options that are available for speech recognition.

languages Array: An array of objects representing different languages, with each entry containing a language code, name, and native name.
This file ensures modularity by separating the language configuration from the core functionality, making it easier to update language options in the future.

## How It Works

Language Selection: Users can choose a language for the speech-to-text conversion from a dropdown list populated by languages-option.js.
Speech Recognition: When the user presses the Start button, the Web Speech API activates the device’s microphone to recognize and transcribe speech to text.
Text Display: The transcribed text is displayed instantly in a textarea on the page.
Actions:
Copy: The user can copy the transcribed text to their clipboard.
Download: The user can download the transcribed text as a .txt file.
Clear: Clears the text area to start over.
Technologies Used
HTML: For structuring the user interface.
CSS: For styling the web page, making it visually appealing and responsive.
JavaScript: For handling user interactions, speech recognition, and file management.
Web Speech API: For real-time speech recognition and text conversion.

## Installation and Setup
Clone this repository to your local machine:

bash
```Copy code
git clone https://github.com/your-username/voicescript.git
Navigate to the project directory:

bash
Copy code
cd voicescript
Open index.html in your preferred web browser.

Ensure your microphone is enabled and grant the necessary permissions for the browser to access it.

Enjoy using the VoiceScript web app!
Ensure your microphone is enabled and grant the necessary permissions for the browser to access it.

Enjoy the VoiceScript web app!

Future Improvements
Multi-Language Support: Allow real-time switching between languages during transcription.
Text Formatting Options: Provide options to adjust the text format, such as font size and style.
Accuracy Enhancement: Implement a better noise reduction mechanism for clearer speech recognition.
Voice Feedback: Add audio feedback for when the speech recognition starts and stops.
License
This project is licensed under the MIT License – see the LICENSE file for details.


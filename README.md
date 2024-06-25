🧮 Scientific Calculator
A web-based scientific calculator with support for various mathematical functions, a history log, and theme switching.


🚀 Demo
Live Demo (Link to the hosted version if available)

📖 Table of Contents
Features
Installation
Usage
Customization
Contributing
License
✨ Features
Scientific Functions: Supports sine, cosine, tangent, logarithm, square root, and exponentiation.
History: Keeps a log of previous calculations.
Theme Switching: Toggle between light and dark themes.
User-Friendly Interface: Simple and intuitive design.
🛠️ Installation
To run this project locally:

Clone the repository:

sh
Copy code
git clone https://github.com/your-username/scientific-calculator.git
Navigate to the project directory:

sh
Copy code
cd scientific-calculator
Open index.html in your browser:

sh
Copy code
open index.html
Or, use a live server extension in your code editor for an enhanced development experience.

💻 Usage
Perform Calculations: Use the on-screen buttons or your keyboard to input calculations.
View History: Click on the menu and select "History" to view previous calculations.
Switch Theme: Toggle between light and dark themes using the "Switch Theme" button in the menu.

🎨 Customization
Adding New Functions
JavaScript (script.js):

Add new functions in the calculate function or as separate functions.
Example:
javascript
Copy code
function insertFactorial() {
    display.value += '!';
}
HTML (index.html):

Add buttons for new functions.
Example:
html
Copy code
<button onclick="insertFactorial()">x!</button>
CSS (styles.css):

Style the new buttons if needed.
Changing Themes
To add more themes:

CSS (styles.css):

Define new theme styles.
Example:
css
Copy code
body.new-theme {
    background-color: #your-color;
    color: #your-text-color;
}
JavaScript (script.js):

Update the switchTheme function to include the new theme.
👥 Contributing
We welcome contributions! Please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix:
sh
Copy code
git checkout -b feature/new-feature
Commit your changes:
sh
Copy code
git commit -m "Add new feature"
Push to the branch:
sh
Copy code
git push origin feature/new-feature
Open a Pull Request with a detailed description of your changes.
📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

🔗 Links
Project Repository: GitHub
Issues: Report Issues
Contributing Guidelines: CONTRIBUTING.md
📞 Contact
Email: your-email@example.com
GitHub: @your-username
📷 Screenshots
Light Theme	Dark Theme

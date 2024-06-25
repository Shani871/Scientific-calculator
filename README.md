# 🧮 Scientific Calculator

A web-based scientific calculator with support for various mathematical functions, a history log, and theme switching.

## 🚀 Demo

[Live Demo](#) (Link to the hosted version if available)

## 📖 Table of Contents

- [Features](#-features)
- [Installation](#%EF%B8%8F-installation)
- [Usage](#-usage)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)
- [Links](#-links)
- [Contact](#-contact)

## ✨ Features

- **Scientific Functions**: Supports sine, cosine, tangent, logarithm, square root, and exponentiation.
- **History**: Keeps a log of previous calculations.
- **Theme Switching**: Toggle between light and dark themes.
- **User-Friendly Interface**: Simple and intuitive design.

## 🛠️ Installation

To run this project locally:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/scientific-calculator.git
    ```

2. Navigate to the project directory:
    ```sh
    cd scientific-calculator
    ```

3. Open `index.html` in your browser:
    ```sh
    open index.html
    ```
    Or, use a live server extension in your code editor for an enhanced development experience.

## 💻 Usage

- **Perform Calculations**: Use the on-screen buttons or your keyboard to input calculations.
- **View History**: Click on the menu and select "History" to view previous calculations.
- **Switch Theme**: Toggle between light and dark themes using the "Switch Theme" button in the menu.

## 🎨 Customization

### Adding New Functions

**JavaScript (`script.js`)**:
- Add new functions in the `calculate` function or as separate functions.
    ```javascript
    function insertFactorial() {
        display.value += '!';
    }
    ```

**HTML (`index.html`)**:
- Add buttons for new functions.
    ```html
    <button onclick="insertFactorial()">x!</button>
    ```

**CSS (`styles.css`)**:
- Style the new buttons if needed.

### Changing Themes

To add more themes:

**CSS (`styles.css`)**:
- Define new theme styles.
    ```css
    body.new-theme {
        background-color: #your-color;
        color: #your-text-color;
    }
    ```

**JavaScript (`script.js`)**:
- Update the `switchTheme` function to include the new theme.

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
    ```sh
    git checkout -b feature/new-feature
    ```

3. Commit your changes:
    ```sh
    git commit -m "Add new feature"
    ```

4. Push to the branch:
    ```sh
    git push origin feature/new-feature
    ```

5. Open a Pull Request with a detailed description of your changes.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Project Repository**: [GitHub](https://github.com/your-username/scientific-calculator)
- **Issues**: [Report Issues](https://github.com/your-username/scientific-calculator/issues)
- **Contributing Guidelines**: [CONTRIBUTING.md](CONTRIBUTING.md)

## 📞 Contact

- **Email**: your-email@example.com
- **GitHub**: [@your-username](https://github.com/your-username)

## 📷 Screenshots

| Light Theme | Dark Theme |
|-------------|------------|
| ![Light Theme Screenshot](https://github.com/Shani871/Scientific-calculator/blob/main/light.png) | ![Dark Theme Screenshot](https://github.com/Shani871/Scientific-calculator/blob/main/dark.png) |

Feel free to replace the placeholder text and links with actual content as necessary.

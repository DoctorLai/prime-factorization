# Prime Factorization App
[![Prime Factorization (Built, Lint and Test)](https://github.com/DoctorLai/prime-factorization/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/DoctorLai/prime-factorization/actions/workflows/ci.yaml) [![Run Tests with Coverage](https://github.com/DoctorLai/prime-factorization/actions/workflows/coverage.yaml/badge.svg)](https://github.com/DoctorLai/prime-factorization/actions/workflows/coverage.yaml)

A simple React web app that computes the prime factorization of any positive integer and displays it in a clean, styled format. It also lists all prime numbers up to 2000 for quick reference. The project supports dark mode, is fully tested with Vitest, and can be easily deployed to GitHub Pages.

## Features

- **Prime Factorization**: Enter any positive integer and see its prime factors in exponent form (e.g., <code>24 => 2³ * 3</code>).
- **Prime Number List**: Displays all prime numbers up to 2000 for reference.
- **Dark Mode**: Toggle between light and dark modes for better readability.
- **Clean Result Display**: Factorization results are highlighted in a styled result box.
- **Simple and Intuitive UI**: Just enter a number and click "Factorize".
- **Deploy Easily**: <code>npm run build</code> and <code>npm run deploy</code>.

## Live Demo

The live demo is deployed here:  
- [GitHub Pages: Prime Factorization Tool](https://doctorlai.github.io/prime-factorization/)
- Alternative Tool: [Integer Factorization to Prime Factors with API](https://helloacm.com/tools/factor/)

<img alt="image" src="https://github.com/user-attachments/assets/153265a2-7331-4098-a527-f2b58bcbcbe9" />

## Installation

To run the app locally:

1. Clone the repository:  
```bash
git clone https://github.com/doctorlai/prime-factorization.git  
cd prime-factorization
```

2. Install dependencies:  
```bash
npm install
```

3. Start the development server:  
```bash
npm run dev
```

4. Run tests:  
```bash
## or simply: npm test
npm run test
```

5. Test coverage:
```bash
npx vitest run --coverage
```

6. Format code:  
Run: <code>npm run format</code> to check code formatting and;
Run: <code>npm run format:fix</code> to fix formatting automatically.

6. Open [http://localhost:5173/prime-factorization/](http://localhost:5173/prime-factorization/) in your browser.

## Usage
1. Enter a **positive integer** in the input box.  
2. The prime factorization will be displayed in a styled result box.  
3. Scroll down to see all prime numbers up to 2000.  
4. Toggle **Light/Dark Mode** with the 🌞/🌙 button.  

## Contributing

Contributions are welcome!
1. Fork the repository.  
2. Create a feature branch:  
```bash
git checkout -b feature-branch
```

3. Commit your changes:  
```bash
git commit -am 'Add new feature'
```

4. Push to your fork:  
```bash
git push origin feature-branch
```

5. Open a Pull Request.  

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Documentation

See the [AI generated wiki](https://deepwiki.com/DoctorLai/prime-factorization) for more background.

## Acknowledgments

- Built with ❤️ by [@justyy](https://github.com/doctorlai)  
- Initial boilerplate provided by ChatGPT.
- If you found this tool useful, consider buying me a [coffee](https://justyy.com/out/bmc) ☕ Thank you!

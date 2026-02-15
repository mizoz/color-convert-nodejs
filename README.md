# Color Convert Node.js

[![npm Version](https://img.shields.io/npm/v/color-convert-nodejs?style=flat-square)](https://www.npmjs.com/package/color-convert-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/color-convert-nodejs?style=flat-square)](https://www.npmjs.com/package/color-convert-nodejs)
[![License](https://img.shields.io/npm/l/color-convert-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/color-convert-nodejs?style=flat-square)](https://www.npmjs.com/package/color-convert-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/color-convert-nodejs?style=flat-square)](https://github.com/mizoz/color-convert-nodejs)

> A Node.js CLI tool for converting between HEX and RGB color formats with ease.

## Features

- Convert HEX to RGB
- Convert RGB to HEX
- Support for RGB and RGBA formats
- Batch color conversion
- Command-line interface
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g color-convert-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/color-convert-nodejs.git
cd color-convert-nodejs
npm install
```

## Usage

### Command Line

```bash
# Convert HEX to RGB
color-convert "#FF5733"

# Convert RGB to HEX
color-convert "rgb(255, 87, 51)"

# Convert with alpha
color-convert "rgba(255, 87, 51, 0.5)"
```

### JavaScript API

```javascript
const { ColorConverter } = require("color-convert-nodejs");

const converter = new ColorConverter();

// HEX to RGB
const rgb = converter.hexToRgb("#FF5733");
console.log(rgb);  // { r: 255, g: 87, b: 51 }

// RGB to HEX
const hex = converter.rgbToHex(255, 87, 51);
console.log(hex);  // #FF5733
```

## CLI Options

| Option | Description |
|--------|-------------|
| `-r, --rgb` | Input as RGB format |
| `-x, --hex` | Input as HEX format |

## Requirements

- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/mizoz/color-convert-nodejs/pulls).

## License

This project is licensed under the MIT License.

## Author

**mizoz**
- GitHub: [@mizoz](https://github.com/mizoz)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!

# roman-numerals-component
A simple React component to convert Decimal values from / to Roman Numerals. Optionally adds a tooltip on Mouse Enter.

## Demo
Visit demo with editable-source code @: [www.saglam.tk/roman-numerals-component](https://www.saglam.tk/roman-numerals-component/)

Or, alternatively, find `index.html` inside the `example` folder (download zip file: [master](https://github.com/sammysaglam/roman-numerals-component/archive/master.zip))

## Usage
This component is compiled as a UMD module; so, import using ES6 syntax:
```javascript
import RomanNumeral from './roman-numeral-component.js';
```

or, you can include it in your browser with:
```html
<script src="roman-numeral-component.min.js"></script>
```

> this package has not been published to npm.

## Develop

### To clone & install dependencies
```bash
git clone https://github.com/sammysaglam/roman-numerals-component
cd roman-numerals-component
yarn install
```

### To develop with hot-loader + sandbox
```bash
yarn start
```

### To compile the library + example
```bash
yarn build
```

### Run unit tests
![unit tests](https://raw.githubusercontent.com/sammysaglam/roman-numerals-component/master/SCREENSHOTS/unit-tests.png "Unit tests")


## Basic examples

### From Decimal to Roman Numeral
```jsx
<RomanNumeral
    returnType="roman-numeral"
    value={346654}
/>
```

### From Roman Numeral to Decimal
```jsx
<RomanNumeral
    returnType="decimal"
    value="M̅C̅C̅X̅X̅X̅MMMDCCXLII"
/>
```

### Has Tooltip
```jsx
<RomanNumeral
    hasTooltip={true}
    value={456645}
/>
```

### Utils
```javascript
import {toRoman , fromRoman} from "./utils/roman.js";

console.log(toRoman(654642)); // outputs "D̅C̅L̅I̅V̅DCXLII"
console.log(fromRoman("M̅C̅C̅X̅X̅X̅MMMDCCXLII")); // outputs "1233742"
```

## License
MIT

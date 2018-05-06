---
imports:
    'RomanNumeral': '../components/RomanNumeral'
---

# <RomanNumeral />
A simple React component to convert Decimal values from / to Roman Numerals.

Optional: hover mouse to display tooltip (see last example).

> Examples below are fully editable; just type in the source code.

## Props
[PROPS_TABLE(RomanNumeral)]

## From Decimal to Roman Numeral
Input a Decimal value to convert to a Roman Numeral.
```jsx show-source
<RomanNumeral
    returnType="roman-numeral"
    value={#{Math.floor(Math.random() * 1000000)}}
/>
```

## From Roman Numeral to Decimal
Input a Roman Numeral to convert to a Decimal value.
```jsx show-source
<RomanNumeral
    returnType="decimal"
    value="M̅C̅C̅X̅X̅X̅MMMDCCXLII"
/>
```

## Has Tooltip
Displays a tooltip on mouseEnter.
```jsx show-source
<RomanNumeral
    returnType="roman-numeral"
    hasTooltip={true}
    value={#{Math.floor(Math.random() * 1000000)}}
/>
```
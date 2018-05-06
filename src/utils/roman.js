import inverse from 'object-loops/inverse';

const overline = (letter: string) => letter + '\u{0305}';

const romanNumeralsMap = {
	1: 'I',
	4: 'IV',
	5: 'V',
	9: 'IX',
	10: 'X',
	40: 'XL',
	50: 'L',
	90: 'XC',
	100: 'C',
	400: 'CD',
	500: 'D',
	900: 'CM',
	1000: 'M',
	4000: `${overline('I')}${overline('V')}`,
	5000: overline('V'),
	9000: `${overline('I')}${overline('X')}`,
	10000: overline('X'),
	40000: `${overline('X')}${overline('L')}`,
	50000: overline('L'),
	90000: `${overline('X')}${overline('C')}`,
	100000: overline('C'),
	400000: `${overline('C')}${overline('D')}`,
	500000: overline('D'),
	900000: `${overline('C')}${overline('M')}`,
	1000000: overline('M'),
};

const MAX_ALLOWED_DECIMAL_VALUE = 10000000000;
export const toRoman = (decimalValue: number) => {
	// error check
	if (decimalValue > MAX_ALLOWED_DECIMAL_VALUE) return 'too-large';

	const descendingOrder = (prevValue, currValue) => (Number(prevValue) < Number(currValue) ? 1 : -1);
	const decimalValues = Object.keys(romanNumeralsMap).sort(descendingOrder);

	let remaining = decimalValue;
	let romanNumeralResult = '';
	while (remaining > 0) {
		// eslint-disable-next-line no-loop-func
		const currentHighestValue = value => remaining >= value;
		const valueToDeduct = decimalValues.find(currentHighestValue);
		const romanCharacterCount = Math.floor(remaining / valueToDeduct);

		remaining -= valueToDeduct * romanCharacterCount;
		romanNumeralResult += romanNumeralsMap[valueToDeduct].repeat(romanCharacterCount);
	}

	return romanNumeralResult;
};

const MAX_ITERATION_TIMEOUT = 5000;
export const fromRoman = (romanNumeral: string) => {
	const romanNumeralsMapInversed = inverse(romanNumeralsMap);

	// start from left to right, recognize partial of numeral, and add to total sum
	let iterationCount = 0;
	let remaining = romanNumeral;
	let decimalValueResult = 0;
	while (remaining !== '' && iterationCount < MAX_ITERATION_TIMEOUT) {
		// eslint-disable-next-line no-magic-numbers
		const firstFourChars = remaining.substr(0, 4);
		const firstTwoChars = remaining.substr(0, 2);
		const firstOneChar = remaining.substr(0, 1);

		remaining = remaining.substr(
			// eslint-disable-next-line no-magic-numbers
			(romanNumeralsMapInversed[firstFourChars] && 4) ||
				(romanNumeralsMapInversed[firstTwoChars] && 2) ||
				(romanNumeralsMapInversed[firstOneChar] && 1),
		);
		decimalValueResult += Number(
			romanNumeralsMapInversed[firstFourChars] ||
				romanNumeralsMapInversed[firstTwoChars] ||
				romanNumeralsMapInversed[firstOneChar],
		);

		iterationCount++;
	}

	// if not timed-out, then return result, else "error"
	return iterationCount === MAX_ITERATION_TIMEOUT ? 'error' : decimalValueResult;
};

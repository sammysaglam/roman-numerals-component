import { toRoman, fromRoman } from './roman';

// eslint-disable-next-line max-statements
describe('"toRoman" utility function', () => {
	it('converts 1 to roman', () => {
		const decimalInput = 1;
		const expectedRomanOutput = 'I';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 2 to roman', () => {
		const decimalInput = 2;
		const expectedRomanOutput = 'II';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 3 to roman', () => {
		const decimalInput = 3;
		const expectedRomanOutput = 'III';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 4 to roman', () => {
		const decimalInput = 4;
		const expectedRomanOutput = 'IV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 5 to roman', () => {
		const decimalInput = 5;
		const expectedRomanOutput = 'V';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 6 to roman', () => {
		const decimalInput = 6;
		const expectedRomanOutput = 'VI';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 7 to roman', () => {
		const decimalInput = 7;
		const expectedRomanOutput = 'VII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 8 to roman', () => {
		const decimalInput = 8;
		const expectedRomanOutput = 'VIII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 9 to roman', () => {
		const decimalInput = 9;
		const expectedRomanOutput = 'IX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 10 to roman', () => {
		const decimalInput = 10;
		const expectedRomanOutput = 'X';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 11 to roman', () => {
		const decimalInput = 11;
		const expectedRomanOutput = 'XI';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 13 to roman', () => {
		const decimalInput = 13;
		const expectedRomanOutput = 'XIII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 14 to roman', () => {
		const decimalInput = 14;
		const expectedRomanOutput = 'XIV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 19 to roman', () => {
		const decimalInput = 19;
		const expectedRomanOutput = 'XIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 38 to roman', () => {
		const decimalInput = 38;
		const expectedRomanOutput = 'XXXVIII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 39 to roman', () => {
		const decimalInput = 39;
		const expectedRomanOutput = 'XXXIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 40 to roman', () => {
		const decimalInput = 40;
		const expectedRomanOutput = 'XL';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 48 to roman', () => {
		const decimalInput = 48;
		const expectedRomanOutput = 'XLVIII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 49 to roman', () => {
		const decimalInput = 49;
		const expectedRomanOutput = 'XLIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 50 to roman', () => {
		const decimalInput = 50;
		const expectedRomanOutput = 'L';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 59 to roman', () => {
		const decimalInput = 59;
		const expectedRomanOutput = 'LIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 79 to roman', () => {
		const decimalInput = 79;
		const expectedRomanOutput = 'LXXIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 87 to roman', () => {
		const decimalInput = 87;
		const expectedRomanOutput = 'LXXXVII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 91 to roman', () => {
		const decimalInput = 91;
		const expectedRomanOutput = 'XCI';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 99 to roman', () => {
		const decimalInput = 99;
		const expectedRomanOutput = 'XCIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 100 to roman', () => {
		const decimalInput = 100;
		const expectedRomanOutput = 'C';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 133 to roman', () => {
		const decimalInput = 133;
		const expectedRomanOutput = 'CXXXIII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 300 to roman', () => {
		const decimalInput = 300;
		const expectedRomanOutput = 'CCC';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 429 to roman', () => {
		const decimalInput = 429;
		const expectedRomanOutput = 'CDXXIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 589 to roman', () => {
		const decimalInput = 589;
		const expectedRomanOutput = 'DLXXXIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 3,999 to roman', () => {
		const decimalInput = 3999;
		const expectedRomanOutput = 'MMMCMXCIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 4,054 to roman', () => {
		const decimalInput = 4054;
		const expectedRomanOutput = 'I̅V̅LIV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 5,894 to roman', () => {
		const decimalInput = 5894;
		const expectedRomanOutput = 'V̅DCCCXCIV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 9,429 to roman', () => {
		const decimalInput = 9429;
		const expectedRomanOutput = 'I̅X̅CDXXIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 10,030 to roman', () => {
		const decimalInput = 10030;
		const expectedRomanOutput = 'X̅XXX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 41,299 to roman', () => {
		const decimalInput = 41299;
		const expectedRomanOutput = 'X̅L̅MCCXCIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 53,234 to roman', () => {
		const decimalInput = 53234;
		const expectedRomanOutput = 'L̅MMMCCXXXIV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 98,799 to roman', () => {
		const decimalInput = 98799;
		const expectedRomanOutput = 'X̅C̅V̅MMMDCCXCIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 144,344 to roman', () => {
		const decimalInput = 144344;
		const expectedRomanOutput = 'C̅X̅L̅I̅V̅CCCXLIV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 433,234 to roman', () => {
		const decimalInput = 433234;
		const expectedRomanOutput = 'C̅D̅X̅X̅X̅MMMCCXXXIV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 765,434 to roman', () => {
		const decimalInput = 765434;
		const expectedRomanOutput = 'D̅C̅C̅L̅X̅V̅CDXXXIV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 987,742 to roman', () => {
		const decimalInput = 987742;
		const expectedRomanOutput = 'C̅M̅L̅X̅X̅X̅V̅MMDCCXLII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 1,233,742 to roman', () => {
		const decimalInput = 1233742;
		const expectedRomanOutput = 'M̅C̅C̅X̅X̅X̅MMMDCCXLII';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 1,463,230 to roman', () => {
		const decimalInput = 1463230;
		const expectedRomanOutput = 'M̅C̅D̅L̅X̅MMMCCXXX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 3,884,489 to roman', () => {
		const decimalInput = 3884489;
		const expectedRomanOutput = 'M̅M̅M̅D̅C̅C̅C̅L̅X̅X̅X̅I̅V̅CDLXXXIX';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
	it('converts 1,000,000,434 to roman', () => {
		const decimalInput = 1000000434;
		const expectedRomanOutput =
			'M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅CDXXXIV';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});

	it('returns "too-large" error', () => {
		const decimalInput = 500000000000;
		const expectedRomanOutput = 'too-large';

		expect(toRoman(decimalInput)).toBe(expectedRomanOutput);
	});
});

// eslint-disable-next-line max-statements
describe('"fromRoman" utility function', () => {
	it('converts I to decimal', () => {
		const romanInput = 'I';
		const expectedDecimalOutput = 1;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts II to decimal', () => {
		const romanInput = 'II';
		const expectedDecimalOutput = 2;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts III to decimal', () => {
		const romanInput = 'III';
		const expectedDecimalOutput = 3;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts IV to decimal', () => {
		const romanInput = 'IV';
		const expectedDecimalOutput = 4;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts V to decimal', () => {
		const romanInput = 'V';
		const expectedDecimalOutput = 5;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts VI to decimal', () => {
		const romanInput = 'VI';
		const expectedDecimalOutput = 6;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts VII to decimal', () => {
		const romanInput = 'VII';
		const expectedDecimalOutput = 7;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts VIII to decimal', () => {
		const romanInput = 'VIII';
		const expectedDecimalOutput = 8;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts IX to decimal', () => {
		const romanInput = 'IX';
		const expectedDecimalOutput = 9;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts X to decimal', () => {
		const romanInput = 'X';
		const expectedDecimalOutput = 10;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XI to decimal', () => {
		const romanInput = 'XI';
		const expectedDecimalOutput = 11;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XIII to decimal', () => {
		const romanInput = 'XIII';
		const expectedDecimalOutput = 13;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XIV to decimal', () => {
		const romanInput = 'XIV';
		const expectedDecimalOutput = 14;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XIX to decimal', () => {
		const romanInput = 'XIX';
		const expectedDecimalOutput = 19;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XXXVIII to decimal', () => {
		const romanInput = 'XXXVIII';
		const expectedDecimalOutput = 38;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XXXIX to decimal', () => {
		const romanInput = 'XXXIX';
		const expectedDecimalOutput = 39;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XL to decimal', () => {
		const romanInput = 'XL';
		const expectedDecimalOutput = 40;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XLVIII to decimal', () => {
		const romanInput = 'XLVIII';
		const expectedDecimalOutput = 48;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XLIX to decimal', () => {
		const romanInput = 'XLIX';
		const expectedDecimalOutput = 49;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts L to decimal', () => {
		const romanInput = 'L';
		const expectedDecimalOutput = 50;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts LIX to decimal', () => {
		const romanInput = 'LIX';
		const expectedDecimalOutput = 59;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts LXXIX to decimal', () => {
		const romanInput = 'LXXIX';
		const expectedDecimalOutput = 79;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts LXXXVII to decimal', () => {
		const romanInput = 'LXXXVII';
		const expectedDecimalOutput = 87;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XCI to decimal', () => {
		const romanInput = 'XCI';
		const expectedDecimalOutput = 91;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts XCIX to decimal', () => {
		const romanInput = 'XCIX';
		const expectedDecimalOutput = 99;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts C to decimal', () => {
		const romanInput = 'C';
		const expectedDecimalOutput = 100;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts CXXXIII to decimal', () => {
		const romanInput = 'CXXXIII';
		const expectedDecimalOutput = 133;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts CCC to decimal', () => {
		const romanInput = 'CCC';
		const expectedDecimalOutput = 300;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts CDXXIX to decimal', () => {
		const romanInput = 'CDXXIX';
		const expectedDecimalOutput = 429;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts DLXXXIX to decimal', () => {
		const romanInput = 'DLXXXIX';
		const expectedDecimalOutput = 589;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts MMMCMXCIX to decimal', () => {
		const romanInput = 'MMMCMXCIX';
		const expectedDecimalOutput = 3999;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts I̅V̅LIV to decimal', () => {
		const romanInput = 'I̅V̅LIV';
		const expectedDecimalOutput = 4054;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts V̅DCCCXCIV to decimal', () => {
		const romanInput = 'V̅DCCCXCIV';
		const expectedDecimalOutput = 5894;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts I̅X̅CDXXIX to decimal', () => {
		const romanInput = 'I̅X̅CDXXIX';
		const expectedDecimalOutput = 9429;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts X̅XXX to decimal', () => {
		const romanInput = 'X̅XXX';
		const expectedDecimalOutput = 10030;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts X̅L̅MCCXCIX to decimal', () => {
		const romanInput = 'X̅L̅MCCXCIX';
		const expectedDecimalOutput = 41299;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts L̅MMMCCXXXIV to decimal', () => {
		const romanInput = 'L̅MMMCCXXXIV';
		const expectedDecimalOutput = 53234;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts X̅C̅V̅MMMDCCXCIX to decimal', () => {
		const romanInput = 'X̅C̅V̅MMMDCCXCIX';
		const expectedDecimalOutput = 98799;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts C̅X̅L̅I̅V̅CCCXLIV to decimal', () => {
		const romanInput = 'C̅X̅L̅I̅V̅CCCXLIV';
		const expectedDecimalOutput = 144344;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts C̅D̅X̅X̅X̅MMMCCXXXIV to decimal', () => {
		const romanInput = 'C̅D̅X̅X̅X̅MMMCCXXXIV';
		const expectedDecimalOutput = 433234;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts D̅C̅C̅L̅X̅V̅CDXXXIV to decimal', () => {
		const romanInput = 'D̅C̅C̅L̅X̅V̅CDXXXIV';
		const expectedDecimalOutput = 765434;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts C̅M̅L̅X̅X̅X̅V̅MMDCCXLII to decimal', () => {
		const romanInput = 'C̅M̅L̅X̅X̅X̅V̅MMDCCXLII';
		const expectedDecimalOutput = 987742;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts M̅C̅C̅X̅X̅X̅MMMDCCXLII to decimal', () => {
		const romanInput = 'M̅C̅C̅X̅X̅X̅MMMDCCXLII';
		const expectedDecimalOutput = 1233742;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts M̅C̅D̅L̅X̅MMMCCXXX to decimal', () => {
		const romanInput = 'M̅C̅D̅L̅X̅MMMCCXXX';
		const expectedDecimalOutput = 1463230;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts M̅M̅M̅D̅C̅C̅C̅L̅X̅X̅X̅I̅V̅CDLXXXIX to decimal', () => {
		const romanInput = 'M̅M̅M̅D̅C̅C̅C̅L̅X̅X̅X̅I̅V̅CDLXXXIX';
		const expectedDecimalOutput = 3884489;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});
	it('converts M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅CDXXXIV to decimal', () => {
		const romanInput =
			'M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅CDXXXIV';
		const expectedDecimalOutput = 1000000434;

		expect(fromRoman(romanInput)).toBe(expectedDecimalOutput);
	});

	it('converts invalid Roman Numeral to "error"', () => {
		const invalidRomanInput = 'SAMIWASHERE';
		const expectedResult = 'error';

		expect(fromRoman(invalidRomanInput)).toBe(expectedResult);
	});
});

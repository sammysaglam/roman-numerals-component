import React from 'react';
import { shallow } from 'enzyme';

import RomanNumeral from './RomanNumeral';
import Tooltip from './Tooltip/Tooltip';

describe('<RomanNumeral>', () => {
	it('renders Decimal value based on Roman Numeral input', () => {
		const wrapper = shallow(<RomanNumeral value={23423} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('renders Roman Numeral based on Decimal input', () => {
		const wrapper = shallow(<RomanNumeral returnType="decimal" value="V̅DCLXIII" />);
		expect(wrapper).toMatchSnapshot();
	});

	it('renders Tooltip on mouse enter & unmounts Tooltion on mouse leave', () => {
		const wrapper = shallow(<RomanNumeral hasTooltip={true} value={78769} />);

		wrapper.simulate('mouseenter');
		expect(wrapper.find(Tooltip)).toHaveLength(1);

		wrapper.simulate('mouseleave');
		expect(wrapper.find(Tooltip)).toHaveLength(0);
	});

	it('does not render Tooltip on mouse enter if hasTooltip = false', () => {
		const wrapper = shallow(<RomanNumeral hasTooltip={false} value={78769} />);

		wrapper.simulate('mouseenter');

		expect(wrapper.find(Tooltip)).toHaveLength(0);
	});
});

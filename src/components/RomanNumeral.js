import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tooltip from './Tooltip/Tooltip';
import { toRoman, fromRoman } from '../utils/roman';

const Wrapper = styled.span`
	position: relative;
	cursor: default;
`;

class RomanNumeral extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isTooltipVisible: false,
		};

		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	onMouseEnter() {
		this.setState({
			isTooltipVisible: true,
		});
	}

	onMouseLeave() {
		this.setState({
			isTooltipVisible: false,
		});
	}

	render() {
		const { returnType, value, hasTooltip } = this.props;
		const { isTooltipVisible } = this.state;
		const { onMouseEnter, onMouseLeave } = this;

		return (
			<Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{(returnType === 'roman-numeral' && toRoman(value)) || (returnType === 'decimal' && fromRoman(value))}
				{hasTooltip && isTooltipVisible && <Tooltip>{value}</Tooltip>}
			</Wrapper>
		);
	}
}

RomanNumeral.propTypes = {
	hasTooltip: PropTypes.bool,
	returnType: PropTypes.oneOf(['roman-numeral', 'decimal']),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

RomanNumeral.defaultProps = {
	hasTooltip: false,
	returnType: 'roman-numeral',
};

export default RomanNumeral;

import styled, { css } from 'styled-components';

const beforeAndAfter = css`
	top: 100%;
	left: 30%;
	border: solid transparent;
	content: ' ';
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
`;

const Tooltip = styled.div`
	position: absolute;
	left: -1rem;
	bottom: calc(100% + 1rem);
	background: #88b7d5;
	box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
	padding: 0.375rem 1rem;
	color: white;
	font-weight: bold;
	border: 4px solid #c2e1f5;
	font-family: 'Times New Roman', serif;
	border-radius: 5px;

	&::before {
		${beforeAndAfter};
	}

	&::after {
		${beforeAndAfter};
	}

	&::after {
		border-color: rgba(136, 183, 213, 0);
		border-top-color: #88b7d5;
		border-width: 10px;
		margin-left: -10px;
	}

	&::before {
		border-color: rgba(194, 225, 245, 0);
		border-top-color: #c2e1f5;
		border-width: 16px;
		margin-left: -16px;
	}
`;

export default Tooltip;

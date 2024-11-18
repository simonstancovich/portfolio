import styled from 'styled-components';

export const HeroWrapper = styled.div`
	min-width: 1000px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 100px 20px;
	background: linear-gradient(135deg, #3a6351, #a3cb38);
	color: ${({ theme }) => theme.colors.lightText};
	border-radius: 8px;
	h1 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
	}
	p {
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}
`;

export const HeroButton = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.lightText};
	padding: 1rem 2rem;
	border-radius: 8px;
	font-size: 1.2rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	transition: all 0.3s ease;
	will-change: transform, box-shadow; /* Inform the browser about likely changes */
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

	&:hover {
		background-color: ${({ theme }) => theme.colors.accent};
		transform: translateY(-3px);
		box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.primary};
		transform: translateY(-3px);
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
	}
`;

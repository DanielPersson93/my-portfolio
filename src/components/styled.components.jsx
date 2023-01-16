import styled from "styled-components";

export const StyledPictureDiv = styled.div`
	padding: 2rem;
	display: flex;
	align-items: center;
	max-width: calc(100%);
	justify-content: center;
	flex-wrap: wrap;
	flex-shrink: 0;
`;
export const StyledImg = styled.img`
	max-width: 100%;
	flex-shrink: 0;
	border-radius: 0.2rem;
	margin: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	@media screen and (max-width: 500px) {
		width: 100%;
	}
`;

export const StyledProfileImage = styled.img`
	order: 1;
	border-radius: 100%;
	flex-shrink: 0;

	@media screen and (max-width: 1000px) {
		width: 70%;
	}
`;

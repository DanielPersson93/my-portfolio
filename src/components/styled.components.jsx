import { Link } from "gatsby";
import styled from "styled-components";

export const StyledHeading = styled.h1`
	font-size: 3em;
`;

export const StyledPictureDiv = styled.div`
	padding: 2rem;
	display: flex;
	align-items: center;
	width: calc(100% - 6rem);
	justify-content: center;
	flex-wrap: wrap;
	flex-shrink: 1;
`;
export const StyledImg = styled.img`
	flex-shrink: 1;
	border-radius: 0.2rem;
	margin: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	@media screen and (max-width: 500px) {
		max-width: 150px;
	}
`;

export const StyledNav = styled.nav`
	max-width: 100%;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	img {
		display: flex;
		align-items: center;
	}
`;

export const StyledFilter = styled.div`
	padding-top: 1rem;
	display: flex;
	justify-content: center;
`;

export const StyledContactInformation = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledWorkExperienceEducation = styled.aside`
	margin-top: 1rem;
	border-radius: 10px;
	/* padding: 1rem; */
	/* border: 1px solid black; */
	flex-grow: 1;
	text-align: left;
	/* align-self: center; */
`;
export const StyledHeadingLifeExperience = styled.h2`
	padding: 0;
`;
export const StyledImgHome = styled.img`
	order: 1;
	border-radius: 100%;
	min-width: 100px;
	max-width: 100%;
	flex-shrink: 0;

	@media screen and (max-width: 1000px) {
		width: 50%;
	}
`;

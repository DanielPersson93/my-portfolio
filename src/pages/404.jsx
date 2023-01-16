import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledMain = styled.main`
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
const StyledLink = styled(Link)`
	color: white;
	background-color: #f95a06;
	border-radius: 1rem;
	padding: 0.5rem 1rem;
	text-align: center;
	transition: ease-in 0.3s;
	margin-top: 1rem;
	&:hover {
		transition: ease-in 0.3s;
		background-color: #000000;
		color: #ffffff;
	}
	&:active {
		transition: ease-in 0s;
		color: #ffffff;
	}
`;

const StyledHeading = styled.h1`
	font-size: 60px;
	animation: float 6s ease-in-out infinite;
	font-weight: 700;
`;
const PageNotFound = () => {
	return (
		<StyledMain>
			<StyledHeading>404</StyledHeading>
			<h1>Page not found</h1>
			<p>Sorry, this page was not found return home</p>
			<StyledLink to="/">Home</StyledLink>
		</StyledMain>
	);
};

export default PageNotFound;

export const Head = () => <title>Hello</title>;

import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { StyledNav } from "./styled.components";

const LinkStyled = styled(Link)`
	color: black;
	transition: ease-in 0.3s;
	margin-left: 1rem;
	&:hover {
		text-decoration: underline;
		color: #f95a06;
		transition: ease-in 0.3s;
	}
`;

const ContactStyled = styled(Link)`
	color: white;
	background-color: #f95a06;
	border-radius: 1rem;
	padding: 0.5rem;
	text-align: center;
	transition: ease-in 0.3s;
	&:hover {
		transition: ease-in 0.3s;
		background-color: #000000;
		color: #ffffff;
	}
`;
const StyledLinksContainer = styled.div``;
const Header = ({ menu }) => {
	return (
		<StyledNav>
			<StyledLinksContainer>
				<LinkStyled to="/aboutme">About me</LinkStyled>
				<LinkStyled to="/projects">Projects</LinkStyled>
			</StyledLinksContainer>

			<Link to="/">
				<img src={menu[0].icon.url} alt={menu[0].icon.title} />
			</Link>

			<ContactStyled to="/contactme">Contact me</ContactStyled>
		</StyledNav>
	);
};

export default Header;

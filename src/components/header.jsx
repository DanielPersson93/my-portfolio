import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import {
	StyledNav,
	StyledLinksAboutProjects,
	StyledLinksLogo,
	StyledLinksContact,
} from "./styled.components";

const LinkStyled = styled(Link)`
	color: black;
	transition: ease-in 0.3s;
	&:hover {
		text-decoration: underline;
		color: #f95a06;
		transition: ease-in 0.3s;
	}
`;

const StyledContactLink = styled(Link)`
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

const Header = ({ menu }) => {
	return (
		<StyledNav>
			<StyledLinksAboutProjects>
				<LinkStyled to="/aboutme">About me</LinkStyled>
				<LinkStyled to="/projects">Projects</LinkStyled>
			</StyledLinksAboutProjects>
			<StyledLinksLogo>
				<Link to="/">
					<img src={menu[0].icon.url} alt={menu[0].icon.title} />
				</Link>
			</StyledLinksLogo>
			<StyledLinksContact>
				<StyledContactLink to="/contactme">Contact me</StyledContactLink>
			</StyledLinksContact>
		</StyledNav>
	);
};

export default Header;

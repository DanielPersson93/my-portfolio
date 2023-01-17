import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
	max-width: 100%;
	padding: 2rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 1;
	@media screen and (max-width: 600px) {
		justify-content: space-around;
	}
`;
const LinkStyled = styled(Link)`
	color: black;
	transition: ease-in 0.3s;
	&:hover {
		text-decoration: underline;
		color: #f95a06;
		transition: ease-in 0.3s;
	}
	&:active {
		transition: ease-in 0s;
		color: #f95a06;
	}

	@media (max-width: 600px) {
		padding: 1rem 2rem;
		display: block;
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
		width: 100%;

		&:not(:last-child) {
			border-top: 1px solid rgba(0, 0, 0, 0.3);
		}
		&:active {
			transform: translate(-10%, 0);
		}
	}
`;
const StyledLinksAboutProjects = styled.div`
	display: flex;
	justify-content: space-between;
	width: 33.333%;

	@media (max-width: 600px) {
		background-color: #f69b6a;
		justify-content: flex-end;
		width: 140px;
		display: block;
		padding: 2rem;
	}
`;
const StyledLinksLogo = styled.div`
	display: flex;
	justify-content: center;
	width: 33.333%;
	img {
		display: flex;
		align-items: center;
	}
`;
const StyledLinksContact = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 33.333%;
`;
const StyledContactLink = styled(Link)`
	color: #000000;
	background-color: #f95b06;
	border-radius: 1rem;
	box-sizing: border-box;
	padding: 0.5rem 1.5rem;
	text-align: center;
	transition: ease-in 0.3s;
	@media screen and (max-width: 400px) {
		padding: 0.5rem 1rem;
		font-size: medium;
	}

	&:hover {
		transition: ease-in 0.3s;
		background-color: #f95b0649;
		color: #000000;
	}
	&:active {
		transition: ease-in 0s;
		color: #f95a06;
		background-color: #f95b0649;
	}
`;
const StyledSvg = styled.svg`
	text-align: right;
	border-radius: 100%;
	margin-right: 1rem;
	margin-bottom: 1rem;

	&:active {
		transition: ease-in 0s;
		color: #f95a06;
		background-color: #f95b0649;
	}
	@media screen and (min-width: 600px) {
		display: none;
	}
`;

const StyledOverlay = styled.div`
	background: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
`;
/**
 * Denna funktion tar emot menu som en prop, varje parent gör frågan mot contentful och skickar den till header.jsx.
 * Menyn ser likadan ut på alla undersidor.
 * @param {*} menu
 * @returns HeaderPage
 */
const Header = ({ menu }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((open) => !open);
	};

	const closeMenu = () => setIsOpen(false);

	return (
		<>
			<StyledNav>
				<svg
					title="Open menu"
					className="menu-trigger"
					onClick={toggleMenu}
					xmlns="http://www.w3.org/2000/svg"
					height="48"
					width="48"
				>
					<path
						title="menu"
						d="M7.5 36q-.65 0-1.075-.425Q6 35.15 6 34.5q0-.65.425-1.075Q6.85 33 7.5 33h33q.65 0 1.075.425Q42 33.85 42 34.5q0 .65-.425 1.075Q41.15 36 40.5 36Zm0-10.5q-.65 0-1.075-.425Q6 24.65 6 24q0-.65.425-1.075Q6.85 22.5 7.5 22.5h33q.65 0 1.075.425Q42 23.35 42 24q0 .65-.425 1.075-.425.425-1.075.425Zm0-10.5q-.65 0-1.075-.425Q6 14.15 6 13.5q0-.65.425-1.075Q6.85 12 7.5 12h33q.65 0 1.075.425Q42 12.85 42 13.5q0 .65-.425 1.075Q41.15 15 40.5 15Z"
					/>
				</svg>
				<StyledLinksAboutProjects
					className={`menu-list ${isOpen ? "is-open" : ""}`}
				>
					<StyledSvg
						title="Close menu"
						onClick={toggleMenu}
						xmlns="http://www.w3.org/2000/StyledSvg"
						height="48"
						width="48"
					>
						<path
							title="Close"
							d="M24 26.1 13.5 36.6q-.45.45-1.05.45-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05L21.9 24 11.4 13.5q-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45L24 21.9l10.5-10.5q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05L26.1 24l10.5 10.5q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45-.6 0-1.05-.45Z"
						/>
					</StyledSvg>
					<LinkStyled to="/aboutme">About me</LinkStyled>
					<LinkStyled to="/projects">Projects</LinkStyled>
				</StyledLinksAboutProjects>
				<StyledLinksLogo>
					{menu.map((logo, index) => (
						<Link to="/" key={`${logo.icon.title}-${index}`}>
							<img
								src={logo.icon.url}
								alt={`${logo.icon.title} navigate home`}
							/>
						</Link>
					))}
				</StyledLinksLogo>
				<StyledLinksContact>
					<StyledContactLink to="/contactme">Contact</StyledContactLink>
				</StyledLinksContact>
			</StyledNav>

			{isOpen && <StyledOverlay onClick={closeMenu} />}
		</>
	);
};

export default Header;

import * as React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import { StyledProfileImage } from "../components/styled.components";

const StyledContactInformation = styled.div`
	order: 2;
	display: flex;
	flex-direction: column;
	text-align: left;
	padding: 2rem;
	a {
		margin: 0.5rem 0;

		&:hover {
			transform: translateX(20px);
		}
	}
`;
const StyledLink = styled.a`
	font-size: x-large;
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
`;
const StyledContaktLinks = styled.aside`
	display: flex;
	align-items: center;
	img {
		margin: 0 1rem;
	}
`;
/**
 * Funktionen tar emot data som parameter, som kommer från contentful via vår graphql fråga. Vi mappar sedan om datan så
 * vi kan nå dem utan att hårdkoda in värdet.
 * @param {*} data
 * @returns ContactPage
 */
const ContactPage = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<main className="contact-wrapper">
				{data.allContentfulContactMe.nodes.map((picture, pictureIndex) => (
					<StyledProfileImage
						src={picture.picture.url}
						alt={picture.picture.title}
						key={`${picture.title}-${pictureIndex}`}
					/>
				))}
				<StyledContactInformation>
					<h2>Contact me</h2>
					{data.allContentfulContactLinks.nodes.map((links, index) => (
						<StyledContaktLinks key={`${links.title}-${index}`}>
							<img src={links.linkLogo.url} alt={links.title} />
							<StyledLink href={links.url}>{links.title}</StyledLink>
						</StyledContaktLinks>
					))}
				</StyledContactInformation>
			</main>
		</>
	);
};
/**
 * Denna graphql fråga går till contentful och frågar efter allContentfulContactMe ,allContentfulContactLinks och allContentfulNav.
 * Den får sedan en respons som ContatPage tar emot som data.
 */
export const query = graphql`
	query ContactMePageQuery {
		allContentfulContactMe {
			nodes {
				contactMe
				picture {
					url
					title
				}
			}
		}
		allContentfulContactLinks {
			nodes {
				title
				url
				linkLogo {
					url
				}
			}
		}
		allContentfulNav {
			nodes {
				icon {
					title
					url
				}
			}
		}
	}
`;

export default ContactPage;
export const Head = () => <title>Contact me</title>;

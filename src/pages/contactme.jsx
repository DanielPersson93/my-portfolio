import * as React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import { StyledContactInformation } from "../components/styled.components";

const StyledLink = styled(Link)`
	font-size: x-large;
	color: black;
	transition: ease-in 0.3s;
	/* padding: 1rem; */

	&:hover {
		text-decoration: underline;
		color: #f95a06;
		transition: ease-in 0.3s;
	}
`;

const ContactPage = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<main className="contact-wrapper">
				<StyledContactInformation>
					{data.allContentfulContactLinks.nodes.map((links) => (
						<>
							<StyledLink href={links.url}>{links.title}</StyledLink>
						</>
					))}
				</StyledContactInformation>
				{data.allContentfulContactMe.nodes.map((node) => (
					<aside>
						<img src={node.picture.url} alt={node.picture.title} />
					</aside>
				))}
			</main>
		</>
	);
};

export const query = graphql`
	query MyQuery {
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
export const Head = () => <title>My Portfolio</title>;

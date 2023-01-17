import * as React from "react";
import "../main.css";
import { graphql } from "gatsby";
import Header from "../components/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { StyledProfileImage } from "../components/styled.components";
import styled from "styled-components";

const StyledWelcomePhrase = styled.h1`
	padding: 2rem;
	text-align: center;
`;
const StyledSkillsBlock = styled.div`
	grid-gap: 0.3rem;
	display: grid;
	grid-template-columns: auto auto;

	@media screen and (max-width: 1000px) {
		justify-content: center;
		padding: 0 0 2rem 0;
	}
`;
const StyledParagraph = styled.code`
	align-items: center;
	display: flex;
	justify-content: center;
	border-radius: 8px;
	padding: 0.2rem;
	background-color: #ff6a00;
	color: #000000;
`;
const StyledSkillsHeading = styled.h2`
	margin: 0;
	padding: 1rem 0 0 0;
	text-decoration: none;
`;
const StyledHomeContainer = styled.article`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		aside {
			p,
			h1,
			h2 {
				text-align: center;
			}
			order: 2;
		}
		img {
			order: 1;
		}
	}
	@media screen {
	}
`;
/**
 * Denna funktion förväntas ta emot en parameter med massa data från contentful och sedan returnerar den IndexPage
 * @param {*} data
 * @returns Indexpage
 */
const IndexPage = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<main className="home-wrapper">
				{data.allContentfulHome.nodes.map((node, index) => (
					<StyledWelcomePhrase key={`${node.title}-${index}`}>
						{node.welcome}
					</StyledWelcomePhrase>
				))}
				<StyledHomeContainer>
					{data.allContentfulHome.nodes.map((node, index) => (
						<aside className="home-aside" key={`${node.title}-${index}`}>
							<h1>{node.bigText}</h1>
							{documentToReactComponents(JSON.parse(node.description.raw))}
							<StyledSkillsHeading>Skills</StyledSkillsHeading>
							<StyledSkillsBlock>
								<StyledParagraph>TypeScript</StyledParagraph>
								<StyledParagraph>CSS</StyledParagraph>
								<StyledParagraph>JavaScript</StyledParagraph>
								<StyledParagraph>PHP</StyledParagraph>
							</StyledSkillsBlock>
						</aside>
					))}
					{data.allContentfulHome.nodes.map((picture, index) => (
						<StyledProfileImage
							key={`${picture.picture.title}-${index}`}
							src={picture.picture.url}
							alt={picture.picture.title}
						/>
					))}
				</StyledHomeContainer>
			</main>
		</>
	);
};
/**
 * Denna fråga går till contentful och datan som return tar IndexPage emot som en parameter.
 * frågan går till allContentfulHome och allContentfulNav.
 */
export const query = graphql`
	query HomePageQuery {
		allContentfulHome {
			nodes {
				title
				welcome
				description {
					raw
				}
				bigText
				picture {
					url
					title
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

export default IndexPage;

export const Head = () => <title>My Portfolio</title>;

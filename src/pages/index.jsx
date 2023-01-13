import * as React from "react";
import "../main.css";
import { graphql } from "gatsby";
import Header from "../components/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
	StyledImgHome,
	StyledWelcomePhrase,
} from "../components/styled.components";

const IndexPage = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			{data.allContentfulHome.nodes.map((node) => (
				<StyledWelcomePhrase>{node.welcome}</StyledWelcomePhrase>
			))}

			{data.allContentfulHome.nodes.map((node) => (
				<main className="home-wrapper">
					<aside className="home-aside">
						<h1>{node.bigText}</h1>
						{documentToReactComponents(JSON.parse(node.description.raw))}
					</aside>
					<StyledImgHome src={node.picture.url} alt={node.title} />
				</main>
			))}
		</>
	);
};

export const query = graphql`
	query MyQuery {
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

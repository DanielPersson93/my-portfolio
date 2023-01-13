import * as React from "react";
import "../main.css";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { useEffect } from "react";
import Header from "../components/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { StyledHeading } from "../components/styled.components";
import { StyledImgHome } from "../components/styled.components";

const IndexPage = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
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

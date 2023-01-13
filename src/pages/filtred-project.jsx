import { Link, graphql } from "gatsby";
import * as React from "react";
import Header from "../components/header";
import { StyledPictureDiv, StyledImg } from "../components/styled.components";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const StyledViewProjects = styled(Link)`
	color: white;
	background-color: #f95a06;
	border-radius: 1rem;
	width: 10rem;
	text-align: center;
	transition: ease-in 0.3s;
	&:hover {
		transition: ease-in 0.3s;
		background-color: #000000;
		color: #ffffff;
	}
`;
const StyledLink = styled(Link)`
	font-size: medium;
	color: black;
	transition: ease-in 0.3s;
	padding: 1rem;

	&:hover {
		text-decoration: underline;
		color: #f95a06;
		transition: ease-in 0.3s;
	}
`;
const filtredProject = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<StyledLink to="/projects">All projects</StyledLink>
			{data.allContentfulPost.nodes.map((node) => (
				<main className="project-wrapper">
					<h2>{node.title}</h2>
					<StyledPictureDiv>
						{node.projectPictures.map((picture) => (
							<StyledImg src={picture.url} alt={picture.title} />
						))}
					</StyledPictureDiv>
					<aside className="text-field">
						<p>{node.excerpt}</p>
						<StyledViewProjects to={`/projects/${node.slug}/`}>
							View Project
						</StyledViewProjects>
					</aside>
				</main>
			))}
		</>
	);
};
export const query = graphql`
	query MyQuery($category: String) {
		allContentfulPost(filter: { category: { eq: $category } }) {
			nodes {
				slug
				title
				excerpt
				projectPictures {
					url
					title
				}
				category
				content {
					raw
				}
			}
			distinct(field: { category: SELECT })
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

export default filtredProject;

export const Head = () => <title>My Portfolio</title>;

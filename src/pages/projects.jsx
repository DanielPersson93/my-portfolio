import * as React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import {
	StyledPictureDiv,
	StyledImg,
	StyledFilter,
} from "../components/styled.components";

const StyledLink = styled(Link)`
	color: white;
	transition: ease-in 0.3s;
	margin-top: 1rem;
	padding: 0.5rem;
	border-radius: 10px;
	background-color: #f95a06;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	&:hover {
		text-decoration: underline;
		background-color: black;
		transition: ease-in 0.3s;
	}
`;

const ProjectsPage = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<StyledFilter>
				{data.allContentfulPost.distinct.map((cat) => (
					<StyledLink to={`/projects/${cat}`}>{cat}</StyledLink>
				))}
			</StyledFilter>
			{data.allContentfulPost.nodes.map((node) => (
				<main className="project-wrapper">
					<h2>{node.title}</h2>
					<StyledPictureDiv>
						{node.projectPictures.map((picture) => (
							<StyledImg src={picture.url} alt={picture.title} />
						))}
					</StyledPictureDiv>
					<div className="text-field">
						<p>{node.excerpt}</p>
						<StyledLink to={`/projects/${node.slug}/`}>View Project</StyledLink>
					</div>
				</main>
			))}
		</>
	);
};

export const query = graphql`
	query MyQuery {
		allContentfulPost {
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

export default ProjectsPage;
export const Head = () => <title>My Portfolio</title>;

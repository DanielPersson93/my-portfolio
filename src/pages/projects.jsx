import * as React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import { StyledPictureDiv, StyledImg } from "../components/styled.components";

const StyledFilter = styled.div`
	padding-top: 1rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
const StyledLink = styled(Link)`
	color: black;
	transition: ease-in 0.3s;
	margin: 1rem 0.5rem;
	padding: 0.5rem;
	border-radius: 10px;
	background-color: #f95a06;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	&:hover {
		text-decoration: underline;
		background-color: #f95b0649;
		transition: ease-in 0.3s;
	}
	&:active {
		background-color: #000000;
		color: #f95a06;
		transition: ease-in 0s;
	}
`;

const ProjectsPage = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<main className="project-wrapper">
				<StyledFilter>
					{data.allContentfulPost.distinct.map((cat) => (
						<StyledLink key={`${cat}`} to={`/projects/${cat}`}>
							{cat}
						</StyledLink>
					))}
				</StyledFilter>
				{data.allContentfulPost.nodes.map((node, i) => (
					<article className="project-article" key={`${node.title}-${i}`}>
						<h2>{node.title}</h2>
						<StyledPictureDiv>
							{node.projectPictures.map((picture, picIndex) => (
								<StyledImg
									key={`${picture.title}-${picIndex}`}
									src={picture.url}
									alt={picture.title}
								/>
							))}
						</StyledPictureDiv>
						<div className="text-field">
							<p>{node.excerpt}</p>
							<StyledLink to={`/projects/${node.slug}/`}>
								View Project
							</StyledLink>
						</div>
					</article>
				))}
			</main>
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

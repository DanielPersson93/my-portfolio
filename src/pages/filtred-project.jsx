import { Link, graphql } from "gatsby";
import * as React from "react";
import Header from "../components/header";
import { StyledPictureDiv, StyledImg } from "../components/styled.components";
import styled from "styled-components";

const StyledViewProjects = styled(Link)`
	color: black;
	background-color: #f95a06;
	border-radius: 1rem;
	padding: 0.5rem 1.5rem;
	text-align: center;
	transition: ease-in 0.3s;
	margin: 2rem 0;
	&:hover {
		transition: ease-in 0.3s;
		background-color: #f95b0649;
		color: #ffffff;
	}
	&:active {
		transition: ease-in 0s;
		color: #000000;
		background-color: #f95b0649;
	}
`;
const StyledLink = styled(Link)`
	color: black;
	transition: ease-in 0.3s;
	padding: 1rem;

	&:hover {
		text-decoration: underline;
		color: #f95a06;
		transition: ease-in 0.3s;
	}
	&:active {
		color: #f95a06;
	}
`;
/**
 * Denna funktion tar emot ett data som är filtrerat från contentful i detta fall i allContentfulPost. Där den sedan
 * listar ut datan den tar emot som response
 * @param {*} data
 * @returns filtredProject
 */
const filtredProject = ({ data }) => {
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<main className="project-wrapper">
				<StyledLink to="/projects">All projects</StyledLink>
				{data.allContentfulPost.nodes.map((node, i) => (
					<article className="project-article" key={`${node.title}-${i}`}>
						<h2>{node.title}</h2>
						<StyledPictureDiv>
							{node.projectPictures.map((picture, picIndex) => (
								<StyledImg
									src={picture.url}
									alt={picture.title}
									key={`${picture.title}-${picIndex}`}
								/>
							))}
						</StyledPictureDiv>
						<aside className="text-field">
							<p>{node.excerpt}</p>
							<StyledViewProjects to={`/projects/${node.slug}/`}>
								View Project
							</StyledViewProjects>
						</aside>
					</article>
				))}
			</main>
		</>
	);
};
/**
 * Frågan går mot contentful, och hämtar den filtrerade allContentfulPost vars kategori stämmer överrens med kategorin.
 * Om det finns flera i den kategorin så vill vi endast skriva ut en av dessa.
 * Den hämtar även allContentfulNav
 */
export const query = graphql`
	query FiltredListPageQuery($category: String) {
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

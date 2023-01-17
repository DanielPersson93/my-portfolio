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
	margin: 2rem 0.5rem;
	padding: 0.5rem 1.5rem;
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
/**
 * Detta är en funktion som skapar upp ProjectsPage den tar emot data som kommer från contentful.
 * den har ett flertal lopar som mappar om datat den motager så att varje datapunkt görs om till en egen och skriver,
 * även ut dess data för varje punkt.
 * @param {*} data
 * @returns ProductPage
 */
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
/**
 * Detta är min fråga som går till contentful,
 * den hämtar allContentfulPost och allContentfulNav
 *
 */
export const query = graphql`
	query ProjectPageQuery {
		allContentfulPost {
			nodes {
				slug
				title
				excerpt
				projectPictures {
					url
				}
			}
			distinct(field: { category: { category: SELECT } })
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

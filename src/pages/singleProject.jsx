import * as React from "react";
// import SideMenu from "../components/sidemenu"
// import '../index.css';
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import { StyledPictureDiv, StyledImg } from "../components/styled.components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { useEffect } from "react";
const StyledBackToHomeLink = styled(Link)`
	color: #000000;
	background-color: #f95a06;
	border-radius: 1rem;
	padding: 0.5rem;
	text-align: center;
	transition: ease-in 0.3s;
	width: 10rem;
	margin-top: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	&:hover {
		transition: ease-in 0.3s;
		background-color: #f95b0649;
	}
	&:active {
		color: #f95a06;
		transition: ease-in 0s;
		background-color: #000000;
	}
`;
const StyledVisitWebsite = styled.a`
	color: #000000;
	border: 1px solid black;
	border-radius: 1rem;
	padding: 0.5rem;
	text-align: center;
	transition: ease-in 0.3s;
	width: 10rem;
	margin-top: 1rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	&:hover {
		transition: ease-in 0.3s;
		background-color: #00000038;
		color: #ffffff;
	}
	&:active {
		color: #f95a06;
	}
`;
const SinglePage = ({ data }) => {
	const singleData = data.contentfulPost;

	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<main className="single-wrapper">
				<StyledPictureDiv>
					{singleData.projectPictures.map((picture, pictureIndex) => (
						<StyledImg
							src={picture.url}
							alt={picture.title}
							key={`${picture.title}-${pictureIndex}`}
						/>
					))}
				</StyledPictureDiv>
				<aside className="text-field">
					<h2>{singleData.title}</h2>
					<StyledVisitWebsite href={singleData.link}>
						Visit website
					</StyledVisitWebsite>
					<p className="single-date">{singleData.date}</p>
					{documentToReactComponents(JSON.parse(singleData.content.raw))}
					<StyledBackToHomeLink to="/projects">
						Back to Projects
					</StyledBackToHomeLink>
				</aside>
			</main>
		</>
	);
};

export const query = graphql`
	query SinglePageQuery($slug: String!) {
		contentfulPost(slug: { eq: $slug }) {
			title
			link
			projectPictures {
				url
				title
			}
			content {
				raw
			}
			date(formatString: "YYYY-MM-DD")
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

export default SinglePage;

export const Head = () => <title>My Portfolio</title>;

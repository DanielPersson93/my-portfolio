import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Header from "../components/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
	StyledWorkExperienceEducation,
	StyledHeadingLifeExperience,
} from "../components/styled.components";

const StyledArticle = styled.article`
	display: flex;
	flex-direction: column;
	width: 30%;
	text-align: center;
	padding: 1rem;
	margin: 1rem;
	border: 1px solid black;
	border-radius: 10px;
	background-color: #f95b066b;
	color: #000000;
	.date {
		font-weight: 400;
		font-style: italic;
	}
`;
const StyledInformation = styled.aside`
	max-width: 50rem;
	padding: 1rem;
`;

const StyledLifeExperience = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const AboutPage = ({ data }) => {
	const [about] = data.allContentfulAboutMe.nodes;

	console.log(data.allContentfulWorkExperience.nodes);
	return (
		<>
			<Header menu={data.allContentfulNav.nodes} />
			<main className="about-wrapper">
				<StyledInformation>
					<h1>{about.name}</h1>
					{documentToReactComponents(JSON.parse(about.description.raw))}
				</StyledInformation>
				<StyledLifeExperience>
					<StyledArticle className="about-work-experience">
						<StyledHeadingLifeExperience>
							Work Experience
						</StyledHeadingLifeExperience>
						{data.allContentfulWorkExperience.nodes.map((work) => (
							<StyledWorkExperienceEducation>
								<p className="date">{work.date}</p>
								<h3>{work.company}</h3>
								<h4>{work.role}</h4>
								<p>
									{documentToReactComponents(JSON.parse(work.description.raw))}
								</p>
							</StyledWorkExperienceEducation>
						))}
					</StyledArticle>
					<StyledArticle>
						<StyledHeadingLifeExperience>Education</StyledHeadingLifeExperience>
						{data.allContentfulEducation.nodes.map((education) => (
							<StyledWorkExperienceEducation>
								<p className="date">{education.date}</p>
								<h3>{education.school}</h3>
								<h4>{education.role}</h4>
								<p>
									{documentToReactComponents(
										JSON.parse(education.description.raw)
									)}
								</p>
							</StyledWorkExperienceEducation>
						))}
					</StyledArticle>
				</StyledLifeExperience>
			</main>
		</>
	);
};

export const query = graphql`
	query MyQuery {
		allContentfulAboutMe {
			nodes {
				name
				title
				description {
					raw
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
		allContentfulWorkExperience {
			nodes {
				role
				description {
					raw
				}
				company

				date
			}
		}
		allContentfulEducation {
			nodes {
				school
				date
				degree
				description {
					raw
				}
			}
		}
	}
`;

export default AboutPage;
export const Head = () => <title>My Portfolio</title>;

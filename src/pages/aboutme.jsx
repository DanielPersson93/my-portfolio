import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Header from "../components/header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const StyledArticle = styled.article`
	flex-shrink: 1;
	display: flex;
	flex-direction: column;
	max-width: 30%;
	text-align: center;
	padding: 1rem;
	margin: 1rem;
	border-radius: 10px;
	background-color: #ff59005a;
	color: #000000;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	.date {
		font-weight: 400;
		font-style: italic;
	}
	@media screen and (max-width: 850px) {
		min-width: 13rem;
	}
`;
const StyledWorkExperienceEducation = styled.aside`
	margin-top: 1rem;
	border-radius: 10px;
	text-align: left;
`;
const StyledHeadingLifeExperience = styled.h2`
	padding: 0;
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
/**
 *  Denna funktion tar emot data från contentful och mappar ut datan som vi får i respons.
 * @param {*} data
 * @returns AboutPage
 */
const AboutPage = ({ data }) => {
	const [about] = data.allContentfulAboutMe.nodes;

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
						{data.allContentfulWorkExperience.nodes.map((work, index) => (
							<StyledWorkExperienceEducation key={`${work.company}-${index}`}>
								<p className="date">{work.date}</p>
								<h3>{work.company}</h3>
								<h4>{work.role}</h4>

								{documentToReactComponents(JSON.parse(work.description.raw))}
							</StyledWorkExperienceEducation>
						))}
					</StyledArticle>
					<StyledArticle>
						<StyledHeadingLifeExperience>Education</StyledHeadingLifeExperience>
						{data.allContentfulEducation.nodes.map((education, index) => (
							<StyledWorkExperienceEducation
								key={`${education.company}-${index}`}
							>
								<p className="date">{education.date}</p>
								<h3>{education.school}</h3>
								<h4>{education.role}</h4>

								{documentToReactComponents(
									JSON.parse(education.description.raw)
								)}
							</StyledWorkExperienceEducation>
						))}
					</StyledArticle>
				</StyledLifeExperience>
			</main>
		</>
	);
};
/**
 * frågan går till contentful med hjälp av vår graphql fråga, responen den får tillbaka tar AboutPage som en parameter
 * allContentfulAboutMe, allContentfulNav,allContentfulWorkExperience, allContentfulEducation
 */
export const query = graphql`
	query AboutMePageQuery {
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

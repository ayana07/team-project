import React from "react";
import runman from "../assets/images/runman.png";
import team from "../assets/images/team.png";
import community from "../assets/images/community.png";
import fact from "../assets/images/fact.png";
import "./AboutUs.css";

const AboutUs = () => {
	return (
		<container className="about">
			<div className="header-about">
				<div className="container-about">
					<h3>Our mission:</h3>
					<h2>
						BRING INSPIRATION <br /> AND INNOVATION <br />
						TO EVERY ATHLETE* <br />
						IN THE WORLD
					</h2>
					<h3>*IF YOU HAVE A BODY, YOU ARE AN ATHLETE.</h3>
				</div>
			</div>
			<div className="mission-about">
				<div className="mission-about-text">
					<h3>ABOUT NIKE</h3>
					<p>
						Our mission is what drives us to do everything possible to expand
						human potential. We do that by creating groundbreaking sport
						innovations, by making our products more sustainably, by building a
						creative and diverse global team and by making a positive impact in
						communities where we live and work. Based in Beaverton, Oregon,
						NIKE, Inc. includes the Nike, Converse, and Jordan brands.
					</p>
				</div>
			</div>
			<div className="innovation">
				<div className="innovation-board">
					<img src={runman} alt="#" />
				</div>
				<div>
					<h3>INNOVATION</h3>
					<p>WE DARE TO DESIGN THE FUTURE OF SPORT</p>
				</div>
			</div>
			<div className="team">
				<div>
					<h3>SPORT TEAM</h3>
					<p>A TEAM THAT'S IMPROWERED, DIVERSE & INCLUSIVE</p>
				</div>
				<div className="team-board">
					<img src={team} alt="#" />
				</div>
			</div>

			<div className="social">
				<div className="social-board">
					<img src={community} alt="#" />
				</div>
				<div>
					<h3>SOCIAL & COMMUNITY</h3>
					<p>THE WORLD IS OUR COMMUNITY</p>
				</div>
			</div>

			<div className="business">
				<div>
					<h3>SUSTAINABLE BUSINESS</h3>
					<p>PROTECTING THE FUTURE OF SPORT</p>
				</div>
				<div className="business-board">
					<img src={fact} alt="#" />
				</div>
			</div>
		</container>
	);
};

export default AboutUs;

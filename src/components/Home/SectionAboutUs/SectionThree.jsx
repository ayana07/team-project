import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./SectionThree.css";

const SectionThree = () => {
	return (
		<div style={{ padding: "50px", height: "auto", marginTop: "50px" }}>
			<Container fixed>
				<h3 className="about-title">ABOUT US</h3>
				<div id="grid-container" style={{ marginTop: "15px" }}>
					<div className="item1"></div>
					<div className="item2"></div>
					<div className="item3"></div>
					<div className="item4"></div>
				</div>
				<p className="about-subtitle">
					Nike, originally known as Blue Ribbon Sports (BRS), was founded by
					University of Oregon track athlete Philip Knight and his coach Bill
					Bowerman in January 1964. The company initially operated as a
					distributor for Japanese shoe maker Onitsuka Tiger (now ASICS), making
					most sales at track meets out of Knight’s automobile. According to
					Otis Davis, a student athlete whom Bowerman coached at the University
					of Oregon, who later went on to win two gold medals at the 1960 Summer
					Olympics, Bowerman made the first pair of Nike shoes for him,
					contradicting a claim that they were made for Phil Knight. Says Davis,
					“I told Tom Brokaw that I was the first. I don’t care what all the
					billionaires say. Bill Bowerman made the first pair of shoes for me.
					People don’t believe me. In fact, I didn’t like the way they felt on
					my feet. There was no support and they were too tight. But I saw
					Bowerman make them from the waffle iron, and they were mine.” In 1964,
					in its first year in business, BRS sold 1,300 pairs of Japanese
					running shoes grossing $8,000. By 1965 the fledgling company had
					acquired a full-time employee, and sales had reached $20,000. In 1966,
					BRS opened its first retail store, located at 3107 Pico Boulevard
					inSanta Monica, California next to a beauty salon, so its employees no
					longer needed to sell inventory from the back of their cars. In 1967,
					due to rapidly increasing sales, BRS expanded retail and distribution
					operations on the East Coast, in Wellesley, Massachusetts.
				</p>
				<Link to="/aboutus">
					<div className="content-item-icon">
						<span>Learn More</span>
						<ArrowRightAltIcon sx={{ color: "#4cd137" }} />
					</div>
				</Link>
			</Container>
		</div>
	);
};

export default SectionThree;

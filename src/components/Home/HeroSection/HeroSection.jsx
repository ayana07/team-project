import { Container } from "@mui/material";
import React from "react";
import "./HeroSection.css";
import hero from "../../assets/images/heroImage.png";

const HeroSection = () => {
	return (
		<>
			<div className="hero-section-bg">
				<Container fixed>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexWrap: "wrap",
						}}
					>
						<div className="hero-img">
							<img src={hero} alt="" />
						</div>
						<h1 className="hero-section-bg-title">
							NIKE <br /> JUST <br /> DO IT
						</h1>
					</div>
				</Container>
			</div>
		</>
	);
};

export default HeroSection;

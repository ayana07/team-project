import { Container } from "@mui/material";
import React from "react";
import Shoes from "../../assets/image1.png";
import "./HeroSection.css";

const HeroSection = () => {
	return (
		<>
			<div className="hero-section-bg">
				<Container fixed sx={{ display: "flex" }}>
					{/* <img className="img" src={Shoes} alt="" /> */}
					<h1 className="hero-section-bg-title">NIKE</h1>
				</Container>
			</div>
		</>
	);
};

export default HeroSection;

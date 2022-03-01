import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import SectionThree from "../components/Home/SectionAboutUs/SectionThree";
import SectionTwo from "../components/Home/SectionPopularProd/SectionTwo";

const HomePage = () => {
	return (
		<div style={{ backgroundColor: "#000" }}>
			<HeroSection />
			<SectionTwo />
			<SectionThree />
		</div>
	);
};

export default HomePage;

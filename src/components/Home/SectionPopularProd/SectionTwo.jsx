import { Container } from "@mui/material";
import React from "react";
import "./SectionTwo.css";
import air from "../../assets/images/popular1.png";
import dunk from "../../assets/images/popular2.png";
import blazer from "../../assets/images/popular3.png";
import zoom from "../../assets/images/popular4.png";

const SectionTwo = () => {
	return (
		<div className="popular-product">
			<Container fixed>
				<h3 className="popular">Popular product</h3>
				<div id="grid-cont" style={{ marginTop: "15px" }}>
					<div className="grid1">
						<img style={{ width: "100%" }} src={air} alt="" />
						<p>Air Force</p>
					</div>
					<div className="grid2">
						<img style={{ width: "100%" }} src={dunk} alt="" />
						<p>Nike Dunk</p>
					</div>
					<div className="grid3">
						<img style={{ width: "100%" }} src={blazer} alt="" />
						<p>Nike Blazer</p>
					</div>
					<div className="grid4">
						<img style={{ width: "100%" }} src={zoom} alt="" />
						<p>Air Zoom</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default SectionTwo;

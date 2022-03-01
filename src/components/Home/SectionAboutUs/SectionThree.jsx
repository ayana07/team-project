import React from "react";
import { Container, Grid } from "@mui/material";

import "./SectionThree.css";
// import air from "../../assets/airjor.jpg";

const SectionThree = () => {
	return (
		<div style={{ padding: "50px", height: "100vh" }}>
			<Container>
				<Grid container spacing={4}>
					<Grid
						item
						xs={8}
						sx={{ backgroundColor: "#fff", width: "250px", height: "250px" }}
					></Grid>
					<Grid
						item
						xs={4}
						sx={{ backgroundColor: "red", width: "250px", height: "250px" }}
					></Grid>
					<Grid
						item
						xs={4}
						sx={{ backgroundColor: "green", width: "250px", height: "250px" }}
					></Grid>
					<Grid
						item
						xs={8}
						sx={{ backgroundColor: "yellow", width: "250px", height: "250px" }}
					></Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default SectionThree;

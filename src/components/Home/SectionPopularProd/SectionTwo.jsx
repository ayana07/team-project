import { Container, Grid } from "@mui/material";
import React from "react";
import "./SectionTwo.css";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import nikeluis from "../../assets/nike&lv.jpg";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

const SectionTwo = () => {
	return (
		<div className="popular-product">
			<Container fixed>
				<Grid container spacing={2}>
					<h3 className="popular-title">Popular Product</h3>
					<div style={{ display: "flex", marginTop: "15px" }}>
						<Card sx={{ minWidth: 200, mx: 7 }}>
							<CardContent>
								<img className="nice-img" src={nikeluis} alt="" />
							</CardContent>
						</Card>
						<Card sx={{ minWidth: 200, mx: 7 }}>
							<CardContent>
								<img className="nice-img" src={nikeluis} alt="" />
							</CardContent>
						</Card>
						<Card sx={{ minWidth: 200, mx: 7 }}>
							<CardContent>
								<img className="nice-img" src={nikeluis} alt="" />
							</CardContent>
						</Card>
					</div>
				</Grid>
			</Container>
		</div>
	);
};

export default SectionTwo;

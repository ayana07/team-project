import { Container } from "@mui/material";
import React from "react";
import "./Footer.css";
import logo from "../assets/footer-logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
	return (
		<div style={{ backgroundColor: "#000", padding: "20px" }}>
			<Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
				<img src={logo} alt="" />
				<ul className="footer-list">
					<h6>Our par</h6>
					<li>Air</li>
					<li>Force</li>
					<li>LV</li>
				</ul>
				<ul className="footer-list">
					<h6>Our par</h6>
					<li>Air</li>
					<li>Force</li>
					<li>LV</li>
				</ul>
				<ul className="footer-list">
					<h6>Our par</h6>
					<li>Air</li>
					<li>Force</li>
					<li>LV</li>
				</ul>
				<ul className="footer-list">
					<InstagramIcon sx={{ color: "#4cd137" }} />
					<YouTubeIcon sx={{ color: "#4cd137" }} />
					<TwitterIcon sx={{ color: "#4cd137" }} />
				</ul>
			</Container>
		</div>
	);
};

export default Footer;

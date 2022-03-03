import { Container } from "@mui/material";
import React from "react";
import "./Footer.css";
import logo from "../assets/logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
	return (
		<div
			className="footer"
			style={{ backgroundColor: "#000", padding: "40px" }}
		>
			<Container
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					padding: "20px",
				}}
			>
				<div className="footer-logo">
					<img src={logo} alt="" />
				</div>
				<div>
					<a className="footer-menu" href="/home">
						<li>HOME</li>
					</a>
					<a className="footer-menu" href="/aboutus">
						<li>ABOUT US</li>
					</a>
					<a className="footer-menu" href="/contacts">
						<li>CONTACTS</li>
					</a>
					<a className="footer-menu" href="/products">
						<li>PRODUCTS</li>
					</a>
				</div>

				<div>
					<ul className="footer-list">
						<a
							className="footer-menu"
							target="_blank"
							href="https://louisvuitton.com/"
						>
							<li>LOUIS VUITTON</li>
						</a>
						<a
							className="footer-menu"
							target="_blank"
							href="https://www.gucci.com/"
						>
							<li>GUCCI</li>
						</a>
						<a
							className="footer-menu"
							target="_blank"
							href="https://www.amazon.com/"
						>
							<li>AMAZON</li>
						</a>
						<a
							className="footer-menu"
							target="_blank"
							href="https://www.hermes-ltd.com/"
						>
							<li>HERMES</li>
						</a>
					</ul>
				</div>
				<div>
					<ul className="footer-menu">
						<a
							className="footer-list"
							target="_blank"
							href="https://www.nike.com/new-york-city"
						>
							<li>NIKE.NYC</li>
							<li>650.FIFTH.AVENUE</li>
							<li>UNITED STATES</li>
							<li>2022.NIKE</li>
						</a>
					</ul>
				</div>
				<div className="footer-icons">
					<ul className="footer-menu" style={{ display: "flex" }}>
						<a
							target="_blank"
							href="https://instagram.com/nike?utm_medium=copy_link"
						>
							<li style={{ margin: "10px" }}>
								<InstagramIcon sx={{ color: "#4cd137" }} />
							</li>
						</a>
						<a href="https://youtube.com/c/nike">
							<li style={{ margin: "10px" }}>
								<YouTubeIcon sx={{ color: "#4cd137" }} />
							</li>
						</a>
						<a target="_blank" href="https://www.facebook.com/nike/">
							<li style={{ margin: "10px" }}>
								<FacebookIcon sx={{ color: "#4cd137" }} />
							</li>
						</a>
					</ul>
				</div>
			</Container>
		</div>
	);
};

export default Footer;

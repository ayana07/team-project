import React from "react";
import { Carousel } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
	return (
		<>
			<div className="header-about">
				<Carousel variant="dark">
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2ZLd7S-nJ_SliWMk3ec8PahCmZ0IDRvo3A&usqp=CAU"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://s3.amazonaws.com/nikeinc/assets/95520/SU20_Space_Hippie_SH01_Primary_Insitu_native_1000.jpg?1589307084"
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.highsnobiety.com/static-assets/thumbor/UDnJyIe4Hej2pVsRZQdAh5YGQPE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/08/13172745/Nike-Running-Rawdacious-Air-Zoom-Alphafly-NEXTpercent-detail-1_103355.jpg"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h5>Third slide label</h5>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<div className="container-about">
					<h5>Our mission:</h5>
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
					<img
						src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/2842b01b-42f2-4fc6-89fe-81c7b599fff7/%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-nike-run-club-nrc.jpg"
						alt="#"
					/>
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
					<img
						src="https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2020/09/nike-aeon-mall-hai-phong-le-chan.jpg"
						alt="#"
					/>
				</div>
			</div>

			<div className="social">
				<div className="social-board">
					<img
						src="https://s3.amazonaws.com/nikeinc/assets/72819/mo-farah-marathon-kids-01_native_1000.jpeg?1502069273"
						alt="#"
					/>
				</div>
				<div>
					<h3>SOCIAL & COMMUNITY</h3>
					<p>THE WORLD IS OUR COMMUNITY</p>
				</div>
			</div>

			<div className="team">
				<div>
					<h3>SUSTAINABLE BUSINESS</h3>
					<p>PROTECTING THE FUTURE OF SPORT</p>
				</div>
				<div className="business-board">
					<img
						src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/9bfc58b6-293a-4329-aea8-78f7113f5953/nike-flyleather.jpg"
						alt="#"
					/>
				</div>
			</div>
		</>
	);
};

export default AboutUs;

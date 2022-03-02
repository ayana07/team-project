import {
	Button,
	Card,
	CardContent,
	Grid,
	Link,
	TextField,
	Typography,
	ImageListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Contacts.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const style = {
	maxWidth: "800px",
	marginTop: "100px",
	background: "rgba(255, 255, 255, 0.1)",
	border: "3px solid #616161",
};

const styleInput = {
	border: "3px solid #616161",
};

const Contacts = () => {
	const [open, setOpen] = useState(false);

	return (
		<Grid maxWidth="lg" sx={{ margin: "0 auto" }}>
			{open ? (
				<center>
					<Card style={style}>
						<CardContent>
							<form>
								<Grid container spacing={1}>
									<Grid xs={12} sm={6} item>
										<TextField
											label="First Name"
											placeholder="Enter first name"
											variant="outlined"
											fullWidth
											color="warning"
										/>
									</Grid>

									<Grid xs={12} sm={6} item>
										<TextField
											label="Last Name"
											placeholder="Enter  last name"
											variant="outlined"
											fullWidth
											required
											color="warning"
										/>
									</Grid>

									<Grid xs={12} item>
										<TextField
											type="email"
											label="Email"
											placeholder="Enter  email"
											variant="outlined"
											fullWidth
											required
											color="warning"
										/>
									</Grid>

									<Grid xs={12} item>
										<TextField
											type="number"
											label="Phone"
											placeholder="Enter phone number"
											variant="outlined"
											fullWidth
											required
											color="warning"
										/>
									</Grid>

									<Grid xs={12} item>
										<TextField
											label="Message"
											placeholder="Type your message"
											variant="outlined"
											fullWidth
											required
											multiline
											rows={4}
											color="warning"
										/>
									</Grid>

									<Grid xs={12} item>
										<Button
											variant="contained"
											color="primary"
											fullWidth
											color="warning"
											onClick={() => setOpen(false)}
										>
											Submit
										</Button>
									</Grid>
								</Grid>
								<Button
									sx={{ marginTop: "5px", background: "grey" }}
									variant="contained"
									fullWidth
									onClick={() => setOpen(false)}
								>
									Close
								</Button>
							</form>
						</CardContent>
					</Card>
				</center>
			) : (
				<center>
					<Grid container maxWidth="lg">
						<Grid item lg={6} sx={{ marginTop: "10vh" }}>
							<Grid item lg={12}>
								{" "}
								<Typography
									sx={{ fontSize: "10vh" }}
									className="get_typography"
								>
									Get in Touch
								</Typography>
							</Grid>

							<Grid item lg={12} sx={{ marginTop: "7vh" }}>
								<Typography
									sx={{ fontSize: 20 }}
									color="text.secondary"
									gutterBottom
									maxWidth="sm"
								>
									Our trip designers are at your disposal for building your
									dream! Feel free to contact us.
								</Typography>
							</Grid>

							<Grid item lg={12}>
								{" "}
								<Typography
									data-aos="fade-up-left"
									sx={{ fontSize: 20 }}
									color="text.secondary"
									gutterBottom
									maxWidth="sm"
								>
									Nomad's Land - ecotourism development company Postal address
									Nezhinsky lane 27 Bishkek Kyrgyzstan
								</Typography>
							</Grid>

							<Grid lg={12} sx={{ marginTop: "10vh" }}>
								<Link
									href="https://google.com"
									sx={{
										display: "flex",
										alignItems: "center",
										fontWeight: 900,
										fontSize: "22px",
										textDecoration: "none",
									}}
									color="text.secondary"
									gutterBottom
								>
									<LocalPhoneOutlinedIcon
										className="grid-icon"
										color="warning"
										sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
									/>
									+996 771 53 96 10
								</Link>

								<Link
									href="https://google.com"
									sx={{
										display: "flex",
										alignItems: "center",
										fontWeight: 900,
										fontSize: "22px",
										textDecoration: "none",
									}}
									color="text.secondary"
									gutterBottom
								>
									<InstagramIcon
										color="warning"
										sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
										className="grid-icon"
									/>
									Kadyrov___02
								</Link>

								<Link
									href="https://google.com"
									sx={{
										display: "flex",
										alignItems: "center",
										fontWeight: 900,
										fontSize: "22px",
										textDecoration: "none",
									}}
									color="text.secondary"
									gutterBottom
								>
									<GitHubIcon
										className="grid-icon"
										color="warning"
										sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
									/>
									ltemirlan2003@gmail.com
								</Link>

								<Link
									href="https://google.com"
									sx={{
										display: "flex",
										alignItems: "center",
										fontWeight: 900,
										fontSize: "22px",
										textDecoration: "none",
									}}
									color="text.secondary"
									gutterBottom
								>
									<FacebookOutlinedIcon
										className="grid-icon"
										color="warning"
										sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
									/>
									Tima__23
								</Link>
							</Grid>
						</Grid>

						<Grid item lg={6}>
							{itemData.map((item) => (
								<ImageListItem>
									<img
										src={`${item.img}`}
										style={{ maxWidth: "700px", marginTop: "6vh" }}
									/>
								</ImageListItem>
							))}
						</Grid>
					</Grid>

					<Button
						className="grid-button"
						variant="contained"
						color="warning"
						onClick={() => setOpen(true)}
						sx={{ marginTop: "-1vh", marginBottom: "6vh" }}
					>
						Get in Touch with us
					</Button>
				</center>
			)}
		</Grid>
	);
};

const itemData = [
	{
		img: "https://www.pngall.com/wp-content/uploads/3/Art-PNG-Image.png",
	},
];

export default Contacts;

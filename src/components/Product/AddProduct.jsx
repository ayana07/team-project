import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useProducts } from "../../contexts/ProductContext";
import { useProducts } from "../../contexts/PoductContext";

const AddProduct = () => {
	const { addProduct } = useProducts();

	const navigate = useNavigate();

	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: 0,
		picture: "",
		type: "",
	});

	const handleInp = (e) => {
		if (e.target.name === "price") {
			let obj = {
				...product,
				[e.target.name]: Number(e.target.value),
			};

			setProduct(obj);
		} else {
			let obj = {
				...product,
				[e.target.name]: e.target.value,
			};

			setProduct(obj);
		}
	};

	return (
		<Box sx={{ bgcolor: "#", height: "100vh", padding: "20vh auto" }}>
			<center variant="h6" gutterBottom>
				<h2 sx={{ fontFamily: "Roboto" }}>WELCOME, ADMIN!</h2>
				<h3 sx={{ color: "#52b202" }}>Let's add new collection!</h3>
			</center>

			<Grid
				item
				xs={12}
				md={6}
				sx={{
					margin: "10vh auto",
					boxShadow: 3,
					borderRadius: 3,
					bgcolor: "#65C18C",
				}}
			>
				<form>
					<TextField
						fullWidth
						id="outlined-basic"
						label="NAME"
						variant="outlined"
						name="name"
						onChange={handleInp}
					/>
					<TextField
						fullWidth
						id="outlined-basic"
						label="DESCRIPTION"
						variant="outlined"
						name="description"
						onChange={handleInp}
					/>{" "}
					<TextField
						fullWidth
						id="outlined-basic"
						label="PRICE"
						variant="outlined"
						name="price"
						onChange={handleInp}
					/>{" "}
					<TextField
						fullWidth
						id="outlined-basic"
						label="PICTURE"
						variant="outlined"
						name="picture"
						onChange={handleInp}
					/>
					<TextField
						fullWidth
						id="outlined-basic"
						label="TYPE"
						variant="outlined"
						name="type"
						onChange={handleInp}
					/>
					<Stack direction="row" spacing={2} sx={{ bgcolor: "#880e4f" }}>
						<Button
							id="button"
							sx={{
								bgcolor: "#357C3C",
								borderColor: "error.main",
								fontFamily: "Roboto",
							}}
							variant="outlined"
							color="secondary"
							size="large"
							fullWidth
							onClick={() => {
								addProduct(product);

								navigate("/products");
							}}
						>
							CREATE PRODUCT
						</Button>
					</Stack>
				</form>
			</Grid>
		</Box>
	);
};

export default AddProduct;

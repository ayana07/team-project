import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/PoductContext";
import MediaCard from "../Product/ProductCard";
import SideBar from "../SideBar/SideBar";
import { useParams } from "react-router-dom";

const ProductList = ({ products }) => {
	const { getProducts } = useProducts();

	const [searchParams, setSearchParams] = useSearchParams();

	const [search, setSearch] = useState(
		searchParams.get("q") ? searchParams.get("q") : ""
	);

	useEffect(() => {
		getProducts();
	}, [searchParams]);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, []);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, [search]);

	useEffect(() => {
		setSearchParams({
			q: search,
		});
	}, [search]);

	return (
		<div style={{ display: "flex", backgroundColor: "#000" }}>
			<div className="side-bar">
				<SideBar />
			</div>
			<TextField
				className="text-field"
				color="warning"
				label="Search"
				variant="standard"
				sx={{ margin: "2vw", width: "10vw" }}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className="blog-left">
				<Grid container spacing={6}>
					{products ? (
						products.map((item) => (
							<Grid item>
								{/* <ProductCard item={item} key={item.id} /> */}
								<MediaCard item={item} key={item.id} />
							</Grid>
						))
					) : (
						<>
							<h2>..Loading</h2>
						</>
					)}
				</Grid>
			</div>
		</div>
	);
};

export default ProductList;

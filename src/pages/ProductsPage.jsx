import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ProductList from "../components/Product/ProductList";
import { useProducts } from "../contexts/PoductContext";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import "./ProductsPage.css";

const ProductsPage = () => {
	const { products, getProducts } = useProducts();
	const [page, setPage] = useState(0);

	const productPerPage = 6;
	const location = useLocation();

	const pageCount = Math.ceil(products.length / productPerPage);

	const pageVisited = page * productPerPage;

	const paginateProducts = products.slice(
		pageVisited,
		pageVisited + productPerPage
	);
	const changePage = ({ selected }) => {
		setPage(selected);
	};

	useEffect(() => {
		getProducts();
	}, [location.search]);
	return (
		<div style={{ backgroundColor: "black" }}>
			<ProductList products={paginateProducts} />
			<ReactPaginate
				previousLabel={<ArrowCircleLeftSharpIcon sx={{ color: "white" }} />}
				nextLabel={<ArrowCircleRightSharpIcon sx={{ color: "white" }} />}
				onPageChange={changePage}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
				containerClassName="pagination"
				previousLinkClassName="previousBtn"
				nextLinkClassName="nextBtn"
				activeClassName="activeBtn"
				disableClassName="disabled"
			/>
		</div>
	);
};

export default ProductsPage;

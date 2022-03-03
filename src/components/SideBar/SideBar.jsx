import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
// import { useProducts } from "../../contexts/ProductContext";
import { useProducts } from "../../contexts/PoductContext";
import "./SideBar.css";

const SideBar = () => {
	const { fetchByParams } = useProducts();
	return (
		<RadioGroup
			className="side"
			onChange={(e) => fetchByParams("type", e.target.value)}
		>
			<h5 className="choose-type">TYPE</h5>
			<FormControlLabel value="for men" control={<Radio />} label="FOR MEN" />
			<FormControlLabel
				value="for women"
				control={<Radio />}
				label="FOR WOMEN"
			/>
			<FormControlLabel value="for kids" control={<Radio />} label="FOR KIDS" />

			<FormControlLabel value="all" control={<Radio />} label="ALL" />
		</RadioGroup>
	);
};

export default SideBar;

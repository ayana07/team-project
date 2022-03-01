import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./styles/ProductCard.css";

import { Delete, Edit } from "@mui/icons-material";
import { ADMIN } from "../../helpers/consts";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function MediaCard({ item }) {
	const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
	const navigate = useNavigate();

	const {
		user: { email },
	} = useAuth();

	return (
		<>
			<Card sx={{ borderRadius: 3 }}>
				<div className="cardProduct">
					<CardMedia
						sx={{ borderRadius: 2 }}
						component="img"
						height="300"
						image={item.picture}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{item.name}
						</Typography>
						<Typography variant="body2" color="text.primary">
							{item.description}
						</Typography>
					</CardContent>
				</div>
				<CardActions>
					{email === ADMIN ? (
						<>
							{" "}
							<Button size="small" onClick={() => deleteProduct(item.id)}>
								DELETE
							</Button>
							<Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
								EDIT
							</Button>
						</>
					) : (
						<IconButton onClick={() => addProductToCart(item)}>
							<ShoppingCartIcon
								color={checkProductInCart(item.id) ? "secondary" : ""}
							/>
						</IconButton>
					)}

					<span onClick={() => navigate(`/products/${item.id}`)}>more...</span>
				</CardActions>
			</Card>
		</>
	);
}

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import AuthPage from "./pages/AuthPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import ContactUsPage from "./pages/ContactUsPage";
import AdminPage from "./pages/AdminPage";
import EditProductPage from "./pages/EditProductPage";
import Testmonial from "./pages/Testmonial";

const MainRoutes = () => {
	const PUBLIC_ROUTES = [
		{
			link: "/",
			element: <HomePage />,
			id: 1,
		},
		{
			link: "/aboutus",
			element: <AboutUsPage />,
			id: 2,
		},
		{
			link: "/auth",
			element: <AuthPage />,
			id: 3,
		},
		{
			link: "/products",
			element: <ProductsPage />,
			id: 4,
		},
		{
			link: "/products/:id",
			element: <ProductDetailsPage />,
			id: 5,
		},
		{
			link: "/cart",
			element: <CartPage />,
			id: 6,
		},
		{
			link: "/contacts",
			element: <ContactUsPage />,
			id: 7,
		},
		{
			link: "/testmonial",
			element: <Testmonial />,
			id: 8,
		},
	];

	const PRIVATE_ROUTES = [
		{
			link: "/admin",
			element: <AdminPage />,
			id: 1,
		},
		{
			link: "/edit/:id",
			element: <EditProductPage />,
			id: 2,
		},
	];

	return (
		<>
			<Routes>
				{PUBLIC_ROUTES.map((item) => (
					<Route path={item.link} element={item.element} />
				))}

				{/* {user
					? PRIVATE_ROUTES.map((item) => (
							<Route
								path={item.link}
								element={
									user.email === ADMIN ? (
										item.element
									) : (
										<Navigate replace to="*" />
									)
								}
							/>
					  ))
					: null} */}
			</Routes>
		</>
	);
};

export default MainRoutes;

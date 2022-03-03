import { Alert } from "@mui/material";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useForm from "../../useForm";
import "./CreditCart.css";

const CreditCart = () => {
	const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

	return (
		<>
			<div id="PaymentForm">
				<Cards
					cvc={values.cardSecurityCode}
					expiry={values.cardExpiration}
					focused={values.focus}
					name={values.cardName}
					number={values.cardNumber}
				/>
				<form onSubmit={handleSubmit} className="credit-form">
					<input
						placeholder="Your Name"
						onChange={handleChange}
						onFocus={handleFocus}
						isvalid={errors.cname}
						type="text"
						id="cardName"
						data-testid="cardName"
						name="cardName"
						value={values.cardName}
					/>
					<input
						type="number"
						placeholder="Card Number"
						onChange={handleChange}
						id="cardNumber"
						data-testid="cardNumber"
						name="cardNumber"
						value={values.cardNumber}
						onFocus={handleFocus}
						isvalid={errors.cnumber}
					/>
					<input
						// type="date"
						placeholder="Expire Date"
						onChange={handleChange}
						type="number"
						id="cardExpiration"
						data-testid="cardExpiration"
						name="cardExpiration"
						value={values.cardExpiration}
						onFocus={handleFocus}
						isvalid={errors.cexp}
					/>
					<input
						type="number"
						placeholder="CVC"
						onChange={handleChange}
						id="cardSecurityCode"
						data-testid="cardSecurityCode"
						name="cardSecurityCode"
						value={values.cardSecurityCode}
						onFocus={handleFocus}
						isvalid={errors.ccvv}
					/>
				</form>
				<div className="btn-credit">
					<button
						size={"block"}
						data-testid="validateButton"
						id="validateButton"
						type="submit"
					>
						{" "}
						Validate
					</button>
				</div>
			</div>
		</>
	);
};

export default CreditCart;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useAuth } from "../../contexts/AuthContexts";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function Login() {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignUp,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
	} = useAuth();

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							helperText={emailError}
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							helperText={passwordError}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>

						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>

						{hasAccount ? (
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								onClick={handleLogin}
							>
								Sign In
							</Button>
						) : (
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								onClick={handleSignUp}
							>
								Sign Up
							</Button>
						)}

						<Grid container>
							<Grid item>
								{hasAccount ? (
									<Link
										href="#"
										variant="body2"
										onClick={() => setHasAccount(!hasAccount)}
									>
										{"Don't have an account? Sign Up"}
									</Link>
								) : (
									<Link
										href="#"
										variant="body2"
										onClick={() => setHasAccount(!hasAccount)}
									>
										{"Have an account? Sign In"}
									</Link>
								)}
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}

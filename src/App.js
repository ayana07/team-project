import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContexts";
import NavBar from "./components/NavBar/NavBar";
import ProductContextProvider from "./contexts/PoductContext";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<AuthContextProvider>
					<ProductContextProvider>
						<NavBar />
						<MainRoutes />
						<Footer />
					</ProductContextProvider>
				</AuthContextProvider>
			</BrowserRouter>
		</>
	);
}

export default App;

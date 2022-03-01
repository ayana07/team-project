import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<MainRoutes />
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;

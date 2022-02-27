import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<MainRoutes />
			</BrowserRouter>
		</>
	);
}

export default App;

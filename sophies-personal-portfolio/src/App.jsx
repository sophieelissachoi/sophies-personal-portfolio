import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path="/"
					element={<MainPage />}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;

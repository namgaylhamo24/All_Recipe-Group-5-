import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";



function App() {
	return (
		<div className='flex'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);

}

export default App;

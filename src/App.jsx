import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Signup from "./pages/Signup";



function App() {
	return (
		<div className='flex'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);

}

export default App;

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import CompletePost from "./routes/complete-post/complete-post.component";


function App() {
  return (
	<Routes>
		<Route path='/' element={ <Navigation /> } >
			<Route index element={ <Home />} />
			<Route path='comments' element={ <CompletePost /> } />
		</Route>
	</Routes>
  );
}

export default App;

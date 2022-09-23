import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import CompletePost from "./routes/complete-post/complete-post.component";
import EditPost from "./routes/edit-post/edit-post.component";
import FrontPageNav from "./routes/front-page-nav/front-page-nav.component";
import FrontPageHome from "./routes/front-page-home/front-page-home.component";


function App() {
  return (
	<Routes>
		<Route path="/" element={ <FrontPageNav />} >
			<Route index element={ <FrontPageHome /> } />
			<Route path='/users' element={ <Navigation /> } >
				<Route index element={ <Home />} />
				<Route path='/users/comments' element={ <CompletePost /> } />
				<Route path= '/users/edit/:postId' element={ <EditPost /> } />			
			</Route>
		</Route>
			
	</Routes>
  );
}

export default App;

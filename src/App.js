import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import CompletePost from "./routes/complete-post/complete-post.component";
import EditPost from "./routes/edit-post/edit-post.component";
import FrontPageNav from "./routes/front-page-nav/front-page-nav.component";
import FrontPageHome from "./routes/front-page-home/front-page-home.component";
import FrontPageSignup from "./routes/front-page-signup/front-page-signup.component";
import FrontPageLogin from "./routes/front-page-login/front-page-login.component";


function App() {
  return (
	<Routes>
		<Route path="/" element={ <FrontPageNav />} >
			<Route index element={ <FrontPageHome /> } />
			<Route path="/signup" element={ <FrontPageSignup />} />
			<Route path='/login' element={ <FrontPageLogin />} />
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

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Feeds from "./routes/feeds/feeds.component";
import CompletePost from "./routes/complete-post/complete-post.component";
import EditPost from "./routes/edit-post/edit-post.component";
import FrontPageNav from "./routes/front-page-nav/front-page-nav.component";
import FrontPageHome from "./routes/front-page-home/front-page-home.component";
import FrontPageSignup from "./routes/front-page-signup/front-page-signup.component";
import FrontPageLogin from "./routes/front-page-login/front-page-login.component";
import Profile from "./routes/profile/profile.component";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<FrontPageNav />} >
					<Route index element={<FrontPageHome />} />
					<Route path="/signup" element={<FrontPageSignup />} />
					<Route path='/login' element={<FrontPageLogin />} />					
				</Route>
			</Routes>
			<Routes>
				<Route path='/users/' element={<Navigation />} >
					<Route index path='/users/feeds' element={<Feeds />} />
					<Route path="/users/profile" element={<Profile />} />
					<Route path='/users/comments' element={<CompletePost />} />
					<Route path='/users/edit/:postId' element={<EditPost />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;

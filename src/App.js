
import { Posts } from "./posts/posts";
import { SignIn } from "./signin/signIn";
import { SignUp } from "./signup/signup";
import { TopBar } from "./topbar/topBar";
import { Write } from "./write/write";
import{
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Post } from "./post/post";


function App() {
  const user=false;
  return (
    <Router> 
    <TopBar />
    <Routes>
      <Route exact path="/" element={<Posts />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/write" element={<Write />} />
    </Routes>
    </Router>
  );
}

export default App;

import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import Blogs from "./pages/Blogs"
import Navbar from "./components/Navbar"
import CreatePost from "./pages/CreatePost"

function App() {

  return (
    <>


      <Navbar />

      <Routes>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/single-post/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create-post" element={<CreatePost />} />

      </Routes>
    </>
  )
}

export default App

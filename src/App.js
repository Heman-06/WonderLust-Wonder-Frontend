import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import IsAuth from "./components/IsAuth";
import Trending from './pages/Trending';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Detail from './components/Detail';
import CategoryPost from './components/CategoryPost';
import Home from './pages/Home';
import UserProfile from './components/UserProfile';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/">
      <Route path="/auth" element={<Login />} />
      <Route path="*" element={<h1>Page not found</h1>} />
      <Route element={<IsAuth />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trendings" element={<Trending />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/user/:userId" element={<UserProfile/>} />
        <Route path="/category/:categoryName" element={<CategoryPost />} />
      </Route>
    </Route>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;

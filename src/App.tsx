import { Route, Routes } from "react-router-dom";
import Website from "./pages/website/Website";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/website/About";
import Contact from "./pages/website/Contact";
import Information from "./pages/website/Information";
import ErrorPage from "./pages/ErrorPage";
import Feed from "./pages/app/Feed";
import UserLayout from "./pages/app/Layout";
import AdminLayout from "./pages/admin/Layout";
import AdminFeed from "./pages/admin/AdminFeed";
import Profile from "./pages/Profile";
import SearchPage from "./pages/app/SearchPage";
import SavePage from "./pages/app/SavePage";
// import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/hero" element={<Hero />} />
        <Route index element={<Website />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />

        {/* user routes  */}
        <Route
          path="/app"
          element={
            // <ProtectedRoute>
            <UserLayout />
            // </ProtectedRoute>
          }
        >
          <Route path="feed" element={<Feed />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="market" element={<Feed />} />
          <Route path="hand-made-guide" element={<Feed />} />
          <Route path="save" element={<SavePage />} />
          <Route path="setting" element={<Profile />} />
        </Route>

        {/* admin routes */}
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <AdminLayout />
            //</ProtectedRoute>
          }
        >
          <Route path="blog" element={<AdminFeed />} />
          <Route path="user" element={<AdminFeed />} />
          <Route path="market" element={<AdminFeed />} />
          <Route path="order" element={<AdminFeed />} />
          <Route path="feedback" element={<AdminFeed />} />
          <Route path="setting" element={<Profile />} />
          <Route path="hand-made-guide" element={<AdminFeed />} />
        </Route>

        {/* error route  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

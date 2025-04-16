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
import MarketPage from "./pages/app/MarketPage";
import HandmadePage from "./pages/app/HandmadePage";
import ProtectedRoute from "./utils/ProtectedRoute";
import CashReceiptPdf from "./components/pdf/CashReceiptPdf";
import OrderList from "./pages/OrderList";
import UserList from "./pages/admin/UserList";
import FeedbackList from "./pages/admin/FeedbackList";
import HandMade from "./pages/admin/HandMade";
import CreateNewPost from "./pages/admin/CreateNewPost";
import PostDetails from "./pages/admin/PostDetails";
import AddNewGuide from "./pages/admin/AddNewGuide";
import GuideDetails from "./pages/admin/GuideDetails";

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
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route path="feed" element={<Feed />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="market" element={<MarketPage />} />
          <Route path="order" element={<OrderList />} />
          <Route path="hand-made-guide" element={<HandmadePage />} />
          <Route path="save" element={<SavePage />} />
          <Route path="setting" element={<Profile />} />
          <Route path="cash-receipt/:id" element={<CashReceiptPdf />} />
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
          <Route path="user" element={<UserList />} />
          <Route path="market" element={<MarketPage />} />
          <Route path="order" element={<OrderList />} />
          <Route path="feed" element={<AdminFeed />} />
          <Route path="feedback" element={<FeedbackList />} />
          <Route path="hand-made-guide" element={<HandMade />} />
          <Route path="setting" element={<Profile />} />
          <Route path="create-new-post" element={<CreateNewPost />} />
          <Route path="add-new-guide" element={<AddNewGuide />} />
          <Route path="guide/:id" element={<GuideDetails />} />
          <Route path="post/:id" element={<PostDetails />} />
        </Route>

        {/* error route  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

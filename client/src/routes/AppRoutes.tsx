import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Auth from '../pages/Auth';
import TourDetails from '../pages/TourDetails';
import BookingForm from '../pages/BookingForm';
import Wishlist from '../pages/Wishlist';
import Explore from '../pages/Explore';
import CountryTours from '../pages/CountryTours';

// Admin block pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import TourStats from '../pages/admin/TourStats';
import SupportTickets from '../pages/admin/SupportTickets';
import BookingStats from '../pages/admin/BookingStats';
import ReviewsModeration from '../pages/admin/ReviewsModeration';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/book" element={<BookingForm />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore/:country" element={<CountryTours />} />

      <Route path="/admin" element={<AdminDashboard />}>
        <Route path="tour-stats" element={<TourStats />} />
        <Route path="support-tickets" element={<SupportTickets />} />
        <Route path="booking-stats" element={<BookingStats />} />
        <Route path="reviews-moderation" element={<ReviewsModeration />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

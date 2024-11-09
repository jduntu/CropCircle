// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Overview from './pages/Farmer/Overview';
import Orders from './pages/Farmer/Orders';
import Products from './pages/Farmer/Products';
import FarmerLayout from './pages/Farmer/FarmerLayout';
import Feedback from './pages/Admin/Feedback';
import FlaggedItems from './pages/Admin/FlaggedItems';
import VerificationQueue from './pages/Admin/VerificationQueue';
import AdminLayout from './pages/Admin/AdminLayout';
import CustomerLayout from './pages/Customer/CustomerLayout';
import CartPage from './pages/Customer/CartPage';
import OrderTracking from './pages/Customer/OrderTracking';
import Homepage from './pages/Customer/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route
          path="/farmer/*"
          element={
            <FarmerLayout>
              <Routes>
                <Route path="overview" element={<Overview />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<Products />} />
              </Routes>
            </FarmerLayout>
          }
        />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="feedback" element={<Feedback />} />
                <Route path="flagged-items" element={<FlaggedItems />} />
                <Route path="verification-queue" element={<VerificationQueue />} />
              </Routes>
            </AdminLayout>
          }
        />
        <Route
          path="/customer/*"
          element={
            <CustomerLayout>
              <Routes>
                <Route path="homepage" element={<Homepage />} />
                <Route path="cartitems" element={<CartPage />} />
                <Route path="orders" element={<OrderTracking />} />
              </Routes>
            </CustomerLayout>
          }
        />


        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

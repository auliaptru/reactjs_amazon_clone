import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/Home/Home';
import './app.scss';
import Layout from './Layout';
import TodaysDeals from './pages/Navbar/TodaysDeals/TodaysDeals';
import Registry from './pages/Navbar/Registry/Registry';
import CustomerService from './pages/Navbar/CustomerService/CustomerService';
import GiftCards from './pages/Navbar/GiftCards/GiftCards';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './components/navbar/SignIn';
import Coupons from './pages/Navbar/TodaysDeals/Coupons/Coupons';
import RenewedDeals from './pages/Navbar/TodaysDeals/RenewedDeals/RenewedDeals';
import DigitalDeals from './pages/Navbar/TodaysDeals/DigitalDeals/DigitalDeals';
import Warehouse from './pages/Navbar/TodaysDeals/Warehouse/Warehouse';

const App = () => {
    return (
        <div className='app'>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<SignUp />} />
                    <Route path='/login' element={<SignIn />} />
                    <Route path='/today-deals' element={<TodaysDeals />} />
                    <Route path='/today-deals/coupons' element={<Coupons />} />
                    <Route
                        path='/today-deals/renewed'
                        element={<RenewedDeals />}
                    />
                    <Route path='/today-deals/outlet' element={<Outlet />} />
                    <Route
                        path='/today-deals/digital'
                        element={<DigitalDeals />}
                    />
                    <Route
                        path='/today-deals/warehouse'
                        element={<Warehouse />}
                    />
                    <Route path='/registry' element={<Registry />} />
                    <Route path='/cs' element={<CustomerService />} />
                    <Route path='/gift-cards' element={<GiftCards />} />
                    <Route path='/sell' element={<GiftCards />} />
                </Routes>
            </Layout>
        </div>
    );
};

export default App;

import Footer from './footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './navbar';

const MainLayout = ({ children }) => {

    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Navbar />
            <div>
                <div className='main-area'>
                    {children}
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
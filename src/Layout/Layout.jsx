
import Header from '../Components/Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
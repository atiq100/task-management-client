
import Footer from '../shared/Footer/Footer';
import { Nav } from '../shared/Nav/Nav';

const Layout = ({children}) => {
    return (
        <>
            <Nav></Nav>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
};

export default Layout;
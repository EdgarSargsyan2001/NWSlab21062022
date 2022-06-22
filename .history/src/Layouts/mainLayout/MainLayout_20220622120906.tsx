

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLayout.css";



export default function MainLayout(){

    return(
        <div >
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}
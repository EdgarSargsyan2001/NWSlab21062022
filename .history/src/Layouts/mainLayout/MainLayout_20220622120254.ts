

import { Outlet } from "react-router-dom";
import "./layouts.css";



export default function Layout(){


    
    return(

        <div className="layout-container">

            <Header />

            <div className="Outlet">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    )
}
 import React from "react";
import AuxComponent from "../../hoc/AuxComponent";

 const Layout = (props) => {
    return(
        <AuxComponent>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main>
                {props.children}
            </main>
        </AuxComponent>
    )
 }

 export default Layout;
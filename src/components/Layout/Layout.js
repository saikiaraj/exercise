import React from 'react';
import Auxa from '../../hoc/Auxa';
const Layout = ( props ) => (
    <Auxa>
        <div>Toolbar, sideDrawer, Backdrop</div>
        <main>{props.children}</main>
    </Auxa>
)
export default Layout;
import React from 'react';

import { Container, SidebarLink } from './styles';

function Sidebar(){
    return (
        <Container>
            <SidebarLink to="/">Início</SidebarLink>
            <SidebarLink to="/client">Add Cliente</SidebarLink>
            <SidebarLink to="/product">Add Produto</SidebarLink>
        </Container>
    );
};

export default Sidebar;
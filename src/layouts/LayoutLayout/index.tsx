import React from 'react';

import { Outlet } from 'react-router-dom';


import {
LayoutLayout,
Content, Body,
} from './styles';

const LayoutLayoutPage = () => {









return (
        <LayoutLayout>
<Body>
<Content>
<Outlet/>
</Content>
</Body>
</LayoutLayout>

    )

}

export default LayoutLayoutPage

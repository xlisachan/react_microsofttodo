import React from 'react';
import { CssBaseline, useMediaQuery} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Sidebar from './Side';
import Main from './Main';

const ResponsiveDrawer = () => {
    let inputEl = null;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [openDrawer, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        if (!matches) return
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const editClick = () => {
        if(inputEl) {
            inputEl.select();
        }
    }

    return (
        <div style={{display: 'flex'}}>
            <CssBaseline />

            <Sidebar
                onClose={ handleDrawerClose }
                onEditClick={ editClick }
            />

            <Main
                ref={input => inputEl = input}
                open={ openDrawer }
                onOpen={ handleDrawerOpen }
                onClose={ handleDrawerClose }
            />
        </div>
    );
};

export default ResponsiveDrawer;
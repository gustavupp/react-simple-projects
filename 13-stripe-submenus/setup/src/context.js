import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [menuLabelText, setMenuLabelText] = useState('');
    const [menuLabelCenter, setMenuLabelCenter] = useState('');
    const [page, setPage] = useState({});

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }
    const openSubmenu = (menuLabel, labelCenter) => {
        setPage(sublinks.find(link => link.page === menuLabel));
        setMenuLabelCenter(labelCenter);
        setMenuLabelText(menuLabel);
        setIsSubmenuOpen(true);
    }
     const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
     const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            openSidebar,
            closeSidebar,
            menuLabelCenter,
            menuLabelText,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};
import React, { useState, useContext, useReducer } from 'react'

const AppContext = React.createContext();

// const initialState = { msg: 'Lisa You Are My Sunshine' }
// const reducer = (state, action) => {
//     return state;
// }

const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    //const [state, dispatch] = useReducer(reducer, initialState);

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            closeModal,
            openSidebar,
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
};

export { AppContext, AppProvider };
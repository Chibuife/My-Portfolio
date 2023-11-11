import React from 'react'

const MainLoader = ({ setloader }) => {
    setTimeout(  ()=>setloader(false),2000)
    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    )
}

export default MainLoader
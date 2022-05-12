import React from "react"
import "./header.css"
import logo from "../../Assets/logo.png"
const Header=()=>{
    return(
        <div className="header">
            <img src={logo} alt="Logo"></img>
        </div>
    );
}

export default Header;
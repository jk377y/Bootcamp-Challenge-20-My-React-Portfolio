import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";

const Nav = () => {
	// setting the initial state of the selected link to 'about' section
	const [selectedLink, setSelectedLink] = useState("about");
	const handleClick = (link) => {setSelectedLink(link)};
	return (
		<div className="navContainer">
			<nav className="navBar">
				{/* useState is set when clicking the links on the navbar, when a link is clicked it gets the 'selected' className added, highlighting it */}
				<a href="#about" className={`navIcons ${selectedLink === "about" ? "selected" : ""}`}
					title="About" onClick={() => handleClick("about")}>
					<AiOutlineHome /></a>
				<a href="#portfolio" className={`navIcons ${selectedLink === "portfolio" ? "selected" : ""}`}
					title="Portfolio" onClick={() => handleClick("portfolio")}>
					<AiOutlineFundProjectionScreen /></a>
				<a href="#contact" className={`navIcons ${selectedLink === "contact" ? "selected" : ""}`}
					title="Contact" onClick={() => handleClick("contact")}>
					<AiOutlineMail /></a>
				<a href="#resume" className={`navIcons ${selectedLink === "resume" ? "selected" : ""}`} 
					title="Resume" onClick={() => handleClick("resume")}>
					<AiOutlineDownload /></a>
			</nav>
		</div>
	);
};

export default Nav;
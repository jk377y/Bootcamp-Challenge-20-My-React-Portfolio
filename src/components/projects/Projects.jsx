import React from "react";
import Slideshow from "./Slideshow";

// importing the slideshow component into this projects component
const Projects = () => {
	return (
		<section id="portfolio">
			<h2 className="sectionTitle">Portfolio</h2>
				<Slideshow />
		</section>
	);
};

export default Projects;
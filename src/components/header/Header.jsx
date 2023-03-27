import React from "react";
import Pic from "../../assets/images/pics/james.jpg";

// nothing fancy here, just a simple component that returns the header with text and a picture
const Header = () => (
	<section id="about">
		<header>
			<div className="wrapper">
				<h4 className="text">Hello, I am</h4>
				<h1 className="title text">James Kelly</h1>
				<h2 className="text">Full
					<span className="red">S</span>
					<span className="orange">t</span>
					<span className="yellow">a</span>
					<span className="green">c</span>
					<span className="blue">k</span>
				</h2>
				<h4 className="text">Web Developer</h4>
				<div>
					<img src={Pic} alt="profile pic of me" className="titleImg" />
				</div>
				<div className="bioDiv">
					<h2 className="sectionTitle">About</h2>
					<p className="bio">
						I hail from the great state of Texas, with a passion
						for learning and exploring new technologies. Driven
						by a desire for excellence, I am always striving to
						expand my knowledge and skills, never satisfied with
						the status quo. With a natural curiosity and a
						hunger for success, I am sure to make a valuable
						contribution to any team I have the privilege to be
						a part of.
					</p>
				</div>
			</div>
		</header>
	</section>
);

export default Header
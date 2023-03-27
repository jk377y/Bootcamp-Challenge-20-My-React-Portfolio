import React from "react";
import { ReactComponent as LinkedinIcon } from '../../assets/images/icons/linkedIn.svg';
import { ReactComponent as GitHubIcon } from '../../assets/images/icons/github2.svg';
import { ReactComponent as LeetCodeIcon } from '../../assets/images/icons/leetCode.svg';
import { ReactComponent as ViteIcon } from '../../assets/images/icons/vite.svg';
import { ReactComponent as JWTIcon } from '../../assets/images/icons/jwt.svg';

const Footer = () => {
	return (
		<footer className="wrapper verticle">
			<div className="skills">
				{/* using image tags, the image url is acceptable for the src */}
				<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
					<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" title="React" width="64" height="64"/></a> 
				<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
					<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" title="MongoDB" width="64" height="64"/></a> 
				<a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
					<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" title="NodeJS" width="64" height="64"/></a> 
				<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
					<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" title="Tailwind CSS" width="64" height="64"/></a> 
				<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
					<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" title="MySQL" width="64" height="64"/></a> 
				<a href="https://heroku.com" target="_blank" rel="noreferrer"> 
					<img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" title="Heroku" width="64" height="64"/></a> 
				<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
					<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" title="CSS3" width="64" height="64"/></a> 
				<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"> 
					<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" title="HTML5" width="64" height="64"/></a>
				<a href="https://www.javascript.com/" target="_blank" rel="noreferrer"> 
					<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" title="Javascript" width="64" height="64"/></a>
				<a href="https://jwt.io/" target="_blank" rel="noreferrer"> 
					<img src="https://img.icons8.com/color/64/null/java-web-token.png" alt="JWT" title="JSON Web Token" width="64" height="64"/></a>
				<a href="https://graphql.org/" target="_blank" rel="noreferrer"> 
					<img src="https://img.icons8.com/color/96/null/graphql.png" alt="GraphQL" title="GraphQL" width="64" height="64"/></a>
				<a href="https://getbootstrap.com/" alt="Bootstrap" title="Bootstrap" target="_blank" rel="noreferrer">
					<img src="https://camo.githubusercontent.com/bec2c92468d081617cb3145a8f3d8103e268bca400f6169c3a68dc66e05c971e/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" alt="Bootstrap" title="Bootstrap" width="64" height="64"/></a>
				<a href="https://vitejs.dev/" alt="Vite" title="Vite" target="_blank" rel="noreferrer">
					<ViteIcon className="icon" /></a>
				<a href="https://jwt.io/" target="_blank" rel="noreferrer">
					<JWTIcon className="icon" /></a>
			</div>
			{/* when not using image tags, the svg files had to be imported from a local directory, i just did this for the practice of importing and to use for reference later */}
			<div className="contactIcons">
				<a href="https://www.linkedin.com/in/james-kelly-b93a94150/" title="LinkedIn Profile" target="_blank" rel="noreferrer">
					<LinkedinIcon className="icon" /></a>
				<a href="https://github.com/jk377y" title="My GitHub" target="_blank" rel="noreferrer">
					<GitHubIcon className="icon" /></a>
				<a href="https://www.leetcode.com/jk377y" title="My Leet Code" target="_blank" rel="noreferrer">
					<LeetCodeIcon className="icon" /></a>
			</div>
		</footer>
	);
};

export default Footer;
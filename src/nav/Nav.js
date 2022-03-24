import "./nav.css";
import Toggle from "./toggle";
import React, { useState } from "react";

function NavBar(props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <nav className="navbar navbar-custom navbar-fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="./">
            Yulin
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link active" href={props.about}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={props.projects}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={props.blog}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={props.contact}>
                Contact
              </a>
            </li>
          </ul>

          <Toggle theme={theme} toggleTheme={toggleTheme} />

          <a
            href="https://github.com/yulin-physics/yulinchen"
            title="Git repository source code"
            aria-label="Git repository"
          >
            <i id="git-repo" className="fa fa-github"></i>
          </a>
        </div>
      </div>

      <div className="hamburgerMenu">
        {/* //TODO: hamburger menu for small screen
    //hamburger */}
      </div>
    </nav>
  );
}

export default NavBar;

import './nav.css';

function NavBar(props){
    return(
<nav className="navbar navbar-custom navbar-fixed-top navbar-expand-lg">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="./">Yulin</a>

    </div>

      
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="nav navbar-nav">
      <li className="nav-item active"><a className="nav-link active" href={props.about}>About Me</a></li>
      <li className="nav-item"><a className="nav-link" href={props.projects}>Projects</a></li>
      <li className="nav-item"><a className="nav-link" href={props.blog}>Blog</a></li>
      <li className="nav-item"><a className="nav-link" href={props.contact}>Contact</a></li>
    </ul>
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
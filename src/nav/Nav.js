import './nav.css';

function NavBar(props){
    return(
<nav class="navbar navbar-custom navbar-fixed-top navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="">Yulin</a>

    </div>

      
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav">
      <li class="nav-item active"><a class="nav-link active" href={props.about}>About Me</a></li>
      <li class="nav-item"><a class="nav-link" href={props.projects}>Projects</a></li>
      <li class="nav-item"><a class="nav-link" href={props.blog}>Blog</a></li>
      <li class="nav-item"><a class="nav-link" href={props.contact}>Contact</a></li>
    </ul>
  </div>
  </div>

  <div class="hamburgerMenu">
    {/* //TODO: hamburger menu for small screen
    //hamburger */}
</div>
</nav>
    );
}

export default NavBar;
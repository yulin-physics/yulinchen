import './nav.css';

function NavBar(props){
    return(
<nav class="navbar navbar-custom navbar-fixed-top navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#header">Yulin</a>

    </div>

      
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav">
      <li class="nav-item active"><a class="nav-link active" aria-current="page" href="#about">About Me</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
    </ul>
  </div>
  </div>
</nav>
    );
}

export default NavBar;
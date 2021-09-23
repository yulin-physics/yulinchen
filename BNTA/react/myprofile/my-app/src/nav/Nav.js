import './nav.css';

function SideNav(props){
    return(
        <div className="sticky">
  <div id="mySidenav" class="sidenav">
  <a href={props.about} id="about">About</a>
  <a href={props.blog} id="blog">Blog</a>
  <a href={props.projects} id="projects">Projects</a>
  <a href={props.contacts} id="contact">Contact</a>
</div>
</div>
    );
}

export default SideNav;
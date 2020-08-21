import React,{Component} from "react";
import{Link, BrowserRouter} from "react-router-dom";

class Navbar extends Component{
    render()
    {
        return(
            <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home</Link>
       </li>
      <li class="nav-item">
        <Link to="/User" class="nav-link">User</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
</nav>
            </React.Fragment>
        );
    }
}
export default Navbar;
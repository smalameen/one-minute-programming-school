import React from 'react';
import '../Header/Header.css';



const Header = () => {
    return (
<div> 
    <div className="header-size">
    <div>
        <h3 className="container">Hi! Welcome to 1 Minute Programming School :D</h3>
    </div>
    </div>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Our Courses</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>
        
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav font-weight-bold">
        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link active" href="#">Facebook</a>
        <a class="nav-item nav-link active" href="#">YouTube </a>
    </div>
  </div>
</nav>
</div>       
    );
};

export default Header;
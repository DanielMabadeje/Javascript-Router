"use strict";

import Home         from './src/views/pages/Home.js'
import About        from './src/views/pages/About.js'
import Error404     from './src/views/pages/Error404.js'
import PostShow     from './src/views/pages/PostShow.js'
import Register     from './src/views/pages/Register.js'
import index     from './src/views/pages/index.js'

import Navbar       from './src/views/components/Navbar.js'
import Bottombar    from './src/views/components/Bottombar.js' 

import Utils        from './src/services/Utils.js'

// import Login from './services/assets/js/login.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/home'             : Home
    ,'/'             : index
    , '/about'      : About
    , '/p/:id'      : PostShow
    , '/register'   : Register
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    const ul = null || document.getElementById('ko');
    const item = null || document.getElementById('item');
    
    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()
    // console.log(request)
    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    // alert(parsedURL)
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

// Listen on hash change:
// window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

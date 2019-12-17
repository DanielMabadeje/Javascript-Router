let Navbar = {
    render: async () => {
        let view =  /*html*/`
             
            <nav class="navbar navbar-expand-lg navbar-dark  m-0 p-0 navbar-fixed-top" style=" top: 0;">
                    <div class="container d-flex col-md-12" id="nav-container">
                
                        <div class="d-flex ml-md-5 pl-md-5 col-md-4 col-4" style="color: rgb(8, 241, 86);">
                            <ul class="navbar-nav desktop-nav mr-auto">
                                <li class="nav-item active mr-3">
                                   <!-- <a class="nav-link" href="#">Home</a> -->
                                    <a class="nav-link"><i class="fa fa-bell"></i></a>
                                </li>
                            <li class="nav-item active mr-3">
                            <a class="nav-link" id="navthemebtn"><i class="fa fa-cog"></i></a>
                            </li>
                            </ul>
                            <ul class="navbar-nav ml-auto" id="phone_user">
                                    <li class="nav-item">
                                        <span class="nav-link mr-3" onclick="openNav()"><i class="fa fa-user"></i></span>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </nav>

        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;
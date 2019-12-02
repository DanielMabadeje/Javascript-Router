let Navbar = {
    render: async () => {
        let view =  /*html*/`
             <header>
            <nav class="navbar navbar-expand-lg navbar-dark  m-0  p-0 navbar-fixed-top" style="background:rgb(2, 7, 93); top: 0;">
                    <div class="container" id="nav-container">
                        <div class="mr-auto pl-0 ml-0">
                                <a class="navbar-brand mr-auto mr-lg-0" href="#">Savage</a>
                        </div>
                        <div>
                                <form class="form-inline desktop-form">
                                        <div class="content input-container">
                                                <i class="fa fa-search"></i>
                                    <input  class="inputfield input search" id="" type="text" placeholder="Search...." aria-label="Search">
                                                <span class="border"></span>
                                              </div>
                                </form>
                            <form class="form-inline phone-form pull-right">
                                    <div class="content input-container" >
                                            <i class="fa fa-search"></i>
                                <input class="inputfield input search" style="width:60%;" id="" type="text" placeholder="Search...." aria-label="Search">
                                            <span class="border"></span>
                                          </div>
                            </form>
                            <!-- <button onclick="searchdisplay()" id="searchbtns" class="searchbtn btn btn-outline-success fa fa-search"  >gh</button> -->
                        </div>
                
                        <div class="d-flex pull-right ml-auto pr-4">
                            <ul class="navbar-nav desktop-nav mr-auto">
                                <li class="nav-item active mr-3">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item active mr-3">
                                    <a class="nav-link" href="#">Notifications</a>
                                </li>
                                <li class="nav-item active mr-3">
                                    <a class="nav-link" href="#">Messages</a>
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
    </header>
    <ul id="ko" class=" text-center">
            <li class="bottom-nav floating-box"><a class="active" href="#home"><span class="fa fa-home"></span> </a></li>
            <li class="bottom-nav floating-box"><a href="#news"><span class="fa fa-bell"></span></a></li>
            <li class="bottom-nav floating-box"><a href="#news"><span class="fa fa-envelope"></span></a></li>
            <li class="bottom-nav floating-box"><a href="#contact"><span class="fa fa-plus"></a></li>
            <li class="bottom-nav floating-box"><a href="#about"><span class="fa fa-fire"></a></li>
                <li class="bottom-nav floating-box"><a href="#about"><span class="fa fa-bars"></a></li>
          </ul>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;
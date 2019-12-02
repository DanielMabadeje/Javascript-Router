let index = {
    render : async () => {
        let view =  /*html*/`
        <link rel="stylesheet" href="services/assets/css/animate.css">
        <link rel="stylesheet" href="services/assets/css/owl.carousel.min.css">
        <link href='https://fonts.googleapis.com/css?family=Wallpoet' rel='stylesheet'>
        <link rel="stylesheet" href="services/assets/css/welcome.css">
        <section class="desktop">
        <div class=" d-flex">
          <div class="mt-5 col-md-6" style="margin-top:10%; color:white;">
            <h1 style=" font-family: 'Wallpoet';font-size: 50px; color:rgb(16, 127, 201);">Savage</h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta iusto modi non sunt, dolorem aspernatur rerum quisquam officia eaque maxime deserunt id! Sint esse reprehenderit cumque quod similique nostrum!</p>
            <a href="" class="btn btn-secondary">Blog</a>
          </div>
            <div class="container col-md-6">
                <div class="card">
                  <h1 class="title">Login</h1>
                  <form method="post" id="login_form">
                    <div class="input-container">
                      <input type="email" name="email" id="usern" required="required"/>
                      <label for="usern">Email</label>
                      <div class="bar"></div>
                    </div>
                    <div class="input-container">
                      <input type="password" name="password" id="passw" required="required" autocomplete=""/>
                      <label for="passw">Password</label>
                      <div class="bar"></div>
                    </div>
                    <div class="button-container">
                      <button><span>Go</span></button>
                    </div>
                    <div class="footer"><a href="#">Forgot your password?</a></div>
                  </form>
                </div>
                <div class="card alt">
                  <div class="toggle"></div>
                  <h1 class="title">Register
                    <div class="close"></div>
                  </h1>
                  <form id="sign_up_form">
                    <div class="input-container">
                      <input type="text"  name='username' id="usernR" required="required"/>
                      <label for="usernR">Username</label>
                      <div class="bar"></div>
                      <span class="text-danger" id="username_err"></span>
                    </div>
                    <div class="input-container">
                        <input type="email" name='email' id="usernR" required="required"/>
                        <label for="usernR">Email</label>
                        <div class="bar"></div>
                        <span class="text-danger" id="email_err"></span>
                      </div>
                    <div class="input-container">
                      <input type="password" name='password' id="passwR" required="required" autocomplete="" />
                      <label for="passwR">Password</label>
                      <div class="bar"></div>
                    </div>
                    <div class="input-container">
                      <input type="password" name='confirmPassword' id="repeatpass" required="required" autocomplete="" />
                      <label for="repeatpass">Repeat Password</label>
                      <div class="bar"></div>
                      <span class="text-danger" id="password_err"></span>
                    </div>
                    <div class="button-container">
                      <button><span>Submit </span></button>
                    </div>
                  </form>
                </div>
              </div>
        </div>
        <!-- <div class="col-4"> -->
           
</section>
</section>

<script src="services/assets/js/welcome.js"></script>
<script src="services/assets/js/login.js"></script>
<script src="services/assets/js/register.js"></script>
        `
        return view
    },
    after_render: async () => {}
        
}

export default index;
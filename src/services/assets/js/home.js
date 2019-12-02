$(document).ready(function() {
    // showHomePage();
    function showHomePage(){
 
        // validate jwt to verify access
        var jwt ='dfghjkdlfgfvdmfklmmcx'
        // var jwt = getCookie('jwt');
        $.post("api/validate_token.php", JSON.stringify({ jwt:jwt })).done(function(result) {
     
            // if valid, show homepage
    // var html = `
    // <div class="card">
    //     <div class="card-header">Welcome to Home!</div>
    //     <div class="card-body">
    //         <h5 class="card-title">You are logged in.</h5>
    //         <p class="card-text">You won't be able to access the home and account pages if you are not logged in.</p>
    //     </div>
    // </div>
    // `;
    
    // $('#content').html(html);
    alert('you are logged in');
    showLoggedInMenu();
        })
     
       // show login page on error
    .fail(function(result){
        window.location.replace('login.html');
        // $('#response').html("<div class='alert alert-danger'>Please login to access the home page.</div>");
    });
    }


    function showLoggedInMenu(){
        // hide login and sign up from navbar & show logout button
        $("#login, #sign_up").hide();
        $("#logout").show();
    }

    function getCookie(cname){
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' '){
                c = c.substring(1);
            }
     
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
     

    // function to make form values to json format
$.fn.serializeObject = function(){
 
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
});

var input =document.getElementById('searchinput');
var btn=document.querySelector('.searchbtn');

function searchdisplay() {
    if(input.style.display=='' && btn.style.display==''){
    input.style.display='block';
    console.log(btn.style.display)
    btn.style.display='none';
    btn.classList.add("displaynone");
    btn.classList.remove("btn");
    // document.querySelector('.search').style.width='120px'
    }
    else if(input.style.display=='block' && btn.style.display=='none'){
        input.style.display='none';
        btn.style.display='block';
        btn.classList.remove("displaynone");
    }    
}


//modal form
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// window.onload = function() {

//   var videos = document.getElementsByTagName("video"),
//       fraction = 0.8;

//   function checkScroll() {

//       for (var i = 0; i < videos.length; i++) {

//           var video = videos[i];

//           var x = video.offsetLeft,
//               y = video.offsetTop,
//               w = video.offsetWidth,
//               h = video.offsetHeight,
//               r = x + w, //right
//               b = y + h, //bottom
//               visibleX, visibleY, visible;

//           visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
//           visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

//           visible = visibleX * visibleY / (w * h);

//           if (visible > fraction) {
//               video.play();
//           } else {
//               video.pause();
//           }

//       }

//   }

//   window.addEventListener('scroll', checkScroll, false);
//   window.addEventListener('resize', checkScroll, false);
// }

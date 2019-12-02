function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("jwt");
    window.location.replace('login.html');
}
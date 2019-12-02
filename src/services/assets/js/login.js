$(document).ready(function() {

    $(document).on('submit', '#login_form', function(){
        var login_form=$(this);
        var form_data=login_form.serializeObject();

        $.ajax({
            async:true,
            url: base_url+"api/Acct/login",
            method: 'POST',
            data : form_data,
            success : function(result){
 
        // store jwt to cookie
        // setCookie("jwt", result.token, 1);
        // stores data locally
        storedata(result.success.message.username, '1');
 
        // show home page & tell the user it was a successful login
        // showHomePage();
                if (result) {
                    window.location.replace('views/home.html');
                }
                else {
                    // alert(result);
                }
            },
            error: function(xhr, resp, text){
                // on error, tell the user login has failed & empty the input boxes
                $('#response').html("<div class='alert alert-danger'>Login failed. Email or password is incorrect.</div>");
                login_form.find('input').val('');
            }
        });
        //this is mandatory other wise the form will be submitted.
        return false; 
    });


    
// function to set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// function to set local storage
 function storedata(username, jwt) {
                            if(typeof(Storage) !== "undefined") {
                                if (localStorage.jwt && localStorage.username) {
                                    localStorage.username =username;
                                    localStorage.jwt =jwt;
                                    // alert('done')
                                } else {
                                    localStorage.username =username;
                                    localStorage.jwt =jwt;
                                    // alert('done add')
                                }
                            } else {
                                alert("Sorry, your browser does not support web storage...");
                            }
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
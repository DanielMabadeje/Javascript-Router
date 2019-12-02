$(document).ready(function() {
    $(document).on('submit', '#sign_up_form', function(){
        // get form data
        var sign_up_form=$(this);
        // var form_data = JSON.stringify(sign_up_form.serializeObject());
        var form_data=sign_up_form.serializeObject();
        // submit form data to api
        $.ajax({
            async:true,
            url: base_url+"api/acct/register",
            method: 'POST',
            data : form_data,
            success : function(result) {
                // if response is a success, tell the user it was a successful sign up & empty the input boxes
                // $('#response').html("<div class='alert alert-success'>Successful sign up. Please login.</div>");
                sign_up_form.find('input').val('');
                alert('Successful sign up. Please login.');
            },
            error: function(xhr, resp, text){
                // on error, tell the user sign up failed
                // $('#response').html("<div class='alert alert-danger'>Unable to sign up. Please contact admin.</div>");
                $('#email_err').html(xhr.responseJSON.error.message.email)
                $('#password_err').html(xhr.responseJSON.error.message.password)
                $('#username_err').html(xhr.responseJSON.error.message.username)
            }
        });
     
        return false;
    });



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
        // alert(JSON.stringify(o));
        return o;
    };
});
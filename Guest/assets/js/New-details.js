$(document).ready(function () {
    function checkname() {
        let name = $('#txtname').val();
        let nameRegex = /^[a-zA-z0-9]{5,12}$/;
        if (nameRegex.test(name)) {
            return true;
        }
        return false;
    }
    function checkemail() {
        let email = $('#txtemail').val();
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
        if (emailRegex.test(email)) {
            return true;
        }
        return false;
    }
    function checkphone() {
        let phone = $('#txtphone').val();
        let phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (phoneRegex.test(phone)) {
            return true
        }
        return false
    }
    function checksubject() {
        var subject = $('#txtsubject');
        if (subject.val() === '') {
            return false;
        }
        return true;
    }
    function checkmessage(){
        var message = $('#txtmessage');
        if (message.val() === '') {
            return false;
        }
        return true;
    }
    $('#btnRegister').click(function(e){
        e.preventDefault();
        if(checkname()){
            $("#statusOfname").text('Valid name!')
            $("#statusOfname").css('color','blue')
        }
        else{
            $("#statusOfname").text('Invalid name!')
            $("#statusOfname").css('color','red')
        }
        if(checkemail()){
            $("#statusOfemail").text('Valid email!')
            $("#statusOfemail").css('color','blue')
        }
        else{
            $("#statusOfemail").text('Invalid email!')
            $("#statusOfemail").css('color','red')
        }
        if(checkphone()){
            $("#statusOfphone").text('Valid phone!')
            $("#statusOfphone").css('color','blue')
        }
        else{
            $("#statusOfphone").text('Invalid phone!')
            $("#statusOfphone").css('color','red')
        }
        if(checksubject()){
            $("#statusOfsubject").text('Valid subject!')
            $("#statusOfsubject").css('color','blue')
        }
        else{
            $("#statusOfsubject").text('This field is required!')
            $("#statusOfsubject").css('color','red')
        }
        if(checkmessage()){
            $("#statusOfmessage").text('Valid message!')
            $("#statusOfmessage").css('color','blue')
        }
        else{
            $("#statusOfmessage").text('This field is required!')
            $("#statusOfmessage").css('color','red')
        }
        


    })
})
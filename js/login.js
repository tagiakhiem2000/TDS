    //js btn-login

    $("#btn-login").click(function() {
        // e.preventDefault();
        if ($("#username").text() == '') {
            $("#error1").text("Vui lòng điền tên đăng nhập")
        } 
        if ($("#password").text() == '') {
            $("#error2").text("Vui lòng điền mật khẩu")
        } 
    })

    $('#eye').mouseenter(function(){
        console.log(111);
        $('#eye').css('cursor','pointer');
    })

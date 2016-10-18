/**
 * Created by kovax on 2016. 10. 17..
 */

var loggedin = false

function navReady() {
    getData("/isAuthenticated",ifLoggedIn)

    $('#login').click(function() {
        if(loggedin == true ) {
            $('#login').text('Logging out..');
            getData("/logout",ifLoggedIn)
            getData("/isAuthenticated",ifLoggedIn)
            window.location.replace("/index.html");
        } else {
            $('#login').text('Logging in..');
            window.location.replace("/auth");
            getData("/isAuthenticated",ifLoggedIn)
        }
    });
};

function ifLoggedIn(data) {
    console.log(data)
    if( data === "true" ) {
        $('#login').text('Logout');
        loggedin = true
    } else {
        $('#login').text('Login');
        loggedin = false
    }
};


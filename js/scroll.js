$(document).ready(function () {
    $("#arrow").click(function () {
        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top
        }, 1000);
    });
});
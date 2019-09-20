const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

//add class to html tag 
$('html').addClass('dark');
$("#checkbox").prop("checked", false);
function switchTheme(e) {
    if ($('html').hasClass('dark')) {
        $('html').addClass('light');
        $('html').removeClass('dark');
    } else {
        $('html').addClass('dark');
        $('html').removeClass('light');
    }

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.addClass('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);




$('#sidebar-wrapper').click(function () {
    $('#sidebar').toggleClass('visible');
    $('.body-menu').toggleClass('.body-menu-left');
});



$(document).ready(function () {
    var nice = $("html").niceScroll({ cursorborder: "var(--con-header)", cursorcolor: "var(--con-header)", boxzoom: true });  // The document page (body)       

    $(".container-content").niceScroll({ cursorborder: "var(--con-header)", cursorcolor: "var(--con-header)", boxzoom: true });
    $(".table-responsive").niceScroll({ cursorborder: "var(--green-color)", cursorcolor: "var(--green-color)", boxzoom: true });

});


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}




$(document).ready(function () {
    $('ul li .dropdown-icon').click(function () {
        $('li .dropdown-icon').removeClass("active");
        $(this).addClass("active");
    });
});


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
        $('html').addClass('dark');
        $('html').removeClass('dark');
    } else {
        $('html').addClass('dark');
        $('html').removeClass('dark');
    }

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.addClass('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);






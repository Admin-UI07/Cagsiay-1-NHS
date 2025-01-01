window.onload = function() {
    // Automatically uncheck the checkbox after 1 second
    setTimeout(function() {
        document.getElementById('menu-toggle').checked = false;
    }, 1500); // 1000 milliseconds = 1 second
};
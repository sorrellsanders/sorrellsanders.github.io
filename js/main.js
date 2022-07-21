$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['home', 'headshots', 'reel', 'shorts', 'contact'],
        sectionsColor: ['#000000', '#FFFFFF', '#000000', '#000000', '#000000'],
        autoScrolling: false
    });
});
var socket = io();
var counter = 0;
var title = "Wykop Live";
var lostFocus = null;

window.addEventListener("focus", function(event) {
    lostFocus = false;
    counter = 0;
    $(document).attr('title', title);
}, false);
window.addEventListener("blur", function(event) {
    lostFocus = true;
}, false);

socket.on('stream', function(item) {
    counter++;
    if (lostFocus) {
        $(document).attr('title', '('+counter+') ' + title);
    }
    $('ul#items').prepend('<li><a href="' + item.url + '" target="_blank">#' + item.id + '</a><br>' + item.body+ '</li>');
});

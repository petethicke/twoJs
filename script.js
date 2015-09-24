$(function() {
    var elem = document.getElementById('doodle');
    var two = new Two({fullscreen: true}).appendTo(elem);
    
    var dot = two.makeCircle(120, 120, 100);
    dot.fill = '#52C5DC';
    dot.noStroke();

    two.update(); 
    console.log('working');
})
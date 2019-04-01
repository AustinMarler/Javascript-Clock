$(document).ready(function(){

    var backgroundImages = ['https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-662225.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-189413.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-52592.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-486163.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-526870.jpg',
    'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-51924.jpg'];

    var clock = document.querySelector("#time");

    setInterval(function(){
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        clock.innerHTML = time;
    }, 100);

    var i = Math.floor(Math.random() * 20) % backgroundImages.length;
    document.body.style.backgroundImage = `url("${backgroundImages[i]}")`;

    setInterval(function(){
        i++;
        if (i >= backgroundImages.length) {
            i = 0;
        }
        document.body.style.backgroundImage = `url("${backgroundImages[i]}")`;
    }, 5000);

})
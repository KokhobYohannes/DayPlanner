var clock = document.getElementById('clock');

setInterval(() => {
    var now = moment();
    var viewTime = now.format("dddd, MMMM Do YYYY");
    console.log('viewTime');
    clock.textContent = viewTime;
}, 1000);

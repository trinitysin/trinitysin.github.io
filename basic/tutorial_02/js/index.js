let map = L.map('map').setView([25.02519625965276, 121.52752194555394], 13);

var infoDiv = document.getElementById('info');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([25.02519625965276, 121.52752194555394]).addTo(map)
.bindPopup('這裡是師大文學院!')
//.openPopup();

var marker2 = L.marker([25.017399653273966, 121.53976297639564]).addTo(map)
.bindPopup('台大啦weeeeeee!')
//.openPopup();

var marker3 = L.marker([25.044919992874622, 121.53195354429714]).addTo(map)
.bindPopup('請正名為吉伊快閃店聚集地!')
//.openPopup();

marker1.on('click', function () {
    console.log("Click 1");
    infoDiv.textContent = "我上班的地方";
    //infoDiv.textContent = '你點擊了: 師大文學院 ';
    map.panTo([25.02519625965276, 121.52752194555394]); // 平移到台北 101
});

marker2.on('click', function () {
    console.log("Click 2");
    infoDiv.textContent = "什麼時候才會考得上呢";
    //infoDiv.textContent = '你點擊了: 台大 ';
    map.panTo([25.017399653273966, 121.53976297639564]); // 平移到台北 101
});

marker3.on('click', function () {
    console.log("Click 3");
    infoDiv.textContent = "排吉伊排到爛掉";
    //infoDiv.textContent = '你點擊了: 華山 ';
    map.panTo([25.044919992874622, 121.53195354429714]); // 平移到台北 101
});
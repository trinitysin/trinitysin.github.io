var map = L.map('map').setView([25.02519625965276, 121.52752194555394], 13);
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
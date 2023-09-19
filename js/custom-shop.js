// JavaScript Document

$("#logobrand").owlCarousel({
loop:true, // cho lap lại
items:4, // xuất hiện 1 ảnh thôi
smartSpeed:600, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:3000, // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true, // cho xuất hiện bộ nút tới lui
margin:0,
	dots:false
})



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("aactive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
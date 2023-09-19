// JavaScript Document


function taianhstt(stt)
{
	var anh=document.getElementById("anhto");
	anh.src="img/product_single_0"+stt+".jpg"
}


$('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });


$("#prod1").owlCarousel({
loop:true, // cho lap lại
items:3, // xuất hiện 1 ảnh thôi
smartSpeed:800, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:3000, // thời gian chờ khi chuyển ảnh khi chạy tự động
 nav:true, 
margin:10,
dots:false,
})



$("#related").owlCarousel({
loop:true, // cho lap lại
items:4, // xuất hiện 1 ảnh thôi
smartSpeed:800, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:3000, // thời gian chờ khi chuyển ảnh khi chạy tự động
// nav:true, cho xuất hiện bộ nút tới lui
margin:10,
dots:true,
})

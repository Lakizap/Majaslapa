$(document).ready(function(){
$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 301){
        console.log(scrollTop);
        $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
});

$("#error").hide();
$("#error1").hide();
$("#error2").hide();
$("#error3").hide();	 
  		$("#read").keyup(function(e){
		if($("#read").val() == "patīk"){
  			$("#error1").show();
			$("#error").hide();
			}
			else{
			$("#error1").hide();
  			$("#error").show();
			}
  		});
		
		$("#read1").keyup(function() {
					var nosauk = $(this).val();
					if (nosauk == "" || nosauk.split(' ').length > 1) {
                        $(this).addClass("Ievade");
                        $("#error2").hide();
                    } else {
					$("#error2").show();
					}
				});
				
		$("#read2").keyup(function() {
					var numurs = $(this).val();
					if (numurs == "" || !$.isNumeric(numurs) || numurs.length != 8) {
						$(this).addClass("Ievade");
                        $("#error3").hide();
					} else {
						$(this).removeClass("Ievade");
						$("#error3").show();
					}
				});
				


var myCenter=new google.maps.LatLng(56.935940, 23.325154);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:12,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


   
	});
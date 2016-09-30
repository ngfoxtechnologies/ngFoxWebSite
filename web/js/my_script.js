

var global_var= " ";
$(document).ready(function(){
	


	
	$(".desktop_customdevelopment_div").on('click',function(){
//console.log("show custom");
	
	
	$(".desktop_customdevelopment_div").addClass("add_text_color");
		$(".desktop_customdevelopment_div").removeClass("normal_text_color");
		$(".desktop_dataservices_div").removeClass("add_text_color");
		$(".desktop_Staffing_div").removeClass("add_text_color");
		
		
	$("#custom_service").show();
	$("#data_service").hide();
	$("#staffing").hide();
	
});

$(".desktop_dataservices_div").on('click',function(){
//console.log("show data");

	
	$(".desktop_dataservices_div").addClass("add_text_color");
		$(".desktop_dataservices_div").removeClass("normal_text_color");
		$(".desktop_customdevelopment_div").removeClass("add_text_color");
		$(".desktop_Staffing_div").removeClass("add_text_color");
		
	$("#custom_service").hide();
	$("#data_service").show();
	$("#staffing").hide();
	
	
});

$(".desktop_Staffing_div").on('click',function(){
//console.log("show staff");

	$(".desktop_Staffing_div").addClass("add_text_color");
		$(".desktop_Staffing_div").removeClass("normal_text_color");
		$(".desktop_customdevelopment_div").removeClass("add_text_color");
		$(".desktop_dataservices_div").removeClass("add_text_color");
		
		
	$("#custom_service").hide();
	$("#data_service").hide();
	$("#staffing").show();
});



  $(".custom_service_view").on('click', function(){
	
	//console.log("custom");
	
//	global_var ="custom";
	 localStorage.setItem("service_click","custom");
	// $( ".desktop_customdevelopment_div" ).trigger( "click" );
});

 $(".data_service_view").on('click', function(){
	
	//console.log("data");
//	global_var ="data";
	 localStorage.setItem("service_click","data");
	//$( ".desktop_dataservices_div" ).trigger( "click" );

});

 $(".staff_service_view").on('click', function(){
	
	//console.log("staff");
	//global_var ="staff";
	 localStorage.setItem("service_click","staff");
	// $( ".desktop_Staffing_div" ).trigger( "click" );
});



if(localStorage.getItem("service_click") =="data"){
	$( ".desktop_dataservices_div" ).trigger( "click" );
}
else if(localStorage.getItem("service_click") =="staff"){
	$( ".desktop_Staffing_div" ).trigger( "click" );
}
else{ 
	$(".desktop_customdevelopment_div").trigger("click" );
}




});
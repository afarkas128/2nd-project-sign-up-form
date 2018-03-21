// <--! Selectable days and years !-->

$(document).ready(function() {
	for (var days = 1; days <= 31; days++ ) {
		$('#days-of-the-month').append('<option value="' + days + '">' + days + '</option>');
	}


	for (var years = 1950; years <= 2010; years++ ) {
			$('#selectable-years').append('<option value="' + years + '">' + years + '</option>');
	}


	// Showing name next to signup form

	$( "#ezkell" ).blur(function(){
		 var amitakarsz = $(this).val();
		 console.log(amitakarsz);
		if(amitakarsz.length > 1) {
			 $("#ide-tedd").text(amitakarsz + ' you have to ');
		}
		else {
			$("#ide-tedd").empty();
		}
		
	});

	// Placeholders 

	// $("#ezkell").attr("placeholder", "Maximum 10 Characters").val("").focus().blur();
	// $("#email-placeholder").attr("placeholder", "Someone@example.com").val("").focus().blur();
	
	// Submit button disable , enable

	// $('input[type="submit"]').prop('disabled', true);
 //    $('input[type="text"]').keyup(function() {
 //        if($(this).val() != '') {
 //           $('input[type="submit"]').prop('disabled', false);
 //        }
 //     });


});


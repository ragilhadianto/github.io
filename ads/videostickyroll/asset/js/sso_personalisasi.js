$(document).ready(function() {
	$.ajax({
		url: 'http://sso-apis.kompas.com/account/verifyLogin',
		type: 'GET',
		dataType: 'json',
		crossDomain: true,
		xhrFields: {
		    withCredentials: true
		},
	})
	.done(function(data) {
		if(data.is_login === true){
			$.ajax({
				url: 'http://sso-apis.kompas.com/account/user/'+crn_url,
				type: 'GET',
				dataType: 'json',
				crossDomain: true,
				xhrFields: {
				    withCredentials: true
				},
			})
			.done(function(data) {
				if(data.status === true){
					$("#txt_signin").replaceWith('<a class="sso__link" href="'+data.logout_url+'">LOGOUT</a>');
					$("#txt_register").replaceWith('<a class="sso__link" href="http://my.kompas.com">HI, '+data.profile.name+'</a>');
					$.ajax({
						url: 'https://apis.kompas.com/jixie/php/lib/obj.comment.php?req=get_comment_notif&mykompas_id='+data.profile.id,
						type: 'GET',
						dataType: 'json',
						crossDomain: true,
						xhrFields: {
							withCredentials: true
						},
					})
					.done(function(data){
						var hasil = data.join("");
						var badge = $('#badge').attr('data-badge');
						if(hasil.length != 0){
							$("#badge").attr("data-badge", "new");
						}
						$("#notif").html(hasil);
					})
					.fail(function(){
						
					})
				}
			})
			.fail(function() {
				
			})
		}
	})
	.fail(function() {
		console.log("error");
	})
});
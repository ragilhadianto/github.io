$(document).ready(function() {

	$(window).scroll(function(event){
	   //scroll header
	   if ($(this).scrollTop() > 25) {
	       $(".header").addClass("fix");
	   } else {
	       $(".header").removeClass("fix");
	   }

		 //scroll sortir
		 if ($(this).scrollTop() > 300) {
	       $(".search__sortir__inner, .search__sortir__inner ul").addClass("fix");
	   } else {
	       $(".search__sortir__inner, .search__sortir__inner ul").removeClass("fix");
	   }

		 //scroll nav paket
		 if ($(this).scrollTop() > 160) {
	       $(".paket__nav, .paket__nav .button__boking").addClass("fix");
	   } else {
	       $(".paket__nav, .paket__nav .button__boking").removeClass("fix");
	   }

	 });

	 //search
	$( ".datepicker" ).datepicker({
		monthNames: ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
		dayNamesMin: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
		showOtherMonths: true,
	});
	$('.monthpicker').MonthPicker({
		ShowIcon: false,
        Position: {
            collision: 'fit flip'
        }
	});

	$( ".field_dropdown" )
  		.selectmenu()
	 	.addClass( "overflow" );

	$('.search__by').change(function() {
    if ($(this).val() === 'bulan') {
	   	$(".search__box__field__bytanggal").addClass('hide');
	   	$(".search__box__field__bybulan").removeClass('hide');
    	} else if($(this).val() === 'tanggal') {
  	   	$(".search__box__field__bybulan").addClass('hide');
  	   	$(".search__box__field__bytanggal").removeClass('hide');
      	}
	 });

	//  $('.main').click(function() {
	//    $('#boxsearch').hide();
	//  });
	 //
	//  $('#new-search').click(function() {
	//  	$('#boxsearch').show();
	//  });

	 $("#new-search").click(function(e) {
        $("#boxsearch").toggle();
        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('#boxsearch, #boxsearch *, #boxsearch .field_dropdown, #boxsearch .field_dropdown option, .ui-selectmenu-menu *')) {
            $("#boxsearch").hide();
        }
    });



	 //paket
	 $('.paket__nav').scroller();

	 //selengkapnya jadwal
	 $("#jadwal__more").click( function(event){
		 //alert("asdas");
      event.preventDefault();
		$('.paket__jadwal__more').hide();
      if ( $(this).hasClass("isDown") ) {
        $('.paket__jadwal').addClass('open');
      } else {
			$('.paket__jadwal').removeClass('open');
      }
      $(this).toggleClass("isDown");
      return false;
  });




});

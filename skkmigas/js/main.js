	$(document).ready(function() {


		if ($(window).load(function() {
	        $("#preloader").fadeOut("slow", function() {
          	$(this).remove()

						//MAIN
						setTimeout(function() {
				        	$('.fullpage__cover').fadeIn(750);
						},500);
		            })
		        })
		)

		//animate
			TweenMax.fromTo(".scrolldown", 1, {
					y:0,
				},
				{
					y:10,
					repeat: -1,
					yoyo:true,
					ease:Elastic. easeOut.config( 1, 0.3),
				}
			);

			//--cover
			var title_a = $(".title_a");
			var title_b = $(".title_b");
			var title_c = $(".title_c");
			var title_d = $(".title_d");
			var gedungdark = $(".static__img__cover--gedung_dark");
			var awan = $("#awan__animate");

			//title
			TweenMax.fromTo(title_a, 0.3, {
					x:60,
				},
				{
					x:0,
					repeatDelay:1.5,
					repeat: -1,
					ease:Elastic. easeOut.config( 1, 0.3),
				}
			);
			TweenMax.fromTo(title_b, 0.3, {
					x:-85,
				},
				{
					x:0,
					repeatDelay:1.5,
					repeat: -1,
					ease:Elastic. easeOut.config( 1, 0.3),
				}
			);
			TweenMax.fromTo(title_c, 0.3, {
					x:100,
				},
				{
					x:0,
					repeatDelay:1.5,
					repeat: -1,
					ease:Elastic. easeOut.config( 1, 0.3),
				}
			);
			TweenMax.fromTo(title_d, 0.3, {
					x:-30,
				},
				{
					x:0,
					repeatDelay:1.5,
					repeat: -1,
					ease:Elastic. easeOut.config( 1, 0.3),
				}
			);

			//awan
			TweenMax.to(awan, 100, {
				left:"100%",
		    repeat: -1,
		   // ease:   Power0.easeNone
			});
			TweenMax.fromTo(gedungdark, 0.8, {
					display:'none'
				},
				{
					display:'block',
					repeatDelay:0.1,
					repeat:-1,
					yoyo:true,
					//repeat: iteration,
    			ease:Elastic. easeOut.config( 1, 0.3),
				}
			);

			//bodymovin
			var gelombang = bodymovin.loadAnimation({
				container: document.getElementById('gelombang'),
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: './images/json/gelombang.json',
				name: 'gelombang_animate',
			});

			var pump = bodymovin.loadAnimation({
				container: document.getElementById('pump'),
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: './images/json/pump.json',
				name: 'pump_animate',
			});

			var pump2 = bodymovin.loadAnimation({
				container: document.getElementById('pump2'),
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: './images/json/pump.json',
				name: 'pump2_animate',
			});

			var pump3 = bodymovin.loadAnimation({
				container: document.getElementById('pump3'),
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: './images/json/pump.json',
				name: 'pump3_animate',
			});

			var isometri1 = bodymovin.loadAnimation({
				container: document.getElementById('isometri1'),
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: './images/json/isometri1/isometri1.json',
				name: 'isometri1_animate',
			});

			var isometri2 = bodymovin.loadAnimation({
				container: document.getElementById('isometri2'),
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: './images/json/isometri2/isometri2.json',
				name: 'isometri2_animate',
			});

			var gelombang2 = bodymovin.loadAnimation({
				container: document.getElementById('gelombang2'),
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: './images/json/gelombang2.json',
				name: 'gelombang2_animate',
			});

			var processs = bodymovin.loadAnimation({
				container: document.getElementById('processs'),
				renderer: 'svg',
				loop: true,
				autoplay: true,
				path: './images/json/processs/processs.json',
				name: 'processs_animate',
			});


		//fullpage
		var fullIndex = $('.section').length;
		//slick

	    $('#fullpage').fullpage({

			scrollingSpeed: 800,
      scrollOverflow: false,
      verticalCentered: !0,


			onLeave: function(index, nextIndex, direction){
          var leavingSection = $(this);

          if( index == 1 && direction =='down'){

						$('.static__img__cover').addClass('moveUp');
						$('.static__img__1').addClass('moveDown');

						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:1,
						});
						TweenMax.fromTo(".static__img__1--mobil", 3, {
								left:"-100%"
							},
							{
								left:"0%"
							}
						);
						TweenMax.fromTo(".static__img__1--metromini", 3.5, {
								left:"-100%"
							},
							{
								left:"0%"
							}
						);
						TweenMax.fromTo(".static__img__1--metromini", 0.5, {
								x:0,
							},
							{
								x:3,
								repeatDelay:0.5,
								repeat:-1,
								yoyo:true
								//ease:Elastic. easeOut.config( 1, 0.3)
							}
						);
						TweenMax.fromTo(".static__img__1--metrominiasep", 0.3, {
								alpha:0,
								x:0,
								delay:3,
							},
							{
								alpha:1,
								x:10,
								delay:3,
								repeatDelay:0.2,
								repeat:-1,
								yoyo:true
							}
						);
						TweenMax.fromTo(".static__img__1--motor2", 2, {
								left:"-100%"
							},
							{
								left:"0%",
								delay:2,
								ease: Power2. easeIn
							}
						);
						TweenMax.fromTo(".static__img__1--motor1", 5, {
								x:"-100%"
							},
							{
								x:"40%",
								delay:2,
								ease: Power3. easeOut,
							}
						);
						$('.scrollup').addClass('show');
          }

          else if( index == 2 && direction == 'up'){
						$('.static__img__cover').removeClass('moveUp');
						$('.static__img__1').removeClass('moveDown');
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__img__1--metrominiasep", 0.1, {
								alpha:0,
							});
						TweenMax.to(".static__img__1--motor2", 0.1, {
								left:"-100%"
							}
						);
						TweenMax.to(".static__img__1--motor1",0.1, {
								x:"-100%"
							}
						);
						$('.scrollup').removeClass('show');
          }

          else if(index == 2 && direction == 'down'){
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__orange", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__img__1--matahari", 1, {
							top:"-100%",
							ease: Power3. easeOut,
						});
          }

          else if( index == 3 && direction == 'up'){
						TweenMax.to(".static__bg__orange", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__img__1--matahari", 1, {
							top:"0",
							ease: Power3. easeOut,
						});
          }

          else if(index == 3 && direction == 'down'){

          }

          else if( index == 4 && direction == 'up'){

          }

          else if(index == 4 && direction == 'down'){
						TweenMax.to(".static__img__1--motor2", 1, {
								left:"100%"
							}
						);
						TweenMax.to(".static__img__1--motor1",1, {
								x:"200%"
							}
						);
						TweenMax.to(".static__img__1--mobil2", 3, {
									left:"0%"
							}
						);
						TweenMax.to(".static__img__1--mobil", 3, {
									left:"100%"
							}
						);
						TweenMax.to(".static__bg__orange", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__red", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__img__1--gedung2", 1, {
								top:"200%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.to(".static__img__1--gedung3", 1, {
								top:"0%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.to([".static__img__1--metrominiasep",".static__img__1--metromini",".static__img__1--busway"], 8, {
							left:"100%",
							ease: Power3. easeOut,
						});
						TweenMax.to([".static__img__1--addcarb"], 7, {
							left:"0%",
							ease: Power3. easeOut,
						});
						TweenMax.to([".static__img__1--addcar"], 7, {
							left:"11%",
							ease: Power3. easeOut,
						});

          }

          else if( index == 5 && direction == 'up'){
						TweenMax.to(".static__img__1--motor2", 1, {
								left:"0%"
							}
						);
						TweenMax.to(".static__img__1--motor1",1, {
								x:"40%"
							}
						);
						TweenMax.to(".static__img__1--mobil2", 3, {
									left:"-100%"
							}
						);
						TweenMax.to(".static__img__1--mobil", 3, {
									left:"0%"
							}
						);
						TweenMax.to(".static__bg__orange", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__red", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__img__1--gedung2", 1, {
								top:"0%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.to(".static__img__1--gedung3", 1, {
								top:"100%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.to([".static__img__1--metrominiasep",".static__img__1--metromini",".static__img__1--busway"], 1, {
							left:"0",
							ease: Power3. easeOut,
						});
						TweenMax.to([".static__img__1--addcarb",".static__img__1--addcar"], 1, {
							left:"-100%",
							ease: Power3. easeOut,
						});
          }

          else if(index == 5 && direction == 'down'){

          }

					else if( index == 6 && direction == 'up'){

          }

					else if(index == 6 && direction == 'down'){
						TweenMax.to(".static__img__1--gedung3", 1, {
								top:"200%",
								ease: Power3. easeOut,
							}
						);
          }

					else if( index == 7 && direction == 'up'){
						TweenMax.to(".static__img__1--gedung3", 1, {
								top:"0%",
								ease: Power3. easeOut,
							}
						);
          }

					else if(index == 7 && direction == 'down'){
						TweenMax.fromTo(".static__img__1--motor3", 5, {
								left:"-100%"
							},
							{
								left:"24%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor4", 1, {
								left:"-100%"
							},
							{
								left:"38%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor5", 5, {
								left:"-100%"
							},
							{
								left:"40%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor6", 2, {
								left:"-100%"
							},
							{
								left:"35%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor7", 4, {
								left:"-100%"
							},
							{
								left:"25%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor8", 2, {
								left:"-100%"
							},
							{
								left:"25%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor9", 4, {
								left:"-100%"
							},
							{
								left:"10%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor10", 2, {
								left:"-100%"
							},
							{
								left:"20%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor11", 4, {
								left:"-100%"
							},
							{
								left:"38%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.fromTo(".static__img__1--motor12", 2, {
								left:"-100%"
							},
							{
								left:"28%",
								ease: Power3. easeOut,
							}
						);
          }

					else if( index == 8 && direction == 'up'){
						TweenMax.to([".static__img__1--motor3",".static__img__1--motor4",".static__img__1--motor5",".static__img__1--motor6",".static__img__1--motor7",".static__img__1--motor8",".static__img__1--motor9",".static__img__1--motor10",".static__img__1--motor11",".static__img__1--motor12"], 1, {
							left:"-100%",
							ease: Power3. easeOut,
						});
          }

					else if(index == 8 && direction == 'down'){
						TweenMax.to(".static__bg__red", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__malam", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__img__1--bulan", 2, {
								top:"0%",
								ease: Power3. easeOut,
						});
          }

					else if( index == 9 && direction == 'up'){
						TweenMax.to(".static__bg__red", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__malam", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__img__1--bulan", 2, {
								top:"-300%",
								ease: Power3. easeOut,
						});
          }

					else if(index == 9 && direction == 'down'){
						TweenMax.to(".static__img__1--gedung4", 1, {
								top:"0%",
								ease: Power3. easeOut,
							}
						);

						TweenMax.to(".static__bg__malam", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:1,
						});

						TweenMax.to(".static__img__1--bulan", 2, {
								top:"-300%",
								ease: Power3. easeOut,
						});

          }

					else if( index == 10 && direction == 'up'){
						TweenMax.to(".static__img__1--gedung4", 1, {
								top:"100%",
								ease: Power3. easeOut,
							}
						);
						TweenMax.to(".static__bg__malam", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__img__1--bulan", 2, {
								top:"0%",
								ease: Power3. easeOut,
						});
						$('.static__img__bodymovin--isometri1').removeClass('moveDown');

          }

					else if(index == 10 && direction == 'down'){
						$('.static__img__1').addClass('moveUp');
						$('.static__img__bodymovin--isometri1').addClass('moveDown');
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__birugradasi", 0.1, {
								opacity:1,
						});
          }

					else if( index == 11 && direction == 'up'){
						$('.static__img__1').removeClass('moveUp');
						$('.static__img__bodymovin--isometri1').removeClass('moveDown');
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__birugradasi", 0.1, {
								opacity:0,
						});
          }

					else if(index == 11 && direction == 'down'){

          }

					else if( index == 12 && direction == 'up'){

          }

					else if(index == 12 && direction == 'down'){
						$('.static__img__bodymovin--isometri1').addClass('moveUp');
						$('.static__img__bodymovin--isometri2').addClass('moveDown');
          }

					else if( index == 13 && direction == 'up'){
						$('.static__img__bodymovin--isometri1').removeClass('moveUp');
						$('.static__img__bodymovin--isometri2').removeClass('moveDown');
          }

					else if(index == 13 && direction == 'down'){

          }

					else if( index == 14 && direction == 'up'){

          }

					else if(index == 14 && direction == 'down'){
						$('.static__img__2').addClass('moveDown');
						TweenMax.to(".static__bg__birugradasi", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__gelap", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__img__2--penambangan", 0.1, {
								opacity:1,
								delay:0.1
						});
						$('.static__img__bodymovin--isometri2').addClass('moveUp');

          }


					else if( index == 15 && direction == 'up'){
						TweenMax.to(".static__bg__birugradasi", 0.1, {
								opacity:1,
						});
						$('.static__img__2').removeClass('moveDown');
						TweenMax.to(".static__img__2--penambangan", 0.1, {
								opacity:0,
						});
						$('.static__img__bodymovin--isometri2').removeClass('moveUp');
          }

					else if(index == 15 && direction == 'down'){
						$('.static__img__2').addClass('moveUp');
						$('.static__img__3').addClass('moveDown');
						$('.static__img__bodymovin--isometri2').addClass('moveUp');
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__img__3--car", 3, {
								left:"55%",
								delay:0.5,
								ease: Power3. easeOut,
						});
          }

					else if( index == 16 && direction == 'up'){
						$('.static__img__2').removeClass('moveUp');
						$('.static__img__3').removeClass('moveDown');
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__img__3--car", 3, {
								left:"-100%",
								ease: Power3. easeOut,
						});
          }

					else if(index == 16 && direction == 'down'){
						TweenMax.to(".static__img__3--addcar", 3, {
									left:"0%",
								ease: Power3. easeOut,
						});
          }

					else if( index == 17 && direction == 'up'){
						TweenMax.to(".static__img__3--addcar", 3, {
								left:"-100%",
								ease: Power3. easeOut,
						});
          }

					else if(index == 17 && direction == 'down'){
						TweenMax.to(".static__bg__malam", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__img__3--lampu", 0.5, {
								opacity:1,
								delay:1,
						});
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:0,
						});
          }

					else if( index == 18 && direction == 'up'){
						TweenMax.to(".static__img__3--lampu", 0.5, {
								opacity:0,
						});
						TweenMax.to(".static__bg__malam", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:1,
						});
          }

					else if(index == 18 && direction == 'down'){
						$('.static__img__3').addClass('moveUp');
						$('.static__img__4').addClass('moveDown');
						TweenMax.to(".static__bg__langit", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__langitflat", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__malam", 0.1, {
								opacity:0,
						});

          }

					else if( index == 19 && direction == 'up'){
						$('.static__img__3').removeClass('moveUp');
						$('.static__img__4').removeClass('moveDown');
						TweenMax.to(".static__bg__malam", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__langitflat", 0.1, {
								opacity:0,
						});

          }

					else if(index == 19 && direction == 'down'){
						TweenMax.to(".static__img__4--kapallaut", 2, {
								left:"0%",
								delay:0.2
						});
						TweenMax.to(".bodymovin__item--gelombang", 1, {
								opacity:1,
								delay:2
						});
          }

					else if( index == 20 && direction == 'up'){
						TweenMax.to(".static__img__4--kapallaut", 1, {
								left:"-100%"
						});
						TweenMax.to(".bodymovin__item--gelombang", 1, {
								opacity:0
						});
          }

					else if(index == 20 && direction == 'down'){
						TweenMax.to(".static__img__4--truck", 1, {
								left:"12%",
								delay:0.5
						});
          }

					else if( index == 21 && direction == 'up'){
						TweenMax.to(".static__bg__gelap", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__img__4--truck", 1, {
								left:"0%",
						});
          }

					else if(index == 21 && direction == 'down'){
						$('.static__img__4').addClass('moveUp');
						$('.static__img__5--leftyellow').addClass('moveRight');
						TweenMax.to(".static__bg__langitflat", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__gelap", 0.1, {
								opacity:1,
						});
						// TweenMax.to(".btnpopup", 0.5, {
						// 		scale:1,
						// 		repeat:3,
						// 		yoyo:true,
						// 		delay:1,
						// });
						$('#btnminyak').click(function () {
							$('.single-item').slick('setPosition');
							$('.static__img__5').css('z-index','99999');
							TweenMax.to("#popup__minyak", 0.2, {
									scale:1,
									opacity:1,
									delay:0.2
							});
							$.fn.fullpage.setAllowScrolling(false);
						});

						$('#btngas').click(function () {
							$('.single-item2').slick('setPosition');
							$('.static__img__5').css('z-index','99999');
							TweenMax.to("#popup__gas", 0.2, {
									scale:1,
									opacity:1,
									delay:0.2
							});
							$.fn.fullpage.setAllowScrolling(false);
						});



						$('.popup__close').click(function () {
							$('.static__img__5').css('z-index','0');
							TweenMax.to(".popup", 0.1, {
									scale:0,
									opacity:1,
							});
							$.fn.fullpage.setAllowScrolling(true);
						});

          }

					else if( index == 22 && direction == 'up'){
						$('.static__img__4').removeClass('moveUp');
						$('.static__img__5--leftyellow').removeClass('moveRight');

						TweenMax.to(".static__bg__langitflat", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__gelap", 0.1, {
								opacity:0,
						});
          }

					else if(index == 22 && direction == 'down'){
						TweenMax.to(".static__img__5--blok1", 0.5, {
								left:"-10%",
								opacity:0
						});
						TweenMax.to(".static__img__5--blok2", 0.5, {
								left:"0%",
								opacity:1
						});
						$('#btnlapangan').click(function () {
							$('.single-item3').slick('setPosition');
							$('.static__img__5').css('z-index','99999');
							TweenMax.to("#popup__lapanganmigas", 0.2, {
									scale:1,
									opacity:1,
									delay:0.2
							});
							$.fn.fullpage.setAllowScrolling(false);
						});

						$('#btnfasilitas').click(function () {
							$('.single-item4').slick('setPosition');
							$('.static__img__5').css('z-index','99999');
							TweenMax.to("#popup__fasilitasproduksi", 0.2, {
									scale:1,
									opacity:1,
									delay:0.2
							});
							$.fn.fullpage.setAllowScrolling(false);
						});

						$('#btncadangan').click(function () {
							$('.single-item5').slick('setPosition');
							$('.static__img__5').css('z-index','99999');
							TweenMax.to("#popup__cadanganmigas", 0.2, {
									scale:1,
									opacity:1,
									delay:0.2
							});
							$.fn.fullpage.setAllowScrolling(false);
						});


						$('.popup__close').click(function () {
							$('.static__img__5').css('z-index','0');
							TweenMax.to(".popup", 0.1, {
									scale:0,
									opacity:1,
							});
							$.fn.fullpage.setAllowScrolling(true);
						});
          }

					else if( index == 23 && direction == 'up'){
						TweenMax.to(".static__img__5--blok2", 0.5, {
								left:"-10%",
								opacity:0
						});
						TweenMax.to(".static__img__5--blok1", 0.5, {
								left:"0%",
								opacity:1
						});
          }

					else if(index == 23 && direction == 'down'){
						$('.static__img__5').addClass('moveUp');
						$('.static__img__6').addClass('moveDown');
						$('.static__img__5--leftyellow').removeClass('moveRight');
						TweenMax.to(".static__bg__gelap", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__bluegray", 0.1, {
								opacity:1,
						});
          }

					else if( index == 24 && direction == 'up'){
						$('.static__img__5').removeClass('moveUp');
						$('.static__img__6').removeClass('moveDown');
						$('.static__img__5--leftyellow').addClass('moveRight');
						TweenMax.to(".static__bg__gelap", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__bluegray", 0.1, {
								opacity:0,
						});
          }

					else if(index == 24 && direction == 'down'){
						TweenMax.to([".static__img__6--maps", ".static__img__6--bukit", ".static__img__6--machine"], 0.5, {
								top:"-100%",
						});
						TweenMax.to(".static__img__6--mapsindicator", 0.5, {
								top:"0%",
						});
          }

					else if( index == 25 && direction == 'up'){
						TweenMax.to([".static__img__6--maps", ".static__img__6--bukit", ".static__img__6--machine"], 0.5, {
								top:"0%",
						});
						TweenMax.to(".static__img__6--mapsindicator", 0.5, {
								top:"100%",
						});
          }

					else if(index == 25 && direction == 'down'){

          }
					else if( index == 26 && direction == 'up'){

          }

					else if(index == 26 && direction == 'down'){
						TweenMax.to(".static__img__6--mapsindicator", 0.5, {
								top:"-100%",
						});
						TweenMax.to(".static__img__6--tangankiria", 0.4, {
								left:"0%",
								ease: Power3. easeOut,
						});
						TweenMax.to(".static__img__6--tangankirib", 1.2, {
								left:"0%",
								ease: Power3. easeOut,
						});
						TweenMax.to(".static__img__6--tangankanana", 0.5, {
								right:"0%",
								ease: Power3. easeOut,
						});
						TweenMax.to(".static__img__6--tangankananb", 0.9, {
								right:"0%",
								ease: Power3. easeOut,
						});
						$('.static__img__6--papan').addClass('showed');
						// TweenMax.to(".static__img__6--papan", 1, {
						// 		top:"0%",
						// 		ease: Power3. easeOut,
						// });
          }

					else if(index == 27 && direction == 'down'){
						$('.static__img__6--papan').addClass('showed2');
						$('.content__papan').addClass('showed2');
						// TweenMax.to(".static__img__6--papan", 1, {
						// 		top:"10%",
						// 		ease: Power3. easeOut,
						// });
						// TweenMax.to(".content__papan", 1, {
						// 		width:"100%",
						// 		ease: Power3. easeOut,
						// });
						TweenMax.to(".static__img__6--papan--isi", 0.5, {
								opacity:"0"
						});
          }
					else if( index == 27 && direction == 'up'){
						TweenMax.to(".static__img__6--mapsindicator", 1, {
								top:"0",
								ease: Power3. easeOut,
						});
						TweenMax.to(".static__img__6--tangankiri", 1, {
								left:"-100%",
								ease: Power3. easeOut,
						});
						TweenMax.to(".static__img__6--tangankanan", 1, {
								right:"-100%",
								ease: Power3. easeOut,
						});
						// TweenMax.to(".static__img__6--papan", 1, {
						// 		top:"150%",
						// 		ease: Power3. easeOut,
						// });
						$('.static__img__6--papan').removeClass('showed');

          }

					else if(index == 28 && direction == 'down'){

          }
					else if( index == 28 && direction == 'up'){
						// TweenMax.to(".static__img__6--papan", 1, {
						// 		top:"0%",
						// 		ease: Power3. easeOut,
						// });
						// TweenMax.to(".content__papan", 1, {
						// 		width:"35%",
						// 		ease: Power3. easeOut,
						// });
						$('.static__img__6--papan').removeClass('showed2');
						$('.content__papan').removeClass('showed2');
						TweenMax.to(".static__img__6--papan--isi", 0.5, {
								opacity:"1"
						});
          }
					else if(index == 29 && direction == 'down'){
						$('.static__img__6').addClass('moveUp');
						// TweenMax.to(".static__img__6--papan", 1, {
						// 		top:"-150%",
						// 		ease: Power3. easeOut,
						// });
						$('.static__img__6--papan').addClass('showed3');
						$('.content__papan').addClass('showed3');
          }
					else if( index == 29 && direction == 'up'){

          }
					else if(index == 30 && direction == 'down'){

						TweenMax.to(".static__bg__orange", 0.1, {
								opacity:1,
						});
						TweenMax.to(".static__bg__bluegray", 0.1, {
								opacity:0,
						});
						$('.static__img__7').addClass('moveDown');
						TweenMax.to(".static__img__7--kapal", 80, {
								x:"80%",
						});
          }
					else if( index == 30 && direction == 'up'){
						$('.static__img__6').removeClass('moveUp');
						// TweenMax.to(".static__img__6--papan", 1, {
						// 		top:"10%",
						// 		ease: Power3. easeOut,
						// });
						$('.content__papan').removeClass('showed3');
						$('.static__img__6--papan').removeClass('showed3');
          }
					else if(index == 31 && direction == 'down'){

          }
					else if( index == 31 && direction == 'up'){
						$('.static__img__7').removeClass('moveDown');
						TweenMax.to(".static__bg__orange", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__bluegray", 0.1, {
								opacity:1,
						});
          }
					else if(index == 32 && direction == 'down'){
						$('.static__img__7').addClass('moveUp');
						$('.static__img__8').addClass('moveDown');
						TweenMax.to(".static__bg__orange", 0.1, {
								opacity:0,
						});
						TweenMax.to(".static__bg__langitgradasi2", 0.1, {
								opacity:1,
						});
          }
					else if( index == 32 && direction == 'up'){

          }
					else if(index == 33 && direction == 'down'){
						$('.static__img__8').addClass('moveUp');
						$('.static__img__9').addClass('moveDown');
						TweenMax.fromTo(".static__img__9--kapal", 1, {
									x:0,
								},
								{
									x:2,
									repeatDelay:0.5,
									repeat:-1,
									yoyo:true
									//ease:Elastic. easeOut.config( 1, 0.3)
								});
          }
					else if( index == 33 && direction == 'up'){
						$('.static__img__7').removeClass('moveUp');
						$('.static__img__8').removeClass('moveDown');
						TweenMax.to(".static__bg__orange", 0.1, {
								opacity:1,
						});

						TweenMax.to(".static__bg__langitgradasi2", 0.1, {
								opacity:0,
						});
          }
					else if(index == 34 && direction == 'down'){

          }
					else if( index == 34 && direction == 'up'){
						$('.static__img__8').removeClass('moveUp');
						$('.static__img__9').removeClass('moveDown');

          }

					else if(index == 35 && direction == 'down'){
						$('.static__img__9').addClass('moveUp');
						$('.static__img__13').addClass('moveDown');

          }
					else if( index == 35 && direction == 'up'){
						$('.static__img__9').removeClass('moveUp');
						$('.static__img__13').removeClass('moveDown');
          }


					else if(index == 36 && direction == 'down'){
						$('.static__img__13').addClass('moveUp');
						$('.static__img__10').addClass('moveDown');
						TweenMax.to(".static__img__8--burung", 1, {
								top:"0%",
								ease: Power3. easeOut,
						});
						TweenMax.to(".static__img__8--burung", 1, {
								top:"100%",
								ease: Power3. easeOut,
						});
          }
					else if( index == 36 && direction == 'up'){
						$('.static__img__9').removeClass('moveUp');
						$('.static__img__13').removeClass('moveDown');
						TweenMax.to(".static__img__8--burung", 1, {
								top:"-100%",
								ease: Power3. easeOut,
						});
          }
					else if(index == 37 && direction == 'down'){

          }
					else if( index == 37 && direction == 'up'){
						$('.static__img__13').removeClass('moveUp');
						$('.static__img__10').removeClass('moveDown');
						TweenMax.to(".static__img__8--burung", 1, {
								top:"-100%",
								ease: Power3. easeOut,
						});
          }
					else if(index == 38 && direction == 'down'){
						$('.static__img__10').addClass('moveUp');
						$('.static__img__11').addClass('moveDown');
						TweenMax.to(".static__img__11--mobil", 4, {
								left:"0%"
						});
						TweenMax.to(".static__img__11--sepeda", 15, {
								right:"0%"
						});
          }
					else if( index == 38 && direction == 'up'){

          }
					else if(index == 39 && direction == 'down'){
						TweenMax.to(".static__img__11--mobil2", 4, {
								right:"0%"
						});
          }
					else if( index == 39 && direction == 'up'){
						$('.static__img__10').removeClass('moveUp');
						$('.static__img__11').removeClass('moveDown');
						TweenMax.to(".static__img__11--mobil2", 4, {
								right:"-100%"
						});
						TweenMax.to(".static__img__11--mobil", 0.5, {
								left:"-100%"
						});
						TweenMax.to(".static__img__11--sepeda", 0.5, {
								right:"-100%"
						});
          }
					else if(index == 40 && direction == 'down'){

          }
					else if( index == 40 && direction == 'up'){

          }
					else if(index == 41 && direction == 'down'){
						$('.static__img__11').addClass('moveUp');
						$('.static__img__12').addClass('moveDown');
						TweenMax.to(".static__img__8--burung", 1, {
								top:"0%",
								ease: Power3. easeOut,
						});
          }
					else if( index == 41 && direction == 'up'){

          }
					else if(index == 42 && direction == 'down'){

          }
					else if( index == 42 && direction == 'up'){
						$('.static__img__11').removeClass('moveUp');
						$('.static__img__12').removeClass('moveDown');
						TweenMax.to(".static__img__8--burung", 1, {
								top:"100%",
								ease: Power3. easeOut,
						});
          }


	      }
	    });



			$('.single-item').slick({
				dots: true,
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    mobileFirst: true,
			  slickSetOption: true
			});
			$('.single-item2').slick({
				dots: true,
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    //mobileFirst: true,
			  //slickSetOption: true
			});
			$('.single-item3').slick({
				dots: true,
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    //mobileFirst: true,
			  //slickSetOption: true
			});
			$('.single-item4').slick({
				dots: true,
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    //mobileFirst: true,
			  //slickSetOption: true
			});
			$('.single-item5').slick({
				dots: true,
		    infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
				 fade: true,
		    //mobileFirst: true,
			  //slickSetOption: true
			});


	});

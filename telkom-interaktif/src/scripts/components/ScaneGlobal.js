/* ------------------------------------------------------------------------------
@name: ScaneGlobal
@description: ScaneGlobal
--------------------------------------------------------------------------------- */

// - ScaneGlobal
const ScaneGlobal = (() => {

  const handleScaneGlobal = () => {

        $(window).on('load', function () {
          //fullpage_api.setAllowScrolling(false);

          setTimeout(function () {
              $(".preloader").addClass("moveUp");
              $("#animationPreload").fadeOut(500, function () {
                  $('.preloader').remove();
                  fullpage_api.setAllowScrolling(true);
              })
          }, 1000);
      })

      $(document).ready(function() {
        
        

        new fullpage('#fullpage', {
          //options here
          
          autoScrolling: true,
          scrollHorizontally: true,
          //navigation: true,
          // anchors: ['cover', 'start', 'soekarno', 'soeharto', 'sby', 'jokowi', 'kalimantan', 'video', 'credit', 'ikn'],
          // lockAnchors: true,
          //scrollOverflow: true,

          onLeave: function (origin, destination, direction) {
              var leavingSection = this;

              if (origin.index == 0 && direction == 'down') {
                console.log("ini dari ="+origin.index);    
                $(".static-img-1").addClass("moveDown");    
                $(".static-bg-1").addClass("playdown");    
                $(".logo-telkom").fadeIn();    
                //parking
               

              }
              else if (origin.index == 1 && direction == 'up') {
                console.log("ini dari ="+origin.index);
                $(".static-img-1").removeClass("moveDown"); 
                $(".static-bg-1").removeClass("playdown");  
                $(".logo-telkom").fadeOut(); 
                // parking

              }
              else if (origin.index == 1 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-img-1").addClass("playdown");
                $(".static-img-1b").addClass("moveDown");
                $(".static-img-1 h2").fadeOut();
                $(".static-img-1 .text1").fadeIn();         
                $(".static-bg-1").addClass("playdown2");      
              }
              else if (origin.index == 2 && direction == 'up') {
                console.log("ini dari ="+origin.index);
                $(".static-img-1").removeClass("playdown");
                $(".static-img-1b").removeClass("moveDown");
                $(".static-img-1 h2").fadeIn();
                $(".static-img-1 .text1").fadeOut();      
                $(".static-bg-1").removeClass("playdown2");            
                $(".static-img-1b .inner-text1").slideDown();
                $(".static-img-1b .inner-text2").slideUp();

              }
              else if (origin.index == 2 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-img-1b .inner-text1").slideUp();
                $(".static-img-1b .inner-text2").slideDown();
              }
              else if (origin.index == 3 && direction == 'up') {        
                console.log("ini dari ="+origin.index);
                $(".static-img-1b .inner-text1").slideDown();
                $(".static-img-1b .inner-text2").slideUp();
                
              }
              else if (origin.index == 3 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-img-1b .inner-text2").slideUp();
                $(".static-img-1b .inner-text3").slideDown();
                
              }
              else if (origin.index == 4 && direction == 'up') {        
                console.log("ini dari ="+origin.index);
                $(".static-img-1b .inner-text2").slideDown();
                $(".static-img-1b .inner-text3").slideUp();

                

              }
              else if (origin.index == 4 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-img-1").addClass("playdown2");
                $(".static-bg-1").addClass("playdown3");   
                $(".static-img-1b").addClass("moveUp");

                // velocity
                $(".bounce-1-box").velocity({
                    opacity: "1",
                    top: "0%",
                  }, {
                      delay: 500,
                      duration: 500
                  })

                $(".bounce-2-box").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 750,
                    duration: 500
                })

                $(".bounce-3-box").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 1000,
                    duration: 500
                })
                //
              }
              else if (origin.index == 5 && direction == 'up') {        
                console.log("ini dari ="+origin.index);
                $(".static-img-1b").removeClass("moveUp");
                $(".static-img-1").removeClass("playdown2");
                $(".static-bg-1").removeClass("playdown3");

                // 
                // velocity
                $(".bounce-1-box").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })

                $(".bounce-2-box").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })

                $(".bounce-3-box").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                
              }
              else if (origin.index == 5 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-bg-1").addClass("playdown4");  

                // velocity
                $(".fivebold-5").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 500,
                    duration: 250
                })
              }
              else if (origin.index == 6 && direction == 'up') {        
                console.log("ini dari ="+origin.index);
                $(".static-bg-1").removeClass("playdown4");
                
                // velocity
                $(".fivebold-5").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })


              }
              else if (origin.index == 6 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-bg-1").addClass("playdown5"); 


                // velocity
                $(".fbm-1").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 500,
                    duration: 500
                })
                $(".fbm-2").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 750,
                    duration: 500
                })
                $(".fbm-3").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 1000,
                    duration: 500
                })
                $(".fbm-4").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 1250,
                    duration: 500
                })
                $(".fbm-5").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 1500,
                    duration: 500
                })

              }
              else if (origin.index == 7 && direction == 'up') {        
                console.log("ini dari ="+origin.index);
                $(".static-bg-1").removeClass("playdown5");



                // velocity
                $(".fbm-1").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".fbm-2").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".fbm-3").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".fbm-4").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".fbm-5").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                
                
              }
              else if (origin.index == 7 && direction == 'down') {
                console.log("ini dari ="+origin.index);

                // velocity
                $(".fc-1").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 500,
                    duration: 500
                })
                $(".fc-2").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 750,
                    duration: 500
                })
                $(".fc-3").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 1000,
                    duration: 500
                })
                $(".fc-4").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 1250,
                    duration: 500
                })
                $(".fc-5").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 1500,
                    duration: 500
                })

              }
              else if (origin.index == 8 && direction == 'up') {        
                console.log("ini dari ="+origin.index);

                // velocity
                $(".fc-1").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".fc-2").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".fc-3").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".fc-4").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".fc-5").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                
              }
              else if (origin.index == 8 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-img-2").addClass("moveDown");   
                
              }
              else if (origin.index == 9 && direction == 'up') {        
                console.log("ini dari ="+origin.index);
                $(".static-img-2").removeClass("moveDown");    
                
              }
              else if (origin.index == 9 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-img-2-desc1").velocity({
                    opacity: "0",
                    left: "100%",
                  }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".static-img-2-desc2").velocity({
                            left: "0",
                            opacity: "1"
                        })
                    }
                })
                
              }
              else if (origin.index == 10 && direction == 'up') {    
                console.log("ini dari ="+origin.index);  



                $(".static-img-2-desc2").velocity({
                  opacity: "0",
                  left: "100%",
                }, {
                    delay: 0,
                    duration: 400,
                    begin: function () {
                        $(".static-img-2-desc1").velocity({
                            left: "0",
                            opacity: "1"
                        })
                    }
                })
              }
              else if (origin.index == 10 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-img-2").addClass("moveUp");  

                // velocity
                $(".erick").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 500,
                    duration: 500
                })
                $(".erick2").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 750,
                    duration: 500
                })
                
              }
              else if (origin.index == 11 && direction == 'up') {   
                console.log("ini dari ="+origin.index);
                $(".static-img-2").removeClass("moveUp"); 
                
                // velocity
                $(".erick").velocity({
                  opacity: "0",
                  top: "50%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".erick2").velocity({
                  opacity: "0",
                  top: "50%",
                }, {
                    delay: 0,
                    duration: 0
                })

              }
              else if (origin.index == 11 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-bg-1").addClass("playdown6"); 
                //$(".backB2b ").fadeIn(); 

                // velocity
                $(".clickUmkm").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 500,
                    duration: 500
                })
                $(".clickKorporasi").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 750,
                    duration: 500
                })
                $(".clickPemerintahan").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 1000,
                    duration: 500
                })
              }
              else if (origin.index == 12 && direction == 'up') {   
                console.log("ini dari ="+origin.index);
                $(".static-bg-1").removeClass("playdown6"); 
                $(".backB2b ").fadeOut();
                
                
                // velocity
                $(".clickUmkm").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".clickKorporasi").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".clickPemerintahan").velocity({
                  opacity: "0",
                  top: "100%",
                }, {
                    delay: 0,
                    duration: 0
                })
                
              }
              else if (origin.index == 12 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".static-bg-1").addClass("playdown7"); 
                $(".backB2b ").fadeOut(); 

                // velocity
                $(".direktur").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 500,
                    duration: 500
                })
                $(".direktur2").velocity({
                  opacity: "1",
                  top: "0%",
                }, {
                    delay: 750,
                    duration: 500
                })
                
              }
              else if (origin.index == 13 && direction == 'up') {   
                console.log("ini dari ="+origin.index);
                $(".static-bg-1").removeClass("playdown7"); 

                // velocity
                $(".direktur").velocity({
                  opacity: "0",
                  top: "50%",
                }, {
                    delay: 0,
                    duration: 0
                })
                $(".direktur2").velocity({
                  opacity: "0",
                  top: "50%",
                }, {
                    delay: 0,
                    duration: 0
                })
                
              }
              else if (origin.index == 13 && direction == 'down') {
                console.log("ini dari ="+origin.index);
                $(".logo-bisniscom").fadeIn();
                $(".clickRestart").fadeIn();
                $(".logo-58").addClass("opacity-0");
                $(".scroll-guide").fadeOut();
                $(".static-bg-1").addClass("playdown8"); 
                
              }
              else if (origin.index == 14 && direction == 'up') {   
                console.log("ini dari ="+origin.index);
                $(".scroll-guide").fadeIn();
                $(".logo-58").removeClass("opacity-0");
                $(".logo-bisniscom").fadeOut();
                $(".clickRestart").fadeOut();
                $(".static-bg-1").removeClass("playdown8"); 

              }
          }
      })

      // $.fn.fullpage.setAllowScrolling(false);
    
    });
    
  };



  // - init
  const init = () => {
    handleScaneGlobal();
  };

  // return
  return {
    init,
  };
})();

export default ScaneGlobal;

/* ------------------------------------------------------------------------------
@name: ScaneClick
@description: ScaneClick
--------------------------------------------------------------------------------- */

// - ScaneClick
const ScaneClick = (() => {

  const handleScaneClick = () => {

    $(document).ready(function() {

        // fivebold-click
        $(".fivebold-click").click(function (e) {    
            var $parent = $(this).parents()
            $(this).parents().children(".fivebol-desc").slideToggle("hidden");
        });
        
        // sectionB2b
        var $backB2b = $(".backB2b");
        var $landing = $("#sectionB2b");
        var $sectionUmkm = $("#sectionUmkm");
        var $sectionKorporasi = $("#sectionKorporasi");
        var $sectionPemerintahan = $("#sectionPemerintahan");

        $(".clickUmkm").click(function (e) {    
            $backB2b.fadeIn();            
            $landing.velocity({
                opacity: "0",
                top: "-100%",
            }, {
                delay: 0,
                duration: 400,
                begin: function () {
                    $sectionUmkm.velocity({
                        top: "0",
                        opacity: "1"
                    })
                }
            })
        });
        $(".clickKorporasi").click(function (e) {    
            $backB2b.fadeIn();            
            $landing.velocity({
                opacity: "0",
                top: "-100%",
            }, {
                delay: 0,
                duration: 400,
                begin: function () {
                    $sectionKorporasi.velocity({
                        top: "0",
                        opacity: "1"
                    })
                }
            })
        });
        $(".clickPemerintahan").click(function (e) {    
            $backB2b.fadeIn();            
            $landing.velocity({
                opacity: "0",
                top: "-100%",
            }, {
                delay: 0,
                duration: 400,
                begin: function () {
                    $sectionPemerintahan.velocity({
                        top: "0",
                        opacity: "1"
                    })
                }
            })
        });
        $backB2b.click(function (e) {    
            $backB2b.fadeOut();
            $("#sectionUmkm, #sectionKorporasi, #sectionPemerintahan").velocity({
                opacity: "0",
                top: "100%",
            }, {
                delay: 0,
                duration: 400,
                begin: function () {
                    $landing.velocity({
                        top: "0",
                        opacity: "1"
                    })
                }
            })
        });

    });
    
  };



  // - init
  const init = () => {
    // handleScrollAnimate();
    handleScaneClick();
  };

  // return
  return {
    init,
  };
})();

export default ScaneClick;

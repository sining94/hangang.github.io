var pc = (function (ns, $) {
    var win = $(window);
    ns.init = function () {
        
        this.scrollMotion.init();
        
        this.swiper.init();
    };
  
    ns.scrollMotion = {
        init: function () {
          this._setCommonCSS();
          this.$fadeEl = $("[class*=fadeIn]");
          if (this.$fadeEl.length === 0) {
            return;
          }
    
          var agent = navigator.userAgent.toLowerCase();
          if (
            (navigator.appName == "Netscape" && agent.indexOf("trident") != -1) ||
            agent.indexOf("msie") != -1
          ) {
            // ie일 경우
            var oSelf = this;
    
            setTimeout(function () {
              oSelf._setElement();
              oSelf._setPlugin();
            }, 300);
          } else {
            // ie가 아닐 경우
            this._setElement();
            this._setPlugin();
          }
        },
        _setCommonCSS: function () {
          //.visualT 하위 element 시간차 모션 추가
          var timeId = 0.2;
          var motionTid;
          $(".visualT")
            .children()
            .each(function (idx) {
              motionTid = idx * timeId;
              $(this).attr("data-wow-delay", motionTid + "s");
              $(this).addClass("fadeInUp");
            });
        },
        _setElement: function () {
          var scrollTop = $(window).scrollTop();
          var revertClass;
          var oSelf = this;
    
          this.$fadeEl.each(function () {
            var imgPos = $(this).offset().top + $(this).outerHeight();
            if (scrollTop > imgPos) {
              revertClass = $(this).attr("class").replace("fadeInUp", "fadeInDown");
              $(this).attr("class", revertClass);
              $(this).removeAttr("data-wow-delay");
            }
    
            $(this).addClass("wow");
          });
        },
        _setPlugin: function () {
          this.wow = new WOW({
            animateClass: "animated",
            offset: 100,
            callback: function (box) {
              if ($(box).find(".custNum").length > 0) {
                $(box).find(".num").rollNumJs();
              } else if ($(box).find(".time").length > 0) {
                $(box).find(".time").rollNumJs();
              }
    
              box.addEventListener("animationend", function () {
                $(this).removeClass("wow");
              });
            },
          });
          this.wow.init();
        },
      };
  
    ns.swiper = {
        init: function(){
           const swiper = new Swiper('.swiper', {
            loop: true,
            autoplay:{
                dleay: '',
            }
           });
        }
    }
  
    
  
    ns.init();
    return ns;
  })(window.pc || {}, jQuery);
  
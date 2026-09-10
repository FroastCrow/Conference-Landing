let flagNeedArrowTop = false;
$(document).ready(function() {
  
  $("#option-choice").on("click", function() {
    $(this).parent(".languages").toggleClass("active");
  });

  $(document).click(function(e) {
    if ($(e.target).closest("#option-choice").length) {
      return;
    }
    if ($(e.target).closest(".ml-auto ").length) {
      return;
    }
    $(".languages").removeClass("active");
    $(".overlap").removeClass("open");
    $('#menu-toggle').removeClass('active open');

    e.stopPropagation();
  });


   var $page = $('html, body');
  $('.ancor').click(function () {
    const headerOffset = window.innerWidth <= 768 ? 50 : 80;
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - headerOffset
    }, 600);

    return false;
  });
 
  $("#goUp").on("click", function() {
    $("html, body").stop().animate({ scrollTop: 0 }, 500, "swing");
  });

  /*Menu*/
  $("#menu-toggle").on("click", function(k) {
    $("#hamburger").toggleClass("active open");
    $(".overlap").toggleClass("open");
  });
  /*Menu end*/

  // бегущая строка
  const $marqueeContent = $('.marqueeContent');
    $marqueeContent.append($marqueeContent.html());

    let pos = 0;
    const speed = 1; 

    function animateMarquee() {
        pos -= speed;
        if(Math.abs(pos) >= $marqueeContent.width() / 2) {
            pos = 0;
        }
        $marqueeContent.css('transform', `translateX(${pos}px)`);
        requestAnimationFrame(animateMarquee);
    }
    animateMarquee();


// slider

 var eventSwiper = new Swiper('.eventSwiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.eventPagination',
            clickable: true
        }
    });

    // Banner slider
    if (document.querySelector('.bannerSwiper')) {
        var bannerSwiper = new Swiper('.bannerSwiper', {
            slidesPerView: 1,
            loop: true,
            // autoplay: {
            //     delay: 4500,
            //     disableOnInteraction: false
            // },
            pagination: {
                el: '.bannerPagination',
                clickable: true
            }
        });
    }


    //Form START
    const $form = $("#signupForm");

    // Перевірка чи форма існує на сторінці
    if ($form.length > 0) {
        const $firstName = $("#firstName");
        const $email = $("#email");
        const $company = $("#company");
        const $consent = $("#consent");

        const $firstNameError = $("#firstNameError");
        const $emailError = $("#emailError");
        const $formMessage = $("#formMessage");

        function validateEmail(value) {
          return /\S+@\S+\.\S+/.test(value);
        }

        $form.on("submit", function (e) {
          e.preventDefault();

          let ok = true;

          $firstNameError.hide();
          $emailError.hide();
          $formMessage.hide();

          if ($firstName.val().trim() === "") {
            $firstNameError.text("Please enter first name").show();
            ok = false;
          }

          const emailValue = $email.val().trim();

          if (emailValue === "") {
            $emailError.text("Please enter email").show();
            ok = false;
          } else if (!validateEmail(emailValue)) {
            $emailError.text("Please enter a valid email address").show();
            ok = false;
          }

          if (!ok) return;

          // Збір даних
          const data = {
            firstName: $firstName.val().trim(),
            email: emailValue,
            company: $company.val().trim(),
            consent: $consent.is(":checked"),
          };

          console.log("Sent:", data);

          // Показуємо повідомлення
          $formMessage.text("Thank you! Your request has been sent.").show();

          // Очищення форми
          $form[0].reset();
        });
    }
    //END Form

    //FAQ
    if ($('.faq-question').length > 0) {
        $('.faq-question').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const $faqItem = $(this).closest('.faq-item');
            const $faqAnswer = $(this).next('.faq-answer');
            const isActive = $faqItem.hasClass('active');
            
            // Close other items in the same category
            const $category = $faqItem.closest('.faq-category');
            $category.find('.faq-item').not($faqItem).removeClass('active');
            $category.find('.faq-question').not(this).removeClass('active');
            
            // Toggle current item
            if (isActive) {
                $faqItem.removeClass('active');
                $(this).removeClass('active');
            } else {
                $faqItem.addClass('active');
                $(this).addClass('active');
            }
        });
    }
    //END FAQ


    // start popup
$('.btnPopup1').on('click', function () {
    $('.popup1').addClass('active');
    $('body').css('overflow', 'hidden');
});

$('.btnPopup2').on('click', function () {
    $('.popup2').addClass('active');
    $('body').css('overflow', 'hidden');
});

$('.btnPopup3').on('click', function () {
    $('.popup3').addClass('active');
    $('body').css('overflow', 'hidden');
});

$('.btnPopup4').on('click', function () {
    $('.popup4').addClass('active');
    $('body').css('overflow', 'hidden');
});

$('.btnPopup5').on('click', function () {
    $('.popup5').addClass('active');
    $('body').css('overflow', 'hidden');
});

$('.popupClose').on('click', function () {
    $(this).closest('.popupOverlay').removeClass('active');
    $('body').css('overflow', '');
});

$('.popupWrap').on('click', function (e) {
    if ($(e.target).is('.popupWrap')) {
        $(this).closest('.popupOverlay').removeClass('active');
        $('body').css('overflow', '');
    }
});
    // end popup



// map start
$(function () {
  var panZoomInstance;
  if (typeof svgPanZoom === "function") {
    try {
      panZoomInstance = svgPanZoom("#mapSVG", {
        zoomEnabled: true,
        panEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 0.5,
        maxZoom: 5,
      });
    } catch (e) {}
  }

  var standsData = {
    s1: { area: "8 m²", status: "free" },
    s2: { area: "8 m²", status: "free" },
    s3: { area: "8 m²", status: "free" },
    s4: { area: "8 m²", status: "free" },
    s5: { area: "8 m²", status: "free" },
    s6: { area: "4 m²", status: "free" },
    s7: { area: "4 m²", status: "free" },
    s8: { area: "4 m²", status: "free" },
    s9: { area: "8 m²", status: "reserved" },
    s10: { area: "8 m²", status: "free" },
    s11: { area: "8 m²", status: "free" },
    s12: { area: "8 m²", status: "free" },
    s13: { area: "8 m²", status: "free" },
    s14: { area: "8 m²", status: "free" },
    s15: { area: "4 m²", status: "free" },
    s16: { area: "4 m²", status: "free" },
    s17: { area: "4 m²", status: "reserved" },
    s18: { area: "4 m²", status: "free" },
    s19: { area: "4 m²", status: "free" },
    s20: { area: "4 m²", status: "free" },
    s21: { area: "12 m²", status: "free" },
    s22: { area: "12 m²", status: "free" },
    s23: { area: "12 m²", status: "reserved" },
    s24: { area: "12 m²", status: "free" },
    s25: { area: "12 m²", status: "paid" }, // PAID
    s26: { area: "12 m²", status: "free" },
    s27: { area: "12 m²", status: "reserved" },
    s28: { area: "12 m²", status: "free" },
    s29: { area: "12 m²", status: "reserved" },
    s30: { area: "12 m²", status: "free" },
    s31: { area: "40 m²", status: "reserved" },
    s32: { area: "12 m²", status: "free" },

    e1: { area: "36 m²", status: "free", type: "event" },
    e2: { area: "36 m²", status: "free", type: "event" },
    e3: { area: "36 m²", status: "reserved", type: "event" },
    e4: { area: "36 m²", status: "reserved", type: "event" },
    e5: { area: "36 m²", status: "free", type: "event" },
    e6: { area: "36 m²", status: "free", type: "event" },
    e7: { area: "36 m²", status: "free", type: "event" },
    e8: { area: "36 m²", status: "free", type: "event" },
  };

  // общий tooltip (один элемент)
  var $tooltip = $("#tooltip");
  var $tooltipTitle = $("#tooltipTitle");
  var $tooltipStatus = $("#tooltipStatus");
  var $tooltipBtnWrap = $("#tooltipBtnWrap");

  var currentHoverId = null;

  function showTooltipAt(x, y) {
    $tooltip.css({ top: y + 14, left: x + 14 }).fadeIn(120);
  }

  function hideTooltip() {
    $tooltip.hide();
    $tooltipBtnWrap.empty();
    $tooltip.removeClass("tooltip-reserved tooltip-paid tooltip-free");
    currentHoverId = null;
  }

  // ================================
  // Popup logic for stands (popup6)
  // isolate from .popup5 form popup
  // ================================
  var $standPopup = $(".popup6"); // overlay for stands (popup6)
  var $standWrap = $standPopup.find(".popupWrapp"); // inner wrap for popup6
  var $standName = $standPopup.find("#popupName");
  var $standArea = $standPopup.find("#popupArea");

  function openStandPopup(standId) {
    if (!standId) return;
    var key = standId.toLowerCase();
    var data = standsData[key] || {};

    $standName.text(standId.toUpperCase());
    $standArea.text(data.area || "");

    // показать overlay и wrap как flex
    $standPopup.css("display", "flex");
    $standWrap.css("display", "flex");
    $standPopup.hide().fadeIn(180);

    // блокируем скролл страницы
    $("body").css("overflow", "hidden");
  }

  function closeStandPopup() {
    $standPopup.fadeOut(150, function () {
      $standPopup.css("display", "");
      $standWrap.css("display", "");
      $("body").css("overflow", "");
    });
  }

  // обработчики для закрытия popup6 (делегирование внутри popup6)
  $standPopup.on("click", ".popupCloses", function (e) {
    e.preventDefault();
    e.stopPropagation();
    closeStandPopup();
  });

  $standPopup.on("click", function (e) {
    if (e.target === this) {
      closeStandPopup();
    }
  });

  // ----------------------
  //  MAP ELEMENTS: hover/click
  // ----------------------
  $("#mapSVG [id]").each(function () {
    var $el = $(this);
    var id = $el.attr("id");
    if (!id) return;
    var key = id.toLowerCase();
    var data = standsData[key];
    if (!data) return;

    // HOVER — тултип
    $el.on("mouseenter", function (e) {
      currentHoverId = key;

      $tooltipTitle.text(id.toUpperCase());
      $tooltipBtnWrap.empty();
      $tooltip.removeClass("tooltip-reserved tooltip-paid tooltip-free");

      if (data.status === "free") {
        $tooltip.addClass("tooltip-free");
        $tooltipStatus.text("FREE STAND");
        var $btn = $('<div class="speachTolltip">more info</div>');
        $tooltipBtnWrap.append($btn);
      } else if (data.status === "reserved") {
        $tooltip.addClass("tooltip-reserved");
        $tooltipStatus.text("STAND RESERVED");
      } else if (data.status === "paid") {
        $tooltip.addClass("tooltip-paid");
        $tooltipStatus.text("STAND PAID FOR");
      } else {
        $tooltipStatus.text("");
      }

      showTooltipAt(e.pageX, e.pageY);
    });

    $el.on("mousemove", function (e) {
      if (currentHoverId === key) {
        $tooltip.css({ top: e.pageY + 14, left: e.pageX + 14 });
      }
    });

    $el.on("mouseleave", function () {
      hideTooltip();
    });

    // CLICK — открываем popup6 только для free стендов
    $el.on("click", function (ev) {
      ev.stopPropagation();
      if (data.status !== "free") return;
      hideTooltip();
      openStandPopup(key);
    });
  });

  // универсальная защита: если клики вне (в документе) — закрыть открытые стенд-попапы
  $(document).on("click", function (e) {
    // если клик вне popup6 и popup6 видим — закроем его
    if ($standPopup.is(":visible")) {
      if ($(e.target).closest(".popup6").length === 0) {
        closeStandPopup();
      }
    }
  });

  // Esc закрывает стенд-попап если он открыт
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      if ($standPopup.is(":visible")) {
        closeStandPopup();
      }
    }
  });



  // Для мобильных

  if (/Mobi|Android/i.test(navigator.userAgent)) {
  $("#mapSVG [id]").on("touchstart", function(e){
    e.preventDefault(); // чтобы panZoom не съел клик
    $(this).trigger("click");
  });
}

if (/Mobi|Android/i.test(navigator.userAgent)) {
  $("#mapSVG [id]").on("click touchstart", function(e){
    e.stopPropagation();
    e.preventDefault();

    var $el = $(this);
    var id = $el.attr("id");
    var key = id.toLowerCase();
    var data = standsData[key];
    if(!data) return;

    currentHoverId = key;
    $tooltipTitle.text(id.toUpperCase());
    $tooltipBtnWrap.empty();
    $tooltip.removeClass("tooltip-reserved tooltip-paid tooltip-free");

    if(data.status === "free"){
      $tooltip.addClass("tooltip-free");
      $tooltipStatus.text("FREE STAND");
      // кнопка в тултипе
      var $btn = $('<div class="speachTolltip">more info</div>');
      $tooltipBtnWrap.append($btn);
    } else if(data.status === "reserved"){
      $tooltip.addClass("tooltip-reserved");
      $tooltipStatus.text("STAND RESERVED");
    } else if(data.status === "paid"){
      $tooltip.addClass("tooltip-paid");
      $tooltipStatus.text("STAND PAID FOR");
    }

    var bbox = this.getBoundingClientRect();
    showTooltipAt(bbox.left + bbox.width/2, bbox.top + bbox.height/2);
  });
}


});



});



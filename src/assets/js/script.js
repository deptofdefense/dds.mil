$(function() {
  var $header = $('#fixed-header');
  var $main = $('main');

  function initializeSectionSpies() {
    $.fn.scrollspy('destroy');
    $('.usa-current').removeClass('usa-current');

    if (window.innerWidth > 600) { // $medium-screen
      $header.scrollspy({
        min: 1, // 153 (expanded header) - 64 (collapsed header)
        max: $main.height(),
        onEnter: function() {
          $header.addClass('collapsed');
        },
        onLeave: function() {
          $header.removeClass('collapsed');
       }
      });
    }

    $main.find('section[id]').each(function() {
      var $this = $(this);
      var $link = $('.dds-nav a[href="#' + this.id + '"]');
      var position = $this.position();
      $this.scrollspy({
        min: position.top - 50,
        max: position.top + $this.height(),
        onEnter: function() {
          $link.addClass('usa-current');
        },
        onLeave: function() {
          $link.removeClass('usa-current');
        }
      });
    });
  }

  initializeSectionSpies();

  var resizeTimeout;
  $(window).on('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initializeSectionSpies, 250);
  });

  $('.dds-nav ul').on('click', 'a', function() {
    $(window).scrollTo(this.getAttribute('href'), 250);
    toggleMobileNav();
    return false;
  });

  $mobileNav = $('.dds-nav');
  $mobileNavButton = $('.dds-mobile-nav-toggle');
  function toggleMobileNav() {
    $mobileNav.toggleClass('mobile-nav-hidden');
    $mobileNavButton.toggleClass('mobile-nav-hidden');
  }

  $mobileNavButton.on('click', toggleMobileNav);

  $('.staff-members img[title*="Noah"]').hover(
    function() {
      $(this).attr('src', 'assets/img/staff/noah_firth_af.jpg');
    },
    function() {
      $(this).attr('src', 'assets/img/staff/noah_firth.jpg');
    }
  );

});

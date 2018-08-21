$(function() {
  var $header = $('#fixed-header');
  var $main = $('main');

  function initializeSectionSpies() {
    $.fn.scrollspy('destroy');
    $('.usa-current').removeClass('usa-current');

    if (window.innerWidth > 600) { // $medium-screen
      $header.scrollspy({
        min: 89, // 153 (expanded header) - 64 (collapsed header)
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

  $( 'a[href^="http"]:not(.target-link)' ).on( "click", function() {
    var domain = this.href.split('/')[2];
    var tld = domain.substring(domain.length - 3);
    if (tld != 'gov' && tld != 'mil' && domain != 'medium.com' && domain != 'github.com' && domain != 'twitter.com') {
      $( '.site-alert-overlay' ).show();
      $( '.site-alert' ).show();
      var targetLink = $( '.site-alert .target-link')
      targetLink.text(this.href);
      targetLink.attr("href", this.href);
      return false;
    }
  });

  $( '.site-alert .close, .site-alert .target-link, .site-alert-overlay' ).on( "click", function() {
    $( '.site-alert-overlay' ).hide();
    $( '.site-alert' ).hide();
  });
});

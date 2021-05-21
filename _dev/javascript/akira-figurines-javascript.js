$(function () {
  // Makes the parallax elements
  function parallaxIt() {
    // Create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var $backgrounds = [];

    // For each of background parallax element
    $('[data-type="background"]').each(function () {
      var $backgroundObj = $(this);

      $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
      $backgroundObj.__fgOffset = $backgroundObj.offset().top;
      $backgrounds.push($backgroundObj);
    });

    // Update positions
    $fwindow.on('scroll resize', function () {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      $backgrounds.forEach(function ($backgroundObj) {
        var yPos = ((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

        $backgroundObj.css({
          backgroundPosition: 'center ' + yPos + 'px'
        });
      });
    });

    // Triggers window scroll for refresh
    $fwindow.trigger('scroll');
  };

  parallaxIt();


  // Smoth Scroll
  $('a[href*=\\#]:not([href=\\#])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 120
        }, 1000);
        return false;
      }
    }
  });

  // ==================
  // Load Defered Fonts
  // ==================
  $("<link />", {
    'rel': 'stylesheet',
    'href': 'assets/css/akira-figurines-styles-fonts.min.css'
  }).appendTo('head');
});
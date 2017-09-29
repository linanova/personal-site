console.log(`
  __/\\____/\\____/\\____/\\____/\\____/\\____/\\____/\\____/\\__
  \\    /\\    /\\    /\\    /\\    /\\    /\\    /\\    /\\    /
  /_  _\\/_  _\\/_  _\\/_  _\\/_  _\\/_  _\\/_  _\\/_  _\\/_  _\\
    \\/    \\/    \\/    \\/    \\/    \\/    \\/    \\/    \\/

       _      _ _         _____ _                     __
  | | | | ___| | | ___   |_   _| |__   ___ _ __ ___   \\ \\
  | |_| |/ _ \\ | |/ _ \\    | | | '_ \\ / _ \\ '__/ _ \\ (_) |
  |  _  |  __/ | | (_) |   | | | | | |  __/ | |  __/  _| |
  |_| |_|\\___|_|_|\\___/    |_| |_| |_|\\___|_|  \\___| (_) |
                                                      /_/

  __/\\____/\\____/\\____/\\____/\\____/\\____/\\____/\\____/\\__
  \\    /\\    /\\    /\\    /\\    /\\    /\\    /\\    /\\    /
  /_  _\\/_  _\\/_  _\\/_  _\\/_  _\\/_  _\\/_  _\\/_  _\\/_  _\\
    \\/    \\/    \\/    \\/    \\/    \\/    \\/    \\/    \\/

`);

$(document).ready(function(){

  // add opaque header background when scrolled
  $(window).scroll(function(){
    let scrollPos = $(window).scrollTop();
    scrollPos > 100 ? $('#header').addClass('opaque-header') : $('#header').removeClass('opaque-header');

    if (scrollPos <= $(window).height()/2) {
      $('#header nav li').removeClass();
      return;
    }

    $("#header nav a").each(function() {
      let href = $(this).attr('href');
      let sectionPos = $(href).position().top;

      if (sectionPos <= (scrollPos + $(window).height()/2)) {
        $('#header nav li').removeClass();
        $(this).parent().addClass("theme-color-bg");
      }
    });
  });
  $(window).scroll();

  // smooth nav scrolling with jquery.scrollTo
  $("nav a").click(function(e){
    e.preventDefault();

    $('#header nav li').removeClass();
    $(this).parent().addClass("theme-color-bg");

    let scrollTo = $(this.hash).offset().top - $('#header').height();
    $('html,body').scrollTo(scrollTo, this.hash);
  });

});

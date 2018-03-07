(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };


    //prevent img drag
    $('img').on('dragstart', function (event) { event.preventDefault(); });


//Submenu accordion script
                $('#nav > li > a').click(function(){
                if ($(this).attr('class') != 'active'){
                  $('#nav li ul').slideUp();
                  $(this).next().slideToggle();
                  $('#nav li a').removeClass('active');
                  $(this).addClass('active');
              }
              else
              {
                  $(this).next().slideToggle();
                   $('#nav li a').removeClass('active');
              }
            
        }); 


        console.log("If you are reading this. You are a boss.");

}(this, this.document));


$.fn.replicate = function(options) {

  var S = $.extend({
            // These are the defaults.
            speed:500,
            total: 100,
            random: true,
            mode: 'once' // ONCE: Generates all elements at once.  STEP: Generates one per "speed" interval (ms)
        }, options );

    var me = $(this); //store instance of this for later use in the set interval function below.
    var counter = 0;

    if(S.mode === "step"){

      $('body').find(me).remove();

      var gogogadget = setInterval(function(){

        if( S.total != 0 ){ counter++ };

        if(counter >= S.total && S.total != 0){
          clearInterval(gogogadget);
        }

        if(S.random){
          var rw = Math.random() * (window.innerWidth - me.width());
          var rh = Math.random() * (window.innerHeight - me.height());
          // console.log(rw + " || " + rh);

          $(me).css({
            'position':'absolute',
            'top': rh,
            'left':rw
          })

        }

        $('body').append(me.clone());

      }, S.speed);

    } else {

      for(var i=0;i<S.total;i++){

        $('body').append($(this).clone())

        if(S.random){
          var rw = Math.random() * (window.innerWidth - $(this).width());
          var rh = Math.random() * (window.innerHeight - $(this).height());;

          $(this).css({
            'position':'absolute',
            'top': rh,
            'left':rw
          })

        }
      }; //close for loop
    }
};


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

$.fn.populate = function(options) {

  var S = $.extend({
            random: false,
            direction: 'forward' //forward appends the next child element from '.content' to the screen. other params: forward, backward, random, non-repeating-random
        }, options );

        var me = $(this); //store instance of this for later use in the set interval function below.
        var myChildren = me.children().toArray();

        me.empty();

        // if going backward, index needs to start at the max number and count back.
        if(S.direction === 'backward'){
          index = myChildren.length;
        } else {
          var index = -1;
        }

        //we saved our data, let's clear the box and redraw.

        for(var i=0;i<myChildren.length;i++){


          if(S.direction === 'forward'){
            index++;
          } else if (S.direction === 'backward'){
            index--;
          } else {
            if(S.direction === 'no-repeat'){
              // algorithm pulled from answers here:  http://stackoverflow.com/questions/19351759/javascript-random-number-out-of-5-no-repeat-until-all-have-been-used
            } else {
              index = Math.floor(Math.random() * myChildren.length);
              console.log(index);
            }

            if(S.random){
              var rw = Math.random() * (window.innerWidth - $(myChildren[i]).width());
              var rh = Math.random() * (window.innerHeight - $(myChildren[i]).height());

              $(myChildren[index]).css({
                'position':'absolute',
                'top': rh,
                'left':rw
              });
            }
            me.append(myChildren[index]);
            //me.append(myChildren[index];
          }
        }; //close for loop
};

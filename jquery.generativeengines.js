
$.fn.replicate = function(options) {

  var S = $.extend({
            // These are the defaults.
            speed:500,
            total: 100,
            random: true,
            mode: 'once' // ONCE: Generates all elements at once.  STEP: Generates one per "speed" interval (ms)
        }, options );

    var me = $(this); //store instance of this for later use in the set interval function below.
    var w = me.width() //store width and height before we remove the original element
    var h = me.height()
    $('body').find(me).remove();

    var counter = 0;

    if(S.mode === "step"){


      var gogogadget = setInterval(function(){

        if( S.total != 0 ){ counter++ };

        if(counter >= S.total && S.total != 0){
          clearInterval(gogogadget);
        }

        if(S.random){
          var rw = Math.random() * (window.innerWidth - w);
          var rh = Math.random() * (window.innerHeight - h );
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

        $('body').append(me.clone())

        if(S.random){
          var rw = Math.random() * (window.innerWidth - w );
          var rh = Math.random() * (window.innerHeight - h );;

          me.css({
            'position':'absolute',
            'top': rh,
            'left':rw
          })

        }
      }; //close for loop
    }
};

// $.fn.populate = function(options) {
//
//   var S = $.extend({
//             random: false,
//             direction: 'forward' //forward appends the next child element from '.content' to the screen. other params: forward, backward, random, non-repeating-random
//         }, options );
//
//         var me = $(this); //store instance of this for later use in the set interval function below.
//         var myChildren = me.children().toArray();
//
//         me.empty();
//
//         // if going backward, index needs to start at the max number and count back.
//         if(S.direction === 'backward'){
//           index = myChildren.length;
//         } else {
//           var index = -1;
//         }
//
//         //we saved our data, let's clear the box and redraw.
//
//         for(var i=0;i<myChildren.length;i++){
//
//
//           if(S.direction === 'forward'){
//             index++;
//           } else if (S.direction === 'backward'){
//             index--;
//           } else {
//             if(S.direction === 'no-repeat'){
//               // algorithm pulled from answers here:  http://stackoverflow.com/questions/19351759/javascript-random-number-out-of-5-no-repeat-until-all-have-been-used
//               //amny answers for non-repeating-random dont have end to end detection ie if the first 'set' ends in a 5 and the second set starts in a '5' we have a problem here is my answer to it, although, its maybe overkill: https://gist.github.com/bmoren/a829c21e89fa249ab5a4
//             } else {
//               index = Math.floor(Math.random() * myChildren.length);
//               console.log(index);
//             }
//
//             if(S.random){
//               var rw = Math.random() * (window.innerWidth - $(myChildren[i]).width());
//               var rh = Math.random() * (window.innerHeight - $(myChildren[i]).height());
//
//               $(myChildren[index]).css({
//                 'position':'absolute',
//                 'top': rh,
//                 'left':rw
//               });
//             }
//             me.append(myChildren[index]);
//             //me.append(myChildren[index];
//           }
//         }; //close for loop
// };


$.fn.populate = function(options) {
    var S = $.extend({
              random: false,
              direction: 'forward' //forward appends the next child element from '.content' to the screen. other params: forward, backward, random, non-repeating-random
          }, options );

          // console.log(myChildren);
          var length = $(this).children().length


          if($(this).children().data('populate') == undefined){ //see if this is the first time we have called the method, if so, assign a populate-next to an element depending on direction. INIT!

            if(S.direction === 'forward'){
              $(this).children().eq(0).data('populate-next', true );
            }
            if(S.direction === 'backward'){
              $(this).children().eq(length-1).data('populate-next', true );
            }

            if(S.direction === 'random' || S.direction === 'non-repeating-random'){
              var rand = Math.floor(Math.random()*length);
              $(this).children().eq(rand).data('populate-next', true );
            }

          } //close undefined populate

          $(this).children().data('populate', true) // mark that we have alredy assigned a populate-next somewhere.


            var stored_index = 0;

            for(var i=0;i<=length;i++){
              if($(this).children().eq(i).data('populate-next')){ //are we the one to render?
                $(this).children().eq(i).removeData('populate-next') //now move the render tag to the next one!

                var me = $(this).children().eq(i).clone() //this is the one we want.

                $('body').append(me) //ok cool, add to screen

                if(S.random){

                  var w = me.width()
                  var h = me.height()

                  var rw = Math.random() * (window.innerWidth - w );
                  var rh = Math.random() * (window.innerHeight - h );

                  me.css({
                    'position':'absolute',
                    'top': rh,
                    'left':rw
                  })

                }//close random

                stored_index = i //store the index value for use below incase we need to loop back to the top.
              } //close the populate-next check
            } //close for loop

          if(S.direction === 'forward'){
            //setup for next round
            if(stored_index == length-1){
              $(this).children().eq(0).data('populate-next', true );
            }else{
              $(this).children().eq(stored_index+1).data('populate-next', true );
            }

          } //close S.forward

          if(S.direction === 'backward'){
            //setup for next round
            if(stored_index == 0){
              $(this).children().eq(length-1).data('populate-next', true );
            }else{
              $(this).children().eq(stored_index-1).data('populate-next', true );
            }

          } //close S.backward

          if(S.direction === 'random'){
            //setup for next round
              var rand = Math.floor(Math.random()*length);
              $(this).children().eq(rand).data('populate-next', true );
          } //close S.random


          if(S.direction === 'non-repeating-random'){

            // oh boy!

          } //close S.random



}

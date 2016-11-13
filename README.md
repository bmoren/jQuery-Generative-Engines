# jQuery-Generative-Engines
Generative Engines for jQuery Projects

---
### .replicate()
.replicate() replicates a selected item a specific number of times. Takes an optional object of options with `total`, `random`,`speed`, `mode` parameters. `total` defines how many copies to render to the screen. `random` defines if the copies should be randomly placed on the screen using absolute positioning with random top and left values. `mode`
determines the mode of which there are two: `once` renders all replicants to the screen immediately. `step` renders one replicant to the screen per `speed` interval. In the example below `.image` will be replicated and placed in the window at a random location once every 500ms (half second) until there are 100 replicants placed into the window.
```html

<img class='image' src='cool.jpg'>

<!-- include jQuery and plugin before -->
<script type="text/javascript">

$('.image').replicate({
  speed:500, // the speed at which to replicate if using step mode below.
  total: 100, // the amount of times to replicate, use 0 for infinite
  random: false, //TRUE: random placement in the whole page. FALSE: standard block level hierarchy.
  mode: 'step', // ONCE: Generates all elements at once.  STEP: Generates one per "speed" interval (ms)
  hide: true //Hides the original element when the method is called, useful if you do not want to show the original content and have it appear out of nowhere.
});
</script>
```
---

---
### .populate()
.populate() grabs the children of a selected element and iterates through them on each subsequent call. .populate() uses some [data](https://api.jquery.com/data/) caching in order to track the current and future position of stepping through children elements.

.populate() takes an optional options object with 3 parameters.

`random` defines if the copies should be randomly placed on the screen using absolute positioning with random top and left values. default `random: true`

`direction` can be defined as `'forward'`, `'backward'`, `'random'`, `'non-repeating-random'`. `'forward'` appends the next child element, top to bottom, to the screen. `'backward'` appends the next child element, bottom to top, to the screen. `'random'` appends a random child element to the screen. `'non-repeating-random'` appends a random child element to the screen, but will never have the chance to give you the same 2 child elements in a row. default `direction: 'random'`

```html
<div class="box">
  <span>ONE</span>
  <span>TWO</span>
  <a href="#">THREE</a>
  <button>FOUR</button>
</div>


<!-- include jQuery and plugin before -->
<script type="text/javascript">

$(window).click(function(){

  $('.box').populate({
    random: true, //TRUE: random placement in the whole page. FALSE: standard block level hierarchy.
    direction: 'forward', //direction params: forward, backward, random, non-repeating-random // forward appends the next child element, top to bottom, to the screen. //backward appends the next child element, bottom to top, to the screen. //random appends a random child element to the screen. //non-repeating-random appends a random child element to the screen, but will never have the chance to give you the same 2 child elements in a row.
    hide: true //Hides the parent and child elements when the method is called, useful if you do not want to show the original content and have it appear out of nowhere.
  })

})

</script>
```
---

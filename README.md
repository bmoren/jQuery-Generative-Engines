# jQuery-Generative-Engines
Generative Engines for jQuery Projects

---
### .replicate()
Replicates a selected item a specific number of times. Takes an optional object of options with `total`, `random`,`speed`, `mode` parameters. `total` defines how many copies to render to the screen. `random` defines if the copies should be randomly placed on the screen using absolute positioning with random top and left values. `mode`
determines the mode of which there are two: `once` renders all replicants to the screen immediately. `step` renders one replicant to the screen per `speed` interval. In the example below `.image` will be replicated and placed in the window at a random location once every 500ms (half second) until there are 100 replicants placed into the window.
```html

<img class='image' src='cool.jpg'>

<!-- include jQuery and plugin before -->
<script type="text/javascript">

$('.image').replicate({
  speed:500, // the speed at which to replicate if using step mode below.
  total: 100, // the amount of times to replicate, use 0 for infinite
  random: false, //TRUE: random placement in the whole page. FALSE: standard block level hierarchy.
  mode: 'step' // ONCE: Generates all elements at once.  STEP: Generates one per "speed" interval (ms)
});
</script>
```
---

---
### .populate()
tktk

```html


<!-- include jQuery and plugin before -->
<script type="text/javascript">


</script>
```
---

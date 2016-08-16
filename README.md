# jQuery-Generative-Engines
Generative Engines for jQuery Projects

---
### .replicate()
#### $.replicate(options)
Replicates a selected item a specific number of times. Takes an optional object of options with `total` and `random` parameters. `total` defines how many copies to render to the screen. `random` defines if the copies should be randomly placed on the screen using absolute positioning with random top and left values. Default is `{ total:100, random:true }`

```html

<img class='image' src='cool.jpg'>

<!-- include jQuery and plugin before -->
<script type="text/javascript">

  $('.image').replicate({
      total:100,
      random: true
  }); // creates 100 copies of cool.jpg in random places on the screen.

</script>
```
---
### .iterate()
#### $.iterate(options)
Replicates a selected item a specific number of times at a set rate. Takes an optional object of options with `speed`, `total` and `random` parameters `speed` argument determines how fast to add things to the screen in milliseconds. `total` argument determines how many instances should be added. Use 0 for infinity instances. `random` argument positions elements with random top and left absolute positioning within the browser window. Default is `{ speed:500, total:100, random:true }`

```html

<img class='image' src='cool.jpg'>

<!-- include jQuery and plugin before -->
<script type="text/javascript">

$('.image').iterate({
      speed: 100,
      total:100,
      random: false
});// adds a copy of cool.jpg to the screen every 500 milliseconds up to 100 copies. Places the copies in random places on the screen.

</script>
```
---





todo:
1. make initial element disappear when selected
1. generate from array
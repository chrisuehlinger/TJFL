// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: false,
    history: true,
    center: true,
    viewDistance: 3,

    transition: 'convex', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true }
    ]
});

var globeOptions = {
  speedOfLight: 200,
  thrust: 5,
  width: 960,
  height: 700,
  startingCount: 0,
  endCount: 100,
  expansionFactor: 1.01,
  additionDelay: 5,
  expansionWait: 5000,
  expansionDelay: 0,
  maxExpansion: 5,
  cooldownFactor: 0.9,
  collisionForce: 0.1,
  useForceLayout: false,
  useCollisions: true,
  outlineParticles: false,
  renderGraticules: true,
  renderPlanet: false,
  projection: 'Globe',
  shipCentered: true,
  paused: true
};

var globeUniverse = new SphericalUniverse('#globeUniverse', globeOptions);
globeUniverse.init();
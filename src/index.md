---
layout: base.njk
title: Home
bodyClass: home-page
---

<div class="home">
  <p class="home-tagline" data-greek="Ἡ χείρ μιμνήσκεται ἃ ἡ διάνοια ἐπιλαθέσθαι βούλεται"><span>The Hand Remembers What The Mind Aims To Forget</span></p>
  <p class="home-truth">Attention is a moral act.</p>
  <a href="/philosophy/" class="triad-mark cycling" id="triad">
    <span class="triad-word triad-1"><span class="greek">χείρ</span><span class="english">hand</span></span>
    <span class="triad-dot">·</span>
    <span class="triad-word triad-2"><span class="greek">μνήμη</span><span class="english">memory</span></span>
    <span class="triad-dot">·</span>
    <span class="triad-word triad-3"><span class="greek">προσοχή</span><span class="english">attention</span></span>
  </a>
  <script>
    setTimeout(function() {
      var triad = document.getElementById('triad');
      if (triad) {
        triad.classList.remove('cycling');
        triad.classList.add('settled');
        
        // Add hover effects for background
        var words = triad.querySelectorAll('.triad-word');
        words.forEach(function(word) {
          word.addEventListener('mouseenter', function() {
            document.body.classList.remove('bg-aima', 'bg-thanatochromia', 'bg-aporia');
            if (word.classList.contains('triad-1')) document.body.classList.add('bg-aima');
            if (word.classList.contains('triad-2')) document.body.classList.add('bg-thanatochromia');
            if (word.classList.contains('triad-3')) document.body.classList.add('bg-aporia');
          });
          word.addEventListener('mouseleave', function() {
            document.body.classList.remove('bg-aima', 'bg-thanatochromia', 'bg-aporia');
          });
        });
      }
    }, 5800);
  </script>
  <nav class="home-nav">
    <a href="/products/" data-greek="ἔργα"><span>products</span></a>
    <a href="/materials/" data-greek="ὕλη"><span>materials</span></a>
    <a href="/dyes/" data-greek="βαφαί"><span>dyes</span></a>
    <a href="/contact/" data-greek="ἁφή"><span>contact</span></a>
  </nav>
</div>
<!-- built 2026-01-29T22:39:13-06:00 -->

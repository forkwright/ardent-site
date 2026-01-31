---
layout: base.njk
title: Ardent Leatherworks
description: "Heirloom leather goods. Hermann Oak vegetable-tanned leather, solid brass, hand saddle-stitched. The hand remembers what the mind tries to forget."
bodyClass: home-page
---

<div class="home">
  <p class="home-tagline" data-alt="Attention is a moral act."><span>The Hand Remembers<br>What The Mind Tries To Forget</span></p>
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
      }
    }, 6000);
  </script>
  <nav class="home-nav">
    <a href="/products/" data-greek="ἔργα"><span>products</span></a>
    <a href="/materials/" data-greek="ὕλη"><span>materials</span></a>
    <a href="/dyes/" data-greek="βαφαί"><span>dyes</span></a>
    <a href="/contact/" data-greek="ἁφή"><span>contact</span></a>
  </nav>
</div>
<!-- built 2026-01-29T22:39:13-06:00 -->

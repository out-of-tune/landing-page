<template>


 <!-- put element here-->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 905.55 717.96">
<title>Element 4</title>
<g id="Ebene_2" data-name="Ebene 2">
<g id="Ebene_3" data-name="Ebene 3">

<g id="Ebene_4" ref="up">
    <rect class="cls-1" x="2.77" y="37.34" width="245.86" height="307.59"/>
    <rect class="cls-1" x="512.47" y="59.24" width="245.86" height="409.28"/>

    <polyline class="cls-1" points="271.98 151.3 271.98 344.92 467.1 344.92 467.1 59.24"/>
    <polyline class="cls-1" points="352.28 41.86 496.81 41.86 629.43 41.86"/>
    <line class="cls-1" x1="490.85" y1="349.44" x2="490.85" y2="41.86"/>
</g>

<g id="Ebene_6" ref="down">
    <polyline class="cls-1" points="780.81 468.52 780.81 335.51 780.81 246.15 905.55 246.15"/>
    <line class="cls-1" x1="905.55" y1="334.69" x2="777.41" y2="334.69"/>
    <polyline class="cls-1" points="108.08 372.51 252.62 372.51 385.23 372.51"/>
    <line class="cls-1" x1="246.66" y1="680.09" x2="246.66" y2="372.51"/>
    <polyline class="cls-1" points="269.54 389.89 269.54 677.77 464.65 677.77 464.65 372.51"/>
    <polyline class="cls-2" points="487.63 680.35 487.63 479.49 669.79 680.35 669.79 479.49"/>
    <polyline class="cls-3" points="791.18 680.35 695.99 680.35 695.99 574.5 695.99 482.1 905.55 482.1"/>
    <line class="cls-4" x1="791.18" y1="573.95" x2="695.99" y2="573.95"/>
</g>
<g id="Ebene_5" ref="inner">
  <rect x="23.2" y="59.2" class="cls-5" width="198.8" height="264.1"/>
  <rect x="23.2" y="76" class="cls-5" width="198.8" height="198.8"/>
  <rect x="54.1" y="76" class="cls-5" width="136.7" height="198.8"/>
  <rect x="543.4" y="89.2" class="cls-5" width="181.1" height="350.1"/>
  <rect x="562.5" y="89.2" class="cls-5" width="138.9" height="350.1"/>
  <rect x="578.7" y="88.8" class="cls-5" width="105" height="350.1"/>
  <polyline class="cls-5" points="445.8,128.7 445.8,327.5 293.3,327.5 293.3,128.7"/>
  <polyline class="cls-5" points="445.8,171.8 445.3,299.8 293.8,299.8 293.3,171.8"/>
  <polyline class="cls-5" points="290.9,460.8 290.9,659.6 443.3,659.6 443.3,460.8"/>
  <polyline class="cls-5" points="290.9,480.5 290.9,632.8 443.3,632.8 443.3,480.5"/>
  <polyline class="cls-5" points="309,480.5 309,633 426.9,633 426.9,480.5"/>
</g>

<line ref="outlineDOWN" class="cls-4" x1="2.77" y1="715.99" x2="905.55" y2="715.99"/>
<line ref="outlineUP" class="cls-5" x1="2.77" y1="1.98" x2="905.55" y2="1.98"/>

</g>
</g>
</svg>

</template>

<script>
import { TweenMax, Sine, TimelineLite } from 'gsap'

export default {
  methods: {
    startSlide() {
        const timeline = new TimelineLite()
        timeline.add(this.biggerAnim(this.$refs.outlineDOWN, 0.5))
        timeline.add(this.biggerAnim(this.$refs.outlineUP))
        timeline.add(this.slideAnim(this.$refs.up, -100))
        timeline.add(this.slideAnim(this.$refs.down, 100, -0.7))
        timeline.add(this.fadeAnim(this.$refs.inner))

        return timeline
    },
    slideAnim(el, dis, delay) {
      return TweenMax.from(el, 1, {
        y: dis,
        opacity: 0,
        repeat: 0,
        yoyo: false,
        svgOrigin: '50 45',
        ease: Sine.easeInOut,
        delay: delay
      })
    },
    fadeAnim(el) {
      return TweenMax.from(el, 2, {
        opacity: 0,
        repeat: 0,
        yoyo: false,
        ease: Sine.easeInOut
      })
    },
    biggerAnim(el) {
      return TweenMax.from(el, 0.5, {
        scale: 0
      })
    }
  },
   mounted() {
       this.startSlide()
   }
}
</script>
<style scoped>.cls-1,.cls-2,.cls-3,.cls-4,.cls-5{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2,.cls-3,.cls-4{stroke:#da6a1d;}.cls-1{stroke-width:5.53px;}.cls-2{stroke-width:5.44px;}.cls-3{stroke-width:5.5px;}.cls-4,.cls-5{stroke-width:3.95px;}.cls-5{stroke:#d8ae91;}
</style>



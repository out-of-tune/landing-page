<template>
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="250 200 1500 1500" >
    <g>
      <rect ref="rect01" x="805" y="630" width="300" height="300" transform="matrix(1,0,0,1,0,0)" fill="rgb(218,106,29)"/>
      <rect ref="rect02" x="773" y="1305" width="183" height="250" transform="matrix(1,0,0,1,0,0)" fill="rgb(0,132,141)"/>
      <rect ref="rect03" x="1135" y="680" width="250" height="250" transform="matrix(1,0,0,1,0,0)" fill="rgb(29,205,218)"/>
      <path ref="triangle01" d=" M 1260 450 L 1385 650 L 1135 650 L 1260 450 Z " fill="rgb(0,132,141)"/>
      <path ref="triangle02" d=" M 955 1210 L 805 960 L 1105 960 L 955 1210 Z " fill="rgb(241,78,20)"/>
      <path ref="triangle03" d=" M 1276 1470 L 986 1635 L 986 1305 L 1276 1470 Z " fill="rgb(29,205,218)"/>
      <circle ref="circle01" vector-effect="non-scaling-stroke" cx="955" cy="425" r="175" fill="rgb(241,78,20)"/>
      <circle ref="circle02" vector-effect="non-scaling-stroke" cx="625" cy="855" r="150" fill="rgb(0,132,141)"/>
      <path ref="hexagon" d=" M 1301.666 1248 L 1135.222 1248 L 1052 1103.855 L 1135.222 959.71 L 1301.666 959.71 L 1384.889 1103.855 L 1301.666 1248 Z " fill="rgb(218,106,29)"/>
      <path ref="triangle04" d=" M 956 1275 L 590 1275 L 772.999 960 L 956 1275 Z " fill="rgb(29,205,218)"/>
    </g>
</svg>

</template>

<script>
import { TweenMax, TimelineLite } from 'gsap'
import SimplexNoise from 'simplex-noise'

function Map(value, minP, maxP, minN, maxN){
  return (maxN-minN)/(maxP-minP)*(value-maxP)+maxN
}
function CalcNoiseValue(a, diameter){
  let xoff = Map(Math.cos(a), -1, 1, 0, diameter)
  let yoff = Map(Math.sin(a), -1, 1, 0, diameter)

  // console.log("angle: " + a)
  // console.log("xoff: "+xoff+"; yoff: "+yoff)

  let r = simplex.noise2D(xoff,yoff)
  let x = Map(r, -1, 1, -200, 200)
  return x
}
const TWO_PI = 2 * Math.PI
const simplex = new SimplexNoise('outoftune')

export default {
  data() {
    return {

    }
  },
  methods: {
    startAnim() {
      // const timeline = new TimelineLite()
      let tl1 = new TimelineLite()
      tl1 = this.CreateLoop(this.$refs.circle01, tl1, 5, 1, 0.3)

      let tl2 = new TimelineLite()
      tl2 = this.CreateLoop(this.$refs.circle02, tl2, 5, 2, 0.3)

      let tl3 = new TimelineLite()
      tl3 = this.CreateLoop(this.$refs.rect01, tl3, 5, 3, 0.3)

      let tl4 = new TimelineLite()
      tl4 = this.CreateLoop(this.$refs.rect02, tl4, 5, 4, 0.3)

      let tl5 = new TimelineLite()
      tl5 = this.CreateLoop(this.$refs.rect03, tl5, 5, 5, 0.3)

      let tl6 = new TimelineLite()
      tl6 = this.CreateLoop(this.$refs.triangle01, tl6, 5, 2, 0.2)

      let tl7 = new TimelineLite()
      tl7 = this.CreateLoop(this.$refs.triangle02, tl7, 5, 3, 0.3)

      let tl8 = new TimelineLite()
      tl8 = this.CreateLoop(this.$refs.triangle03, tl8, 5, 4, 0.3)
      
      let tl9 = new TimelineLite()
      tl9 = this.CreateLoop(this.$refs.triangle04, tl9, 5, 1, 0.3)

      let tl10 = new TimelineLite()
      tl10 = this.CreateLoop(this.$refs.hexagon, tl10, 5, 0.5, 0.1)


      let mtl = new TimelineLite({onComplete: function(){
          mtl.restart()
        }})
      mtl.add(tl1, 0)
      mtl.add(tl2, 0)
      mtl.add(tl3, 0)
      mtl.add(tl4, 0)
      mtl.add(tl5, 0)
      mtl.add(tl6, 0)
      mtl.add(tl7, 0)
      mtl.add(tl8, 0)
      mtl.add(tl9, 0)
      mtl.add(tl10, 0)
      
      mtl.play()
    },
    CreateLoop: function (el, tl, iterations, diameter, duration){
      for (let i = 0; i <= iterations; i++){
        let a = i * TWO_PI / iterations
        let value2d = CalcNoiseValue(a, diameter)
        let offset = CalcNoiseValue(0, diameter)
        let tween = TweenMax.to(el, duration, {
            x: value2d - offset
          }
        )
        // console.log(value2d + offset)
        tl.add(tween)
      }
      return tl
    }
  },
   mounted() {
       this.startAnim()
   },
   beforeDestroy() {
     TweenMax.killAll()
   }
}
</script>




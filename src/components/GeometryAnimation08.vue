<template>
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 400 400">
    <defs>
    </defs>
    <g>
      <circle ref="geometry" cx="200" cy="200" r="50" stroke="rgb(29,205,218)" stroke-width="2" @click="scaleAnim"/>
    </g>
</svg>

</template>

<script>
import { TweenMax, Linear, TimelineLite } from 'gsap'
import SimplexNoise from 'simplex-noise'

function Map(value, minP, maxP, minN, maxN){
  return (maxN-minN)/(maxP-minP)*(value-maxP)+maxN
}
function CalcNoiseValue(a, diameter, dis){
  let xoff = Map(Math.cos(a), -1, 1, 0, diameter)
  let yoff = Map(Math.sin(a), -1, 1, 0, diameter)
  let r = simplex.noise2D(xoff+dis,yoff)
  return r
}
const TWO_PI = 2 * Math.PI
const simplex = new SimplexNoise()

export default {
  data() {
    return {
      scale: 1
    }
  },
  methods: {
    startAnim() {
      let geometry = this.$refs.geometry

      let mtl = new TimelineLite({onComplete: function(){
        mtl.restart()
      }})
      
      let diameter = 1
      let tl1 = new TimelineLite()
      tl1 = this.CreateLoop(geometry, tl1, 100, diameter, 0.1)
      mtl.add(tl1)
      
      mtl.play()
    },
    CreateLoop: function (obj, tl, iterations, diameter, duration){
      for (let i = 0; i <= iterations; i++){
        let a = i * TWO_PI / iterations
        let noiseValues = []
        noiseValues.push(CalcNoiseValue(a, 1, 0))
        noiseValues.push(CalcNoiseValue(a, 1, 10))
        noiseValues.push(CalcNoiseValue(a, 1, 20))
        let noiseOffsetValues = []
        noiseOffsetValues.push(CalcNoiseValue(0, 1, 0))
        noiseOffsetValues.push(CalcNoiseValue(0, 1, 10))
        noiseOffsetValues.push(CalcNoiseValue(0, 1, 20))
        
        // let scale= Map(noiseValues[0], -1, 1, 0.8, 1.2)
        // let scale_off= Map(noiseOffsetValues[0], -1, 1, 0.8, 1.2)
        // scale = scale - scale_off + 1
        // console.log(scale)

        let red= Map(noiseValues[0],-1,1,0,150) 
        let green= Map(noiseValues[1],-1,1,0,150) 
        let blue= Map(noiseValues[2],-1,1,0,150)

        let x = Map(noiseValues[0], -1, 1, 150, 250)
        let x_off = Map(noiseOffsetValues[0], -1, 1, 150, 250)
        x = x - x_off

        let y = Map(noiseValues[1], -1, 1, 150, 250)
        let y_off = Map(noiseOffsetValues[1], -1, 1, 150, 250)
        y = y - y_off

        let fill = "rgb("+red+","+green+","+blue+")"

        let opac = Map(noiseValues[1],-1,1,0.2,0.7)
        let tween = TweenMax.to(obj,duration,{
          x: x,
          y: y,
          // scale: scale,
          opacity: opac,
          attr:{fill:fill},
          ease: Linear.easeNone,
          transformOrigin: '50% 50%'
        })
        tl.add(tween, 'id'+i)
      }
      return tl
    },
    scaleAnim() {
      let bubble = this.$refs.geometry
      this.scale = this.scale + 0.3
      if (this.scale > 3) this.scale = 8
      new TweenMax(bubble, 0.3, {
        scale: this.scale
      })
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




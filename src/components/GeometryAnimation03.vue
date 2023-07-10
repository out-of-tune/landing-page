<template>
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="100 70 500 400" >
    <defs>
    </defs>
    <g ref="geometry">
      <path ref="path" d="M350 200 L275 400 L425 400 Z" fill="rgb(29,205,218)"/>              
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
    }
  },
  methods: {
    startAnim() {
      let geometry = this.$refs.path
      // console.log(this.geometry)

      let mtl = new TimelineLite({onComplete: function(){
        mtl.restart()
      }})
      
      let diameter = 1
      let tl1 = new TimelineLite()
      tl1 = this.CreateLoop(geometry, tl1, 1000, diameter, 0.01)
      // console.log(mtl)
      mtl.add(tl1)
      
      mtl.play()
    },
    CreateLoop: function (el, tl, iterations, diameter, duration){
      for (let i = 0; i <= iterations; i++){
        let a = i * TWO_PI / iterations

        let points = [350, 200, 275, 400, 425, 400]
        let noiseValues = []
        let offsetValues = []
        points.forEach((index)=>{
          noiseValues.push(CalcNoiseValue(a, diameter, index*100))
          offsetValues.push(CalcNoiseValue(0, diameter, index*100))
        })

        points.forEach((value, index)=>{
          points[index] = Map(noiseValues[index], -1, 1, -50, 50) - Map(offsetValues[index], -1, 1, -50, 50) + value
        })
        
        let path = "M"+points[0]+" "+points[1]+" L"+points[2]+" "+points[3]+" L"+points[4]+" "+points[5]+" Z"
        // console.log(path)
        
        let tween = TweenMax.to(el,duration,{
            attr:{d:path},
            ease: Linear.easeNone
          });
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




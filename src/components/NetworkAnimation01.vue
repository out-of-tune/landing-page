<template>
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 300 700 400" >
    <defs>
    </defs>
    <g ref="geometry">
      <polyline ref="line" points="100,500 200,500 300,500 400,500 500,500 600,500"
      style="fill:none;stroke:rgb(29,205,218);stroke-width:3" />
      <g ref="circles">
        <circle cx="100" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="200" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="300" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="400" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="500" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="600" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />  
      </g>
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
      let line = this.$refs.line
      let circles = this.$refs.circles
      let geometry = {
        line: line,
        circles: circles
      }

      let mtl = new TimelineLite({onComplete: function(){
        mtl.restart()
      }})
      
      let diameter = 1
      let tl1 = new TimelineLite()
      tl1 = this.CreateLoop(geometry, tl1, 50, diameter, 0.1)
      mtl.add(tl1)
      
      mtl.play()
    },
    CreateLoop: function (obj, tl, iterations, diameter, duration){
      for (let i = 0; i <= iterations; i++){
        let a = i * TWO_PI / iterations

        let points = [500, 500, 500, 500, 500, 500]
        let noiseValues = []
        let offsetValues = []
        points.forEach((value, index)=>{
          noiseValues.push(CalcNoiseValue(a, diameter, index*100))
          offsetValues.push(CalcNoiseValue(0, diameter, index*100))
        })

        points.forEach((value, index)=>{
          points[index] = Map(noiseValues[index], -1, 1, -100, 100) - Map(offsetValues[index], -1, 1, -100, 100) + value
        })
        
        let path = "100,"+points[0]+" 200,"+points[1]+" 300,"+points[2]+" 400,"+points[3]+" 500,"+points[4]+" 600,"+points[5]
        
        let tween01 = TweenMax.to(obj.line,duration,{
          attr:{points:path},
          ease: Linear.easeNone
        })


        points.forEach((value, index)=>{
          let tween = TweenMax.to(obj.circles.children[index],duration,{
            y: points[index]-500,
            ease: Linear.easeNone
          })
          tl.add(tween, 'id'+i)
        })

        tl.add(tween01, 'id'+i)
      }
      return tl
    }
  },
   mounted() {
       this.startAnim()
   }
}
</script>




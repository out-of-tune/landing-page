<template>
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="50 150 900 800" >
    <defs>
    </defs>
    <g ref="geometry">
      <g ref="circles">
        <circle cx="500" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="500" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="500" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="500" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="500" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />
        <circle cx="500" cy="500" r="15" stroke="rgb(29,205,218)" stroke-width="2" />  
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
      
      // console.log(this.geometry)

      let mtl = new TimelineLite({onComplete: function(){
        mtl.restart()
      }})
      
      let diameter = 1
      let tl1 = new TimelineLite()
      tl1 = this.CreateLoop(geometry, tl1, 50, diameter, 0.1)
      // console.log(mtl)
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
        
        // console.log(noiseValues)

        // console.log(obj.circles.children[0])

        points.forEach((value, index)=>{
          var scale= -1*(points[index]-500)/10
          var red= Map(noiseValues[0],-1,1,0,255) 
          var green= Map(noiseValues[1],-1,1,0,255) 
          var blue= Map(noiseValues[index],-1,1,0,255) 
          var strokev = "rgb("+red+","+green+","+blue+")"
          var opac = Map(noiseValues[1],-1,1,0.5,1)
          let tween = TweenMax.to(obj.circles.children[index],duration,{
            y: (points[index]-500),
            x: (points[index]-500),
            scale: scale,
            opacity: opac,
            attr:{stroke:strokev},
            ease: Linear.easeNone
          })
          tl.add(tween, 'id'+i)
        })



      }
      let tween2 = TweenMax.to(this.$refs.circles, iterations*duration,{
          rotation: 360,
          ease: Linear.easeNone,
          transformOrigin: "50 50",
        })
        tl.add(tween2,"id"+0)
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




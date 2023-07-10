<template>
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="-100 0 600 600">
    <defs>
      <filter id="f3" x="0" y="0" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>
    <g ref="geometry">
      <path ref="path" d="M250 0 L0 500 L500 500 Z" fill="rgb(29,205,218)"/>
      <path ref="path2" d="M250 100 L0 500 L500 500 Z" fill="rgb(218,106,29)" filter="url(#f3)"/>
      <path ref="path3" d="M250 200 L0 500 L500 500 Z" fill="rgb(0,132,141)" filter="url(#f3)" />         
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
      let geometry = [
        this.$refs.path,
        this.$refs.path2,
        this.$refs.path3
      ]

      let mtl = new TimelineLite({
        onComplete: function(){
          mtl.restart()
        }
      })
      
      let diameter = 1
      let tl1 = new TimelineLite()
      tl1 = this.CreateLoop(geometry, tl1, 100, diameter, 0.3)
      // console.log(mtl)
      mtl.add(tl1)
      
      mtl.play()
    },
    CreateLoop: function (elements, tl, iterations, diameter, duration){
      for (let i = 0; i <= iterations; i++){
        let a = i * TWO_PI / iterations

        let triangles = [
          {
            points: [250, 0, 0, 500, 500, 500]
          },
          {
            points: [250, 100, 0, 500, 500, 500]
          },
          {
            points: [250, 200, 0, 500, 500, 500]
          }
        ]

        // calculate new points with shift from origin position
        const triangles_alt = triangles.map((triangle, index) => {
          const t_index = index+1
          const points = triangle.points.map((point, index) => {
            const range = [-100, 100]
            const offset = Map(CalcNoiseValue(0, diameter, index*100), -1, 1, range[0], range[1])
            const offset_ti = Map(CalcNoiseValue(0, diameter+t_index, index*100), -1, 1, range[0], range[1])
            
            let point_alt = 0
            if (index == 0){
              point_alt = Map(CalcNoiseValue(a, diameter+t_index, index*100), -1, 1, range[0], range[1]) - offset_ti + point
            }
            else {
              point_alt = Map(CalcNoiseValue(a, diameter, index*100), -1, 1, range[0], range[1]) - offset + point
            }

            if (point_alt < 0) point_alt = 0
            if (point_alt > 500) point_alt = 500
            return point_alt
          })
          return {
            points: points
          }
        })

        // create tween for each element
        const tweens = elements.map((element, index) => {
          let points = triangles_alt[index].points
          let path = "M"+points[0]+" "+points[1]+" L"+points[2]+" "+points[3]+" L"+points[4]+" "+points[5]+" Z"

          let tween = TweenMax.to(element,duration,{
            attr:{d:path},
            ease: Linear.easeNone
          })

          return tween
        })
        tweens.forEach(tween => {
          tl.add(tween, "id"+i)
        })
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




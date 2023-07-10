<template>
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 2000 2000">
    <defs>
        <clipPath id="_clipPath_nkqwlvGJ9rAuXg1zsdNrRcyijZG5c31f">
            <rect width="2000" height="2000"/>
        </clipPath>
    </defs>
    <g clip-path="url(#_clipPath_nkqwlvGJ9rAuXg1zsdNrRcyijZG5c31f)">
        <g style="isolation:isolate">
            <g ref="geometry">
                <rect x="805" y="630" width="300" height="300" transform="matrix(1,0,0,1,0,0)" fill="rgb(218,106,29)"/>
                <rect x="250" y="600" width="183" height="250" transform="matrix(1,0,0,1,0,0)" fill="rgb(0,132,141)"/>
                <rect x="1135" y="680" width="250" height="250" transform="matrix(1,0,0,1,0,0)" fill="rgb(29,205,218)"/>
                <rect x="500" y="300" width="250" height="250" transform="matrix(1,0,0,1,0,0)" fill="rgb(29,205,218)"/>
                <circle vector-effect="non-scaling-stroke" cx="350" cy="450" r="120" fill="rgb(241,78,20)"/>
                <path d=" M 1260 450 L 1385 650 L 1135 650 L 1260 450 Z " fill="rgb(0,132,141)"/>
                <path d=" M 955 1210 L 805 960 L 1105 960 L 955 1210 Z " fill="rgb(241,78,20)"/>
                <!-- <path d=" M 1276 1470 L 986 1635 L 986 1305 L 1276 1470 Z " fill="rgb(29,205,218)"/> -->
                <circle vector-effect="non-scaling-stroke" cx="955" cy="425" r="175" fill="rgb(241,78,20)"/>
                <circle vector-effect="non-scaling-stroke" cx="625" cy="755" r="150" fill="rgb(0,132,141)"/>
                <!-- <path d=" M 1301.666 1248 L 1135.222 1248 L 1052 1103.855 L 1135.222 959.71 L 1301.666 959.71 L 1384.889 1103.855 L 1301.666 1248 Z " fill="rgb(218,106,29)"/> -->
                <path d=" M 956 1275 L 590 1275 L 772.999 960 L 956 1275 Z " fill="rgb(29,205,218)"/>
            </g>
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
function CalcNoiseValue(a, diameter){
  let xoff = Map(Math.cos(a), -1, 1, 0, diameter)
  let yoff = Map(Math.sin(a), -1, 1, 0, diameter)

  // console.log("angle: " + a)
  // console.log("xoff: "+xoff+"; yoff: "+yoff)

  let r = simplex.noise2D(xoff,yoff)
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
      let geometry = this.$refs.geometry.childNodes

      let mtl = new TimelineLite({onComplete: function(){
          mtl.restart()
        }})
      geometry.forEach((item, index)=>{
        let diameter = Map(simplex.noise2D(index, index), -1, 1, 0.5, 4)
        let tl1 = new TimelineLite()
        mtl.add(tl1, 0)
      })
      
      mtl.play()
    },
    CreateLoop: function (el, tl, iterations, diameter, duration){
      for (let i = 0; i <= iterations; i++){
        let a = i * TWO_PI / iterations
        let value2d = CalcNoiseValue(a, diameter)
        let offset = CalcNoiseValue(0, diameter)
        let tween = TweenMax.to(el, duration, {
            x: Map(value2d, -1, 1, -200, 200) - Map(offset, -1, 1, -200, 200),
            y: Map(value2d, -1, 1, -100, 100) - Map(offset, -1, 1, -100, 100),
            scale: Map(value2d, -1, 1, -0.5, 0.5) - Map(offset, -1, 1, -0.5, 0.5) + 1,
            opacity: Map(value2d, -1, 1, 0, 0.6),
            ease: Linear.easeNone
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




<template>
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="100 100 300 300">
    <defs>
    </defs>
    
    <g ref="lines">
      <line x1="250" y1="250" x2="250" y2="250" style="stroke:rgb(29,205,218);stroke-width:2" />
      <line x1="250" y1="250" x2="250" y2="250" style="stroke:rgb(29,205,218);stroke-width:2" />  
      <line x1="250" y1="250" x2="250" y2="250" style="stroke:rgb(29,205,218);stroke-width:2" />  
      <line x1="250" y1="250" x2="250" y2="250" style="stroke:rgb(29,205,218);stroke-width:2" />
      <line x1="250" y1="250" x2="250" y2="250" style="stroke:rgb(29,205,218);stroke-width:2" />
      <line x1="250" y1="250" x2="250" y2="250" style="stroke:rgb(29,205,218);stroke-width:2" />  
      <line x1="250" y1="250" x2="250" y2="250" style="stroke:rgb(29,205,218);stroke-width:2" />  
      <line x1="250" y1="250" x2="250" y2="250" style="stroke:rgb(29,205,218);stroke-width:2" />  
          
    </g>
    <g ref="outer_circles">
      <circle cx="250" cy="250" r="8" stroke="rgb(29,205,218)" stroke-width="2" fill="rgb(0, 132, 141)"/>
      <circle cx="250" cy="250" r="8" stroke="rgb(29,205,218)" stroke-width="2" fill="rgb(0, 132, 141)"/>
      <circle cx="250" cy="250" r="8" stroke="rgb(29,205,218)" stroke-width="2" fill="rgb(0, 132, 141)"/>
      <circle cx="250" cy="250" r="8" stroke="rgb(29,205,218)" stroke-width="2" fill="rgb(0, 132, 141)"/>
      <circle cx="250" cy="250" r="8" stroke="rgb(29,205,218)" stroke-width="2" fill="rgb(0, 132, 141)"/>
      <circle cx="250" cy="250" r="8" stroke="rgb(29,205,218)" stroke-width="2" fill="rgb(0, 132, 141)"/>
      <circle cx="250" cy="250" r="8" stroke="rgb(29,205,218)" stroke-width="2" fill="rgb(0, 132, 141)"/>
      <circle cx="250" cy="250" r="8" stroke="rgb(29,205,218)" stroke-width="2" fill="rgb(0, 132, 141)"/>
    </g>
    <circle ref="inner_circle" cx="250" cy="250" r="12" stroke="rgb(29,205,218)" stroke-width="2" @click="startAnim" @mouseleave="reverseAnim"/>  
</svg>

</template>

<script>
import { TweenMax, Linear, TimelineLite } from 'gsap'

function Map(value, minP, maxP, minN, maxN){
  return (maxN-minN)/(maxP-minP)*(value-maxP)+maxN
}

function map(collection, callback){
  var iterationInputs = [];
  for (var i = 0; i < collection.length; i++){
    iterationInputs.push(callback(collection[i]));
  }
  return iterationInputs;
}

const TWO_PI = 2 * Math.PI

export default {
  data() {
    return {
      mtl: {},
      blinkingTl: {}
    }
  },
  methods: {
    initAnim() {
      let outerCircles = this.$refs.outer_circles.children
      let lines = this.$refs.lines.children

      const fraction = TWO_PI / outerCircles.length
      const diameter = 200
      const duration = 0.5
      let c = 0;
      const positions = map(outerCircles, ()=>{
        const c_fraction = c * fraction
        const x = Map(Math.cos(c_fraction), -1, 1, -diameter/2, diameter/2)
        const y = Map(Math.sin(c_fraction), -1, 1, -diameter/2, diameter/2)
        const position = {
          x: x,
          y: y
        }
        c++
        return position
      })

      positions.forEach((pos, index) => {
        let tween = TweenMax.to(outerCircles[index], duration, {
          x: pos.x,
          y: pos.y,
        })
        let tween2 = TweenMax.to(lines[index], duration, {
          attr: {x2: ""+(pos.x+250), y2: ""+(pos.y+250)}
        })
        
        this.mtl.add(tween, "start")
        this.mtl.add(tween2, "start")
      })

      this.mtl.stop()
    },
    startAnim() {
      this.mtl.play()
      this.blinkingTl.stop()
    },
    reverseAnim() {
      this.mtl.reverse()
      this.blinkingTl.play()
    },
    initBlinking() {
      let innerCircle = this.$refs.inner_circle

      let tl = new TimelineLite({
        onComplete: function(){
          tl.restart()
        }
      })

      let tween = new TweenMax.to(innerCircle, 0.5, {
        fill: "rgb(29,205,218)",
        ease: Linear.easeNone
      })

      let tween2 = new TweenMax.to(innerCircle, 0.5, {
        fill: "rgb(0,0,0)",
        ease: Linear.easeNone
      })

      tl.add(tween)
      tl.add(tween2)
      this.blinkingTl = tl
    }
  },
   mounted() {
      this.mtl = new TimelineLite()
      this.initAnim()
      this.initBlinking()
      console.log(this.mtl)
   },
   beforeDestroy() {
     TweenMax.killAll()
   }
}
</script>




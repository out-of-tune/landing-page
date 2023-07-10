<template>
<div id="wrapper">
  <svg :width="svgWidth" :height="svgHeight">
    <rect
        v-for="(value, index) in data" :key="value.index"
        :x="x(index)" 
        :y="line.y"
        :width="line.width"
        :height="line.height"
    />
  </svg>
</div>
</template>

<script>
import SimplexNoise from 'simplex-noise'

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
      svgWidth: 500,
      svgHeight: 500,
      data: [0,0,0,0,0,0,0,0,0,0,0],
      data2: [10,10,10,10,10,10,10,10,10,10,10],
      line: {
        height: 20,
        width: 10,
        y: 100
      }
    }
  },
  methods: {
      x(i) {
          return (this.svgWidth / this.data.length) * i
      },
      calcData(parts, i){
            let a = i * TWO_PI / parts

            // this.data.forEach((value, index)=>{
            //     if (index == 0){
            //         this.data2[index] = Map(CalcNoiseValue(a, 1, 0), -1, 1, 0, 100)
            //     }
            //     else {
            //         this.data2[index] = this.data2[index-1]
            //     }
            // })

            // animate value with gsap
            this.lineHeight = Map(CalcNoiseValue(a, 1, 0), -1, 1, 0, 100)

            if(i==parts)i=0
            // setTimeout(this.calcData(parts, i), 1000)

      }
  },
  computed: {
    getHeight: function(){
        return this.data2
    }
  },
  mounted() {
      this.calcData(20, 0)
  }
}
</script>
<style scoped>
    rect {
        fill:seagreen;
    }
</style>





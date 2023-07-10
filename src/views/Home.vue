<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <particle-wrapper></particle-wrapper>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HeaderAnimation.vue'
import ParticleWrapper from '@/components/ParticleWrapper.vue'

export default {
  name: 'home',
  components: {
    ParticleWrapper
  }
}
</script>

<style scoped>

</style>

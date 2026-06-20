<template>
  <div class="particle-background">
    <div class="particle" v-for="i in particleCount" :key="i" :style="getParticleStyle()"></div>
  </div>
</template>

<script>
export default {
  name: 'ParticleBackground',
  data() {
    return {
      particleCount: 30
    }
  },
  methods: {
    getParticleStyle() {
      const randomX = Math.random() * 100
      const randomY = Math.random() * 100
      const randomDelay = Math.random() * 20
      const randomDuration = 15 + Math.random() * 10
      const randomSize = 2 + Math.random() * 4
      
      return {
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        animationDelay: `${randomDelay}s`,
        animationDuration: `${randomDuration}s`
      }
    }
  }
}
</script>

<style scoped>
.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  50% {
    transform: translateY(-100px) translateX(50px) scale(1.2);
    opacity: 0.5;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-200px) translateX(-30px) scale(0.8);
    opacity: 0;
  }
}
</style>

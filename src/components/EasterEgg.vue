<template>
  <transition name="egg-fade">
    <div v-if="show" class="easter-egg" @click="close">
      <div class="egg-content" @click.stop>
        <div class="egg-icon">🎉</div>
        <h2>你发现了彩蛋！</h2>
        <p>看起来你已经掌握了双击回车的精髓！</p>
        <p class="egg-hint">这就是 Double Enter 的核心功能</p>
        <div class="egg-animation">
          <div class="key-demo">
            <div class="key">↵</div>
            <div class="key">↵</div>
          </div>
          <div class="arrow">→</div>
          <div class="result">🔐</div>
        </div>
        <button @click="close" class="egg-button">明白了！</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'EasterEgg',
  data() {
    return {
      show: false,
      lastEnterTime: 0,
      enterCount: 0
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyPress)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  },
  methods: {
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        const currentTime = Date.now()
        const timeDiff = currentTime - this.lastEnterTime
        
        if (timeDiff < 500) {
          this.enterCount++
          if (this.enterCount >= 2) {
            this.show = true
            this.triggerConfetti()
            this.enterCount = 0
          }
        } else {
          this.enterCount = 1
        }
        
        this.lastEnterTime = currentTime
      }
    },
    close() {
      this.show = false
    },
    triggerConfetti() {
      // 简单的五彩纸屑效果
      const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b']
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          this.createConfetti(colors[Math.floor(Math.random() * colors.length)])
        }, i * 30)
      }
    },
    createConfetti(color) {
      const confetti = document.createElement('div')
      confetti.style.position = 'fixed'
      confetti.style.width = '10px'
      confetti.style.height = '10px'
      confetti.style.backgroundColor = color
      confetti.style.left = Math.random() * 100 + '%'
      confetti.style.top = '-10px'
      confetti.style.borderRadius = '50%'
      confetti.style.pointerEvents = 'none'
      confetti.style.zIndex = '10000'
      confetti.style.animation = 'confettiFall 3s ease-out forwards'
      
      document.body.appendChild(confetti)
      
      setTimeout(() => {
        confetti.remove()
      }, 3000)
    }
  }
}
</script>

<style scoped>
.easter-egg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
}

.egg-content {
  background: white;
  border-radius: 30px;
  padding: 60px 50px;
  max-width: 500px;
  text-align: center;
  cursor: default;
  animation: eggBounce 0.6s ease-out;
}

.egg-icon {
  font-size: 80px;
  margin-bottom: 20px;
  animation: rotate 2s ease-in-out infinite;
}

.egg-content h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.egg-content p {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.6;
}

.egg-hint {
  font-size: 14px;
  color: #999;
  margin-bottom: 30px;
}

.egg-animation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  padding: 30px;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border-radius: 20px;
}

.key-demo {
  display: flex;
  gap: 10px;
}

.key {
  width: 50px;
  height: 50px;
  background: white;
  border: 3px solid #667eea;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #667eea;
  box-shadow: 0 4px 10px rgba(102, 126, 234, 0.2);
  animation: keyPress 1s ease-in-out infinite;
}

.key:nth-child(2) {
  animation-delay: 0.5s;
}

.arrow {
  font-size: 32px;
  color: #667eea;
  font-weight: 700;
}

.result {
  font-size: 48px;
  animation: pulse 1s ease-in-out infinite;
}

.egg-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.egg-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

@keyframes eggBounce {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(-100px);
  }
  60% {
    transform: scale(1.1) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes rotate {
  0%, 100% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

@keyframes keyPress {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(102, 126, 234, 0.3);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.egg-fade-enter-active, .egg-fade-leave-active {
  transition: opacity 0.3s ease;
}

.egg-fade-enter-from, .egg-fade-leave-to {
  opacity: 0;
}
</style>

<style>
@keyframes confettiFall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>

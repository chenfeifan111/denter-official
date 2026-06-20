<template>
  <transition name="fade">
    <div v-if="show" class="loading-screen">
      <div class="loading-content">
        <div class="logo-animation">
          <div class="lock-icon">🔐</div>
          <div class="loading-text">Double Enter</div>
        </div>
        <div class="loading-bar">
          <div class="loading-progress" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="loading-tip">{{ loadingTip }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoadingScreen',
  data() {
    return {
      show: true,
      progress: 0,
      loadingTips: [
        '正在加载资源...',
        '初始化安全模块...',
        '准备就绪...'
      ],
      currentTipIndex: 0
    }
  },
  computed: {
    loadingTip() {
      return this.loadingTips[this.currentTipIndex]
    }
  },
  mounted() {
    this.startLoading()
  },
  methods: {
    startLoading() {
      const interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += Math.random() * 30
          if (this.progress > 100) this.progress = 100
          
          // 切换提示文字
          if (this.progress > 30 && this.currentTipIndex === 0) {
            this.currentTipIndex = 1
          } else if (this.progress > 70 && this.currentTipIndex === 1) {
            this.currentTipIndex = 2
          }
        } else {
          clearInterval(interval)
          setTimeout(() => {
            this.show = false
            this.$emit('loaded')
          }, 500)
        }
      }, 300)
    }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
  color: white;
}

.logo-animation {
  margin-bottom: 40px;
}

.lock-icon {
  font-size: 80px;
  animation: lockPulse 2s ease-in-out infinite;
}

.loading-text {
  font-size: 32px;
  font-weight: 700;
  margin-top: 20px;
  letter-spacing: 1px;
  animation: fadeInUp 1s ease-out;
}

.loading-bar {
  width: 300px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto 20px;
}

.loading-progress {
  height: 100%;
  background: white;
  border-radius: 10px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.loading-tip {
  font-size: 14px;
  opacity: 0.8;
  animation: fadeIn 0.5s ease-out;
}

@keyframes lockPulse {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.1) rotate(-5deg);
  }
  75% {
    transform: scale(1.1) rotate(5deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <section id="home" class="hero">
    <ParticleBackground />
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <span>🎉</span>
          <span>您的私密文件保险箱</span>
        </div>
        
        <h1 class="hero-title">
          Double Enter
          <span class="gradient-text">双击回车，即刻隐藏</span>
        </h1>
        
        <p class="hero-description">
          一款强大的文件加密管理应用，采用独特的双击回车快速隐藏机制，
          让您的私密文件安全无忧。支持多种文件类型，跨平台访问，隐私保护专家
          <strong style="display: block; margin-top: 15px; font-size: 20px; color: #fff;">
            🎉 完全免费，永久免费 🎉
          </strong>
        </p>
        
        <div class="hero-buttons">
          <a href="#download" class="btn btn-primary">
            <span>⬇️</span>
            <span>立即下载</span>
          </a>
          <a href="#features" class="btn btn-secondary">
            <span>📖</span>
            <span>了解更多</span>
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">💯</div>
            <div class="stat-label">永久免费</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">本地加密</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">500ms</div>
            <div class="stat-label">隐藏速度</div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="floating-card card-1">
          <div class="card-icon">🔒</div>
          <div class="card-text">密码保护</div>
        </div>
        <div class="floating-card card-2">
          <div class="card-icon">⚡</div>
          <div class="card-text">快速隐藏</div>
        </div>
        <div class="floating-card card-3">
          <div class="card-icon">📱</div>
          <div class="card-text">跨设备访问</div>
        </div>
        <div class="hero-illustration">
          <div class="illustration-circle"></div>
          <div class="illustration-lock">🔐</div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-arrow">↓</div>
    </div>
  </section>
</template>

<script>
import ParticleBackground from './ParticleBackground.vue'

export default {
  name: 'HeroSection',
  components: {
    ParticleBackground
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px 50px;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: pulse 4s ease-in-out infinite;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  margin-bottom: 30px;
  animation: fadeIn 1s ease-out 0.2s both;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.gradient-text {
  display: block;
  background: linear-gradient(90deg, #fff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 40px;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.hero-visual {
  position: relative;
  height: 500px;
  animation: fadeIn 1s ease-out 0.7s both;
}

.floating-card {
  position: absolute;
  background: white;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 15px;
  animation: float 3s ease-in-out infinite;
}

.card-1 {
  top: 50px;
  left: 0;
  animation-delay: 0s;
}

.card-2 {
  top: 200px;
  right: 50px;
  animation-delay: 0.5s;
}

.card-3 {
  bottom: 100px;
  left: 30px;
  animation-delay: 1s;
}

.card-icon {
  font-size: 32px;
}

.card-text {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.hero-illustration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.illustration-circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 3px solid rgba(255, 255, 255, 0.2);
  animation: rotate 20s linear infinite;
}

.illustration-lock {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  animation: pulse 2s ease-in-out infinite;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s ease-in-out infinite;
}

.scroll-arrow {
  color: white;
  font-size: 32px;
  opacity: 0.7;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    padding: 80px 20px 30px;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .stat-number {
    font-size: 24px;
  }

  .stat-label {
    font-size: 12px;
  }

  .hero-visual {
    height: 300px;
  }

  .floating-card {
    padding: 15px 20px;
  }

  .card-icon {
    font-size: 24px;
  }

  .card-text {
    font-size: 14px;
  }

  .illustration-circle {
    width: 200px;
    height: 200px;
  }

  .illustration-lock {
    font-size: 60px;
  }
}
</style>

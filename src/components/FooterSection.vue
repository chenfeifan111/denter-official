<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <span class="logo-icon">🔐</span>
            <span class="logo-text">{{ appName }}</span>
          </div>
          <p class="brand-slogan">
            {{ appSlogan }}<br>
            {{ appDescription }}
          </p>

        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>产品</h4>
            <a href="#features">功能特性</a>
            <a href="#download">下载应用</a>
            <a href="#screenshots">应用截图</a>
            <a href="#">更新日志</a>
          </div>

          <div class="link-group">
            <h4>支持</h4>
            <a href="#feedback">用户反馈</a>
            <a href="#">使用文档</a>
            <a href="#">常见问题</a>
            <a href="#">视频教程</a>
          </div>

          <div class="link-group">
            <h4>关于</h4>
            <a href="#">关于我们</a>
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
            <a href="#">联系我们</a>
          </div>

          <div class="link-group">
            <h4>社区</h4>
            <a href="#">GitHub</a>
            <a href="#">QQ 交流群</a>
            <a href="#">用户论坛</a>
            <a href="#">开发者文档</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <p>© {{ currentYear }} Double Enter. All rights reserved.</p>
        </div>
        <div class="footer-badges">
          <span class="badge">🛡️ 隐私优先</span>
          <span class="badge">⚡ 快速安全</span>
        </div>
      </div>

      <div class="back-to-top" @click="scrollToTop" :class="{ 'visible': showBackToTop }">
        <span>↑</span>
      </div>
    </div>
  </footer>
</template>

<script>
import config from '../config'

export default {
  name: 'FooterSection',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      showBackToTop: false,
      appName: config.app.name,
      appSlogan: config.app.slogan,
      appDescription: config.app.description,
      social: config.social
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.scrollY > 500
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px 30px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 60px;
  margin-bottom: 50px;
}

.footer-brand {
  animation: fadeInUp 1s ease-out;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 36px;
}

.logo-text {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.brand-slogan {
  font-size: 16px;
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 30px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  animation: fadeInUp 1s ease-out 0.1s both;
}

.link-group h4 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  opacity: 1;
}

.link-group a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.link-group a:hover {
  color: white;
  transform: translateX(5px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeIn 1s ease-out 0.2s both;
}

.copyright {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.copyright p {
  font-size: 14px;
  opacity: 0.8;
}

.tech-stack {
  font-size: 13px;
  opacity: 0.7;
}

.footer-badges {
  display: flex;
  gap: 10px;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background: white;
  color: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 100;
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* 响应式设计 */
@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer-badges {
    flex-wrap: wrap;
    justify-content: center;
  }

  .back-to-top {
    bottom: 20px;
    right: 20px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 50px 20px 20px;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .social-links {
    justify-content: center;
  }

  .copyright {
    align-items: center;
  }
}
</style>

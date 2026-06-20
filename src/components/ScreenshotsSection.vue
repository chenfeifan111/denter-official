<template>
  <section id="screenshots" class="screenshots">
    <div class="screenshots-container">
      <div class="section-header">
        <div class="section-badge">📸 应用截图</div>
        <h2 class="section-title">优雅的界面设计</h2>
        <p class="section-description">
          简洁现代的用户界面，强大功能触手可及
        </p>
      </div>

      <div class="screenshots-grid">
        <div 
          v-for="(screenshot, index) in screenshots" 
          :key="index"
          class="screenshot-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="screenshot-placeholder">
            <div class="placeholder-icon">{{ screenshot.icon }}</div>
            <div class="placeholder-text">{{ screenshot.title }}</div>
          </div>
          <div class="screenshot-info">
            <h3>{{ screenshot.title }}</h3>
            <p>{{ screenshot.description }}</p>
          </div>
        </div>
      </div>

      <div class="video-demo">
        <div class="video-container">
          <div class="video-placeholder">
            <div class="play-button">▶️</div>
            <p>观看演示视频</p>
            <span class="video-duration">了解 Double Enter 如何保护您的隐私</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScreenshotsSection',
  data() {
    return {
      screenshots: [
        {
          icon: '🔐',
          title: '密码登录界面',
          description: '简洁安全的密码验证界面，支持桌面和移动端'
        },
        {
          icon: '📂',
          title: '文件管理主界面',
          description: '直观的文件浏览和管理界面，支持多种视图模式'
        },
        {
          icon: '🎬',
          title: '内置媒体播放器',
          description: '强大的视频播放功能，支持多种格式'
        },
        {
          icon: '🖼️',
          title: '图片查看器',
          description: '高质量图片预览，流畅的缩放和浏览体验'
        },
        {
          icon: '⚙️',
          title: '设置界面',
          description: '灵活的配置选项，自定义您的使用体验'
        },
        {
          icon: '🔍',
          title: '搜索与筛选',
          description: '强大的搜索功能，快速定位目标文件'
        }
      ]
    }
  }
}
</script>

<style scoped>
.screenshots {
  padding: 100px 20px;
  background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
}

.screenshots-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-out;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  color: #333;
  margin-bottom: 15px;
  animation: fadeInUp 1s ease-out 0.1s both;
}

.section-description {
  font-size: 18px;
  color: #666;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.screenshot-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: fadeInUp 1s ease-out both;
}

.screenshot-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
}

.screenshot-placeholder {
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.screenshot-placeholder::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

.placeholder-icon {
  font-size: 64px;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
  animation: pulse 2s ease-in-out infinite;
}

.placeholder-text {
  font-size: 18px;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.screenshot-info {
  padding: 25px;
}

.screenshot-info h3 {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.screenshot-info p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.video-demo {
  margin-top: 60px;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.video-container {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.video-placeholder {
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.video-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.video-placeholder:hover {
  transform: scale(1.02);
}

.play-button {
  font-size: 80px;
  margin-bottom: 20px;
  opacity: 0.9;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.video-placeholder:hover .play-button {
  transform: scale(1.1);
  opacity: 1;
}

.video-placeholder p {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.video-duration {
  font-size: 14px;
  opacity: 0.8;
  position: relative;
  z-index: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .screenshots {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-description {
    font-size: 16px;
  }

  .screenshots-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .screenshot-placeholder {
    height: 200px;
  }

  .placeholder-icon {
    font-size: 48px;
  }

  .placeholder-text {
    font-size: 16px;
  }

  .video-container {
    padding: 20px;
  }

  .video-placeholder {
    height: 300px;
  }

  .play-button {
    font-size: 60px;
  }

  .video-placeholder p {
    font-size: 20px;
  }
}
</style>

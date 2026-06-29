<template>
  <section id="features" class="features">
    <div class="features-container">
      <div class="section-header">
        <div class="section-badge">✨ 核心功能</div>
        <h2 class="section-title">强大的安全特性</h2>
        <p class="section-description">
          Double Enter 为您提供全方位的隐私保护方案，让文件管理既安全又便捷
        </p>
      </div>

      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-tags">
            <span 
              v-for="(tag, tagIndex) in feature.tags" 
              :key="tagIndex"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="security-highlight">
        <div class="highlight-content">
          <div class="highlight-icon">🛡️</div>
          <div class="highlight-text">
            <h3>企业级安全保障</h3>
            <p>采用先进的加密算法，确保您的数据安全无虞。本地存储，无云端泄露风险。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        {
          icon: '⚡',
          title: '双击回车老板键',
          description: '全局键盘监听，500ms内连按两次回车键（Double Enter）即可瞬间隐藏应用窗口，如同传统老板键，紧急情况下一秒切换保护隐私。',
          tags: ['老板键', '快捷键', '紧急隐藏']
        },
        {
          icon: '🛡️',
          title: '容错性：密码错误自动伪装',
          description: '输入错误密码时不会提示错误，而是自动跳转到预设的伪装页面（如网址导航、新闻网站），让他人以为这只是普通网页，完美保护隐私。',
          tags: ['智能容错', '自动伪装', '防暴力破解']
        },
        {
          icon: '🔐',
          title: '安全性：全文件加密无密码存储',
          description: '所有文件采用加密算法存储，数据库中不保存明文密码。即使数据库泄露也无法还原文件内容，真正的军事级安全保障。',
          tags: ['文件加密', '无密码存储', '军事级安全']
        },
        {
          icon: '🖱️',
          title: '易用性：零学习成本操作',
          description: '完全模仿电脑文件夹操作方式，拖拽上传、右键菜单、文件夹管理，如同使用Windows资源管理器一样简单，像吃饭一样轻松上手。',
          tags: ['0门槛', '拖拽操作', '右键菜单']
        },
        {
          icon: '💾',
          title: 'U盘加密支持',
          description: '可安装到U盘使用，将文件加密存储在U盘中。支持便携使用，即插即用，随身携带您的加密文件库。',
          tags: ['U盘加密', '便携使用', '即插即用']
        },
        {
          icon: '📦',
          title: '文件加密机制说明',
          description: '重要提示：将文件拖入应用后，文件会被加密并存储到应用目录中。原始文件不会自动删除，需要您手动删除原文件。应用内看到的是加密后的文件副本，确保数据安全。',
          tags: ['加密副本', '原文件保留', '手动删除']
        },
        {
          icon: '🎭',
          title: '404伪装界面',
          description: '桌面端默认显示404错误页面作为伪装，高度隐蔽。密码被恶意清空时自动锁定并跳转伪装页，防止数据泄露。',
          tags: ['高度隐蔽', '防篡改']
        },
        {
          icon: '🎬',
          title: '全格式多媒体支持',
          description: '完美支持视频、音频、图片、文本等多种文件类型，内置播放器和查看器。支持视频截帧设置封面，文本在线编辑。',
          tags: ['视频', '音频', '图片', '文本']
        },
        {
          icon: '📱',
          title: '局域网跨设备访问',
          description: '支持局域网内手机、平板、电脑无缝访问。移动端智能识别，自动适配界面，随时随地管理您的加密文件。',
          tags: ['局域网', '移动端', '跨设备']
        },
        {
          icon: '🔍',
          title: '智能搜索与筛选',
          description: '支持全局搜索或当前目录搜索，按文件类型筛选（视频/图片/音频/文档），自动记忆您的筛选偏好，快速定位目标文件。',
          tags: ['全局搜索', '类型筛选', '智能记忆']
        }
      ]
    }
  }
}
</script>

<style scoped>
.features {
  padding: 100px 20px;
  background: white;
  position: relative;
  overflow: hidden;
}

.features::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: skewY(-3deg);
  z-index: 0;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: fadeInUp 1s ease-out both;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: inline-block;
  animation: pulse 2s ease-in-out infinite;
}

.feature-title {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.feature-description {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: linear-gradient(135deg, #f0f4ff 0%, #e9e4f7 100%);
  color: #667eea;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.security-highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 50px;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.highlight-content {
  display: flex;
  align-items: center;
  gap: 30px;
}

.highlight-icon {
  font-size: 80px;
  animation: pulse 2s ease-in-out infinite;
}

.highlight-text h3 {
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}

.highlight-text p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .features {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-description {
    font-size: 16px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 30px 20px;
  }

  .security-highlight {
    padding: 30px 20px;
  }

  .highlight-content {
    flex-direction: column;
    text-align: center;
  }

  .highlight-icon {
    font-size: 60px;
  }

  .highlight-text h3 {
    font-size: 24px;
  }

  .highlight-text p {
    font-size: 14px;
  }
}
</style>

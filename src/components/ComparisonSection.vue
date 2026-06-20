<template>
  <section class="comparison">
    <div class="comparison-container">
      <div class="section-header">
        <div class="section-badge">⚖️ 为什么选择我们</div>
        <h2 class="section-title">Double Enter vs 传统方案</h2>
        <p class="section-description">
          我们提供更安全、更便捷的隐私保护方案
        </p>
      </div>

      <div class="comparison-table">
        <div class="comparison-header">
          <div class="feature-col">功能特性</div>
          <div class="other-col">传统隐藏文件夹</div>
          <div class="our-col">
            <span class="our-badge">✨</span>
            <span>Double Enter</span>
          </div>
        </div>

        <div 
          v-for="(item, index) in features" 
          :key="index"
          class="comparison-row"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="feature-name">
            <span class="feature-icon">{{ item.icon }}</span>
            <span>{{ item.name }}</span>
          </div>
          <div class="other-value">
            <span v-if="item.other === true" class="check-icon">✓</span>
            <span v-else-if="item.other === false" class="cross-icon">✗</span>
            <span v-else class="text-value">{{ item.other }}</span>
          </div>
          <div class="our-value highlight">
            <span v-if="item.ours === true" class="check-icon success">✓</span>
            <span v-else class="text-value success">{{ item.ours }}</span>
          </div>
        </div>
      </div>

      <div class="comparison-cta">
        <div class="cta-content">
          <h3>准备好开始了吗？</h3>
          <p>立即下载 Double Enter，体验更安全的文件管理方式</p>
          <a href="#download" class="cta-button">
            <span>立即下载</span>
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComparisonSection',
  data() {
    return {
      features: [
        {
          icon: '🔒',
          name: '密码加密',
          other: false,
          ours: true
        },
        {
          icon: '⚡',
          name: '快速隐藏',
          other: '手动操作',
          ours: '双击回车'
        },
        {
          icon: '🎭',
          name: '伪装界面',
          other: false,
          ours: true
        },
        {
          icon: '📱',
          name: '跨设备访问',
          other: false,
          ours: true
        },
        {
          icon: '🎬',
          name: '内置播放器',
          other: false,
          ours: true
        },
        {
          icon: '🔍',
          name: '全局搜索',
          other: false,
          ours: true
        },
        {
          icon: '🛡️',
          name: '防篡改保护',
          other: false,
          ours: true
        },
        {
          icon: '🚀',
          name: '紧急跳转',
          other: false,
          ours: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.comparison {
  padding: 100px 20px;
  background: white;
}

.comparison-container {
  max-width: 1000px;
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

.comparison-table {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  margin-bottom: 60px;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.comparison-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  padding: 25px;
  font-weight: 700;
  color: #333;
  border-bottom: 2px solid #e0e7ff;
}

.our-col {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.our-badge {
  font-size: 18px;
}

.comparison-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 20px 25px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  animation: fadeInUp 1s ease-out both;
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row:hover {
  background: #f8f9ff;
}

.feature-name {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.feature-icon {
  font-size: 24px;
}

.other-value,
.our-value {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}

.check-icon {
  font-size: 24px;
  color: #999;
  font-weight: 700;
}

.check-icon.success {
  color: #667eea;
  animation: checkPop 0.5s ease-out;
}

.cross-icon {
  font-size: 20px;
  color: #ccc;
  font-weight: 700;
}

.text-value {
  color: #666;
  font-size: 14px;
}

.text-value.success {
  color: #667eea;
  font-weight: 600;
}

.highlight {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  margin: -20px 0;
  padding: 20px 0;
}

.comparison-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 60px 50px;
  text-align: center;
  color: white;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.cta-content h3 {
  font-size: 32px;
  margin-bottom: 15px;
}

.cta-content p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #667eea;
  padding: 18px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.cta-button .arrow {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

@keyframes checkPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .comparison {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .comparison-header,
  .comparison-row {
    grid-template-columns: 1.5fr 1fr 1fr;
    padding: 15px;
    font-size: 13px;
  }

  .feature-name {
    font-size: 13px;
  }

  .feature-icon {
    font-size: 20px;
  }

  .comparison-cta {
    padding: 40px 30px;
  }

  .cta-content h3 {
    font-size: 24px;
  }

  .cta-content p {
    font-size: 16px;
  }
}
</style>

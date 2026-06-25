<template>
  <section id="download" class="download">
    <div class="download-container">
      <div class="section-header">
        <div class="section-badge">⬇️ 立即下载</div>
        <h2 class="section-title">开始保护您的隐私</h2>
        <p class="section-description">
          支持 Windows、macOS、Linux 多平台，选择适合您的版本下载
        </p>
        <div class="free-badge">
          <span class="free-icon">🎉</span>
          <span class="free-text">完全免费 · 永久免费 · 无任何限制</span>
        </div>
      </div>

      <div class="download-cards">
        <!-- 最新版本 -->
        <div class="download-card featured">
          <div class="card-badge">🎉 最新版本</div>
          <div class="card-header">
            <div class="version-info">
              <h3>Double Enter</h3>
              <span class="version">v1.0.0</span>
            </div>
            <div class="platform-icon">💻</div>
          </div>
          
          <div class="features-list">
            <div class="feature-item">
              <span class="check">✓</span>
              <span>完整功能</span>
            </div>
            <div class="feature-item">
              <span class="check">✓</span>
              <span>最新安全更新</span>
            </div>
            <div class="feature-item">
              <span class="check">✓</span>
              <span>性能优化</span>
            </div>
            <div class="feature-item">
              <span class="check">✓</span>
              <span>Bug 修复</span>
            </div>
          </div>

          <div class="download-buttons">
            <a 
              :href="latestDownload.lanzou" 
              target="_blank" 
              class="btn-download primary"
            >
              <span class="btn-icon">📦</span>
              <div class="btn-content">
                <span class="btn-text">立即下载</span>
                <span class="btn-hint">高速下载，推荐</span>
              </div>
            </a>
            <button @click="showLatestVersionDetails" class="btn-version-info">
              <span>📋</span>
              <span>版本说明</span>
            </button>
          </div>

          <div class="update-time">
            更新时间：{{ latestDownload.date }}
          </div>
        </div>

        <!-- 历史版本 -->
        <div class="download-card">
          <div class="card-badge">📚 历史版本</div>
          <div class="card-header">
            <div class="version-info">
              <h3>往期版本</h3>
              <span class="version">存档下载</span>
            </div>
            <div class="platform-icon">🗄️</div>
          </div>
          
          <div class="history-list">
            <div 
              v-for="(version, index) in historyVersions" 
              :key="index"
              class="history-item"
            >
              <div class="history-info">
                <span class="history-version">{{ version.version }}</span>
                <span class="history-date">{{ version.date }}</span>
              </div>
              <div class="history-actions">
                <button 
                  @click="showVersionDetails(version)" 
                  class="btn-info"
                  title="查看版本说明"
                >
                  <span>📋</span>
                </button>
                <a 
                  :href="version.baidu" 
                  target="_blank" 
                  class="btn-download secondary"
                >
                  <span>下载</span>
                </a>
              </div>
            </div>
          </div>

          <div class="history-note">
            💡 历史版本存档下载，链接长期有效
          </div>
        </div>
      </div>



      <!-- 安装说明 -->
      <div class="installation-guide">
        <h3>📖 安装指南</h3>
        <div class="guide-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>下载安装包</h4>
              <p>选择上方对应平台的下载链接</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>运行安装程序</h4>
              <p>双击安装包，按照提示完成安装</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>设置密码</h4>
              <p>首次启动需要设置访问密码</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>开始使用</h4>
              <p>尽情享受安全的文件管理体验</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 版本说明弹窗 -->
    <VersionDialog 
      :visible="showVersionDialog"
      :version="selectedVersion || {}"
      @close="closeVersionDialog"
    />
  </section>
</template>

<script>
import config from '../config'
import VersionDialog from './VersionDialog.vue'

export default {
  name: 'DownloadSection',
  components: {
    VersionDialog
  },
  data() {
    return {
      latestDownload: {
        version: config.latestVersion.version,
        date: config.latestVersion.date,
        lanzou: config.latestVersion.lanzouUrl,
        ...config.latestVersion
      },
      historyVersions: config.historyVersions.map(v => ({
        version: v.version,
        date: v.date,
        baidu: v.baiduUrl,
        ...v
      })),
      platforms: config.platforms,
      showVersionDialog: false,
      selectedVersion: null
    }
  },
  methods: {
    showVersionDetails(version) {
      this.selectedVersion = {
        ...version,
        downloadUrl: version.baidu || version.lanzou
      }
      this.showVersionDialog = true
    },
    showLatestVersionDetails() {
      this.selectedVersion = {
        ...this.latestDownload,
        downloadUrl: this.latestDownload.lanzou
      }
      this.showVersionDialog = true
    },
    closeVersionDialog() {
      this.showVersionDialog = false
      this.selectedVersion = null
    }
  }
}
</script>

<style scoped>
.download {
  padding: 100px 20px;
  background: white;
  position: relative;
}

.download-container {
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

.free-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  box-shadow: 0 10px 30px rgba(67, 233, 123, 0.3);
  animation: fadeInUp 1s ease-out 0.3s both, pulse 2s ease-in-out infinite;
}

.free-icon {
  font-size: 20px;
}

.free-text {
  letter-spacing: 0.5px;
}

.download-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.download-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: fadeInUp 1s ease-out both;
}

.download-card.featured {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border: 2px solid #667eea;
}

.download-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
}

.card-badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.version-info h3 {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.version {
  display: inline-block;
  background: #e0e7ff;
  color: #667eea;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
}

.platform-icon {
  font-size: 48px;
  opacity: 0.8;
}

.features-list {
  margin-bottom: 30px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  font-size: 15px;
  color: #555;
}

.check {
  color: #667eea;
  font-weight: 700;
  font-size: 18px;
}

.download-buttons {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-version-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 20px;
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-version-info:hover {
  background: #f8f9ff;
  transform: translateY(-2px);
}

.btn-download {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  padding: 18px 30px;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-download.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.btn-download.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.btn-download.secondary {
  background: #f0f4ff;
  color: #667eea;
  padding: 10px 20px;
  font-size: 14px;
}

.btn-download.secondary:hover {
  background: #e0e7ff;
}

.btn-icon {
  font-size: 24px;
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.btn-text {
  font-size: 16px;
}

.btn-hint {
  font-size: 12px;
  opacity: 0.8;
}

.update-time {
  text-align: center;
  color: #999;
  font-size: 14px;
}

.history-list {
  margin-bottom: 20px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 5px;
}

.history-list::-webkit-scrollbar {
  width: 6px;
}

.history-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.history-list::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

.history-list::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.history-item:hover {
  background: #f8f9ff;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: -10px;
  margin-right: -10px;
  border-radius: 10px;
}

.history-item:last-child {
  border-bottom: none;
}

.history-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.history-version {
  font-weight: 600;
  color: #333;
  font-size: 15px;
}

.history-date {
  font-size: 13px;
  color: #999;
}

.history-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn-info {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f0f4ff;
  color: #667eea;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-info:hover {
  background: #e0e7ff;
  transform: scale(1.1);
}

.btn-download.secondary {
  padding: 10px 20px;
  font-size: 14px;
}

.history-note {
  background: #f8f9ff;
  padding: 15px;
  border-radius: 10px;
  font-size: 13px;
  color: #666;
  text-align: center;
}

.platform-support {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.platform-support h3 {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
}

.platforms {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.platform-item {
  text-align: center;
  animation: fadeInUp 1s ease-out both;
  transition: all 0.3s ease;
  cursor: pointer;
}

.platform-item:hover {
  transform: translateY(-10px);
}

.platform-item:hover .platform-icon-large {
  transform: scale(1.2) rotate(5deg);
}

.platform-icon-large {
  font-size: 64px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.platform-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.platform-version {
  font-size: 14px;
  color: #999;
}

.installation-guide {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border-radius: 20px;
  padding: 50px;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.installation-guide h3 {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.guide-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.step {
  display: flex;
  gap: 20px;
}

.step-number {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
}

.step-content h4 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.step-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .download {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .download-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .download-card {
    padding: 30px 20px;
  }

  .platforms {
    gap: 40px;
  }

  .installation-guide {
    padding: 30px 20px;
  }

  .guide-steps {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>

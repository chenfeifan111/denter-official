<template>
  <transition name="dialog-fade">
    <div v-if="visible" class="version-dialog-overlay" @click="close">
      <div class="version-dialog" @click.stop>
        <div class="dialog-header">
          <h2>{{ version.version }} 版本说明</h2>
          <button @click="close" class="close-btn">✕</button>
        </div>
        
        <div class="dialog-body">
          <div class="version-info">
            <div class="info-item">
              <span class="info-label">📅 发布日期：</span>
              <span class="info-value">{{ version.date }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">📦 版本号：</span>
              <span class="info-value">{{ version.version }}</span>
            </div>
          </div>

          <div class="description-section">
            <h3>📝 版本说明</h3>
            <p v-if="version.description">{{ version.description }}</p>
            <p v-else class="no-description">暂无版本说明</p>
          </div>
        </div>

        <div class="dialog-footer">
          <a 
            v-if="version.downloadUrl" 
            :href="version.downloadUrl" 
            target="_blank"
            class="download-btn"
          >
            <span>📥</span>
            <span>下载此版本</span>
          </a>
          <button @click="close" class="cancel-btn">关闭</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'VersionDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    version: {
      type: Object,
      default: () => ({
        version: '',
        date: '',
        description: '',
        downloadUrl: ''
      })
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.version-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.version-dialog {
  background: white;
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  border-bottom: 2px solid #f0f0f0;
}

.dialog-header h2 {
  font-size: 24px;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.close-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #f5f5f5;
  color: #666;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: #e0e0e0;
  transform: rotate(90deg);
}

.dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: 30px;
}

.version-info {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 25px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-label {
  font-weight: 600;
  color: #555;
  min-width: 120px;
}

.info-value {
  color: #667eea;
  font-weight: 500;
}

.features-section,
.improvements-section,
.fixes-section,
.description-section {
  margin-bottom: 25px;
}

.features-section h3,
.improvements-section h3,
.fixes-section h3,
.description-section h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.description-section h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.description-section p {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  color: #555;
  line-height: 1.8;
  font-size: 15px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.no-description {
  color: #999;
  font-style: italic;
  text-align: center;
}

.dialog-footer {
  display: flex;
  gap: 15px;
  padding: 20px 30px;
  border-top: 2px solid #f0f0f0;
}

.download-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.cancel-btn {
  padding: 15px 30px;
  background: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  background: #e0e0e0;
}

/* 滚动条样式 */
.dialog-body::-webkit-scrollbar {
  width: 8px;
}

.dialog-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.dialog-body::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

.dialog-body::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* 动画 */
.dialog-fade-enter-active, .dialog-fade-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-fade-enter-from, .dialog-fade-leave-to {
  opacity: 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .version-dialog {
    max-height: 90vh;
  }

  .dialog-header {
    padding: 20px;
  }

  .dialog-header h2 {
    font-size: 20px;
  }

  .dialog-body {
    padding: 20px;
  }

  .dialog-footer {
    flex-direction: column;
    padding: 15px 20px;
  }

  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .info-label {
    min-width: auto;
  }
}
</style>

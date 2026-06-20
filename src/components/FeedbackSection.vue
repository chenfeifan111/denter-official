<template>
  <section id="feedback" class="feedback">
    <div class="feedback-container">
      <div class="section-header">
        <div class="section-badge">💬 用户反馈</div>
        <h2 class="section-title">我们倾听您的声音</h2>
        <p class="section-description">
          您的意见和建议是我们不断改进的动力
        </p>
      </div>

      <div class="feedback-content">
        <div class="feedback-form-wrapper">
          <div class="form-card">
            <div class="form-header">
              <h3>📝 提交反馈</h3>
              <p>遇到问题或有好的想法？告诉我们吧！</p>
            </div>

            <form @submit.prevent="submitFeedback" class="feedback-form">
              <div class="form-group">
                <label for="name">您的称呼</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name"
                  placeholder="请输入您的称呼（可选）"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="email">联系邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email"
                  placeholder="用于接收回复（可选）"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="type">反馈类型 <span class="required">*</span></label>
                <select 
                  id="type" 
                  v-model="formData.type"
                  required
                  class="form-select"
                >
                  <option value="">请选择反馈类型</option>
                  <option value="bug">🐛 Bug 报告</option>
                  <option value="feature">💡 功能建议</option>
                  <option value="improvement">✨ 改进建议</option>
                  <option value="question">❓ 使用问题</option>
                  <option value="other">📌 其他</option>
                </select>
              </div>

              <div class="form-group">
                <label for="content">详细描述 <span class="required">*</span></label>
                <textarea 
                  id="content" 
                  v-model="formData.content"
                  placeholder="请详细描述您的问题或建议..."
                  rows="6"
                  required
                  class="form-textarea"
                ></textarea>
                <div class="char-count">{{ formData.content.length }} / 1000</div>
              </div>

              <button 
                type="submit" 
                class="submit-button"
                :disabled="submitting"
              >
                <span v-if="!submitting">{{ submitText }}</span>
                <span v-else>提交中...</span>
              </button>

              <div v-if="submitStatus" class="submit-message" :class="submitStatus">
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>

        <div class="feedback-info">
          <div class="info-card">
            <div class="info-icon">📧</div>
            <h4>邮件联系</h4>
            <p>{{ contact.email }}</p>
            <span class="info-hint">我们会在 24 小时内回复</span>
          </div>

          <div class="info-card">
            <div class="info-icon">💬</div>
            <h4>QQ 交流群</h4>
            <p>{{ contact.qqGroup }}</p>
            <span class="info-hint">加入用户交流群</span>
          </div>

          <div class="faq-section">
            <h4>📚 常见问题</h4>
            <div class="faq-list">
              <div class="faq-item">
                <div class="faq-question">如何重置密码？</div>
                <div class="faq-answer">请参考用户手册中的密码恢复章节，或联系技术支持。</div>
              </div>
              <div class="faq-item">
                <div class="faq-question">支持哪些文件格式？</div>
                <div class="faq-answer">支持视频、音频、图片、文本、文档等常见格式。</div>
              </div>
              <div class="faq-item">
                <div class="faq-question">如何局域网访问？</div>
                <div class="faq-answer">在设置中开启局域网访问，使用显示的 IP 地址访问。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '../config'

export default {
  name: 'FeedbackSection',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        type: '',
        content: ''
      },
      submitting: false,
      submitStatus: '', // 'success' or 'error'
      submitMessage: '',
      submitText: '📤 提交反馈',
      contact: config.contact,
      feedbackApiEndpoint: config.feedback.apiEndpoint
    }
  },
  methods: {
    async submitFeedback() {
      // 验证表单
      if (!this.formData.type || !this.formData.content) {
        this.showMessage('error', '请填写必填项！')
        return
      }

      if (this.formData.content.length > 1000) {
        this.showMessage('error', '内容不能超过 1000 字！')
        return
      }

      this.submitting = true

      // 模拟提交（实际项目中替换为真实的 API 调用）
      setTimeout(() => {
        // 这里应该是实际的 API 调用
        // 例如：await axios.post('/api/feedback', this.formData)
        
        // 模拟成功
        this.showMessage('success', '✅ 感谢您的反馈！我们会尽快处理。')
        this.resetForm()
        this.submitting = false
      }, 1500)

      // 实际使用时的示例代码：
      /*
      try {
        // 发送到你的后端 API 或使用第三方服务（如 Formspree、EmailJS 等）
        const response = await fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        })
        
        if (response.ok) {
          this.showMessage('success', '✅ 感谢您的反馈！我们会尽快处理。')
          this.resetForm()
        } else {
          this.showMessage('error', '❌ 提交失败，请稍后重试。')
        }
      } catch (error) {
        this.showMessage('error', '❌ 网络错误，请检查网络连接。')
      } finally {
        this.submitting = false
      }
      */
    },
    showMessage(status, message) {
      this.submitStatus = status
      this.submitMessage = message
      setTimeout(() => {
        this.submitStatus = ''
        this.submitMessage = ''
      }, 5000)
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        type: '',
        content: ''
      }
    }
  }
}
</script>

<style scoped>
.feedback {
  padding: 100px 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%);
}

.feedback-container {
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

.feedback-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
}

.form-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  animation: fadeInUp 1s ease-out 0.3s both;
}

.form-header {
  margin-bottom: 30px;
}

.form-header h3 {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.form-header p {
  font-size: 15px;
  color: #666;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.required {
  color: #ff4757;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e7ff;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-select {
  cursor: pointer;
  background: white;
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.char-count {
  text-align: right;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

.submit-button {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  animation: fadeIn 0.3s ease-out;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.feedback-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.info-card {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.info-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.info-card h4 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.info-card p {
  font-size: 15px;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 5px;
}

.info-hint {
  font-size: 13px;
  color: #999;
}

.faq-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border-radius: 15px;
  padding: 25px;
}

.faq-section h4 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  cursor: pointer;
}

.faq-question {
  font-size: 14px;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 5px;
}

.faq-answer {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .feedback {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .feedback-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .form-card {
    padding: 30px 20px;
  }
}
</style>

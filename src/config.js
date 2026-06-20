// Double Enter 官网配置文件
// 在这里修改下载链接、联系方式等信息

export default {
  // 应用信息
  app: {
    name: 'Double Enter',
    slogan: '双击回车，即刻隐藏',
    description: '您的私密文件保险箱'
  },

  // 最新版本下载配置
  latestVersion: {
    version: 'v1.0.0',
    date: '2024-01-15',
    lanzouUrl: 'https://www.lanzou.com/your-link', // 🔴 修改为实际下载链接
    description: '这是 Double Enter 的首个正式版本，提供完整的文件加密管理功能。\n\n主要特性：\n• 全新的文件加密管理系统\n• 双击回车快速隐藏功能\n• 404伪装界面保护隐私\n• 支持多种文件类型预览\n• 局域网访问功能\n• 优化了文件上传速度\n• 改进了用户界面体验'
  },

  // 历史版本下载配置
  historyVersions: [
    {
      version: 'v0.9.0',
      date: '2024-01-01',
      baiduUrl: 'https://pan.baidu.com/your-link-v0.9.0', // 🔴 修改为实际下载链接
      description: '测试版本，增加了多媒体功能。\n\n更新内容：\n• 添加了视频播放功能\n• 支持图片查看器\n• 新增文本编辑器\n• 优化了加载速度'
    },
    {
      version: 'v0.8.5',
      date: '2023-12-15',
      baiduUrl: 'https://pan.baidu.com/your-link-v0.8.5',
      description: '早期测试版本。\n\n包含功能：\n• 基础文件管理功能\n• 密码保护系统\n• 界面优化'
    },
    {
      version: 'v0.8.0',
      date: '2023-12-01',
      baiduUrl: 'https://pan.baidu.com/your-link-v0.8.0',
      description: '第一个测试版本，包含基本的文件加密功能。'
    }
  ],

  // 联系方式配置
  contact: {
    email: 'support@doubleenter.app',       // 🔴 修改为你的邮箱
    qqGroup: '123456789',                   // 🔴 修改为你的QQ群号
    github: 'github.com/doubleenter',       // 🔴 修改为你的GitHub地址
    githubUrl: 'https://github.com/yourusername/double-enter'
  },

  // 社交媒体链接
  social: {
    github: 'https://github.com/yourusername/double-enter',  // 🔴 修改
    twitter: 'https://twitter.com/youraccount',               // 🔴 修改
    email: 'mailto:support@doubleenter.app',                  // 🔴 修改
    qq: 'https://qm.qq.com/your-qq-group-link'               // 🔴 修改为QQ群链接
  },

  // 平台支持信息
  platforms: [
    {
      icon: '🪟',
      name: 'Windows',
      version: 'Win 10/11',
      downloadUrl: '' // 可选：特定平台的下载链接
    },
    {
      icon: '🍎',
      name: 'macOS',
      version: '10.15+',
      downloadUrl: ''
    },
    {
      icon: '🐧',
      name: 'Linux',
      version: 'Ubuntu 20.04+',
      downloadUrl: ''
    }
  ],

  // 反馈表单API配置
  feedback: {
    // 如果你使用第三方服务（如 Formspree, EmailJS 等），在这里配置
    apiEndpoint: '', // 🔴 配置你的反馈API地址
    // 示例：
    // apiEndpoint: 'https://formspree.io/f/your-form-id'
    // apiEndpoint: 'https://api.emailjs.com/api/v1.0/email/send'
  }
}

<template>
  <div id="app">
    <LoadingScreen @loaded="handleLoaded" />
    <EasterEgg />
    <transition name="page-fade">
      <div v-if="pageLoaded">
        <NavBar />
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <ScreenshotsSection />
        <DownloadSection />
        <FeedbackSection />
        <FooterSection />
      </div>
    </transition>
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import EasterEgg from './components/EasterEgg.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ComparisonSection from './components/ComparisonSection.vue'
import ScreenshotsSection from './components/ScreenshotsSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import FeedbackSection from './components/FeedbackSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    LoadingScreen,
    EasterEgg,
    NavBar,
    HeroSection,
    FeaturesSection,
    ComparisonSection,
    ScreenshotsSection,
    DownloadSection,
    FeedbackSection,
    FooterSection
  },
  data() {
    return {
      pageLoaded: false
    }
  },
  methods: {
    handleLoaded() {
      this.pageLoaded = true
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background: #ffffff;
}

#app {
  min-height: 100vh;
  position: relative;
}

/* 全局动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
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

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #5568d3;
}

/* 页面淡入动画 */
.page-fade-enter-active {
  transition: opacity 0.8s ease;
}

.page-fade-enter-from {
  opacity: 0;
}
</style>

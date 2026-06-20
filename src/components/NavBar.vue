<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-brand">
        <span class="brand-icon">🔐</span>
        <span class="brand-name">Double Enter</span>
      </div>
      
      <div class="nav-menu" :class="{ 'active': menuOpen }">
        <a href="#home" class="nav-link" @click="closeMenu">首页</a>
        <a href="#features" class="nav-link" @click="closeMenu">功能特性</a>
        <a href="#screenshots" class="nav-link" @click="closeMenu">应用截图</a>
        <a href="#download" class="nav-link" @click="closeMenu">下载</a>
        <a href="#feedback" class="nav-link" @click="closeMenu">反馈</a>
      </div>

      <button class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled: false,
      menuOpen: false
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
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  transition: color 0.3s ease;
}

.navbar.scrolled .nav-brand {
  color: #667eea;
}

.brand-icon {
  font-size: 28px;
  animation: pulse 2s ease-in-out infinite;
}

.brand-name {
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.navbar.scrolled .nav-link {
  color: #333;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.navbar.scrolled .menu-toggle span {
  background: #333;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-menu .nav-link {
    color: #333;
    font-size: 18px;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
}
</style>

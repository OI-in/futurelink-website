// 汉堡菜单交互
(function () {
  // 获取DOM元素
  const hamburger = document.querySelector('.site-header__hamburger');
  const navMenu = document.querySelector('.site-header__nav');

  // 检查元素是否存在
  if (!hamburger || !navMenu) return;

  // 点击汉堡按钮切换菜单
  hamburger.addEventListener('click', function () {
    // 切换菜单的显示/隐藏
    navMenu.classList.toggle('site-header__nav--active');

    // 切换汉堡按钮的激活态（改变图标形状）
    hamburger.classList.toggle('site-header__hamburger--active');

    // 可选：防止背景滚动
    if (navMenu.classList.contains('site-header__nav--active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // 点击菜单项后自动关闭菜单（提升用户体验）
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('site-header__nav--active');
      hamburger.classList.remove('site-header__hamburger--active');
      document.body.style.overflow = '';
    });
  });

  // 窗口大小改变时，如果从移动端切换到桌面端，自动恢复状态
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('site-header__nav--active');
      hamburger.classList.remove('site-header__hamburger--active');
      document.body.style.overflow = '';
    }
  });
})();

// ============================================
// 滚动高亮功能（Scroll Spy）
// ============================================
(function () {
  /**
   * 初始化滚动高亮功能
   * 使用 Intersection Observer API 检测当前可视区域的 section
   */
  function initScrollSpy() {
    // 获取所有需要监测的 section（需要有 id 属性）
    const sections = document.querySelectorAll('section[id]');

    // 获取所有导航链接（指向这些 section 的链接）
    const navLinks = document.querySelectorAll('.nav__link');

    // 如果没有 section 或导航链接，直接返回
    if (sections.length === 0 || navLinks.length === 0) return;

    // 创建 Intersection Observer 实例
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // 当某个 section 进入可视区域时
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            // 移除所有导航链接的高亮样式
            navLinks.forEach(link => {
              link.classList.remove('nav__link--active');
            });

            // 找到对应的导航链接并添加高亮样式
            // 匹配 href="#section-id" 格式的链接
            const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            if (activeLink) {
              activeLink.classList.add('nav__link--active');
            }
          }
        });
      },
      {
        // 触发阈值：当 section 的 50% 进入视口时触发
        threshold: 0.5,
        // 根边距：提前触发（可选，优化体验）
        rootMargin: '-80px 0px 0px 0px', // 减去导航栏高度，避免导航栏遮挡
      }
    );

    // 开始监听所有 section
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // 在 DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollSpy);
  } else {
    // DOM 已经加载完成，直接执行
    initScrollSpy();
  }
})();

// ============================================
// 3. 返回顶部按钮
// ============================================
(function () {
  // 获取返回顶部按钮元素
  const backToTop = document.querySelector('.back-to-top');

  // 如果按钮不存在，直接返回
  if (!backToTop) return;

  // 监听页面滚动事件
  function handleScroll() {
    // 获取当前滚动位置
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 滚动超过500px时显示按钮，否则隐藏
    if (scrollTop > 500) {
      backToTop.classList.add('back-to-top--visible');
    } else {
      backToTop.classList.remove('back-to-top--visible');
    }
  }

  // 返回顶部功能
  function scrollToTop() {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // 平滑滚动
      });
    } else {
      // 降级方案：瞬间滚动
      window.scrollTo(0, 0);
    }
  }

  // 监听滚动事件（使用节流优化性能）
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // 监听点击事件
  backToTop.addEventListener('click', scrollToTop);

  // 初始化：页面加载时检查滚动位置
  handleScroll();
})();

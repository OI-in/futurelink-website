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

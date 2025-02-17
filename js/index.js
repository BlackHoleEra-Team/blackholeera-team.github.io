document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('typing-effect');
  const txt = [
    "开拓时代，创新未来",
    "Open up the era, innovate for the future",
    "征途漫漫星河阔，黑洞深邃引前程。",
    "不惧险途千百转，破开引力写新章。"
  ];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentSentence = txt[index];
    if (!isDeleting) {
      textElement.textContent = currentSentence.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentSentence.length) {
        isDeleting = true;
        setTimeout(type, 2000); // 停顿2秒后开始删除
      } else {
        setTimeout(type, 100); // 每100毫秒显示一个字符
      }
    } else {
      textElement.textContent = currentSentence.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % txt.length; // 循环到下一个句子
        setTimeout(type, 1000); // 停顿1秒后开始打字
      } else {
        setTimeout(type, 50); // 每50毫秒删除一个字符
      }
    }
  }

  type(); // 开始打字效果

  // 添加滚动事件监听器
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    const overlay = document.getElementById('overlay');

    if (scrollPercentage >= 20 && scrollPercentage <= 25) {
      const blurValue = ((scrollPercentage - 20) / 25) * 20; // 最大模糊度为20px
      overlay.style.backdropFilter = `blur(${blurValue}px)`;
    } else if (scrollPercentage < 20) {
      overlay.style.backdropFilter = 'blur(0px)';
    } else if (scrollPercentage > 25) {
      overlay.style.backdropFilter = 'blur(20px)';
    }
  });
});
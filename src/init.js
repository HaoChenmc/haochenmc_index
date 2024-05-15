document.addEventListener('DOMContentLoaded', function() {
    // 年份
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');
    copyrightElement.textContent += ` ${currentYear}`;
    // 默认加载 home
    loadMarkdown('home.md');
});
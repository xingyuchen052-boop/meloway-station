var posts = ["2026/04/19/test-post-2/", "2026/04/19/hello-world/", "2026/04/19/test-post-3/", "2026/04/19/test-post-4/"];
function toRandomPost() {
  // 使用相对路径，让 Hexo 自动处理路径前缀
  pjax.loadUrl(posts[Math.floor(Math.random() * posts.length)]);
};
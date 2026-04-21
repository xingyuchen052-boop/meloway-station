// 随机文章功能
function toRandomPost() {
  const posts = [
    '/meloway-station/archives/',
    '/meloway-station/categories/',
    '/meloway-station/links/',
    '/meloway-station/comments/',
    '/meloway-station/music/',
    '/meloway-station/bangumis/',
    '/meloway-station/album/',
    '/meloway-station/air-conditioner/',
    '/meloway-station/about/',
    '/meloway-station/essay/'
  ];
  const randomIndex = Math.floor(Math.random() * posts.length);
  window.location.href = posts[randomIndex];
}
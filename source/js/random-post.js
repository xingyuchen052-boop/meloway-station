// 随机文章功能
function toRandomPost() {
  const posts = [
    '/archives/',
    '/categories/',
    '/links/',
    '/comments/',
    '/music/',
    '/bangumis/',
    '/album/',
    '/air-conditioner/',
    '/about/',
    '/essay/'
  ];
  const randomIndex = Math.floor(Math.random() * posts.length);
  window.location.href = '/meloway-station' + posts[randomIndex];
}
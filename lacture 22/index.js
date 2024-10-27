let elements = {
    followBtn: document.getElementById("follow-btn"),
    likeBtn: document.getElementById("like-btn"),
    shareBtn: document.getElementById("share-btn"),
    commentBtn: document.getElementById("comment-btn"),
    postCommentBtn: document.getElementById("post-comment-btn"),
    likeCount: document.getElementById("likes-count"),
    sharesCount: document.getElementById("shares-count"),
    commentsCount: document.getElementById("comments-count"),
    commentsSection: document.getElementById("comments-section")
  };
  
  let likesKey = "like";
  let commentsKey = "comments";
  let sharesKey = "shares";
  let followKey = "follow";
  
  let likes = getStorageValue(likesKey) || 0;
  let comments = getStorageValue(commentsKey) || 0;
  let shares = getStorageValue(sharesKey) || 0;
  let isFollowed = getStorageValue(followKey) || "false";
  
  updateCounts();
  
  if (isFollowed === "true") {
    elements.followBtn.innerHTML = "Unfollow";
  } else {
    elements.followBtn.innerHTML = "Follow";
  }
  
  elements.followBtn.addEventListener('click', toggleFollow);
  elements.likeBtn.addEventListener('click', handleLike);
  elements.shareBtn.addEventListener('click', handleShare);
  elements.commentBtn.addEventListener('click', handleComment);
  elements.postCommentBtn.addEventListener('click', handlePostComment);
  
  function updateCounts() {
    elements.likeCount.innerHTML = `${likes} likes`;
    elements.sharesCount.innerHTML = `${shares} shares`;
    elements.commentsCount.innerHTML = `${comments} comments`;
  }
  
  function toggleFollow() {
    isFollowed = isFollowed === "true" ? "false" : "true";
    setStorageValue(followKey, isFollowed);
    elements.followBtn.innerHTML = isFollowed === "true" ? "Unfollow" : "Follow";
  }
  
  function handleLike() {
    likes++;
    setStorageValue(likesKey, likes);
    updateCounts();
    setTimeout(() => {
      elements.likeBtn.style.backgroundColor = '#313335';
    }, 500);
  }
  
  function handleShare() {
    shares++;
    setStorageValue(sharesKey, shares);
    updateCounts();
    alert('Shared!');
  }
  
  function handleComment() {
    elements.commentsSection.style.display = elements.commentsSection.style.display == 'none' ? 'block' : 'none';
    const input = elements.commentsSection.querySelector('input');
    const postBtn = elements.commentsSection.querySelector('button');
    input.style.display = 'block';
    postBtn.style.display = 'block';
  }
  
  function handlePostComment() {
    const comment = elements.commentsSection.querySelector('input').value;
    comments++;
    setStorageValue(commentsKey, comments);
    updateCounts();
    elements.commentsSection.querySelector('input').value = '';
    alert(`Comment posted: ${comment}`);
  }
  
  function getStorageValue(key) {
    return localStorage.getItem(key) || sessionStorage.getItem(key);
  }
  
  function setStorageValue(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }
  
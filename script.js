function likePost(button) {
    const likeCount = button.querySelector(".like-count");
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = + 1;
}


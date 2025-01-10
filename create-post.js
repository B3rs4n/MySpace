// Galeri butonuna tıklanınca dosya inputunu tetikle
document.getElementById('gallery-button').addEventListener('click', function() {
    document.getElementById('post-image').click();
});

// Post butonuna tıklanınca post'u oluştur
document.getElementById('post-button').addEventListener('click', function(event) {
    event.preventDefault(); // Formun gönderilmesini engelle

    // Kullanıcıdan alınan metin
    const postText = document.getElementById('create-post-text').value;

    // Seçilen resim varsa
    const postImage = document.getElementById('post-image').files[0];

    // Yeni bir feed oluştur
    const feed = document.createElement('div');
    feed.classList.add('feed');

    // Başlık kısmı (kullanıcı bilgileri)
    const head = document.createElement('div');
    head.classList.add('head');
    const user = document.createElement('div');
    user.classList.add('user');
    const profilePhoto = document.createElement('div');
    profilePhoto.classList.add('profile-photo');
    const img = document.createElement('img');
    img.src = 'assets/images/profile-13.png'; // Profil resmi
    profilePhoto.appendChild(img);
    user.appendChild(profilePhoto);
    const info = document.createElement('div');
    info.classList.add('info');
    const userName = document.createElement('h3');
    userName.textContent = '@username'; // Kullanıcı adı
    info.appendChild(userName);
    user.appendChild(info);
    head.appendChild(user);
    feed.appendChild(head);

    // Post'un metni kısmı
    const caption = document.createElement('div');
    caption.classList.add('caption');
    const p = document.createElement('p');
    p.textContent = postText; // Sadece girilen metin
    caption.appendChild(p);
    feed.appendChild(caption);

    // Eğer resim seçildiyse, fotoğraf kısmını ekle
    if (postImage) {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');
        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(postImage);
        photoDiv.appendChild(imgElement);
        feed.appendChild(photoDiv);
    }

    // Action butonlarını ekle (star, comment, share)
    const actionButtons = document.createElement('div');
    actionButtons.classList.add('action-buttons');

    // Bu sınıfları, mevcut feed'deki sınıflar ile uyumlu olacak şekilde kullan
    const interactionButtons = document.createElement('div');
    interactionButtons.classList.add('interaction-buttons');

    // Star butonu
    const starButton = document.createElement('span');
    starButton.classList.add('star-button');
    starButton.onclick = function() { handleStar(this); };
    const starIcon = document.createElement('i');
    starIcon.classList.add('bi', 'bi-star');
    const starCount = document.createElement('span');
    starCount.classList.add('star-count');
    starCount.textContent = ' 0';
    starButton.appendChild(starIcon);
    starButton.appendChild(starCount);

    // Comment butonu
    const commentButton = document.createElement('span');
    commentButton.classList.add('comment-button');
    commentButton.onclick = function() { handleComment(this); };
    const commentIcon = document.createElement('i');
    commentIcon.classList.add('bi', 'bi-chat');
    const commentCount = document.createElement('span');
    commentCount.classList.add('comment-count');
    commentCount.textContent = ' 0';
    commentButton.appendChild(commentIcon);
    commentButton.appendChild(commentCount);

    // Share butonu
    const shareButton = document.createElement('span');
    shareButton.classList.add('share-button');
    shareButton.onclick = function() { handleShare(this); };
    const shareIcon = document.createElement('i');
    shareIcon.classList.add('bi', 'bi-stars');
    const shareCount = document.createElement('span');
    shareCount.classList.add('share-count');
    shareCount.textContent = ' 0';
    shareButton.appendChild(shareIcon);
    shareButton.appendChild(shareCount);

    // Butonları ekle
    interactionButtons.appendChild(starButton);
    interactionButtons.appendChild(commentButton);
    interactionButtons.appendChild(shareButton);
    actionButtons.appendChild(interactionButtons);
    feed.appendChild(actionButtons);

    // Yeni post'u feed'lere ekle
    document.querySelector('.feeds').prepend(feed);

    // Formu sıfırla
    document.getElementById('create-post-form').reset();
});
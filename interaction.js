document.addEventListener("DOMContentLoaded", function () {
    // Star butonu fonksiyonu
    window.handleStar = function (element) {
        let countSpan = element.querySelector(".star-count");
        let icon = element.querySelector("i");
        let count = parseInt(countSpan.textContent.trim());
        let starsCountElement = document.getElementById("stars-count");
        let availableStars = parseInt(starsCountElement.textContent.trim());

        if (icon.classList.contains("active")) {
            count--;
            icon.classList.remove("active");
            availableStars++;
        } else {
            if (availableStars > 0) {
                count++;
                icon.classList.add("active");
                availableStars--;
            } else {
                showError("You don't have enough stars!");
                return;
            }
        }

        countSpan.textContent = count;
        starsCountElement.textContent = availableStars;
    };

    // Yorum butonu fonksiyonu
    window.handleComment = function (element) {
        let countSpan = element.querySelector(".comment-count");
        let count = parseInt(countSpan.textContent.trim());
        count++;
        countSpan.textContent = count;
        window.location.href = "CommentPage.html";
    };

    // Share butonu fonksiyonu
    window.handleShare = function (element) {
        let countSpan = element.querySelector(".share-count");
        let icon = element.querySelector("i");
        let count = parseInt(countSpan.textContent.trim());
        let starsCountElement = document.getElementById("stars-count");
        let availableStars = parseInt(starsCountElement.textContent.trim());

        if (icon.classList.contains("active")) {
            count--;
            icon.classList.remove("active");
            availableStars += 5;
        } else {
            if (availableStars >= 5) {
                count++;
                icon.classList.add("active");
                availableStars -= 5;
            } else {
                showError("You don't have enough stars to share!");
                return;
            }
        }

        countSpan.textContent = count;
        starsCountElement.textContent = availableStars;
    };

    // Follow button fonksiyonu
    document.querySelectorAll('.FollowButton').forEach(button => {
        button.addEventListener('click', function () {
            if (this.textContent === 'Follow') {
                this.textContent = 'Unfollow';
                this.classList.add('btn-danger'); // Renk değişikliği için
                this.classList.remove('btn-primary');
            } else {
                this.textContent = 'Follow';
                this.classList.add('btn-primary');
                this.classList.remove('btn-danger');
            }
        });
    });

    // Popup işlemleri
    const editButton = document.querySelector('.edit');
    const popup = document.querySelector('.popup');
    const blockUserBtn = document.querySelector('a[href="#"]');
    const reportUserBtn = document.querySelectorAll('a[href="#"]')[1];

    editButton.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target) && e.target !== editButton) {
            popup.style.display = 'none';
        }
    });

    blockUserBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        alert("User has been blocked.");
    });

    reportUserBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        alert("User has been reported.");
    });

    // Hata mesajını göstermek için fonksiyon
    function showError(message) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = message;
        errorMessage.style.display = "block";

        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000); // 3 saniye sonra hata mesajı kaybolur
    }
});

// Kullanıcı seviyesini belirleyin (örneğin: 'Star Explorer')
const userLevel = 'Star Explorer';

// Tüm level kartlarını seçin
const levelCards = document.querySelectorAll('.level-card');

// Kartlar üzerinde gezinerek filtre uygulayın
levelCards.forEach(card => {
    const levelName = card.querySelector('h4').textContent.trim();

    if (levelName !== userLevel) {
        // Seviye eşleşmiyorsa, siyah bir filtre uygula
        card.style.filter = 'grayscale(100%)';
        card.style.opacity = '0.6'; // Daha karanlık görünmesi için opaklığı düşür
    } else {
        // Kullanıcının seviyesi için herhangi bir filtre uygulama
        card.style.filter = 'none';
        card.style.opacity = '1'; // Normal görünüm
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // star butonu fonksiyonu
    window.handleStar = function (element) {
        let countSpan = element.querySelector(".star-count");
        let icon = element.querySelector("i");
        let count = parseInt(countSpan.textContent.trim());

        if (icon.classList.contains("active")) {
            count--;
            icon.classList.remove("active");
        } else {
            count++;
            icon.classList.add("active");
        }

        countSpan.textContent = count;
    };

    // Yorum butonu fonksiyonu
    window.handleComment = function (element) {
        let countSpan = element.querySelector(".comment-count");
        let count = parseInt(countSpan.textContent.trim());
        count++;
        countSpan.textContent = count;
        window.location.href = "CommentPage.html";
    };

    // stars butonu fonksiyonu
    window.handleShare = function (element) {
        let countSpan = element.querySelector(".share-count");
        let icon = element.querySelector("i");
        let count = parseInt(countSpan.textContent.trim());

        if (icon.classList.contains("active")) {
            count--;
            icon.classList.remove("active");
        } else {
            count++;
            icon.classList.add("active");
        }

        countSpan.textContent = count;
    };
});

document.querySelectorAll('.FollowButton').forEach(button => {
    button.addEventListener('click', function() {
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


// Elementleri seçiyoruz
const editButton = document.querySelector('.edit');
const popup = document.querySelector('.popup');
const blockUserBtn = document.querySelector('a[href="#"]'); // "Block User" linkini seçiyoruz
const reportUserBtn = document.querySelectorAll('a[href="#"]')[1]; // "Report User" linkini seçiyoruz

// Üç nokta butonuna tıklanınca popup'ı göster
editButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Bu, popup'ın kapanmasını engeller
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

// Ekranda bir yere tıklanırsa popup'ı kapat
document.addEventListener('click', (e) => {
    // Popup'ın dışında bir yere tıklanıp tıklanmadığını kontrol et
    if (!popup.contains(e.target) && e.target !== editButton) {
        popup.style.display = 'none';
    }
});

// Block User butonuna tıklanınca popup'ı kapat
blockUserBtn.addEventListener('click', () => {
    popup.style.display = 'none';  // Block User tıklandığında popup kapanır
    alert("User has been blocked.");
});

// Report User butonuna tıklanınca popup'ı kapat
reportUserBtn.addEventListener('click', () => {
    popup.style.display = 'none';  // Report User tıklandığında popup kapanır
    alert("User has been reported.");
});

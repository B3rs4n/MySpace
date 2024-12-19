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

// Popup Menüsünü Seç
const popupMenu = document.querySelectorAll('.popup');

// Tüm "edit" butonlarını seç ve her birine tıklama olayı ekle
document.querySelectorAll('.edit').forEach((editBtn, index) => {
    editBtn.addEventListener('click', function(event) {
        // Popup menüsünü aç/kapat
        const menu = popupMenu[index];
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        
        // Popup menüsünün pozisyonunu ayarlamak (isteğe bağlı)
        menu.style.left = `${event.clientX}px`; // Tıklama noktasına göre pozisyonlandırma
        menu.style.top = `${event.clientY + 20}px`; // Yükseklik ayarlaması
    });
});
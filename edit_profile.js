const editProfileBtn = document.getElementById('set-profile-btn');
const modal = document.getElementById('profile-modal');
const modalOverlay = document.getElementById('modal-overlay');
const cancelBtn = document.querySelector('.cancel');
const nextBtn = document.querySelector('.next');
const skipBtn = document.querySelector('.skip');

// "Edit Profile" butonuna tıklanırsa modal'ı göster
editProfileBtn.addEventListener('click', () => {
    modal.classList.add('show'); // Modal'ı göster
    modalOverlay.style.display = 'block'; // Arka plan karartmayı aç
});

// "Cancel" butonuna veya arka plana tıklanırsa modal'ı gizle
cancelBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// "Next" butonuna tıklanırsa içerik değişir
nextBtn.addEventListener('click', () => {
    document.getElementById('profile-photo-content').style.display = 'none'; // Profil fotoğrafı kutusunu gizle
    document.getElementById('profile-banner-content').style.display = 'block'; // Banner kutusunu göster
});

// "Skip" butonuna tıklanırsa da içerik değişir
skipBtn.addEventListener('click', () => {
    document.getElementById('profile-photo-content').style.display = 'none'; // Profil fotoğrafı kutusunu gizle
    document.getElementById('profile-banner-content').style.display = 'block'; // Banner kutusunu göster
});

// Modal'ı kapatma fonksiyonu
function closeModal() {
    modal.classList.remove('show'); // Modal'ı gizle
    modalOverlay.style.display = 'none'; // Arka plan karartmayı kapat
}

// Sayfanın başka bir yerine tıklanırsa, popup menüsünü kapat
document.addEventListener('click', function(event) {
    if (!event.target.closest('.edit')) {
        popupMenu.forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// Butonları ve modal öğelerini seçme
const editProfileBtn = document.getElementById('set-profile-btn');
const modal = document.getElementById('profile-modal');
const modalOverlay = document.getElementById('modal-overlay');
const cancelBtn = document.querySelectorAll('.cancel');
const nextBtn = document.querySelector('.next');
const skipBtn = document.querySelector('.skip');
const backBtn = document.querySelector('.back');
const finishBtn = document.querySelector('.finish');

// Modal'ın içerik kutuları
const profilePhotoContent = document.getElementById('profile-photo-content');
const profileBannerContent = document.getElementById('profile-banner-content');

// "Edit Profile" butonuna tıklanırsa modal'ı göster
editProfileBtn.addEventListener('click', () => {
    modal.classList.add('show'); // Modal'ı göster
    modalOverlay.style.display = 'block'; // Arka plan karartmayı aç
    resetModal();
});

// "Cancel" butonlarına veya arka plana tıklanırsa modal'ı gizle
cancelBtn.forEach(btn => btn.addEventListener('click', closeModal));
modalOverlay.addEventListener('click', closeModal);

// "Next" butonuna tıklanırsa ikinci adıma geç ve butonları değiştir
nextBtn.addEventListener('click', () => {
    profilePhotoContent.style.display = 'none'; // Profil fotoğrafı kutusunu gizle
    profileBannerContent.style.display = 'block'; // Banner kutusunu göster
    toggleButtons();
});

// "Skip" butonuna tıklanırsa da ikinci adıma geç ve butonları değiştir
skipBtn.addEventListener('click', () => {
    profilePhotoContent.style.display = 'none'; // Profil fotoğrafı kutusunu gizle
    profileBannerContent.style.display = 'block'; // Banner kutusunu göster
    toggleButtons();
});

// "Back" butonuna tıklanırsa birinci adıma geri dön ve butonları değiştir
backBtn.addEventListener('click', () => {
    profilePhotoContent.style.display = 'block'; // Profil fotoğrafı kutusunu göster
    profileBannerContent.style.display = 'none'; // Banner kutusunu gizle
    toggleButtons();
});

// "Finish" butonuna tıklanırsa modal'ı kapat
finishBtn.addEventListener('click', closeModal);

// Modal'ı kapatma fonksiyonu
function closeModal() {
    modal.classList.remove('show'); // Modal'ı gizle
    modalOverlay.style.display = 'none'; // Arka plan karartmayı kapat
}

// Modal'ı başlangıç durumuna döndürme fonksiyonu
function resetModal() {
    profilePhotoContent.style.display = 'block'; // Profil fotoğrafı kutusunu göster
    profileBannerContent.style.display = 'none'; // Banner kutusunu gizle
    nextBtn.style.display = 'inline-block';
    skipBtn.style.display = 'inline-block';
    backBtn.style.display = 'none';
    finishBtn.style.display = 'none';
}

// Butonları adımlara göre değiştir
function toggleButtons() {
    const isSecondStep = profileBannerContent.style.display === 'block';
    nextBtn.style.display = isSecondStep ? 'none' : 'inline-block';
    skipBtn.style.display = isSecondStep ? 'none' : 'inline-block';
    backBtn.style.display = isSecondStep ? 'inline-block' : 'none';
    finishBtn.style.display = isSecondStep ? 'inline-block' : 'none';
}

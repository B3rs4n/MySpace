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
const addBioContent = document.getElementById('add-bio-content');
const bioInput = document.getElementById('bio-input');

// Bio'nun ekleneceği hedef eleman
const bioDisplay = document.getElementById('bio-display');

// Adımları takip etmek için değişken
let currentStep = 0;
const steps = [profilePhotoContent, profileBannerContent, addBioContent];

// "Edit Profile" butonuna tıklanırsa modal'ı göster
editProfileBtn.addEventListener('click', () => {
    modal.classList.add('show'); // Modal'ı göster
    modalOverlay.style.display = 'block'; // Arka plan karartmayı aç
    resetModal();
});

// "Cancel" butonlarına veya arka plana tıklanırsa modal'ı gizle
cancelBtn.forEach(btn => btn.addEventListener('click', closeModal));
modalOverlay.addEventListener('click', closeModal);

// "Next" ve "Skip" butonlarına tıklanırsa bir sonraki adıma geç
[nextBtn, skipBtn].forEach(btn => btn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        steps[currentStep].style.display = 'none';
        currentStep++;
        steps[currentStep].style.display = 'block';
        updateButtons();
    }
}));

// "Back" butonuna tıklanırsa bir önceki adıma dön
backBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        steps[currentStep].style.display = 'none';
        currentStep--;
        steps[currentStep].style.display = 'block';
        updateButtons();
    }
});

// "Finish" butonuna tıklanırsa bio metnini sayfaya ekle ve modal'ı kapat
finishBtn.addEventListener('click', () => {
    const bioText = bioInput.value.trim(); // Bio metnini al
    if (bioText) {
        bioDisplay.textContent = bioText; // Bio metnini hedef elemana ekle
    } else {
        bioDisplay.textContent = 'No bio added.'; // Boşsa varsayılan bir metin ekle
    }
    closeModal();
});

// Modal'ı kapatma fonksiyonu
function closeModal() {
    modal.classList.remove('show'); // Modal'ı gizle
    modalOverlay.style.display = 'none'; // Arka plan karartmayı kapat
}

// Modal'ı başlangıç durumuna döndürme faonksiyonu
function resetModal() {
    steps.forEach((step, index) => {
        step.style.display = index === 0 ? 'block' : 'none';
    });
    currentStep = 0;
    updateButtons();
}

// Butonları adımlara göre güncelle
function updateButtons() {
    backBtn.style.display = currentStep > 0 ? 'inline-block' : 'none';
    nextBtn.style.display = currentStep < steps.length - 1 ? 'inline-block' : 'none';
    skipBtn.style.display = currentStep < steps.length - 1 ? 'inline-block' : 'none';
    finishBtn.style.display = currentStep === steps.length - 1 ? 'inline-block' : 'none';
}

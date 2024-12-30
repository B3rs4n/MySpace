// Mesajlaşma bileşenlerini seç
const messageSearch = document.querySelector('#message-search'); // Arama çubuğu
const conversations = document.querySelectorAll('.conversation'); // Tüm kişi öğelerini seç

// Arama işlevi
const searchMessage = () => {
    const searchValue = messageSearch.value.toLowerCase(); // Kullanıcının arama girişini küçük harfe çevir
    conversations.forEach(conversation => {
        const name = conversation.querySelector('span').textContent.toLowerCase(); // Kişi adını al
        if (name.includes(searchValue)) {
            conversation.style.display = 'flex'; // Eşleşirse göster
        } else {
            conversation.style.display = 'none'; // Eşleşmezse gizle
        }
    });
};

// Arama çubuğu giriş olayını dinle
messageSearch.addEventListener('keyup', searchMessage);
messageSearch.addEventListener('keyup', searchMessage);
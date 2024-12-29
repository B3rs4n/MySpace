// Global değişken: Aktif sohbet var mı?
let activeChat = null;

// Sohbet açma işlevi
function openChat(conversationName) {
    activeChat = conversationName; // Aktif sohbeti ayarla
    const chatHeader = document.getElementById('chat-header-title');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Başlık güncelle
    chatHeader.textContent = `Chat with ${conversationName}`;
    // Sohbet alanını temizle
    chatMessages.innerHTML = `<div class="message received"><div class="bubble">Hello, this is ${conversationName}!</div></div>`;
    // Mesaj yazmayı etkinleştir
    chatInput.disabled = false;
}

// Mesaj gönderme işlevi
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Aktif sohbet yoksa mesaj göndermeyi engelle
    if (!activeChat) {
        alert('Please select a conversation first!');
        return;
    }

    const message = chatInput.value.trim();
    if (message) {
        // Gönderilen mesajı ekle
        chatMessages.innerHTML += `<div class="message sent"><div class="bubble">${message}</div></div>`;
        chatInput.value = ''; // Mesaj alanını temizle
        chatMessages.scrollTop = chatMessages.scrollHeight; // Mesajların sonuna kaydır
    }

    // Alınan mesaj simülasyonu (isteğe bağlı)
    setTimeout(() => {
        const receivedMessage = document.createElement("div");
        receivedMessage.classList.add("message", "received");
        receivedMessage.innerHTML = `<div class="bubble">This is a reply.</div>`;
        chatMessages.appendChild(receivedMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

// Geri gitme işlevi
function goBack() {
    activeChat = null; // Aktif sohbeti sıfırla
    const chatHeader = document.getElementById('chat-header-title');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Başlığı ve mesaj alanını sıfırla
    chatHeader.textContent = 'Select a conversation';
    chatMessages.innerHTML = ''; // Mesajları temizle
    chatInput.disabled = true; // Mesaj yazmayı devre dışı bırak
}
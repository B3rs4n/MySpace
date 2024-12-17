

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

// Sayfanın başka bir yerine tıklanırsa, popup menüsünü kapat
document.addEventListener('click', function(event) {
    if (!event.target.closest('.edit')) {
        popupMenu.forEach(menu => {
            menu.style.display = 'none';
        });
    }
});



// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages 
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// ============== MESSAGES ============== 

//Searches messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex'; 
        } else {
            user.style.display = 'none';
        }
    })
}

//Search for messages
messageSearch.addEventListener('keyup', searchMessage);

//Highlight messages card when messages menu item is clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});




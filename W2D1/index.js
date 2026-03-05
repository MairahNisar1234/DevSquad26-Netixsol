// 1. Your Data Structure
const notifications = [
    {id:1, isRead:false},
    {id:2, isRead:false},
    {id:3, isRead:false},
    {id:4, isRead:false},
    {id:5, isRead:false},
    {id:6, isRead:false},
];


const markAll = document.querySelector(".mark-all-btn"); 
const unreadCount = document.querySelector(".unread-count"); 
const unreadMessages = document.querySelectorAll(".unread-bg"); 
const redDots = document.querySelectorAll(".dot"); 


markAll.addEventListener('click', () => {
    unreadCount.innerText = '0'; 
    unreadMessages.forEach((message) => {
        message.classList.remove("unread-bg");
    });

    redDots.forEach((dot) => {
        dot.style.display = "none";
    });
});

// 'index' must be included here as the second argument
unreadMessages.forEach((message, index) => {   
    message.addEventListener('click', () => {
        if (message.classList.contains("unread-bg")) {
            
            message.classList.remove("unread-bg");
            
            if (redDots[index]) {
                redDots[index].style.display = "none";
            }
            
            let currentCount = parseInt(unreadCount.innerText);
            if (currentCount > 0) {
                unreadCount.innerText = currentCount - 1;
            }
        }
    });
});
const privateMsg = document.querySelector('.private-message');

privateMsg.addEventListener('click', (e) => {
    e.stopPropagation(); 
    privateMsg.classList.toggle('bg-blue-100');
});
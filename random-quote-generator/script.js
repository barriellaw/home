let inputEl = document.getElementById("input-el");
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "The harder you work for something, the greater you'll feel when you achieve it. — Unknown",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "Your limitation—it’s only your imagination. — Unknown",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t stop when you’re tired. Stop when you’re done. — Unknown",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Success doesn’t just find you. You have to go out and get it. — Unknown",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. — Christian D. Larson",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Hard times don’t create heroes. It is during the hard times when the 'hero' within us is revealed. — Bob Riley",
    "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
    "Don’t limit your challenges. Challenge your limits. — Unknown",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. — William James",
    "Failure will never overtake me if my determination to succeed is strong enough. — Og Mandino",
    "The best time to plant a tree was 20 years ago. The second best time is now. — Chinese Proverb",
    "You are braver than you believe, stronger than you seem, and smarter than you think. — A.A. Milne",
    "Don’t wait for opportunity. Create it. — Unknown",
    "Great things never come from comfort zones. — Unknown",
    "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
    "I find that the harder I work, the more luck I seem to have. — Thomas Jefferson",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "If you are not willing to risk the usual, you will have to settle for the ordinary. — Jim Rohn",
    "Good things come to people who wait, but better things come to those who go out and get them. — Unknown",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
    "The only place where success comes before work is in the dictionary. — Vidal Sassoon",
    "The difference between who you are and who you want to be is what you do. — Unknown",
    "The only way to achieve the impossible is to believe it is possible. — Charles Kingsleigh",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "To accomplish great things, we must not only act, but also dream, not only plan, but also believe. — Anatole France",
    "Set your goals high, and don’t stop till you get there. — Bo Jackson",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it. — Jordan Belfort",
    "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
    "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
    "Go the extra mile. It’s never crowded. — Wayne Dyer",
    "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
    "Do something today that your future self will thank you for. — Sean Patrick Flanery",
    "The only way of finding the limits of the possible is by going beyond them into the impossible. — Arthur C. Clarke",
    "The secret of success is to do the common thing uncommonly well. — John D. Rockefeller Jr.",
    "Don’t be discouraged. It’s often the last key in the bunch that opens the lock. — Unknown",
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('input-el').value = quote;
}

document.getElementById('quote-btn').addEventListener('click', displayQuote)


function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function showMobileWarning() {
    if (isMobile()) {
        document.getElementById('mobile-warning-popup').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('mobile-warning-popup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    showMobileWarning();
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('active');
};


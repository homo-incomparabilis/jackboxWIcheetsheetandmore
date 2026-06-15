// ВАЖНО: Объявляем данные прямо в начале файла menu.js
const menuData = [
    { title: "Смертельная вечеринка", url: "tmp1.html", img: "images/tmp.jpg" },
{ title: "Смертельная вечеринка 2", url: "tmp2.html", img: "images/tmp2.jpg" },
{ title: "Смертельная вечеринка 2: CE", url: "tmp2CE.html", img: "images/CE.png" },
{ title: "Trivia Murder Party 3", url: "tmp3.html", img: "images/header-2705260383.jpg" },
{ title: "Жми на кнопку", url: "push.html", img: "images/press.jpg" },
{ title: "Колесо", url: "wheel.html", img: "images/wheel.jpg" },
{ title: "Бредовуха 3", url: "fibbage3.html", img: "images/fibbage3.jpg" },
{ title: "Бредовуха 4", url: "fibbage4.html", img: "images/fibbage4.jpg" },
{ title: "Нашшпионаж", url: "guess.html", img: "images/nashshpionaj.jpg" },
{ title: "Сортировка", url: "quixort.html", img: "images/skorosort.png" },
{ title: "YDKJ Full Stream", url: "ydkj5.html", img: "images/YDNJFS.png" }
];
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('div');
    nav.className = 'global-nav';
    nav.innerHTML = `
    <div class="nav-toggle" id="menuToggle">ИГРЫ</div>
    <div class="nav-list" id="menuList">
    ${menuData.map(item => `
        <a href="${item.url}">
        <img src="${item.img}" alt="">
        <span>${item.title}</span>
        </a>
        `).join('')}
        </div>
        `;
        document.body.appendChild(nav);

        document.getElementById('menuToggle').onclick = (e) => {
            e.stopPropagation();
            const list = document.getElementById('menuList');
            list.style.display = (list.style.display === 'flex') ? 'none' : 'flex';
        };

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) document.getElementById('menuList').style.display = 'none';
        });
});

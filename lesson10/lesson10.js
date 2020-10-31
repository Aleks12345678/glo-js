'use strict';

const books = document.querySelectorAll('.book'),
    collectionsBooks = document.querySelectorAll('.books'),
    reklamaDel = document.querySelector('.adv');
 
    // 1. Восстановить порядок
collectionsBooks[0].append(books[1]);
collectionsBooks[0].append(books[0]);
collectionsBooks[0].append(books[4]);
collectionsBooks[0].append(books[3]);
collectionsBooks[0].append(books[5]);
collectionsBooks[0].append(books[2]);
  
   //2. Заменить картинку
document.body.style.background = 'url(./image/you-dont-know-js.jpg)';

    // 3. Исправить заголовок
let books2 = document.querySelectorAll('.book > h2 > a')[2];
books2.textContent = 'Книга 3. this и Прототипы Объектов';

    // 4. Убрать рекламу
reklamaDel.remove();

    // 5. Восстановить порядок глав 2 и 5
let chapterTwo = document.querySelectorAll('.book > ul')[1];
let elemChapter = chapterTwo.querySelectorAll('.book > ul > li');
elemChapter[3].after(elemChapter[6]);
elemChapter[6].after(elemChapter[8]);
elemChapter[9].after(elemChapter[2]);

let chapterFive = document.querySelectorAll('.book > ul')[4];
let elemChapterFive = chapterFive.querySelectorAll('.book > ul > li');
elemChapterFive[1].after(elemChapterFive[9]);
elemChapterFive[4].after(elemChapterFive[2]);
elemChapterFive[7].after(elemChapterFive[5]);

    // 6. Добавить главу 8
let chapterSix = document.querySelectorAll('.book > ul')[5];
let elemChapterSix = chapterSix.querySelectorAll('.book > ul > li');
elemChapterSix[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');






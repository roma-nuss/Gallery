# 🖼️ Image Gallery

Небольшое приложение для поиска изображений по ключевому слову с использованием
Pixabay API.

Проект создан на JavaScript с использованием Vite и Axios.

---

## ✨ Функционал

- 🔎 Поиск изображений по ключевому слову
- 📸 Загрузка изображений с Pixabay API
- ➕ Кнопка `Load more` для подгрузки следующих изображений
- 📄 Пагинация по 15 изображений за один запрос
- 🖼️ Просмотр увеличенной версии изображения через SimpleLightbox
- ⏳ Индикатор загрузки во время HTTP-запроса
- 🔔 Уведомления через iziToast
- 🚫 Обработка пустого поискового запроса
- ❌ Обработка ошибок HTTP-запросов
- 📭 Уведомление, если изображения не найдены
- 🏁 Уведомление о достижении конца результатов поиска
- 📜 Плавная прокрутка после загрузки новой порции изображений
- 📱 Адаптивная верстка

---

## 🛠️ Использованные технологии

- HTML5
- CSS3
- JavaScript
- Vite
- Axios
- Pixabay API
- SimpleLightbox
- iziToast
- Git / GitHub
- GitHub Pages

---

## 🌐 API

Для получения изображений используется:

**Pixabay API**

Приложение отправляет запросы с такими параметрами:

- `q` — поисковый запрос
- `image_type=photo`
- `orientation=horizontal`
- `safesearch=true`
- `page` — номер текущей страницы
- `per_page=15`

---

## 📂 Структура проекта

````text
src/
│
├── main.js
│
├── css/
│   └── styles.css
│
└── js/
    ├── pixabay-api.js
    └── render-functions.js
pixabay-api.js
Содержит функцию для HTTP-запросов к Pixabay API.
getImagesByQuery(query, page)
render-functions.js
Содержит функции для работы с интерфейсом:
createGallery()
clearGallery()
showLoader()
hideLoader()
showLoadMoreButton()
hideLoadMoreButton()
main.js
Содержит основную логику приложения:
- обработку формы;
- поиск изображений;
- пагинацию;
- обработку ошибок;
- работу кнопки Load more;
- проверку конца коллекции;
- плавную прокрутку страницы.
🚀 Запуск проекта
Склонировать репозиторий:
git clone https://github.com/roma-nuss/Gallery.git
Перейти в папку проекта:
cd Gallery
Установить зависимости:
npm install
Запустить проект:
npm run dev
📦 Сборка проекта
npm run build
👨‍💻 Автор
Roman
GitHub: @roma-nuss
💙 Спасибо за просмотр проекта!
Если проект понравился — можно поставить ⭐ репозиторию.

Я бы ещё в самом верху после описания добавил две красивые ссылки:

```md
🔗 **Live Page:** ссылка на GitHub Pages
💻 **Source Code:** https://github.com/roma-nuss/Gallery
````

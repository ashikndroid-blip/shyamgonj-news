const newsList = document.getElementById('news-list');

const latestNews = [
  "শ্যামগঞ্জে বন্যার পানি কমতে শুরু করেছে",
  "জাতীয় বিশ্ববিদ্যালয়ের ফলাফল প্রকাশ",
  "বাংলাদেশ বনাম ভারত ক্রিকেট ম্যাচ আজ",
  "ময়মনসিংহে নতুন প্রযুক্তি মেলা শুরু"
];

latestNews.forEach(news => {
  const li = document.createElement('li');
  li.textContent = news;
  newsList.appendChild(li);
});

<input type="text" id="searchBox" placeholder="সংবাদ খুঁজুন...">
<ul id="news-list"></ul>

const searchBox = document.getElementById('searchBox');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  newsList.innerHTML = '';
  latestNews
    .filter(news => news.toLowerCase().includes(query))
    .forEach(news => {
      const li = document.createElement('li');
      li.textContent = news;
      newsList.appendChild(li);
    });
});

const categoryFilter = document.getElementById('categoryFilter');

const categorizedNews = [
  { title: "জাতীয় বিশ্ববিদ্যালয়ের ফলাফল প্রকাশ", category: "জাতীয়" },
  { title: "বাংলাদেশ বনাম ভারত ক্রিকেট ম্যাচ", category: "খেলা" },
  { title: "UN সম্মেলনে বাংলাদেশের বক্তব্য", category: "আন্তর্জাতিক" }
];

categoryFilter.addEventListener('change', () => {
  const selected = categoryFilter.value;
  newsList.innerHTML = '';
  categorizedNews
    .filter(news => selected === 'all' || news.category === selected)
    .forEach(news => {
      const li = document.createElement('li');
      li.textContent = news.title;
      newsList.appendChild(li);
    });
});
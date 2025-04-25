<template>
    <div class="articles">
      <div
        class="card"
        v-for="(article, index) in articles"
        :key="index"
        @click="goToArticle(article.link)"
      >
      <img :src="article.img" alt="文章缩略图"/>
        <h3>{{ article.title }}</h3>
        <div class="meta">
          作者：<span class="author">{{ article.author }}</span><br />
          译者：<span class="translator">{{ article.translator }}</span><br />
          <span class="date">{{ article.date }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    articles: {
      type: Array,
      required: true
    }
  })
  
  const goToArticle = (link) => {
    window.open(`/newsWeb/#/article/${link}`, '_blank')
  }
  </script>
  
  <style scoped>
.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 24px;
}


.card {
  width: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
}

.card h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px;
  color: #111;
}

.card .meta {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.card .meta .author {
  color: #0077cc;
}

.card .meta .translator {
  color: #3c9;
}

.card .meta .date {
  color: #999;
}
  </style>
  



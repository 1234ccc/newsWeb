<template>
  <div class="article-list">
    <div
      class="article-item"
      v-for="(article, index) in articles"
      :key="index"
      @click="goToArticle(article.link)"
    >
      <img :src="article.img" alt="文章缩略图" class="thumb" />
      <div class="info">
        <h2 class="title">{{ article.title }}</h2>
        <p class="meta">
          作者：<span class="author">{{ article.author }}</span> ｜ 
          译者：<span class="translator">{{ article.translator }}</span> ｜ 
          <span class="date">{{ article.date }}</span>
        </p>
        <p class="excerpt">{{ article.excerpt }}</p>
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
.article-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  margin: 0 200px;
}

.article-item {
  display: flex;
  gap: 20px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  padding-bottom: 24px;
}

.thumb {
  width: 220px;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #111;
  margin-bottom: 8px;
}

.meta {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.meta .author {
  color: #0077cc;
}

.meta .translator {
  color: #3c9;
}

.meta .date {
  color: #999;
}

.excerpt {
  font-size: 15px;
  color: #444;
  line-height: 1.6;
}

  </style>
  
<template>
    <div class="article">
      <h1>{{ article.title }}</h1>
      <p class="date">{{ article.date }}</p>
      <template v-for="(item, index) in article.content" :key="index">
      <p v-if="item.type === 'text'">{{ item.value }}</p>
      <h2 v-else-if="item.type === 'subtitle'" class="subtitle">{{ item.value }}</h2>
      <img
        v-else-if="item.type === 'image'"
        :src="item.src"
        :alt="item.alt"
        class="article-img"
      />
    </template>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
import image1 from '@/assets/images/carousel/2.png'
    
  const route = useRoute()

  const articles = {
    article1: {
    title: '联合国召开气候变化大会',
    date: '作者:xxx 2025年4月23日',
    content: [
      { type: 'text', value: '气候变化已成为全球面临的重要议题，各国代表在此次大会上共同探讨未来的应对策略，包括减少碳排放、推动可再生能源发展等。' },
      { type: 'text', value: '发达国家与发展中国家之间的分歧仍然存在，特别是在资金援助和技术转让问题上。' },
      { type: 'image', src: image1, alt: '气候大会现场' },
      { type: 'subtitle', value: '延伸议案' },
      { type: 'text', value: '大会最终通过了《巴黎协定》的延伸议案，标志着全球应对气候变化迈出重要一步。' },
      { type: 'subtitle', value: '后续影响' },
      { type: 'text', value: '该议案将对全球碳市场、能源政策等产生深远影响。' }
    ]
  },
  article2: {
    title: '人工智能影响全球就业市场',
    date: '作者:xxx 2025年4月23日',
    content: [
      { type: 'text', value: '气候变化已成为全球面临的重要议题，各国代表在此次大会上共同探讨未来的应对策略，包括减少碳排放、推动可再生能源发展等。' },
      { type: 'text', value: '发达国家与发展中国家之间的分歧仍然存在，特别是在资金援助和技术转让问题上。' },
      { type: 'subtitle', value: '延伸议案' },
      { type: 'text', value: '大会最终通过了《巴黎协定》的延伸议案，标志着全球应对气候变化迈出重要一步。' },
      { type: 'subtitle', value: '后续影响' },
      { type: 'text', value: '该议案将对全球碳市场、能源政策等产生深远影响。' }
    ]
  },
  article3: {
    title: '全球股市近期波动加剧',
    date: '作者:xxx 2025年4月23日',
    content: [
      { type: 'text', value: '气候变化已成为全球面临的重要议题，各国代表在此次大会上共同探讨未来的应对策略，包括减少碳排放、推动可再生能源发展等。' },
      { type: 'text', value: '发达国家与发展中国家之间的分歧仍然存在，特别是在资金援助和技术转让问题上。' },
      { type: 'subtitle', value: '延伸议案' },
      { type: 'text', value: '大会最终通过了《巴黎协定》的延伸议案，标志着全球应对气候变化迈出重要一步。' },
      { type: 'subtitle', value: '后续影响' },
      { type: 'text', value: '该议案将对全球碳市场、能源政策等产生深远影响。' }
    ]
  }
  }
  const article = articles[route.params.id] || {
    title: '未找到',
    date: '作者:xxx 2025年4月23日',
    content:[ {type: 'text', value: '没内容' }]
  }
  </script>
  
  <style scoped>
.article {
    max-width: none ;
    padding: 0 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #222;
    line-height: 1.5;
  }
  
  .article h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 24px;
    line-height: 1.3;
    text-align: left;
    color: rgb(38, 38, 38);
  }

  .article h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 24px;
    line-height: 1.3;
    text-align: center;
    color: rgb(17, 17, 17);
  }


  .article .date {
  font-size: 14px;
  color: #888;
  text-align: left;
  padding: 0;
}

  
  .article p {
  text-align: justify;
  margin-bottom: 20px;
  font-size: 25px;
}

.article .subtitle {
  font-size: 30px;
  font-weight: 1000;
  text-align: left;
color: rgb(38, 153, 38);
}

.article-img {
  display: block;
  max-width: 100%;
  margin: 20px auto;
  border-radius: 10px;
}
  </style>
  
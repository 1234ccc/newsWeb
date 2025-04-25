<template>
  <div>
    <HotCarousel />
  </div>
  <div><AriticleListTop :articles="articlesListTop"/></div> 
  <div><ArticleList :articles="homeArticles"/></div> 
</template>

<script setup>
import ArticleList from '../components/ArticleList.vue'
import AriticleListTop from '../components/ArticleListTop.vue'
import HotCarousel from '../components/HotCarousel.vue'
import image1 from '@/assets/images/carousel/1.png'
import image2 from '@/assets/images/carousel/2.png'
import image3 from '@/assets/images/carousel/3.png'
const homeArticles = [
  {
    img: image1,
    title: '中国在非洲能源转型中，扮演何种角色？',
    author: '小明',
    translator: 'Sicong Zou',
    date: '2025年9月30日',
    excerpt: '中国在非洲投资清洁能源项目，塑造新型南南合作模式……',
    link: 'article1'
  },
  {
    img: image2,
    title: '日本AI监管政策逐步落地',
    author: '小林',
    translator: 'Li Mei',
    date: '2025年10月1日',
    excerpt: '面对技术快速发展，日本提出数据伦理法规……',
    link: 'article2'
  },
]
const articlesListTop = [
  {
    img: image3,
    title: '中国在非洲能源转型中，扮演何种角色？',
    author: '小明',
    translator: 'Sicong Zou',
    date: '30 九月 2025',
    link: 'article1'
  },
  {
    img: image1,
    title: '一句世界杯的玩笑话，能否迫使法国面对其非洲议题？',
    author: '小红',
    translator: 'Yanne C',
    date: '7 一月 2024',
    link: 'article2'
  },
  {
    img: image2,
    title: '贩卖非洲儿童喊话视频 中国淘宝面临批评风暴',
    author: '小张',
    translator: 'Zoe Chang',
    date: '21 八月 2025',
    link: 'article3'
  }
]


</script>

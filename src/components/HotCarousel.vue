<template>
  <div
    class="carousel"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="carousel-track"
      :style="trackStyle"
      @transitionend="handleTransitionEnd"
    >
      <!-- 克隆最后一张 -->
      <div class="carousel-item" v-if="slides.length">
        <img
          :src="slides[slides.length - 1].img"
          :alt="slides[slides.length - 1].title"
          :class="{ loaded: imageLoaded }"
          @load="onImageLoad"
        />
        <div class="caption">{{ slides[slides.length - 1].title }}</div>
      </div>

      <!-- 正常图片 -->
      <div
        class="carousel-item"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <a
          :href="slide.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="slide.img"
            :alt="slide.title"
            :class="{ loaded: imageLoaded }"
            @load="onImageLoad"
          />
        </a>
        <div class="caption">{{ slide.title }}</div>
      </div>

      <!-- 克隆第一张 -->
      <div class="carousel-item" v-if="slides.length">
        <img
          :src="slides[0].img"
          :alt="slides[0].title"
          :class="{ loaded: imageLoaded }"
          @load="onImageLoad"
        />
        <div class="caption">{{ slides[0].title }}</div>
      </div>
    </div>

    <!-- 左右按钮：只有在 hover 的时候显示 -->
    <button class="nav prev" @click="prevSlide" v-show="showNav">‹</button>
    <button class="nav next" @click="nextSlide" v-show="showNav">›</button>

    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="'dot-' + index"
        :class="{ active: index === realIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import africa1 from '@/assets/images/carousel/1.png';
import africa2 from '@/assets/images/carousel/2.png';
import africa3 from '@/assets/images/carousel/3.png';
import africa4 from '@/assets/images/carousel/4.png';
import africa5 from '@/assets/images/carousel/5.png';

export default {
  name: 'HotCarousel',
  data() {
    return {
      currentIndex: 1,
      imageLoaded: false,
      showNav: false,
      intervalId: null,
      isTransitioning: true,
      isAnimating: false,
      slides: [
  { img: africa1, title: '联合国召开气候变化大会', link: '/newsWeb/#/Asia' }, 
  { img: africa2, title: '人工智能影响全球就业市场', link: '/newsWeb/#/' },
  { img: africa3, title: '全球股市近期波动加剧', link: '/newsWeb/#/' },
  { img: africa4, title: '全球股市近期波动加剧', link: '/newsWeb/#/' },
  { img: africa5, title: '全球股市近期波动加剧', link: '/newsWeb/#/' }
]
    };
  },
  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: this.isTransitioning ? 'transform 0.6s ease' : 'none'
      };
    },
    realIndex() {
      return (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }
  },
  methods: {
    nextSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.isTransitioning = true;
      this.currentIndex++;
    },
    prevSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.isTransitioning = true;
      this.currentIndex--;
    },
    goToSlide(index) {
      this.isTransitioning = true;
      this.currentIndex = index + 1;
    },
    handleTransitionEnd() {
      this.isAnimating = false;
      if (this.currentIndex === 0) {
        this.isTransitioning = false;
        this.currentIndex = this.slides.length;
      }
      if (this.currentIndex === this.slides.length + 1) {
        this.isTransitioning = false;
        this.currentIndex = 1;
      }
    },
    startAutoPlay() {
      this.stopAutoPlay();
      this.intervalId = setInterval(this.nextSlide, 2000);
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
    handleMouseEnter() {
      this.stopAutoPlay();
      this.showNav = true;
    },
    handleMouseLeave() {
      this.startAutoPlay();
      this.showNav = false;
    },
    onImageLoad() {
      this.imageLoaded = true;
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  height: 100%;
  position: relative;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease; /* 缓慢放大 */
}

.carousel-item img.loaded:hover {
  transform: scale(1.05);
}

.carousel:hover .prev,
.carousel:hover .next {
  opacity: 0.6;
}

.carousel-item a {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.caption {
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  width: 100%;
  padding: 15px;
  font-size: 30px;
  box-sizing: border-box;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 2;
  padding: 10px;
  transition: opacity 0.3s ease;
}

.prev, .next {
  width: 30px; /* 设置按钮宽度 */
  height: 45px; /* 设置按钮高度 */
  display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center;      /* 垂直居中 */
  background-color: rgba(57, 63, 66);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: opacity 0.3s ease;
  opacity: 0; /* 默认隐藏按钮 */
}


.next {
  right: 0px;
}

.prev {
    left: 0px;
}

.dots {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dots span.active {
  background-color: white;
}
</style>

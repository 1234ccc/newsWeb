<template>
  <div>
    <nav>
      <router-link to="/" class="nav-link">全球热点</router-link>
      <router-link to="/Africa" class="nav-link">非洲</router-link>
      <router-link to="/Asia" class="nav-link">亚洲</router-link>
    </nav>
    <div id="content"><router-view/></div>
  </div>
  <footer>
      <p>© 2025 新闻网站 | 由 Vue 3 + Vite 构建</p>
    </footer>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  background-color: rgb(59, 59, 59);
  border-bottom: 1px solid #ddd;
   font-size: 20px; 
}

.nav-link {
  color: rgb(245, 246, 247);
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: color 0.3s, background-color 0.3s;
}

.nav-link:hover {
  background-color: #e3e3e3;
  color: #42b983;
}

/* 当前路由激活状态（router-link-active） */
.router-link-exact-active {
  color: #fff;
  background-color: #42b983;
}

footer {
  background-color: rgb(45, 50, 55);
  text-align: center;
  padding: 16px;
  color: #fff;
  font-size: 14px;
  margin-top: 40px;
  border-top: 1px solid #ddd;
}
</style>

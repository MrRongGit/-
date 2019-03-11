<template>
  <div id="app">
    <div class="blog-left">
      <div
        style="width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    position: absolute;
    opacity: 0.7;
    z-index: -1;"
      ></div>
      <home></home>
    </div>

    <div class="blog-right">
      <!-- 当点击切换页面时，router变换 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AddBlog from "./components/Add-Blog";
import ShowBlogs from "./components/Show-Blogs";
import Home from "./components/Home";
export default {
  name: "app",
  components: {
    AddBlog,
    ShowBlogs,
    Home
  }
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

.blog-left,
.blog-right {
  float: left;
}

.blog-left {
  width: 30%;
  background-image: url("./assets/index_left.jpeg");
  background-size: cover;
  background-position: center center;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}

.blog-right {
  background-color: #3f3f3f;
  width: 70%;
  position: absolute;
  right: 0;
  top: 0;
}
@media screen and (max-width: 800px) {
    .blog-left {
      width:100%;
      position:static;
      height:100%;
    }
    .blog-right {
      width:100%;
      position:static;
    }
}
</style>

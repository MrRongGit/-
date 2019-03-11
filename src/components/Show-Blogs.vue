<template>
  <div id="show-blogs">
    <div class="search">
      <el-input placeholder="搜索" v-model="search" clearable></el-input>
      <!-- <div class="inputBtn">Go</div> -->
    </div>
    <div v-for="blog in filteredBlogs" :key="blog.title" class="wzbr">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title}}</h2>
      </router-link>
      <article>{{blog.content | snippet}}</article>
      <ul class="label">
        <li class="blog_fl" v-for="category in blog.categories" :key="category">
          <p v-labelColor>{{category}}</p>
        </li>
        <li class="openWhole">
          <router-link v-bind:to="'/blog/' + blog.id">展开全文>></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("https://wd8560417834unmeck.wilddogio.com/posts.json")
      .then(function(data) {
        // console.log(data)
        // this.blogs = data.body.slice(0, 10);
        // console.log(this.blogs);
        // console.log(data.json());
        return data.json();
      })
      .then(function(data) {
        // console.log(data);
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
          // console.log(data[key]);
        }
        this.blogs = blogsArray;
        // console.log(blogs);
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  directives: {
    // 定义一个为rainbow的方法 此方法会随机颜色 使用方法v-方法
    rainbow: function(el, binding, vnode) {
      el.style.color =
        "#" +
        Math.random()
          .toString(16)
          .slice(2, 8);
    },
    labelColor: function(el, binding, vnode) {
      el.style.background =
        "#" +
        Math.random()
          .toString(16)
          .slice(2, 8);
    }
  }
};
</script>

<style>
#show-blogs {
  padding: 0px 40px;
  margin: 0 auto;
}

.wzbr {
  padding: 20px;
  background-color: #3f3f3f;
  box-sizing: border-box;
  margin: 20px 0;
  border: 2px solid #2f2f2f;
  border-radius: 10px;
  -webkit-box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
}

.wzbr a {
  text-decoration: none;
}

.openWhole {
  background: #258fb8;
  font-size: 12px;
  float: right;
  height: 20px;
  line-height: 20px;
  padding: 2px 8px 4px;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-transition: background 0.3s;
  -moz-transition: background 0.3s;
  -ms-transition: background 0.3s;
  transition: background 0.3s;
}
.openWhole:hover {
  background-color: #3f3f3f;
}

.openWhole a {
  color: #fff;
}

.search {
  width: 300px;
  height: 30px;
  margin: 10px auto;
}

.search > .inputText {
  width: 270px;
  height: 100%;
  border-radius: 10px;
  outline: none;
}
</style>

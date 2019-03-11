<template>
  <div class="single-blogs">
    <div class="singleBr wzbr">
      <h1>{{blog.title}}</h1>
      <div class="fl">
        <ul class="label">
          <li class="blog_fl" v-for="category in blog.categories" :key="category">
            <p>{{category}}</p>
          </li>
        </ul>
      </div>

      <article>{{blog.content}}</article>
      <p>作者：{{blog.author}}</p>
      <div class="deleteAndEdit">
        <el-row>
          <router-link :to="'/edit/' + id"><el-button style="width:40px;" type="primary" icon="el-icon-edit" circle></el-button></router-link>
        
        <el-button type="danger" icon="el-icon-delete" circle @click="deleteSingleBlog()"></el-button>
        </el-row>
        <!-- <button @click="deleteSingleBlog()">删除</button> -->
        
        <!-- <button><router-link :to="'/edit/' + id">编辑</router-link></button> -->
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get(
        "https://wd8560417834unmeck.wilddogio.com/posts/" + this.id + ".json"
      )
      .then(function(data) {
        // console.log(data);
        return data.json();
        // this.blog = data.body
      })
      .then(function(data) {
        this.blog = data;
      });
  },
  methods: {
    deleteSingleBlog() {
      if (confirm("确定删除此条博客吗?") == true) {
        this.$http
          .delete(
            "https://wd8560417834unmeck.wilddogio.com/posts/" +
              this.id +
              ".json"
          )
          .then(response => {
            this.$router.push({ path: "/" });
          });
      } else alert("恩~ 这是个明智的选择!");
    }
  }
};
</script>

<style scoped>
.single-blogs {
  padding: 0px 40px;
}
.el-button.is-circle {
  margin:5px;
}
.singleBr > h1 {
  text-align: center;
  color: #999;
  font-size: 26px;
  font-weight: initial;
  transition: all 1s;
}
.singleBr > h1:hover {
  color: #fff;
}
.singleBr > p {
  color: #999;
}
.singleBr > article {
  text-indent: 2rem;
  color: #999;
  font-size: 16px;
}

.fl {
  margin-bottom: 15px;
}

.deleteAndEdit {
  margin-top:10px;
}

.deleteAndEdit a {
  color:#000;
}

</style>

  <template>
  <div class="add-blog">
    <div class="xblog">
      <h2 class="main_color">添加博客</h2>
      <form v-if="!summited">
        <label>博客标题:</label>
        <el-input placeholder="请输入内容" v-model="blog.title" clearable></el-input>
        <label>博客内容</label>
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="blog.content"></el-input>
        <el-checkbox-group v-model="blog.categories">
    <el-checkbox label="Vue.js"></el-checkbox>
    <el-checkbox label="Node.js"></el-checkbox>
    <el-checkbox label="React.js"></el-checkbox>
    <el-checkbox label="Angular.js"></el-checkbox>
  </el-checkbox-group>

        <label>作者</label>
        <el-select v-model="blog.author" placeholder="请选择">
    <el-option
      v-for="author in authors"
      :key="author"
      :label="author"
      :value="author">
    </el-option>
  </el-select>
        <!-- <select v-model="blog.author" class="blog_input">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select> -->
        <el-button style="display:block;margin-top:10px;" type="success" @click.prevent="post">添加博客</el-button>
      </form>
      <div v-if="summited" class="success_state">
        <h3>您的博客发布成功!!!</h3>
      </div>
    </div>

    <hr>
    <div id="preview">
      <h3 class="main_color">博客总览</h3>
      <p class="blog_title main_color">{{blog.title}}</p>
      <ul class="article_fl">
        <li>{{blog.author}}</li>
        <li>{{blog.time}}</li>
      </ul>
      <p class="blog_content main_color">{{blog.content}}</p>
      <ul class="label">
        <li class="blog_fl" v-for="category in blog.categories" :key="category">
          <p>{{category}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["rong1", "rong2", "rong3"],
      summited: false
    };
  },
  // 局部注册组件
  components: {},
  methods: {
    post: function() {
      this.$http
        .post("https://wd8560417834unmeck.wilddogio.com/posts.json", this.blog)
        .then(function(data) {
          // console.log(data);
          this.summited = true;
          this.$router.push({ path: "/" });
        });
    }
  }
  //,
  // beforeRouteLeave (to, from, next) {
  //     if(this.summited === false) {
  //       if(confirm('当前博客未发布,确认要放弃吗?') == true){
  //         console.log('返回页面成功');

  //         from({path:'/'});
  //       next();
  //       }else {
  //       next(false);
  //       console.log('你取消了')
  //     }
  //     }else{
  //       next(false);
  //     }
  //   }
};
</script>

<style>
.add-blog {
  box-sizing: border-box;
}
.el-checkbox {
  color:#fff !important;
}
label {
  display: block;
  margin: 20px 0 10px;
  color: #999;
}

/* input[type="text"],
textarea,
select {
  width: 80%;
} */

#checkboxes > label {
  display: inline-block;
  margin-top: 0;
}

#checkboxes > input {
  display: inline-block;
  margin-right: 10px;
}
.sub {
  color: #fff;
  background-color: crimson;
  font-size: 18px;
  cursor: pointer;
  display: block;
  margin: 20px 0 10px;
  border-radius: 4px;
  padding: 6px;
  border: none;
}

#preview {
  padding: 40px;
  border: 1px solid #2f2f2f;
  border-radius: 7px;
  -webkit-box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
}

.main_color {
  color: #999;
}

.blog_title {
  text-align: center;
}

.article_fl li {
  display: inline-block;
  width: 50%;
  text-align: center;
  color: #999;
}

.blog_input {
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 2px solid #2f2f2f;
  border-radius: 10px;
  -webkit-box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
  -webkit-box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.46);
}

textarea {
  height: 100px !important;
}

.xblog {
  padding: 40px;
}

.success_state h3 {
  color: crimson;
}

.label {
  padding: 20px;
}

.blog_fl p {
  display: inline-block;
  text-decoration: none;
  font-weight: normal;
  font-size: 10px;
  color: #fff;
  height: 18px;
  line-height: 18px;
  padding: 0 5px 0px 10px;
  position: relative;
  border-radius: 5px;
  background: orange;
  margin: 5px 9px 5px 8px;
  cursor: pointer;
}

.label > .blog_fl {
  float: left;
}
</style>


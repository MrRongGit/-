  <template>
  <div class="add-blog">
        <div class="xblog">
          <h2 class="main_color">编辑博客</h2>
          <form v-if="!summited">
            <label>博客标题:</label>
            <input type="text" class="blog_input" v-model="blog.title" required="required">
            <label>博客内容</label>
            <textarea v-model="blog.content" class="blog_input"></textarea>
            <div id="checkboxes">
              <label>Vue.js</label>
              <input type="checkbox" value="Vue.js" v-model="blog.categories">
              <label>Node.js</label>
              <input type="checkbox" value="Node.js" v-model="blog.categories">
              <label>React.js</label>
              <input type="checkbox" value="React.js" v-model="blog.categories">
              <label>Angular.js</label>
              <input type="checkbox" value="Angular.js" v-model="blog.categories">
            </div>
            <label>作者</label>
            <select v-model="blog.author" class="blog_input">
              <option v-for="author in authors" :key="author">{{author}}</option>
            </select>
            <button @click.prevent="post" class="sub">确认修改</button>
          </form>
          <div v-if="summited" class="success_state">
            <h3>您的博客修改成功!!!</h3>
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
      id:this.$route.params.id,
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
  methods: {
    fetchData() {
        // console.log(this.id);
        this.$http.get("https://wd8560417834unmeck.wilddogio.com/posts/" + this.id + ".json")
                  .then((response) => {
                    console.log(response.data);
                    this.blog = response.data;
                    this.blog.categories = this.blog.categories ? Object.values(this.blog.categories) : [];
                    // console.log(response.body.categories);
                    // this.blog.categories = response.body.categories;
                    
                  })
    },
    post: function() {
      this.$http
        .put("https://wd8560417834unmeck.wilddogio.com/posts/" + this.id + ".json",this.blog)
        .then(function(data) {
          // console.log(data);
          this.summited = true;
        });
    },
  },
    created() {
      this.fetchData();
    }
};
</script>


<style>
.add-blog {
  box-sizing: border-box;
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
  padding:20px;
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


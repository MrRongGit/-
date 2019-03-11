<template>
  <div id="home">
    <header class="header">
      <a href="" class="portrait">
        <img src="./../assets/logo.jpg" alt="">
      </a>
      <div class="name"><p>{{header.myName}}</p></div>
      <div class="motto"><p>--{{header.motto}}--</p></div>
      <nav class="nav">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/add">添加博客</router-link></li>
        </ul>
      </nav>
    </header>
    
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // navs: ['首页','添加博客']
      header: {
        myName: "随风无痕",
        motto: "无数代码汇成了'选择',无数选择编织出'命运'"
      }
      
    }
  }
};
</script>
  
<style scoped>
  .header {
    padding-top:20px;
    width:98%;
    margin:40px auto 0px;
  }

  .portrait {
    display: block;
    width:110px;
    height:110px;
    margin:0 auto;
    -webkit-box-shadow: 0 0 0 2px rgba(255,255,255,0.5), 0px 2px 20px 3px rgba(0,0,0,0.25);
    box-shadow: 0 0 0 2px rgba(255,255,255,0.5), 0px 2px 20px 3px rgba(0,0,0,0.25);
    border-radius:50%;
    overflow: hidden;
  }

  .portrait>img {
    width:100%;
    height:100%;
  } 

  .nav {
    line-height:30px;
    margin:20px auto 0px;
  }

  .nav>ul {
    list-style:none;
  }

  .nav>ul>li {
    text-align:center;
  }

  .nav>ul>li>a {
    text-decoration:none;
    font-size:14px;
  }

  .nav>ul>li>a:hover {
    padding:3px;
    border-radius:5px;
    background-color:#258fb8;
  }

  .motto>p:hover {
    color:#4d4d4d;
  }

  .header,.header a {
    color:#fff;
  }

  .name>p,.motto> p{
  text-align: center;
  margin:10px auto 0px;
  }

  .name>p{
    font-size:24px;
  }

  .motto>p {
    font-size:14px;
  }
</style>

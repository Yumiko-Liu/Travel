<template>
  <div class="comment-list">
    <ul>
      <li v-for="item of [1,1,1]">
        <p class="user-bar">
          <img src="http://img.qq1234.org/uploads/allimg/150528/8_150528173105_12.jpg" class="avatar" />
          <span>啊大大大</span>
          <span>2017-09-19</span>
        </p>
        <p class="content">详细条理的攻略，点赞收藏分享给去日本的朋友。</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .comment-list {
    ul {
      li {
        padding: .65rem 0;
        border-bottom: 1px solid #ddd;
        .user-bar {
          position: relative;
          height: 2rem;
          .avatar {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            position: absolute;
          }
          span {
            display: block;
            padding-left: 2.25rem;
            font-size: .65rem;
            height: 1rem;
            line-height: 1rem;
          }
        }
        .content {
          font-size: .75rem;
          margin-top: .5rem;
        }
      }
    }
  }
</style>

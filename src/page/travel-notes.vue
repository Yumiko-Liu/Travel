<template>
  <div class="page">
    <section class="notes-cover">
      <img src="https://n2-q.mafengwo.net/s10/M00/8C/64/wKgBZ1m43WqAYzuOABo5pYniJB468.jpeg?imageMogr2%2Fthumbnail%2F%21450x270r%2Fgravity%2FCenter%2Fcrop%2F%21450x270%2Fquality%2F90" />
    </section>
    <section class="article">
      <div class="notes-title">初秋的京都奈良大阪-和闺蜜来一场说走就走的旅行</div>
      <div class="meta">
        <span>2017-09-17</span>
        <span>154浏览</span>
        <span>256赞</span>
      </div>
      <div class="author">
        <div class="avatar">
          <img src="http://img.qq1234.org/uploads/allimg/150528/8_150528173105_12.jpg" />
        </div>
        <div class="info">
          <p class="name">Yumiko</p>
          <p class="num">111篇游记，552位粉丝</p>
        </div>
        <div class="follow">
          <i class="fa fa-star-o"></i>
        </div>
      </div>
      <div class="notes">文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'travel-notes',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .notes-cover {
    width: 100%;
    height: 11rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .article {
    padding: .65rem .65rem;
    .notes-title {
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1.65rem;
      color: #474747;
    }
    .meta {
      font-size: .75rem;
      padding: .65rem 0;
      span {
        display: inline-block;
        margin-right: .5rem;
      }
    }
    .author {
      padding: .25rem 0;
      border: 1px solid #E3E3E3;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10);
      border-radius: 5px;
      text-align: center;
      & > div {
        display: inline-block;
      }
      .avatar {
        vertical-align: middle;
        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
        }
      }
      .info {
        color: #474747;
        vertical-align: middle;
        .name {
          font-size: .85rem;
          margin: .25rem 0;
        }
        .num {
          font-size: .65rem;
          margin: .25rem 0;
        }
      }
      .follow {
        width: 4rem;
        text-align: right;
        font-size: 1.25rem;
        vertical-align: middle;
        i {
          color: #ffdb26;
        }
      }
    }
    .notes {
      padding: .65rem 0;
    }
  }
  
</style>

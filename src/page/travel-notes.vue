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
          <mt-button size="small" @click="follow()" :class="{ disabled: followStatus }" v-text="followStatus ? '已关注': '关注'"></mt-button>
        </div>
      </div>
      <div class="notes">
        <p>懒癌晚期的我，过了一年再来写这篇游记……
          20161022关西自由行，第一站京都。
          京都给我的感觉是干净，有历史感，大街上的人衣品都很高！很喜欢这个城市~
          DAY1京都站
        </p>
        <img src="https://p2-q.mafengwo.net/s10/M00/B5/8E/wKgBZ1m5DjaATWl2AAnQ6EiFq8k06.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90" alt="">
        <img src="https://p2-q.mafengwo.net/s10/M00/C0/3B/wKgBZ1m5Ik6AF08LAAgvjfvsq6M57.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90" alt="">
        <p>往上走看到了宫崎骏共和国忍不住就跑进去了~</p>
        <img src="https://c3-q.mafengwo.net/s10/M00/B7/10/wKgBZ1m5EOKAKeXyAAo6aHGcs6Y91.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90" alt="">
        <p>第一晚，就这样在疲倦与期待中渡过了，神田太太家的futon真舒服，安心地睡了一晚</p>
      </div>
      <div class="like">
        <Like></Like>
      </div>
    </section>
  </div>
</template>

<script>
import Like from '../components/like';
export default {
  name: 'travel-notes',
  components: {
    Like
  },
  data () {
    return {
      followStatus: false
    }
  },
  methods: {
    follow () {
      this.followStatus = !this.followStatus;
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
        button {
          background: #FF5A5F;
          color: #fff;
          width: 3.3rem;
          height: 1.6rem;
          padding: 0;
          text-align: center;
          &.disabled {
            opacity: .5;
          }
        }
      }
    }
    .notes {
      font-size: .85rem;
      line-height: 1.25rem;
      padding: .85rem 0;
      border-bottom: 1px solid #ddd;
      img {
        max-width: 100%;
      }
    }
    .like {
      text-align: center;
    }
  }

</style>

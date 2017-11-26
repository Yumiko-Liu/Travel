<template>
  <div class="page">
    <section class="notes-cover">
      <img :src="note.cover" />
    </section>
    <section class="article">
      <div class="notes-title">{{ note.title }}</div>
      <div class="meta">
        <span>{{ date }}</span>
        <span>{{ note.page_view }}浏览</span>
        <span>{{ note.like_num }}赞</span>
      </div>
      <div class="author">
        <div class="avatar">
          <img :src="userInfo.avatar" />
        </div>
        <div class="info">
          <p class="name">{{ userInfo.username }}</p>
          <p class="num">{{ userInfo.notes_num }}篇游记，{{ userInfo.fans_num }}位粉丝</p>
        </div>
        <div class="follow">
          <mt-button size="small" @click="follow()" :class="{ disabled: followStatus }" v-text="followStatus ? '已关注': '关注'"></mt-button>
        </div>
      </div>
      <div class="notes" v-html="note.content"></div>
      <div class="like">
        <Like></Like>
      </div>
    </section>
  </div>
</template>

<script>
import Like from '../components/like';
import ajax from '../common/ajax';
import timeFormat from '../common/timeFormat';
export default {
  name: 'travel-notes',
  components: {
    Like
  },
  data () {
    return {
      followStatus: false,
      note: {},
      date: '',
      userInfo: {}
    }
  },
  methods: {
    follow () {
      this.followStatus = !this.followStatus;
    }
  },
  created () {
    let id = this.$route.params.id;
    let user = this.$route.params.u;
    ajax.get('getTravelNotes?id=' + id, (data) => {
      this.note = data[0];
      this.date = timeFormat.format(+data[0].pubtime);
    });
    ajax.get('getUsers?id=' + user, (data) => {
      this.userInfo = data[0];
    });
  },
  mounted () {
    let id = this.$route.params.id;
    ajax.get('addTravelNotesPageView?id=' + id , (data) => {});
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

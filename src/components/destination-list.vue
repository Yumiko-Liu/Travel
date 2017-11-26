<template>
  <div class="destination-list">
    <ul>
      <router-link v-for="item of list" :to="{ name: 'travel-notes-id' ,params: { id: item.id, u: item.author } }" tag="li" key="item">
        <img :src="item.cover" class="destination-img" />
        <p class="title">{{ item.title }}</p>
        <p class="desc">
          <!-- <img src="https://b3-q.mafengwo.net/s10/M00/31/A8/wKgBZ1kZvIOAQwUxAADF17nczYM12.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" class="avatar" /> -->
          <span class="username">{{ item.author_name }}</span> 在 <span>{{ item.city }}</span>
        </p>
        <p class="amount">
          <i class="fa fa-eye"></i> {{ item.page_view }}
          <i class="fa fa-heart"></i> {{ item.like_num }}
        </p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import ajax from '../common/ajax';
export default {
  name: 'destination-list',
  data () {
    return {
      list: []
    }
  },
  created () {
    ajax.get('getTravelNotes', (data) => {
      this.list = data;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .destination-list {
    ul {
      li {
        padding: .5rem 0;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        & > p {
          margin-right: 9.75rem;
        }
        .title {
          font-size: .85rem;
          line-height: 1.2rem;
          height: 3.6rem;
          font-weight: 800;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .destination-img {
          float: right;
          width: 9.5rem;
          height: 6rem;
        }
        .desc {
          margin-top: .25rem;
          margin-bottom: .25rem;
          color: #999;
          font-size: .65rem;
          .avatar {
            vertical-align: middle;
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
          }
          span {
            color: #FF5A5F;
          }
          .username {
            display: inline-block;
            max-width: 2.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
          }
        }
        .amount {
          color: #999;
          font-size: .65rem;
          i {
            &:nth-child(2) {
              margin-left: .5rem;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="acticle-list">
    <ul>
      <router-link v-for="item of list" :to="{ name: 'guide-notes-id' ,params: { id: item.id } }" tag="li" key="item">
        <p class="title">{{ item.title }}</p>
        <img :src="item.cover" class="acticle-img" />
        <div class="acticle-info">
          <p class="desc" v-html="item.content"></p>
          <p class="amount">
            <i class="fa fa-eye"></i> {{ item.page_view }}
            <i class="fa fa-heart"></i> {{ item.like_num }}
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import ajax from '../common/ajax';
export default {
  name: 'guide-list',
  props: ['city'],
  data () {
    return {
      list: []
    }
  },
  mounted () {
    let api = 'getGuideNotes';
    if (this.city) {
      api += '?city=' + this.city;
    }
    ajax.get(api, (data) => {
      let guides = [];
      for (let i = 0; i < data.length; i++) {
        let item = {};
        item.id = data[i].id;
        item.cover = data[i].cover;
        item.title = data[i].title;
        item.content = data[i].content;
        item.page_view = data[i].page_view;
        item.like_num = data[i].like_num;
        guides.push(item);
      }
      this.list = guides;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .acticle-list {
    ul {
      li {
        border-bottom: 1px solid #e1e1e1;
        padding: .5rem 0;
        .title {
          font-size: .85rem;
          max-height: 1.7rem;
          margin-bottom: .25rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .acticle-img {
          width: 6.75rem;
          height: 4.25rem;
          float: left;
        }
        .acticle-info {
          height: 4.25rem;
          margin-left: 7rem;
          .desc {
            font-size: .75rem;
            line-height: 1rem;
            color: #999;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            height: 3rem;
            margin-bottom: .5rem;
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
  }
</style>

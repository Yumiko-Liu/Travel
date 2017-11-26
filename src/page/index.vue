<template>
  <div class="page">
    <section class="carousel">
      
        <mt-swipe :auto="4000" :show-indicators="false">
          <mt-swipe-item class="img-item" v-for="item of carousel" :key="item.title">
            <router-link :to="{ name: 'guide-notes-id' ,params: { id: item.id } }" tag="span">
              <img :src="item.image" />
              <p>{{ item.title }}</p>
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
      
    </section>
     <section class="menu">
      <router-link :to="item.path" tag="div" class="menu-item" v-for="item of menu" :key="item.title">
       <img :src="item.icon" />
       <span>{{ item.title }}</span>
      </router-link>
    </section>
    <div class="flow-title">目的地推荐</div>
    <section class="destinationflow">
      <destinationRecommend></destinationRecommend>
    </section>
    <div class="flow-title">推荐攻略</div>
    <section class="guideflow">
      <guideList></guideList>
    </section> 
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import destinationRecommend from '../components/destination-recommend';
import guideList from '../components/guide-list';
import ajax from '../common/ajax';
export default {
  name: 'index',
  components: {
    destinationRecommend,
    guideList
  },
  data () {
    return {
      carousel: [],
      menu: [{
        title: "找攻略",
        icon: require("../assets/guide.png"),
        path: "/popular-guide"
      }, {
        title: "看游记",
        icon: require("../assets/travels.png"),
        path: "/destination"
      }]
    }
  },
  mounted () {
    ajax.get('getGuideNotes', (data) => {
      let covers = [];
      for (let i = 0; i < 3; i++) {
        let item = {};
        item.id = data[i].id;
        item.image = data[i].cover;
        item.title = data[i].title;
        covers.push(item);
      }
      this.carousel = covers;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .carousel {
    background: #000;
    height: 12.5rem;
    .img-item {
      height: 12.5rem;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        font-weight: bold;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        color: #fff;
        padding: .65rem;
        font-size: 1rem;
        line-height: 1.25rem;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
    }
  }
  .menu {
    display: flex;
    .menu-item {
      text-align: center;
      flex: 1;
      height: 3rem;
      line-height: 3rem;
      font-size: .85rem;
      img {
        display: inline;
        width: 1.65rem;
        height: auto;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
    }
  }
  .flow-title {
    background-color: #f8f8f8;
    text-align: center;
    font-size: .75rem;
    color: #999;
    padding: .5rem 0;
  }
  .destinationflow, .guideflow {
    padding: .65rem;
  }
</style>

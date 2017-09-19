<template>
  <div class="page">
    <section class="carousel">
      <router-link to="/guide-notes" tag="span">
        <mt-swipe :auto="4000" :show-indicators="false">
          <mt-swipe-item class="img-item" v-for="item of carousel" :key="item">
             <img :src="item" />
             <p>阿达大大大阿达大大大阿达大大大阿达大大大阿达大大大</p>
          </mt-swipe-item>
        </mt-swipe>
      </router-link>
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
import guideList from '../components/guide-list'
export default {
  name: 'index',
  components: {
    destinationRecommend,
    guideList
  },
  data () {
    return {
      carousel: [
        "https://n2-q.mafengwo.net/s10/M00/D5/55/wKgBZ1mmjbGAGxX1AAmT9Yy1-PE62.jpeg?imageMogr2%2Fthumbnail%2F%21640x360r%2Fgravity%2FCenter%2Fcrop%2F%21640x360%2Fquality%2F90", 
        "https://p1-q.mafengwo.net/s10/M00/91/8F/wKgBZ1mdawOARs_9AAevx8iASsE43.jpeg?imageMogr2%2Fthumbnail%2F%21640x360r%2Fgravity%2FCenter%2Fcrop%2F%21640x360%2Fquality%2F90", 
        "https://c4-q.mafengwo.net/s9/M00/9B/F0/wKgBs1Z4v2yAOFuEAAelJFqky_E74.jpeg?imageMogr2%2Fthumbnail%2F%21640x360r%2Fgravity%2FCenter%2Fcrop%2F%21640x360%2Fquality%2F90"
      ],
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

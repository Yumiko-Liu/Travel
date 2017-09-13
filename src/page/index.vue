<template>
  <div class="page">
    <mt-header title="Travel" class="mt-header"></mt-header>
    <section class="carousel">
      <router-link to="/guide" tag="span">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="img-item" v-for="item of carousel" :key="item">
            <img :src="item" />
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
      <acticleList></acticleList>
    </section> 
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import destinationRecommend from '../components/destination-recommend';
import acticleList from '../components/article-list'
export default {
  name: 'index',
  components: {
    destinationRecommend,
    acticleList
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
        path: "/guide"
      }, {
        title: "看游记",
        icon: require("../assets/travels.png"),
        path: ""
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mt-header {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    background: rgba(0,0,0,.4);
    color: #fff;
    font-weight: bold;
    border-bottom: 1px solid #FF5A5F;
    box-shadow: 0 -5px 25px #666;
    height: 2rem;
  }
  .carousel {
    background: #000;
    height: 12.5rem;
    .img-item {
      height: 12.5rem;
      img {
        width: 100%;
        height: 100%;
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

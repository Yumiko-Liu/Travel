<template>
  <div class="page" @touchmove="touching($event)" @touchstart="getPosY($event)">
    <div class="poster" :style="{ height: posterHeight }">
      <div class="caption">
        <div class="title">
          <span>东京</span>
          <small>Tokyo</small>
        </div>
        <div class="desc">
          东京是日本的首都。这座亚洲最大的城市不仅是全球最重要的经济中心之一，也是世界上人口最多的城市之一，是一座拥有巨大影响力的国际化大都市。
        </div>
      </div>
    </div>
    <section class="guideflow">
      <acticleList></acticleList>
    </section> 
  </div>
</template>

<script>
import acticleList from '../components/article-list'
export default {
  name: 'guide-list',
  components: {
    acticleList
  },
  data () {
    return {
      posterHeight: 0,
      touchstartPosY: 0
    }
  },
  methods: {
    getPosY (event) {
      this.touchstartPosY = event.changedTouches[0].clientY;
      this.clientHeight = +this.posterHeight.slice(0, -2);
    },
    touching (event) {
      this.posterHeight = this.clientHeight - (this.touchstartPosY - event.changedTouches[0].clientY)*2 + 'px';
    }
  },
  created () {
    this.posterHeight = document.body.clientHeight + 'px';
    this.clientHeight = document.body.clientHeight;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .poster {
    min-height: 8rem !important;
    max-height: 20rem !important;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505209841042&di=cb92791938e7071612b4ee5c9e673779&imgtype=0&src=http%3A%2F%2Fwww.desktx.com%2Fd%2Ffile%2Fphone%2Fother%2F20170223%2F82fcf6c3bc0ae91c50952beb6c3ea166.jpg");
    background-size: cover;
    position: relative;
    .caption {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
      position: absolute;
      bottom: 0;
      color: #fff;
      padding: .65rem;
      width: 100%;
      box-sizing: border-box;
      .title {
        span {
          font-weight: bold;
          font-size: 1.25rem;
        }
        small {
          font-size: .75rem;
        }
      }
      .desc {
        margin-top: .5rem;
        font-size: .65rem;
        line-height: 1.3rem;
      }
    }
  }
  .guideflow {
    padding: 0 .65rem;
  }
</style>

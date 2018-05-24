<template>
  <div class="page" @touchmove="touching($event)" @touchstart="getPosY($event)">
    <div class="poster" :style="{ height: posterHeight, background: cityInfo.cover }">
      <div class="caption">
        <div class="title">
          <span>{{ cityInfo.name_zh }}</span>
          <small>{{ cityInfo.name_en }}</small>
        </div>
        <div class="desc">
          {{ cityInfo.description }}
        </div>
      </div>
    </div>
    <section class="guideflow">
      <guideList :city="city"></guideList>
    </section> 
  </div>
</template>

<script>
import guideList from '../components/guide-list';
import ajax from '../common/ajax';
export default {
  name: 'loc-guide',
  components: {
    guideList
  },
  data () {
    return {
      posterHeight: 0,
      touchstartPosY: 0,
      cityInfo: {},
      city: ''
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
    let id = this.$route.params.id;
    this.city = this.$route.params.city;
    this.posterHeight = document.body.clientHeight + 'px';
    this.clientHeight = document.body.clientHeight;

    ajax.get('getDestination?id=' + id, (data) => {
      this.cityInfo = data[0];
      this.cityInfo.cover = 'url(' + data[0].cover + ')';
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .poster {
    min-height: 8rem !important;
    max-height: 20rem !important;
    background-size: cover !important;
    background-position: center !important;
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

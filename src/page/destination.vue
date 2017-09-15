<template>
  <div class="page">
    <section class="carousel">
      <h1>游记 | 纪念</h1>
      <router-link to="/detail" tag="span">
        <mt-swipe :auto="4000" :show-indicators="false">
          <mt-swipe-item v-for="item of [1,2,3]" key="item">
            <div class="destination-item">
              <img src="https://c4-q.mafengwo.net/s10/M00/09/E8/wKgBZ1lolTeABlZPABTeooKVWVI78.jpeg?imageMogr2%2Fthumbnail%2F%21450x270r%2Fgravity%2FCenter%2Fcrop%2F%21450x270%2Fquality%2F90" />
              <div>
                <p class="destination-title">日本关东神社游（17年端午东京、日光、镰仓7日亲子游）</p>
                <p class="destination-desc">
                  <span class="color-pink">Yumiko</span> 在 <span class="color-pink">日本</span>
                </p>
              </div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </router-link>
    </section>
    <section class="destination-list">
      <destinationList></destinationList> 
    </section>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import destinationList from '../components/destination-list';
export default {
  name: 'destination',
  components: {
    destinationList
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .color-pink {
    color: #FF5A5F;
  }
  .carousel {
    height: 16rem;
    background: linear-gradient(rgba(255, 227, 128, 1), rgba(255, 90, 95, 1)); 
    h1 {
      color: #fff;
      padding: .85rem .85rem 0;
      font-size: 1rem;
      font-weight: bold;
    }
    .destination-item {
      background: #fff;
      box-shadow: 0 0 .2rem .04rem rgba(0,0,0,0.2);
      width: 90%;
      height: 14rem;
      margin: 1rem auto;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
      }
      .destination-title {
        text-align: center;
        padding: .65rem;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .destination-desc {
        text-align: center;
        padding: 0 .65rem .65rem;
        font-size: .85rem;
      }
    }
  }
  .destination-list {
    padding: 0 .5rem;
    margin-top: 1.5rem;
  }
</style>

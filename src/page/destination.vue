<template>
  <div class="page">
    <section class="carousel">
      <h1>游记 | 纪念</h1>
        <mt-swipe :auto="4000" :show-indicators="false">
          <mt-swipe-item v-for="item of travelNotes" key="item">
              <router-link :to="{ name: 'travel-notes-id' ,params: { id: item.id, u: item.author } }" tag="span">
                <div class="destination-item">
                  <img :src="item.cover" />
                  <div>
                    <p class="destination-title">{{ item.title }}</p>
                    <p class="destination-desc">
                      <span class="color-pink">{{ item.author_name }}</span> 在 <span class="color-pink">{{ item.city }}</span>
                    </p>
                  </div>
                </div>
              </router-link>
          </mt-swipe-item>
        </mt-swipe>
    </section>
    <section class="destination-list">
      <destinationList></destinationList> 
    </section>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import destinationList from '../components/destination-list';
import ajax from '../common/ajax';
export default {
  name: 'destination',
  components: {
    destinationList
  },
  data () {
    return {
      travelNotes: []
    }
  },
  created () {
    ajax.get('getTravelNotes', (data) => {
      for (let i = 0; i < 3; i++) {
        this.travelNotes.push(data[i]);
      }
    });
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
        height: 10rem;
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

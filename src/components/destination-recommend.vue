<template>
  <div class="destination-flow">
    <ul>
      <li v-for="item of destinationFlow" v-bind:style="{ background: 'url(' + item.img + ')'}">
        <router-link :to="{ name: 'loc-guide-id' ,params: { id: item.id, city: item.loc } }" tag="span">
          <span>{{ item.loc }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ajax from '../common/ajax';
export default {
  name: 'destination-recommend',
  data () {
    return {
      destinationFlow: []
    }
  },
  mounted () {
    ajax.get('getDestination', (data) => {
      let destinations = [];
      for (let i = 0; i < 3; i++) {
        let item = {};
        item.id = data[i].id;
        item.loc = data[i].name_zh;
        item.img = data[i].cover;
        destinations.push(item);
      }
      this.destinationFlow = destinations;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .destination-flow {
    ul {
      &::-webkit-scrollbar {
        display: none;
      }
      height: 4rem;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      li {
        overflow: hidden;
        position: relative;
        display: inline-block;
        width: 6.5rem;
        height: 4rem;
        background-size: cover !important;
        border-radius: 5px;
        margin: 0 5px; 
        span {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          text-align: center;
          line-height: 4rem;
          background: rgba(0,0,0,.4);
          background-size: cover;
          border-radius: 5px;
          font-size: .85rem;
        }
      }
    }
  }
</style>

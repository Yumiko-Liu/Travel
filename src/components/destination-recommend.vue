<template>
  <div class="destination-flow">
    <ul>
      <li v-for="item of destinationFlow" v-bind:style="{ background: 'url(' + item.img + ')'}">
        <span>{{ item.loc }}</span>
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
      destinationFlow: [{
        loc: "东京",
        img: "https://p1-q.mafengwo.net/s10/M00/C0/62/wKgBZ1kvif6AKztxAAuyMuho4kk51.jpeg?imageMogr2%2Fthumbnail%2F%21640x360r%2Fgravity%2FCenter%2Fcrop%2F%21640x360%2Fquality%2F90"
      }, {
        loc: "旧金山",
        img: "https://b1-q.mafengwo.net/s7/M00/E2/53/wKgB6lSX06KAWM8OAAU2AToCw5g185.png?imageMogr2%2Fthumbnail%2F%21375x225r%2Fgravity%2FCenter%2Fcrop%2F%21375x225%2Fquality%2F100"
      }, {
        loc: "布拉格",
        img: "https://b3-q.mafengwo.net/s1/M00/88/A1/wKgBm07mCCqEcqjCAAPsJ41pixQ00.jpeg?imageMogr2%2Fthumbnail%2F%21280x180r%2Fgravity%2FCenter%2Fcrop%2F%21280x180%2Fquality%2F100"
      }]
    }
  },
  mounted () {
    ajax.get('getDestination', (data) => {
      let destinations = [];
      for (let i = 0; i < 3; i++) {
        let item = {};
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

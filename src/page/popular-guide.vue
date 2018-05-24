<template>
  <div class="page">
    <div class="loading-icon" :class="{ show: loadingIconShow }">
      <mt-spinner type="snake" color="#FF5A5F"></mt-spinner>
    </div>
    <section>
      <div class="top-guide">
        <p class="top-guide-txt">粉黛润暖，遇见镌刻满樱的千年古都</p>
      </div>
    </section>
    <section class="popular-guide">
      <div class="popular-guide-title">
         <p>热门目的地</p>
        <p>最受大家喜欢的目的地推荐</p> 
      </div>
      <div class="loc-selector">
        <div class="selector">
          <ul>
            <li v-for="(item, index) of areaList" :class="{ active: item.active }" @click="selectLoc(index)">{{ item.loc }}</li>
          </ul>
        </div>
        <div class="loc-list">
          <ul>
            <router-link :to="{ name: 'loc-guide-id' ,params: { id: item.id, city: item.name_zh } }" tag="li" v-for="item of cityList" key="item">
              <img :src="item.cover" />
              <p>{{ item.name_zh }}</p>
            </router-link>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Spinner } from 'mint-ui';
import ajax from '../common/ajax';
export default {
  name: 'popular-guide',
  data () {
    return {
      loadingIconShow: false,
      areaList: [],
      cityList: []
    }
  },
  created () {
    setTimeout(() => this.loadingIconShow = false, 1500);
    ajax.get('getAllDestination', (data) => {
      data.forEach(element => {
        var area = new Object();
        area.loc = Object.keys(element)[0];
        area.active = false;
        area.citys = element[Object.keys(element)[0]];
        this.areaList.push(area);
      });
      this.areaList[0].active = true;
      this.cityList = this.areaList[0].citys;
    });
  },
  methods: {
    selectLoc (index) {
      for (let i = 0; i < this.areaList.length; i++) {
        this.areaList[i].active = false;
      }
      this.areaList[index].active = true;
      this.cityList = this.areaList[index].citys;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .loading-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
    &.show {
      display: block;
    }
  }
  .top-guide {
    position: relative;
    height: 10rem;
    background: url("../../static/images/wKgBZ1k6Su-AKcXFAAixVYHglI439.jpg");
    background-size: cover;
    .top-guide-txt {
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      color: #fff;
      padding: .65rem;
      font-size: .85rem;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    }
  }
  .popular-guide {
    margin: 0 .65rem;
    .popular-guide-title {
      padding: 1rem 0;
      border-bottom: 1px solid #ddd;
      p {
        &:nth-child(1) {
          font-size: .85rem;
        }
        &:nth-child(2) {
          margin-top: .5rem;
          font-size: .65rem;
          color: #999;
        }
      }
    }
    .loc-selector {
      .selector {
        white-space: nowrap;
        height: 2.35rem;
        overflow-x: scroll;
        overflow-y: hidden;
        &::-webkit-scrollbar {
          display: none;
        }
        ul {
          padding: .5rem 0;
          li {
            display: inline-block;
            font-size: .85rem;
            margin-right: 1rem;
            padding: .25rem;
            &.active {
              color: #FF5A5F;
              border-bottom: 2px solid #FF5A5F;
            }
          }
        }
      }
    }
    .loc-list {
      ul {
        li {
          margin: .5rem .35rem 0;
          display: inline-block;
          img {
            width: 5rem;
            height: 4rem;
            border-radius: 4px;
          }
          p {
            font-size: .75rem;
            text-align: center;
            margin-top: .15rem;
          }
        }
      }
    }
  }
</style>

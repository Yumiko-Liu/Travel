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
            <router-link to="/loc-guide" tag="li" v-for="item of [1, 2, 3, 4]" key="item">
              <img src="https://c3-q.mafengwo.net/s8/M00/4E/35/wKgBpVXQYiyALbdLAAVaO6591W802.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100" alt="">
              <p>东京</p>
            </router-link>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Spinner } from 'mint-ui';
export default {
  name: 'popular-guide',
  data () {
    return {
      loadingIconShow: true,
      areaList: [{
        loc: "国内",
        active: true
      }, {
        loc: "港澳台",
        active: false
      }, {
        loc: "日韩",
        active: false
      }, {
        loc: "东南亚",
        active: false
      }, {
        loc: "欧洲",
        active: false
      }, {
        loc: "美洲",
        active: false
      }, {
        loc: "大洋洲",
        active: false
      }]
    }
  },
  created () {
    setTimeout(() => this.loadingIconShow = false, 1500);
  },
  methods: {
    selectLoc (index) {
      for (let i = 0; i < this.areaList.length; i++) {
        this.areaList[i].active = false;
      }
      this.areaList[index].active = true;
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
    background: url("../assets/wKgBZ1k6Su-AKcXFAAixVYHglI439.jpg");
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

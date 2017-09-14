<template>
  <div class="acticle-list">
    <ul>
      <router-link v-for="item of [1,2]" to="/detail" tag="li" key="item">
        <p class="title">日本夏天重头戏：祭典与花火大会</p>
        <img src="https://n3-q.mafengwo.net/s10/M00/51/49/wKgBZ1lbQRKAH-ZvABLayKiAbRc570.gif?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90" class="acticle-img" />
        <div class="acticle-info">
          <p class="desc">穿浴衣，摇团扇，捞金鱼，看花火...夏天的日本真精采！</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'acticle-list',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .acticle-list {
    ul {
      li {
        border-bottom: 1px solid #e1e1e1;
        padding: .5rem 0;
        .title {
          font-size: .85rem;
          max-height: 1.7rem;
          margin-bottom: .25rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .acticle-img {
          width: 6.75rem;
          height: 4.25rem;
          float: left;
        }
        .acticle-info {
          height: 4.25rem;
          margin-left: 7rem;
          .desc {
            font-size: .75rem;
            line-height: 1rem;
            color: #999;
          }
        }
      }
    }
  }
</style>

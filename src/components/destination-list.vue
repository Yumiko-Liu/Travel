<template>
  <div class="destination-list">
    <ul>
      <router-link v-for="item of [1]" to="/detail" tag="li" key="item">
        <img src="https://n3-q.mafengwo.net/s10/M00/51/49/wKgBZ1lbQRKAH-ZvABLayKiAbRc570.gif?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90" class="destination-img" />
        <p class="title">日本夏天重头戏：祭典与花火大会</p>
        <div class="acticle-info">
          <p class="desc">
            <img src="https://b3-q.mafengwo.net/s10/M00/31/A8/wKgBZ1kZvIOAQwUxAADF17nczYM12.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" class="avatar" />
            <span>xxx</span> 在 <span>日本</span>
          </p> 
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'destination-list',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .destination-list {
    ul {
      li {
        padding: .5rem 0;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        .title {
          margin-right: 10rem;
        }
        .destination-img {
          float: right;
          width: 9.5rem;
          height: 6rem;
        }
      }
    }
  }
</style>

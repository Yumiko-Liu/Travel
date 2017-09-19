<template>
  <div class="destination-list">
    <ul>
      <router-link v-for="item of [1,1]" to="/travel-notes" tag="li" key="item">
        <img src="https://a2-q.mafengwo.net/s10/M00/0D/B8/wKgBZ1lk-P2AfcBYABuYX7Km5to555.png?imageView2%2F2%2Fw%2F600%2Fq%2F90" class="destination-img" />
        <p class="title">日本夏天重头戏：祭典与花火大会</p>
        <p class="desc">
          <img src="https://b3-q.mafengwo.net/s10/M00/31/A8/wKgBZ1kZvIOAQwUxAADF17nczYM12.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" class="avatar" />
          <span class="username">辉夜姬</span> 在 <span>日本</span>
        </p>
        <p class="amount">
          <i class="fa fa-eye"></i> 222
          <i class="fa fa-heart"></i> 222
        </p>
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
        & > p {
          margin-right: 9.75rem;
        }
        .title {
          font-size: .85rem;
          line-height: 1.2rem;
          height: 3.6rem;
          font-weight: 800;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .destination-img {
          float: right;
          width: 9.5rem;
          height: 6rem;
        }
        .desc {
          margin-top: .25rem;
          margin-bottom: .25rem;
          color: #999;
          font-size: .65rem;
          .avatar {
            vertical-align: middle;
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
          }
          span {
            color: #FF5A5F;
          }
          .username {
            display: inline-block;
            max-width: 2.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
          }
        }
        .amount {
          color: #999;
          font-size: .65rem;
          i {
            &:nth-child(2) {
              margin-left: .5rem;
            }
          }
        }
      }
    }
  }
</style>

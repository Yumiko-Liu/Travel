<template>
  <div class="page">
    <section class="notes-cover">
      <img src="http://c4-q.mafengwo.net/s10/M00/39/5C/wKgBZ1kmi4mAJufpAAKR-OGoYVo27.jpeg?imageMogr2%2Fthumbnail%2F%212000x600r%2Fgravity%2FCenter%2Fcrop%2F%212000x600%2Fquality%2F90" />
    </section>
    <section class="billboard">
      <p class="number">攻略No. 111</p>
      <h1>东京购物攻略</h1>
      <div class="meta">
        <span>2017-09-17</span>
        <span>154浏览</span>
        <span>256赞</span>
      </div>
    </section>
    <section class="notes">
      <h3>【如果只去一家百货商场】：小田急百货</h3>
      <img src="https://c3-q.mafengwo.net/s10/M00/7F/BD/wKgBZ1mpMwmAbc2qAAH5i4LzNv060.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iMS1xLm1hZmVuZ3dvLm5ldC9zMTAvTTAwLzk5LzYyL3dLZ0JaMWgwcVlxQUFCQWFBQUFYcTNjN3d5azY4OS5wbmc_aW1hZ2VNb2dyMiUyRnRodW1ibmFpbCUyRjEwNnglMkZxdWFsaXR5JTJGOTA%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F15%2Fdissolve%2F40" alt="">
      <h3>【如果只去一家综合卖场】：唐吉坷德浅草店</h3>
      <p>关东达人林氏璧大大推荐的，说是东京价格最低。实际比较了一下记过价格的几样，确实比松本清和SUN DRUG便宜，虽然松本清下载APP有优惠，但直接便宜不是更方便么。位于阿美横町的尽头，店面不大，建议先去它家扫货，缺的再去其他药妆店。</p>
      <img src="https://c1-q.mafengwo.net/s9/M00/26/F0/wKgBs1dDDLOAe7WkAAHWNmkkJso12.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cHM6Ly9iMS1xLm1hZmVuZ3dvLm5ldC9zMTAvTTAwLzk5LzYyL3dLZ0JaMWgwcVlxQUFCQWFBQUFYcTNjN3d5azY4OS5wbmc_aW1hZ2VNb2dyMiUyRnRodW1ibmFpbCUyRjExOXglMkZxdWFsaXR5JTJGOTA%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F15%2Fdissolve%2F40" alt="">
      <h4>结语</h4>
      <p>我不管，如果只能选一个，那我就选上面那些！不知道你是不是个怕麻烦，怕绕远的人。如果是的话，还不如找一家最合适的冲进去扫货。既高效又省力~</p>
    </section>
    <div class="like">
      <Like></Like>
    </div>
  </div>
</template>

<script>
import Like from '../components/like';
export default {
  name: 'guide-notes',
  components: {
    Like
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .notes-cover {
    width: 100%;
    height: 11rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .billboard {
    color: #474747;
    .number {
      padding: .25rem;
      display: inline-block;
      margin: .65rem;
      font-size: .75rem;
      color: #FF5A5F;
      border: 2px solid #FF5A5F;
      font-weight: bold;
    }
    h1 {
      padding: 0 .65rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .meta {
      font-size: .75rem;
      padding: .65rem;
      span {
        display: inline-block;
        margin-right: .5rem;
      }
    }
  }
  .notes {
    font-size: .85rem;
    line-height: 1.25rem;
    margin: .65rem;
    border-bottom: 1px solid #ddd;
    img {
      max-width: 100%;
    }
  }
  .like {
    text-align: center;
  }
</style>

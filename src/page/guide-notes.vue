<template>
  <div class="page">
    <section class="notes-cover">
      <img :src="guideNote.cover" />
    </section>
    <section class="billboard">
      <p class="number">攻略No. {{ guideNote.id }}</p>
      <h1>{{ guideNote.title }}</h1>
      <div class="meta">
        <span>{{ date}}</span>
        <span>{{ guideNote.page_view }}浏览</span>
        <span>{{ guideNote.like_num }}赞</span>
      </div>
    </section>
    <section class="notes" v-html="guideNote.content"></section>
    <div class="like">
      <Like></Like>
    </div>
  </div>
</template>

<script>
import Like from '../components/like';
import ajax from '../common/ajax';
import timeFormat from '../common/timeFormat';
export default {
  name: 'guide-notes',
  components: {
    Like
  },
  data () {
    return {
      guideNote: '',
      date: ''
    }
  },
  created () {
    let id = this.$route.params.id;
    ajax.get('getGuideNotes?id=' + id , (data) => {
      this.guideNote = data[0];
      this.date = timeFormat.format(+data[0].pubtime);
    });
  },
  mounted () {
    let id = this.$route.params.id;
    ajax.get('addGuideNotesPageView?id=' + id , (data) => {});
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

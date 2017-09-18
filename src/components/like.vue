<template>
  <div class="like-btn" :class="{ animate: animate }" @click="like()"></div>
</template>

<script>
export default {
  name: 'like',
  data () {
    return {
      animate: false
    }
  },
  methods: {
    like () {
      this.animate = !this.animate;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .like-btn {
    display: inline-block; 
    background-image: url('../assets/heart-sprite.png');
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: 0 0;
  }

  @keyframes animate {
    0%   {  background-position: 0 0; }
    3.4% {  background-position: -100px 0; }
    6.8% {  background-position: -200px 0; }
    10.2%{  background-position: -300px 0; }
    13.6%{  background-position: -400px 0; }
    17%  {  background-position: -500px 0; }
    20.4%{  background-position: -600px 0; }
    23.8%{  background-position: -700px 0; }
    27.2%{  background-position: -800px 0; }
    30.6%{  background-position: -900px 0; }
    34%  {  background-position: -1000px 0; }
    37.4%{  background-position: -1100px 0; }
    40.8%{  background-position: -1200px 0; }
    44.2%{  background-position: -1300px 0; }
    47.6%{  background-position: -1400px 0; }
    51%  {  background-position: -1500px 0; }
    54.4%{  background-position: -1600px 0; }
    57.8%{  background-position: -1700px 0; }
    61.2%{  background-position: -1800px 0; }
    64.6%{  background-position: -1900px 0; }
    68%  {  background-position: -2000px 0; }
    71.4%{  background-position: -2100px 0; }
    74.8%{  background-position: -2200px 0; }
    78.2%{  background-position: -2300px 0; }
    81.6%{  background-position: -2400px 0; }
    85%  {  background-position: -2500px 0; }
    88.4%{  background-position: -2600px 0; }
    91.8%{  background-position: -2700px 0; }
    95.2%{  background-position: -2800px 0; }
    100% {  background-position: -2800px 0; }
  }

  .animate {
    -webkit-animation: animate 1s infinite step-start;
    animation: animate 1s infinite step-start;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
</style>

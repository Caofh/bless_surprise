<template>
  <div class="home">
    <div class="title">设备属性对比</div>
    当前设备像素比为：<span class="f71">{{radio}}</span> <br/>
    当前设备实际宽度：<span class="f71">{{widthReal}}px</span> <br/>
    当前设备宽度的实际物理像素点个数：{{radio}} * {{widthReal}} = <span class="f71">{{radio * widthReal}}</span> <br/>
    <hr/>
    如下图片代码中的宽度：<span class="f71">10rem</span> <br/>
    当前html的字号：<span class="f71">{{fontSize}}</span> <br/>
    如下图片的实际宽度为：10rem * html的当前字号 = 10 * {{fontSize.replace('px', '')}} = <span class="f71">{{10 * fontSize.replace('px', '')}}px</span>
    <hr/>
    1x、2x、3x倍图的尺寸是<span class="f71">固定的</span>：<br/>
    1x: <span class="f71">375px</span><br/>
    2x: <span class="f71">750px</span><br/>
    3x: <span class="f71">1125px</span><br/>
    <hr/>
    1x(1倍图)；实际像素：375 * 393
    <img src="../../../assets/img/@1x.png">
    <br/>
    <hr/>
    <br/>
    2x(2倍图)；实际像素：750 * 786
    <img src="../../../assets/img/@2x.png">
    <br/>
    <hr/>
    <br/>
    3x(3倍图)；实际像素：1125 * 1179
    <img src="../../../assets/img/@3x.png">
    <br/>
    <hr/>
    <br/>
  </div>
</template>

<script>
import '@/assets/js/m.js'
import $ from 'n-zepto'
import { getList } from '@/api/test'

export default {
  name: 'Home',
  data () {
    return {
      radio: window.devicePixelRatio,
      widthReal: window.innerWidth,
      fontSize: $('html').css('font-size'),
      msg: 'I am home page !'
    }
  },
  created () {

  },
  async mounted () {
      console.log(this.fontSize)

    const dataList = await getList()
    console.log(dataList)

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../../assets/css/pr2rem';

  .home {
    font-size: pr(35);
    text-align: left;
    .title {
      font-size: pr(50);
      font-weight: bold;
    }
    img {
      width: pr(750);
    }
    .f71 {
      color: #f71;
    }
  }

</style>

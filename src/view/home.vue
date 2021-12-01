<template>
  <div class="container">
    <Header></Header>
    <div class="homeContainer">
      <div class="topCon">
        <img src="../assets/bg.png" class="topbg">
        <div class="basicPanel">
          <div class="banners">
            <div class="btnsbar">
              <a class="btn"><img src="../assets/btn1.png"></a>
              <a class="btn"><img src="../assets/btn2.png"></a>
            </div>
            <p>ZUCK is jumping the metaverse and so are we</p>
          </div>
          <div class="about">
            <img src="../assets/btn3.png">
            <p>The metaverse is the next evolution of social connection. <br>3D spaces in the metaverse will let you socialize, learn, <br>collaborate and play in ways that go beyond what we can <br>imagine.Zuck's vision is to help bring the metaverse to life.</p>
          </div>
        </div>
        
      </div>
      <div class="btmCon">
        <img src="../assets/bg2.png" class="btmbg">
        <div class="basicPanel">
          <img src="../assets/btn4.png" class="btn4">
          <img src="../assets/btn5.png" class="btn5">
          <div class="baifenbi">
            <p><span>3.0%</span> Redistribution     </p>
            <p><span>2.0%</span>  Marketingand Brand     </p>
            <p><span>3.0%</span> Auto liquidity Pool </p>
          </div>
          <p class="simply">Simply earn ZUCK tokens by holding! 3.0% Holder Rewards are dispersed to all token holders relative to their holding percentages. Also 2.0% Marketing and Brand  keeps our token extremely fomo and healthy for many years to come. And 3.0% Auto liquidity pool can push the price slowly! Be a HODL's with us and earn more tokens on auto-pilot!</p>
          <img src="../assets/btn6.png" class="btn6">
          <img src="../assets/btn7.png" class="btn7">
          <div class="swap">
            <div class="swapTop">
              <img src="../assets/btn8.png" class="btn8">
              <div class="wapinfo">
                <img src="../assets/btn9.png">
                <p>ZUCK token is the main in-META currency. It will be used to trade, exchange, and buy social props.</p>
              </div>
            </div>
            <div class="swapTop">
              <div class="wapinfo">
                <img src="../assets/btn10.png">
                <p>The ZUCKMETA  create a virtual marketplace for virtual goods such as NFTs where users can buy, sell and exchange. </p>
              </div>
              <img src="../assets/btn11.png" class="btn11">
            </div>
          </div>
          <div class="zuckmeta">
            <img src="../assets/btn12.png" class="btn12">
            <img src="../assets/btn13.png" class="btn13">
            <img src="../assets/btn14.png" class="btn14">
            <p class="zucktoken">$ZUCK has been launched. You can see as follows and  buy on PankcakeSwap.</p>
            <div class="partner">
              <a><img src="../assets/partner1.png"></a>
              <a><img src="../assets/partner2.png"></a>
              <a><img src="../assets/partner3.png"></a>
              <a><img src="../assets/partner4.png"></a>
              <a><img src="../assets/partner5.png"></a>
              <a><img src="../assets/partner6.png"></a>
              <a><img src="../assets/partner7.png"></a>
              <a><img src="../assets/partner8.png"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components:{Header,Footer},
  computed: {
    language() {
      return this.$i18n.locale
    },
    _isMobile() {
      let flag = false;
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        flag = true // 手机端
      } else {
        flag = false // alert('PC端')
      }
      return flag;
    }
  },
  data() {
    return {
      drawer:false,
      lang:false
    }
  },
  watch: {
      '$i18n.locale'(newValue) {
          if (this.$i18n.locale === 'en') {
              this.lang = false
          } else if (this.$i18n.locale === 'ch') {
              this.lang = true
          }
      }
  },
  methods: {
    
  },
  created(){
    
  },
  mounted(){
    
  }
}
</script>
<style lang="less">
.container{
  width: 100%;
  
  min-height:100vh;
  .homeContainer{
    .basicPanel{
      width:1200px;
      position:absolute;
      top:0;
      left:50%;
      height:100%;
      margin-left:-600px;
    }
    .topCon{
      position:relative;
      .topbg{
        width:100%;
      }
    }
    .banners{
      position:absolute;
      right:60px;
      top:540px;
      .btnsbar{
        display:flex;
        justify-content:space-between;
        .btn{
          cursor:pointer;
          margin:0 6px;
        }
      }
      p{
        font-size:24px;
        color:#fff;
        padding-top:10px;
      }
    }
    .about{
      position:absolute;
      bottom:10%;
      text-align:left;
      img{
        width:534px;
      }
      p{
        font-size:27px;
        color:#fff;
        line-height:36px;
        text-align:left;
        padding-left:30px;
        padding:20px;
      }
    }
    .btmCon{
      position:relative;
      .btmbg{
        width:100%;
      }
      .btn4,.btn5{
        display:block;
        margin:0 auto;
      }
      .btn4{
        margin-top:70px;
        margin-bottom:60px;
      }
      .baifenbi{
        display:flex;
        justify-content:center;
        padding-top:34px;
        p{
          font-size:20px;
          color:#FFFFFF;
          line-height:100%;
          padding:0 10px;
          span{
            font-size:26px;
            color:#06FEFE;
          }
        }
      }
      .simply{
        width:980px;
        margin:28px auto 130px;
        font-size:26px;
        color:#fff;
        line-height:40px;
      }
      .swap{
        padding-top:120px;
        .swapTop{
          display:flex;
          justify-content:center;
          .wapinfo{
            text-align:left;
            padding-top:100px;
            margin:0 50px;
            p{
              font-size:26px;
              color:#fff;
              line-height:40px;
              width:538px;
              text-align:left;
              padding-top:40px;
            }
          }
          .btn11{
            margin-top:-100px;
          }
        }
      }
      .zuckmeta{
        text-align:center;
        .btn12{
          margin-top:160px;
          margin-bottom:96px;
        }
        .btn14{
          margin-top:76px;
          margin-bottom:34px;
        }
        .zucktoken{
          font-size:20px;
          color:#fff;
          line-height:22px;
        }
        .partner{
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
          width:1000px;
          margin:50px auto;
          a{
            margin-bottom:24px;
          }
        }
      }
    }
  }
}
</style>
<style >
  .el-drawer,.drawer_body {
      width: 60% !important;
      height: 100% !important;
      /* background: url(/src/assets/itembg.png) center center / 100% 100% no-repeat; */
      outline: 0;
  }
  /*.el-drawer__wrapper {*/
  /*    z-index: 2001;*/
  /*}*/
  </style>
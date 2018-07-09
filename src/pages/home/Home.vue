<template>
    <div class="home">
        <div class="header-con">
            <div class="header">
                <div class="icon">
                    <img class="icon-img first" src="../../assets/images/return.png" alt="" @click="signOut()">
                    <img class="icon-img" src="../../assets/images/close.png" alt="" @click="signOut()">
                </div>
                <div class="header-con">兑换商城</div>
            </div>
            <div class="personal">
                <div class="content">
                    <div class="bean-con">
                        <img class="icon" src="../../assets/images/bean-52.png" alt="">
                        <span class="bean">{{bean}}</span>
                    </div>
                    <div class="btn" @click="toMyExchange()">
                        我的兑换
                    </div>
                </div>
            </div>
            <div class="prize">
                <img class="horn" src="../../assets/images/horn.png" alt="">
                <swiper :options="swiperOption" class="swiper-no-swiping">
                    <swiper-slide v-for="item in couponsList" :key="item._id" style="text-align: left;">
                        恭喜{{item.userId.nickname}}******获得{{item.commodity.commodityName}}
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="content">
            <div class="recommend">
                <div class="title">
                    <div class="title-text">
                        <img class="icon-img" src="../../assets/images/recom-icon.png" alt="">
                        <img class="icon-text" src="../../assets/images/recom-text.png" alt="">
                    </div>
                    <router-link class="more" tag="div" to="/list">
                        <span>更多</span>
                        <img class="icon" src="../../assets/images/more.png" alt="">
                    </router-link>
                </div>
                <ul class="content-ul" v-show="recommendGoods.length != 0">
                    <router-link tag="li" :to="'/detail/' + item._id" class="content-li" v-for="item in recommendGoods" :key="item._id">
                        <img class="commodity-img" :src="item.commodityThumbnail">
                        <div class="commodity-message">
                            <div class="commodity-title">{{item.commodityName}}</div>
                            <div class="commodity-price">参考价 {{item.referencePrice/100}}元</div>
                            <div class="commodity-bean">
                                <img class="bean-img" src="../../assets/images/bean-32.png" alt="">
                                <span class="bean">{{item.price}}竞豆</span>
                            </div>
                        </div>
                    </router-link>
                </ul>
            </div>
            <div class="hot">
                <div class="title">
                    <div class="title-text">
                        <img class="icon-img" src="../../assets/images/hot-icon.png" alt="">
                        <img class="icon-text" src="../../assets/images/hot-text.png" alt="">
                    </div>
                    <router-link class="more" tag="div" to="/list">
                        <span>更多</span>
                        <img class="icon" src="../../assets/images/more.png" alt="">
                    </router-link>
                </div>
                <ul class="menu">
                    <li class="menu-li" v-for="(item,index) in tabsParam" @click="toggleTabs(index)" :class="{active:index == nowIndex}" :key="index">
                        <span class="text">{{item}}</span>
                        <span class="underline" v-show="index == nowIndex"></span>
                    </li>
                </ul>
                <ul class="content-ul" v-show="hotGoods.length != 0">
                    <router-link class="content-li" tag="li" :to="'/detail/' + item._id" v-for="item in hotGoods" :key="item._id">
                        <div class="img-content">
                            <img class="commodity-img" :src="item.commodityThumbnail">
                            <img v-show="item.surplusStock <= 0" class="commodity-icon" src="../../assets/images/sell-out-80.png" alt="">
                        </div>
                        <div class="commodity-message">
                            <div class="commodity-title">{{item.commodityName}}</div>
                            <div class="commodity-price">参考价 {{item.referencePrice/100}}元</div>
                            <div class="commodity-bean">
                                <img class="bean-img" src="../../assets/images/bean-32.png" alt="">
                                <span class="bean">{{item.price}}竞豆</span>
                            </div>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MarqueeTips from 'vue-marquee-tips'
export default {
  name: 'Home',
  components: {
    MarqueeTips
  },
  data () {
    return {
      recommendGoods: [],
      hotGoods: [],
      couponsList: [],
      tabsParam: ['全部', '实物商品', '虚拟商品', '优惠券'],
      nowIndex: 0,
      bean: 0,
      userId: '',
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 200,
        speed: 4000,
        observer: true,
        observeParents: true
      }
    }
  },
  created () {
    this.$parent.setComponent(this)
  },
  mounted () {
    this.getRecommendGoods()
    this.getHotGoods()
    this.getCoupons()
    this.setUserLogin()
  },
  methods: {
    //  获取推荐列表
    getRecommendGoods () {
      axios.get('/api/v2.0/commodities', {
        params: {
          isRecommendGoods: 1
        }
      }).then(res => {
        if (res.data.status === 1 && res.data.data) {
          let data = res.data.data.list
          if (data.length <= 3) {
            this.recommendGoods = data
          } else {
            let arr = []
            while (arr.length < 3) {
              let arrIndex = Math.floor(Math.random() * data.length)
              if (arr.indexOf(arrIndex) < 0) {
                this.recommendGoods.push(data[arrIndex])
                arr.push(arrIndex)
              }
            }
          }
        } else {
          alert(res.data.msg)
        }
      })
    },
    //  获取热门列表
    getHotGoods () {
      axios.get('/api/v2.0/commodities', {
        params: {
          commodityType: this.nowIndex,
          isHotGoods: 1
        }
      }).then(res => {
        if (res.data.status === 1 && res.data.data) {
          this.hotGoods = res.data.data.list
        } else {
          alert(res.data.msg)
        }
      })
    },
    //  获取兑换列表
    getCoupons () {
      axios.get('/api/v2.0/coupons', {
        params: {
          commodityType: 0
        }
      }).then(res => {
        if (res.data.status === 1 && res.data.data) {
          this.couponsList = res.data.data.list
          for (let i = 0; i < this.couponsList.length; i++) {
            this.couponsList[i].userId.nickname = (this.couponsList[i].userId.nickname).slice(0, 1)
          }
        } else {
          alert(res.data.msg)
        }
      })
    },
    //    菜单切换
    toggleTabs (index) {
      this.nowIndex = index
      this.getHotGoods()
    },
    //    点击我的兑换按钮
    toMyExchange () {
      if (this.userId !== '') {
        this.$router.push({ name: 'MyExchange', params: { userId: this.userId }})
      } else {
        this.signIn()
      }
    },
    //    点击返回或者关闭按钮
    signOut () {
      if (typeof Finish !== 'undefined' && typeof Finish !== null) {
        Finish()
      } else if (typeof window.JsObject.Finish !== 'undefined' && typeof window.JsObject.Finish !== null) {
        window.JsObject.Finish()
      }
    },
    //    跳转到登录页
    signIn () {
      if (typeof LoginUser !== 'undefined' && typeof LoginUser !== null) {
        LoginUser()
      } else if (typeof window.JsObject !== 'undefined' && typeof window.JsObject.LoginUser !== null) {
        window.JsObject.LoginUser()
      }
    },
    // 获取用户信息
    setUserLogin () {
      let user = ''
      if (typeof GetUserToken !== 'undefined' && typeof GetUserToken !== null) {
        user = JSON.parse(GetUserToken())
        this.bean = user.coin
        this.userId = user.userId
      } else if (typeof window.JsObject.GetUserToken() !== 'undefined' && typeof window.JsObject.GetUserToken() !== null) {
        user = JSON.parse(window.JsObject.GetUserToken())
        this.bean = user.coin
        this.userId = user.userId
      }
    },
    receiveMsgFromParent () {
      this.setUserLogin()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .home >>> .swiper-wrapper
        transition-timing-function: linear !important
    .home{
        width 100%
        font-family 'MicrosoftYaHeiUI'
        font-size 0.36rem
        background: #F2F2F2
        color #000
        .header-con{
            background #fff
            .header{
                background #fff
                width 100%
                position fixed
                left 0
                top 0
                z-index 99
                display flex
                height 1.2rem
                line-height 1.2rem
                padding 0 0.4rem
                font-size 0.4rem
                .icon{
                    float left
                    margin-top 0.18rem
                    .icon-img{
                        width 0.56rem
                        height 0.56rem
                        &.first{
                            margin-right 0.3rem
                        }
                    }
                }
                .header-con{
                    background #fff
                    margin-left 2.7rem
                }
            }
            .personal{
                margin-top 1.38rem
                width 100%
                height 1.2rem
                .content{
                    margin:0 auto
                    width 10.2rem
                    height 1.2rem
                    line-height 1.2rem
                    background url(../../assets/images/top.png) no-repeat
                    background-size cover
                    border-radius 0.6rem
                    display flex
                    justify-content space-between
                    .bean-con{
                        margin-left 0.77rem
                        .icon{
                            width 0.52rem
                            height 0.53rem
                            vertical-align middle
                            margin-top -0.2rem
                        }
                        .bean{
                            display inline-block
                            font-family: 'Arial-BoldItalicMT'
                            font-size: 0.54rem
                            color: #FFFFFF
                        }
                    }
                    .btn{
                        width 2rem
                        height 0.6rem
                        line-height 0.6rem
                        border-radius 1rem
                        border: 1px solid #FFFFFF
                        color: #FFFFFF
                        letter-spacing: 0
                        text-align: center
                        font-size 0.32rem
                        margin 0.3rem 0.6rem 0 0
                    }
                }
            }
            .prize{
                height 0.9rem
                line-height 0.9rem
                padding 0 0.74rem
                color: #FF5566
                font-size: 0.28rem
                .horn{
                    float left
                    display inline-block
                    width 0.46rem
                    height 0.39rem
                    margin 0.25rem 0.2rem 0 0
                    vertical-align middle
                }
                .lamp{
                    display inline-block
                    margin-left 0.25rem
                    width 8.55rem
                }
            }
        }
        .content{
            .title{
                height 1.26rem
                line-height 1.26rem
                background: #FBFBFB
                padding 0 0.55rem 0 0.3rem
                display flex
                justify-content space-between
                .title-text{
                    .icon-img{
                        width 0.38rem
                        height 0.38rem
                        display inline-block
                    }
                    .icon-text{
                        width 1.55rem
                        height 0.4rem
                        display inline-block
                    }
                }
                .more{
                    font-size: 0.32rem
                    color: #999999
                    .icon{
                        width 0.38rem
                        height 0.38rem
                        display inline-block
                        vertical-align middle
                    }
                }
            }
            .commodity-message{
                width 3.2rem
                text-align center
                height 1.9rem
                background: #FBFBFB
                font-family: 'MicrosoftYaHeiUI-Bold'
                padding 0.28rem 0 0.36rem 0
                box-sizing border-box
                .commodity-title{
                    font-size: 0.36rem
                    color: #232323
                    line-height: 0.36rem
                    height 0.36rem
                }
                .commodity-price{
                    font-size: 0.2rem
                    color: #C1C1C1
                    height 0.2rem
                    margin 0.16rem 0 0.24rem 0
                    text-decoration line-through
                }
                .commodity-bean{
                    .bean-img{
                        width 0.37rem
                        height 0.3rem
                    }
                    .bean{
                        font-size: 0.32rem
                        color: #FFA912
                        font-weight bold
                    }
                }
            }
            .recommend{
                margin 0.2rem 0
                background #fff
                .content-ul{
                    height 5.1rem
                    display flex
                    padding 0.4rem
                    box-sizing border-box
                    .content-li{
                        width 3.2rem
                        margin-right 0.2rem
                        .commodity-img{
                            display block
                            width 3.2rem
                            height 2.4rem
                        }
                    }
                }
            }
            .hot{
                background #fff
                .menu{
                    height 1rem
                    line-height 1rem
                    display flex
                    .menu-li{
                        width 25%
                        color: #333333
                        text-align center
                        &.active{
                            color: #FF6262
                        }
                        .underline{
                            display block
                            margin -0.1rem 0 0 1rem
                            width 0.7rem
                            height 0.12rem
                            background-image linear-gradient(90deg, #FF9749 0%, #FF5167 100%)
                            box-shadow 0 1px 1px 0 rgba(255,255,255,0.50)
                            border-radius 1rem
                        }
                    }
                }
                .content-ul{
                    padding 0.4rem
                    box-sizing border-box
                    .content-li{
                        float left
                        width 4.9rem
                        margin-bottom 0.2rem
                        &:nth-child(odd){
                            margin-right 0.2rem
                        }
                        .img-content{
                            width 4.9rem
                            height 3.7rem
                            position relative
                            .commodity-img{
                                display block
                                width 4.9rem
                                height 3.7rem
                            }
                            .commodity-icon{
                                position absolute
                                top 0.3rem
                                right 0.3rem
                                width 1.2rem
                                height 1.2rem
                            }
                        }
                        .commodity-message{
                            width 4.9rem
                        }
                    }
                }
            }
        }
    }
</style>

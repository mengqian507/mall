<template>
    <div class="detail">
        <div class="header">
            <div class="icon">
                <router-link to="/">
                    <img class="icon-img first" src="../../assets/images/return.png" alt="">
                </router-link>
                <img class="icon-img" src="../../assets/images/close.png" alt="">
            </div>
            <div class="header-con">商品详情</div>
        </div>
        <div class="commodity-box">
            <img class="commodity-img" :src="goodsDetail.commodityHeadUrl">
            <img class="commodity-sell-out" v-show="goodsDetail.surplusStock <= 0" src="../../assets/images/sell-out-240.png">
        </div>
        <div class="commodity">
            <div class="comm-title">{{goodsDetail.commodityName}}</div>
            <div class="comm-intro">{{goodsDetail.briefIntroduction}}</div>
            <div class="comm-message">
                <div class="bean">
                    <img src="../../assets/images/bean-52.png" alt="">
                    <span>{{goodsDetail.price}}竞豆</span>
                </div>
                <div class="price">参考价（{{goodsDetail.referencePrice/100}}元）</div>
                <div class="stock" ref="stockBox">剩余{{goodsDetail.surplusStock}}件</div>
            </div>
            <div style="clear: both"></div>
        </div>
        <div style="height: 0.1rem; background:#F2F2F2 "></div>
        <div class="introduce">
            <div class="title">
                <span></span>
                商品介绍
            </div>
            <div class="content">{{goodsDetail.description}}</div>
        </div>
        <div style="height: 1px;background: #E9E9E9;width:10rem;margin: 0 auto"></div>
        <div class="introduce" style=" margin-bottom: 1.8rem">
            <div class="title">
                <span></span>
                兑换说明
            </div>
            <div class="content">{{goodsDetail.exchangeExplain}}</div>
        </div>
        <div class="footer">
            <div class="my-bean" ref="beanBox">我的竞豆：{{coin}}</div>
            <div class="btn" :class="{active:goodsDetail.surplusStock <= 0}" @click="exchangeBtn()">立即兑换</div>
        </div>
        <!--弹框-->
        <div class="model">
            <div class="md-modal" v-if="mdShow1">
                <div class="md-modal-inner">
                    <div class="md-content" style="margin-top: 20px;">
                        <div class="confirm-tips">
                            兑换将使用{{goodsDetail.price}}竞豆
                        </div>
                        <div class="btn-wrap">
                            <button class="cancel" @click="cancelBtn1()">取消</button>
                            <button class="confirm" @click="confirmBtn1()">确认</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md-modal " v-if="mdShow2">
                <div class="md-modal-inner">
                    <div class="md-content" style="margin-top: 20px;">
                        <div class="confirm-tips">
                            兑换成功，请联系客服领取
                        </div>
                        <div class="btn-wrap">
                            <button class="cancel" @click="cancelBtn2()">取消</button>
                            <button class="confirm" @click="confirmBtn2()">确认</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md-modal " v-if="mdShow3">
                <div class="md-modal-inner">
                    <div class="md-content" style="margin-top: 20px;">
                        <div class="confirm-tips">
                            您的竞豆余额不足
                        </div>
                        <div class="btn-wrap">
                            <button class="cancel" @click="cancelBtn3()">取消</button>
                            <button class="confirm" @click="confirmBtn3()">前去兑换</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--遮罩层-->
            <div class="md-overlay" v-if="mdShow"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      goodsDetail: {},
      coin: 5000,
      mdShow1: false,
      mdShow2: false,
      mdShow3: false,
      mdShow: false
    }
  },
  mounted () {
    this.getGoodsDetail()
  },
  methods: {
    //    获取详情
    getGoodsDetail () {
      axios.get('api/v2.0/commodities/' + this.$route.params.id)
        .then(res => {
          if (res.data.status === 1 && res.data.data) {
            this.goodsDetail = res.data.data
            console.log(this.goodsDetail)
          } else {
            alert(res.data.msg)
          }
        })
    },
    //    点击立即兑换按钮
    exchangeBtn () {
      this.mdShow1 = true
      this.mdShow = true
    },
    cancelBtn1 () {
      this.mdShow1 = false
      this.mdShow = false
    },
    cancelBtn2 () {
      this.mdShow2 = false
      this.mdShow = false
    },
    cancelBtn3 () {
      this.mdShow3 = false
      this.mdShow = false
    },
    confirmBtn1 () {
      this.mdShow1 = false
      axios.post('/api/v2.0/exchangecommodity', {
        commodityId: this.$route.params.id
      }).then(res => {
        if (res.data.status === 1) {
          this.$refs.stockBox.innerHTML = '剩余' + res.data.data.surplusStock + '份'
          this.$refs.beanBox.innerHTML = '我的竞豆：' + res.data.data.coin
          if (this.goodsDetail.price > res.data.data.coin) {
            this.mdShow3 = true
          } else {
            this.mdShow2 = true
          }
        } else {
          alert(res.data.msg)
        }
      })
    },
    confirmBtn2 () {
      this.mdShow2 = false
      this.mdShow = false
    },
    confirmBtn3 () {
      this.mdShow3 = false
      this.mdShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .detail{
        width 100%
        font-family 'MicrosoftYaHeiUI'
        font-size 0.3rem
        color #000
        .header{
            height 1.08rem
            line-height 1.08rem
            padding 0 0.4rem
            margin-bottom 0.3rem
            font-size 0.4rem
            .icon{
                float left
                margin-top 0.18rem
                .icon-img{
                    width 0.56rem
                    height 0.56rem
                    &.first{
                        margin-right 0.1rem
                    }
                }
            }
            .header-con{
                margin-right 1.5rem
            }
        }
        .commodity-box{
            width 10.80rem
            height 8.1rem
            position relative
            .commodity-img{
                width 10.80rem
                height 8.1rem
            }
            .commodity-sell-out{
                position absolute
                width 2.4rem
                height 2.4rem
                top 0.6rem
                right 0.6rem
            }
        }
        .commodity{
            padding 0.4rem 0.46rem 0.5rem 0.4rem
            box-sizing border-box
            text-align left
            .comm-title{
                font-family: 'MicrosoftYaHeiUI-Bold'
                font-size: 0.42rem
                color: #232323
                font-weight bold
            }
            .comm-intro{
                margin 0.2rem 0 0.23rem 0
                color: #999999
            }
            .comm-message{
                height 0.75rem
                line-height 0.75rem
                color #999
                .bean{
                    float left
                    img{
                        width 0.52rem
                        height 0.53rem
                        vertical-align top
                        margin 0.06rem 0.05rem 0 0
                    }
                    span{
                        font-family: 'MicrosoftYaHeiUI'
                        font-weight bold
                        font-size: 0.45rem
                        color: #FF8400
                    }
                }
                .price{
                    float left
                    margin-left 0.5rem
                }
                .stock{
                    float right
                }
            }
        }
        .introduce{
            padding 0.3rem 0.46rem 0.5rem 0.4rem
            box-sizing border-box
            text-align left
            .title{
                color: #232323
                margin-bottom 0.2rem
                span{
                    display inline-block
                    width 0.1rem
                    height 0.3rem
                    background: #FFA912
                    margin-right 0.1rem
                }
            }
            .content{
                color: #999999
            }
        }
        .footer{
            width 100%
            position fixed
            left 0
            bottom 0
            .my-bean{
                background #fff
                color #FF5566
            }
            .btn{
                height 1.6rem
                line-height 1.6rem
                text-align center
                background linear-gradient(90deg,rgba(255,151,73,1),rgba(255,81,103,1))
                box-shadow 0rem 1rem 1rem 0rem rgba(255,255,255,0.5)
                font-family 'MicrosoftYaHeiUI-Bold'
                font-size 0.56rem
                color #FFFFFF
                &.active{
                    background #999999
                }
            }
        }
        .model{
            .md-modal {
                position fixed
                width 7.6rem
                height 4rem
                background #fff
                left 50%
                top 50%
                transform translate(-50%, -50%)
                z-index 999
                border-radius:0.108rem
                box-shadow:0 0.10rem 0.22rem 0 rgba(0,0,0,0.1);
                .confirm-tips {
                    font-size .42rem
                    color #232323
                    margin 1rem 0 1.2rem 0
                }
                .btn-wrap{
                    display flex
                    justify-content space-around
                    .cancel, .confirm{
                        font-size 0.38rem
                        color #fff
                        width 3.2rem
                        height 0.86rem
                        background rgba(198,198,198,1)
                        box-shadow 0 0.06rem 0.11rem 0 rgba(153,153,153,0.36)
                        border-radius:0.108rem
                        &.confirm {
                            background #FF6262
                        }
                    }
                }
            }
        .md-overlay {
            background #000
            opacity 0.4
            width 100%
            height 100%
            position fixed
            top 0
            left 0
            right 0
            z-index 99
            }
        }
    }
</style>

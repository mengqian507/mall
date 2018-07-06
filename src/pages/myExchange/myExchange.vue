<template>
    <div class="my-change">
        <div class="header">
            <div class="icon">
                <router-link to="/">
                    <img class="icon-img first" src="../../assets/images/return.png" alt="">
                </router-link>
                <img class="icon-img" src="../../assets/images/close.png" alt="" @click="signOut()">
            </div>
            <div class="header-con">我的兑换</div>
        </div>
        <ul class="menu">
            <li class="menu-li" v-for="(item,index) in tabsParam" @click="toggleTabs(index)" :class="{active:index == nowIndex}" :key="index">
                <span class="text">{{item}}</span>
                <span class="underline" v-show="index == nowIndex"></span>
            </li>
        </ul>
        <div style="height: 0.2rem; background:#F2F2F2;margin-top: 2px"></div>
        <ul class="list" v-show="recordList.length != 0">
            <li class="list-li" v-for="item in recordList" :key="item._id">
                <div class="img-box">
                    <img class="goods-img" :src="item.commodity.commodityThumbnail" alt="">
                </div>
                <div class="goods">
                    <div class="goods-name">{{item.commodity.commodityName}}</div>
                    <div class="goods-introduce">{{item.commodity.briefIntroduction}}</div>
                    <div class="price">兑换价格：{{item.commodity.price}}竞豆</div>
                    <div class="exchange">
                        <div class="time">2018.06.31 15:59</div>
                        <div class="state">
                            <img src="../../assets/images/Oval.png" alt="">
                            <span>兑换成功</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="blank" v-show="recordList.length == 0">
            <img src="../../assets/images/blank.png" alt="">
            <p>你还没有兑换任何奖品<br>
                快去兑换吧～
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyExchange',
  data () {
    return {
      recordList: [],
      tabsParam: ['全部', '实物商品', '虚拟商品', '优惠券'],
      nowIndex: 0
    }
  },
  mounted () {
    this.getRecordList()
  },
  methods: {
    getRecordList () {
      axios.get('/api/v2.0/coupons', {
        params: {
          commodityType: this.nowIndex,
          userId: this.$route.params.userId
        }
      }).then(res => {
        if (res.data.status === 1 && res.data.data) {
          this.recordList = res.data.data.list
          console.log(this.recordList)
        } else {
          alert(res.data.msg)
        }
      })
    },
    //    菜单切换
    toggleTabs (index) {
      this.nowIndex = index
      this.getRecordList()
    },
    //    点击返回或者关闭按钮
    signOut () {
      if (typeof Finish !== 'undefined') {
        Finish()
      } else if (typeof window.JsObject !== 'undefined') {
        window.JsObject.Finish()
      } else {
        // alert('token'+token);
        // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJwd2NuIiwiaWF0IjoxNDk4NTQ0MDUwfQ.lFP8bKxg0kiKkDiRjmzrVSTuKP8S7LbjDvc05y6zpHI';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .my-change {
        width 100%
        font-family 'MicrosoftYaHeiUI'
        font-size 0.36rem
        color #000
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
                margin-left 2.5rem
            }
        }
        .menu{
            margin-top 1.2rem
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
                    margin: -0.1rem 0 0 1.05rem;
                    width 0.7rem
                    height 0.12rem
                    background-image: linear-gradient(90deg, #FF9749 0%, #FF5167 100%);
                    box-shadow: 0 1px 1px 0 rgba(255,255,255,0.50);
                    border-radius: 100px;
                }
            }
        }
        .list{
            width 100%
            padding 0 0.4rem
            box-sizing border-box
            .list-li{
                width 100%
                display flex
                border-bottom 1px solid #E9E9E9
                padding 0.4rem 0 0.35rem 0
                box-sizing border-box
                .img-box{
                    text-align center
                    width 3.2rem
                    height 2.4rem
                    line-height 0.24rem
                    .goods-img{
                        width 3.2rem
                        height 2.4rem
                    }
                }
                .goods{
                    width 100%
                    text-align left
                    margin-left 0.47rem
                    .goods-name{
                        font-weight bold
                        color #232323
                    }
                    .goods-introduce{
                        color #999999
                        font-size 0.3rem
                        margin 0.1rem 0 0.2rem 0
                        height 0.8rem
                        line-height 0.38rem
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-line-clamp 2
                        -webkit-box-orient vertical
                    }
                    .price{
                        font-size 0.3rem
                        color #464646
                    }
                    .exchange{
                        .time{
                            float left
                            font-size 0.3rem
                            color #464646
                        }
                        .state{
                            float right
                            img{
                                width 0.3rem
                                height 0.3rem
                                vertical-align top
                                margin 0.1rem 0 0 0
                            }
                            span{
                                font-size 0.3rem
                                color #00BF58
                            }
                        }
                    }
                }
            }
        }
        .blank{
            width 100%
            position absolute
            top 7.55rem
            img{
                width 6.84rem
                height 3.36rem
            }
            p{
                color #BDBDBD
                font-size 0.42rem
            }
        }
    }
</style>

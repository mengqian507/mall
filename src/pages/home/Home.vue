<template>
    <div class="home">
        <div class="header-con">
            <div class="header">
                <div class="icon">
                    <img class="icon-img" src="../../assets/images/return.png" alt="">
                    <img class="icon-img" src="../../assets/images/close.png" alt="">
                </div>
                <div class="header-con">兑换商城</div>
            </div>
            <div class="personal">
                <div class="content">
                    <div class="bean-con">
                        <img class="icon" src="../../assets/images/bean-52.png" alt="">
                        <span class="bean">634</span>
                    </div>
                    <div class="btn">我的兑换</div>
                </div>
            </div>
            <div class="prize">

                <img class="horn" src="../../assets/images/horn.png" alt="">
                <span>恭喜李获得什么耳机</span>
            </div>
        </div>
        <div class="content">
            <div class="recommend">
                <div class="title">
                    <div class="title-text">
                        <img class="icon-img" src="../../assets/images/recom-icon.png" alt="">
                        <img class="icon-text" src="../../assets/images/recom-text.png" alt="">
                    </div>
                    <div class="more">
                        <span>更多</span>
                        <img class="icon" src="../../assets/images/more.png" alt="">
                    </div>
                </div>
                <ul class="content-ul">
                    <li class="content-li">
                        <img class="commodity-img" src="../../assets/images/bean.png" alt="">
                        <div class="commodity-message">
                            <div class="commodity-title">商品名称</div>
                            <div class="commodity-price">参考价 100元</div>
                            <div class="commodity-bean">
                                <img class="bean-img" src="../../assets/images/bean.png" alt="">
                                <span class="bean">20000竞豆</span>
                            </div>
                        </div>
                    </li>
                    <li class="content-li">
                        <img class="commodity-img" src="../../assets/images/bean.png" alt="">
                        <div class="commodity-message">
                            <div class="commodity-title">商品名称</div>
                            <div class="commodity-price">参考价 100元</div>
                            <div class="commodity-bean">
                                <img class="bean-img" src="../../assets/images/bean.png" alt="">
                                <span class="bean">20000竞豆</span>
                            </div>
                        </div>
                    </li>
                    <li class="content-li">
                        <img class="commodity-img" src="../../assets/images/bean.png" alt="">
                        <div class="commodity-message">
                            <div class="commodity-title">商品名称</div>
                            <div class="commodity-price">参考价 100元</div>
                            <div class="commodity-bean">
                                <img class="bean-img" src="../../assets/images/bean.png" alt="">
                                <span class="bean">20000竞豆</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="hot">
                <div class="title">
                    <div class="title-text">
                        <img class="icon-img" src="../../assets/images/hot-icon.png" alt="">
                        <img class="icon-text" src="../../assets/images/hot-text.png" alt="">
                    </div>
                    <div class="more">
                        <span>更多</span>
                        <img class="icon" src="../../assets/images/more.png" alt="">
                    </div>
                </div>
                <ul class="menu">
                    <li class="menu-li active">
                        <span class="text">全部</span>
                        <span class="underline"></span>
                    </li>
                    <li class="menu-li active">
                        <span class="text">实物商品</span>
                        <span class="underline"></span>
                    </li>
                    <li class="menu-li">虚拟商品</li>
                    <li class="menu-li">优惠券</li>
                </ul>
                <ul class="content-ul">
                    <li class="content-li">
                        <div class="img-content">
                            <img class="commodity-img" src="../../assets/images/bean.png" alt="">
                            <img class="commodity-icon" src="../../assets/images/sell-out-80.png" alt="">
                        </div>
                        <div class="commodity-message">
                            <div class="commodity-title">商品名称</div>
                            <div class="commodity-price">参考价 100元</div>
                            <div class="commodity-bean">
                                <img class="bean-img" src="../../assets/images/bean.png" alt="">
                                <span class="bean">20000竞豆</span>
                            </div>
                        </div>
                    </li>
                    <li class="content-li">
                        <div class="img-content">
                            <img class="commodity-img" src="../../assets/images/bean.png" alt="">
                            <img class="commodity-icon" src="../../assets/images/sell-out-80.png" alt="">
                        </div>
                        <div class="commodity-message">
                            <div class="commodity-title">商品名称</div>
                            <div class="commodity-price">参考价 100元</div>
                            <div class="commodity-bean">
                                <img class="bean-img" src="../../assets/images/bean.png" alt="">
                                <span class="bean">20000竞豆</span>
                            </div>
                        </div>
                    </li>
                    <li class="content-li">
                        <div class="img-content">
                            <img class="commodity-img" src="../../assets/images/bean.png" alt="">
                            <img class="commodity-icon" src="../../assets/images/sell-out-80.png" alt="">
                        </div>
                        <div class="commodity-message">
                            <div class="commodity-title">商品名称</div>
                            <div class="commodity-price">参考价 100元</div>
                            <div class="commodity-bean">
                                <img class="bean-img" src="../../assets/images/bean.png" alt="">
                                <span class="bean">20000竞豆</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .home{
        width 100%
        font-family 'MicrosoftYaHeiUI'
        font-size 0.36rem
        background: #F2F2F2
        color #000
        .header-con{
            background #fff
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
                    }
                }
            }
            .personal{
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
                    display inline-block
                    width 0.46rem
                    height 0.39rem
                    margin-right 0.25rem
                    vertical-align middle
                }
            }
        }
        .content{
            .title{
                height 1.26rem
                line-height 1.26rem
                background: #FBFBFB
                padding 0 0.6rem 0 0.3rem
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
                    font-size: 0.32rem;
                    color: #999999;
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
                }
                .commodity-bean{
                    .bean-img{
                        width 0.37rem
                        height 0.3rem
                    }
                    .bean{
                        font-size: 0.3rem
                        color: #FFA912
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
                            margin: -0.1rem 0 0 1.05rem;
                            width 0.7rem
                            height 0.12rem
                            background-image: linear-gradient(90deg, #FF9749 0%, #FF5167 100%);
                            box-shadow: 0 1px 1px 0 rgba(255,255,255,0.50);
                            border-radius: 100px;
                        }
                    }
                }
                .content-ul{
                    padding 0.4rem
                    box-sizing border-box
                    .content-li{
                        float left
                        width 4.9rem
                        &:nth-child(odd){
                            margin-right 0.2rem
                        }
                        .img-content{
                            width 4.9rem
                            height 3.7rem
                            position relative
                            .commodity-img{
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

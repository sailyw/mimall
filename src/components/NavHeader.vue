<template>
    <div class="header">
        <!-- 头部导航 -->
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a><span>|</span>
                    <a href="javascript:;">MIUI</a><span>|</span>
                    <a href="javascript:;">云服务</a><span>|</span>
                    <a href="javascript:;">金融</a><span>|</span>
                    <a href="javascript:;">小爱开放平台</a><span>|</span>
                    <a href="javascript:;">下载app
                        <span class="appcode">
                            <img src="/imgs/appcode.png" alt="">
                            <span>小米商城APP</span>
                        </span>
                    </a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>

                </div>
            </div>
        </div>
        <!-- 导航菜单 -->
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return{
            username:'',
            phoneList:[]
        }
    },
    filters:{
        currency(val){
            if(!val) return '0.00';
            return '￥' + val.toFixed(2)+'元';
        }
    },
    mounted(){
        this.getProductList();
    },
    methods:{
        login(){
            this.$router.push('/login');
        },
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:'100012'
                }
            }).then((res)=>{
                if(res.list.length>=6){
                    this.phoneList = res.list.slice(0,6);
                }
            })
        },
        goToCart(){
            this.$router.push('/cart');
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
    .header{
        // 顶部导航
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container{
                @include flex();
                a{
                    position: relative;
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                    &:hover{
                        color: #ffffff;
                        .appcode{
                            opacity: 1;
                            height: 130px;
                        }
                    }
                    .appcode{
                        position: absolute;
                        top: 40px;
                        left: 50%;
                        margin-left: -62px;
                        opacity: 0;
                        text-align: center;
                        box-shadow: 0 1px 5px #aaa;
                        overflow: hidden;
                        transition: height .3s;
                        background-color: #ffffff;
                        display: inline-block;
                        height: 0;
                        width: 124px;
                        z-index: 100;
                        color: #333333;
                        border: 1px solid #e0e0e0;
                        img{
                            display: inline-block;
                            width: 90px;
                            height: 90px;
                            margin: 18px auto 12px;
                        }
                        span{
                            display: inline-block;
                            position: absolute;
                            top: 101px;
                            left: 21px;
                            font-size: 14px;
                            color: #333333;
                        }
                    }
                }
                span{
                    margin-right:17px;
                }
                .my-cart{
                    width: 110px;
                    background-color: #ff6600;
                    text-align: center;
                    color: #ffffff;
                    .icon-cart{
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }
        }
        // 导航菜单
        .nav-header{
            .container{
                position: relative;
                height: 112px;
                @include flex();
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #ff6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &::before{
                            content: ' ';
                            display: inline-block;
                            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                            transition:  margin .2s;
                        }
                        &::after{
                            content: ' ';
                            display: inline-block;
                            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                        }
                        &:hover::before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }

                    }
                }
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            transition: height .5s;
                            overflow: hidden;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,.11);
                            z-index: 10;
                            .product{
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height: 137px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price{
                                    color: $colorA;
                                }
                                &::before{
                                    content: ' ';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                &:last-child::before{
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #e0e0e0;
                        display: flex;
                        align-items: center;
                        input{
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 49px;
                            padding-left: 14px;
                        }
                        a{
                            display: inline-block;
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 17px;
                            margin-right: 14px;
                        }
                    }
                }
            }
        }
    }
</style>
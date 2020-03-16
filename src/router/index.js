import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/home";
import Index from "../view/index";
import Product from "../view/product";
import Detail from "../view/detail";
import Cart from "../view/cart";
import Order from "../view/order";
import OrderList from "../view/orderList";
import OrderConfirm from "../view/orderConfirm";
import OrderPay from "../view/orderPay";
import AliPay from "../view/alipay";

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
			redirect: 'index',
			children: [
				// 首页
				{
					path: "/index",
					name: "index",
					component: Index
				},
				// 产品站
				{
					path: "/product/:id",
					name: "product",
					component: Product
				},
				// 详情
				{
					path: "/detail/:id",
					name: "detail",
					component: Detail
				}
			]
		},
		// 购物车
		{
			path: "/cart",
			name: "cart",
			component: Cart
		},
		// 订单
		{
			path: "/order",
			name: "order",
			component: Order,
			children: [
				// 订单列表
				{
					path: "list",
					name: "order-list",
					component: OrderList
				},
				// 订单确认
				{
					path: "confirm",
					name: "order-confirm",
					component: OrderConfirm
				},
				// 订单支付
				{
					path: "pay",
					name: "order-pay",
					component: OrderPay
				},
				// 阿里支付
				{
					path: "alipay",
					name: "alipay",
					component: AliPay
				}
			]
		}
	]
})


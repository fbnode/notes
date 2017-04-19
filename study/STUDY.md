## javascript
#### 取数组中的最大值
<p class="tip">
	最小值同理，针对数据类型都是Number的情况
</p>
+ 循环比对   
```js
Array.prototype.max = function() {
    var max = this[0];
    this.forEach(function(ele, idx) {
        if (ele > max) { max = ele; }
    })
    return max;
}
```
+ 利用Math.max()
```js
Array.prototype.max = function() {
    return Math.max.apply({}, this);
}
```
+ [ES6](http://es6.ruanyifeng.com/)的方法，使用展开[运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)
```js
Math.max(...arr)
```

#### js跨域解决方案
+ 开篇之前必须理解两个概念："同源策略"和“跨域” 。
+ 同源策略：同源策略是客户端脚本（尤其是JavaScript）的重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。这里的同源指的是：同协议，同域名和同端口。
+ 跨域：一个域名的组成  http://www.aaa.com:8080/js/jQuery.js (协议://子域名.主域名.组织或机构:端口号/请求资源地址)

<p class="tip">
	当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。。。不同域之间相互请求资源，就叫”跨域“。
	javascript出于安全方面的考虑，不允许跨域调用其他页面的对象！
</p>
常用的三种解决方案：
1. 代理（属于后台范畴）在同域名的web服务器端创建一个代理，代理去调用其他域的资源，然后返回给前端，其效果是相同的。
2. jsonp(属于jquery，并且只支持 “GET” 请求，但不支持 “POST” 请求)。
```js
<script>
	function jsonp(json){
		document.write( json.name ); 
	}
</script>
<script src="http://www.bbb.com/index.php"></script>
```

#### 消息队列、事件循环
+ 消息队列、事件循环用在异步
+ js单线程：js引擎里负责解释和执行JavaScript代码的线程只有一个。实际上还存在其他工作线程如：处理AJAX请求的线程、处理DOM事件的线程、定时器线程、读写文件的线程(例如在Node.js中)等等
+ 同步：如果一个函数返回的时候，调用者就能够得到预期结果(即拿到了预期的返回值或者看到了预期的效果)，那么这个函数就是同步的。异步：如果一个函数返回的时候，调用者还不能够得到预期结果，而是需要在将来通过一定的手段得到，那么这个函数就是异步的
+ 所以在JavaScript中对于耗时的操作或者时间不确定的操作，使用异步就成了必然的选择。
+ 异步操作完成后需要通知主线程，这个**通知机制**就是利用消息队列和事件循环。消息队列：一个先进先出的队列，它里面存放着各种消息。事件循环：指主线程重复从消息队列中取消息、执行的过程。
+ 工作线程将消息放到消息队列，主线程通过事件循环过程去取消息。可以简单的认为消息就是响应的回调函数。  
```js
while(true){
	var message = queue.get();
	excute(message);
}
```
![GitHub](https://github.com/wfbcode/notes/tree/master/assets/img/async.png "GitHub,Social Coding")


参考链接：https://segmentfault.com/a/1190000004322358

#### js/css 动画优化方案
#### 对象和数组深浅拷贝的特殊处理
#### let var const
#### js闭包
#### js设计模式
#### babel转码器
#### 浏览器的缓存机制
#### mouseenter、mouseover；mouseleave、mouseout的区别
#### json
http://www.xingxin.me/posts/58e4914eab572f17b029787f
#### 单击事件，击穿元素
#### setTimeout和setInterval
http://www.cnblogs.com/Chen-XiaoJun/p/6230938.html
#### js静态属性、方法，原型的属性、方法
#### 类数组对象
+ 看起来像却又不是数组的对象；
+ 具有数字索引下标和length属性。不具有push、forEach等数组方法。因其原型链__proto__指向不同。
+ 两个典型类数组例子，document.querySelectorAll()返回结果和特殊变量arguments。
+ 类数组对象用数组的方法，通过call、apply（call接受一个参数列表，而apply接受一个包含多个参数的数组或类数组对象）实现。例如：
```js
//打印参数
Array.prototype.forEach.call(arguments, function(arg, idx) {
    console(idx + '-' + arg)
});
//普通对象
let obj1 = {};
let obj2 = {};
Array.prototype.push.call(obj1, 'a', 'b');
Array.prototype.push.apply(obj2, ['a', 'b']); //obj1、 obj2都是 { 0: "a", 1: "b", length: 2 }
//将类数组对象转化为数组
Array.prototype.slice.call(likeArray)
```

#### 数组的方法  slice/splice
#### undefined == null true
#### toString() 类型检测
#### isNaN()、parseFloat()、isFinite()

## css
## html
## markdown 语法
http://xianbai.me/learn-md/article/extension/code-blocks-and-highlighting.html  
https://github.com/younghz/Markdown

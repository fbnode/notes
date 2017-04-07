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
https://segmentfault.com/a/1190000004322358

#### js/css 动画优化方案
#### 对象和数组深浅拷贝的特殊处理
#### let var const
#### js闭包
#### js设计模式
#### babel转码器


## css
## html
## markdown 语法
http://xianbai.me/learn-md/article/extension/code-blocks-and-highlighting.html  
https://github.com/younghz/Markdown

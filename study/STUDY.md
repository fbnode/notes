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
+ ES2015的方法，使用展开[运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)
```js
Math.max(...arr)
```

#### js跨域解决方案

#### 小数取整
#### 事件队列、事件循环

#### js/css 动画优化方案
#### 对象和数组深浅拷贝的特殊处理
#### let var const
#### js闭包


## css
## html
## markdown 语法
http://xianbai.me/learn-md/article/extension/code-blocks-and-highlighting.html  
https://github.com/younghz/Markdown

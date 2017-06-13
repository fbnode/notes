### 三大模块

![GitHub](https://github.com/wfbcode/notes/blob/master/assets/img/jquery/construction.png?raw=true "GitHub,Social Coding")

### 代码清单

### 构造函数
### 源码结构

### .pushStack(eles,name,args)
创建一个新的空jQuery对象，把DOM元素集合放入这个jQuery对象中，并保留对当前jQuery对象的引用。

### 源码里的递归



### 小技巧
```js
function createFlags( flags ) {
//object、flagsCache[ flags ]指向同一个空对象，object添加属性时也是在为flagsCache[ flags ]添加属性
	var object = flagsCache[ flags ] = {},
		i, length;
	flags = flags.split( /\s+/ );
	for ( i = 0, length = flags.length; i < length; i++ ) {
		object[ flags[i] ] = true;
	}
	return object;
}
```


# day0109

## 导出方式

`export default a`

`export {a as default}`


```js
export const a = 5;
export const b = 6;
-----------
import {a,b} from '...'

*****************************

export const fun = ()=>{}

---------------------
import * as obj from '...'//不用解构赋值，导入所有的数据
```

## 自定义指令

`directives`选项（用于自定义指令）

里面每个函数第一个参数是他们挂载的元素，第二个为调用传参

tip: 当我们让data中的数据改变，需要把data中的数据类型变为引用数据类型

### 全局指令

`Vue.directives("方法",(el,bing)=>{})`
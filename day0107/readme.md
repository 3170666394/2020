# day0107

## 导航守卫

### 全局守卫

#### beforeEach 

在每一个路由跳转之前都会执行这个钩子函数 

to,
from,
next 必须执行，路由就不跳转了

#### afterEach  


#### beforeEnter() 路由独享守卫

```js
{
    path:"",
    component:,
    beforeEnter(to,from,next){

    }
}
```

### 组件内的守卫

#### beforeRouteUpdate(to,from,next) (2.2新增)

监控路由的变化

#### beforeRouterEnter(to,from,next) 

执行时机比created要早，但监控不到路由的变化
通过next(vm=>{访问组件实例})

#### beforeRouterLeave(to,from,next)

控制路由的退出


## 动画

    <transition></transition>

##  对axios的二次封装

```js
axios.create({
    baseURL:"",
    
})

```
# day0106

## $router

path/path/:参数1/:参数2

`this.$route.params.参数`

## 拿到查询字符串(query)

`this.$route.query.变量`

## 编程式导航

`this.$router.push({'name':'路由名字',params:{p:'value'},'query':{time:Date.now())};`

`this.$router.replace`
`this.$router.go`
`this.$router.back`
`this.$router.forward`

## 重定向

redirect

## props解耦

在index.js中，路由中加props:true  
组件里props:["路由参数"]，在后面拿到参数，使用this.参数

## 路由的元信息

```js
{
    path:'**',
    component: xxx,
    meta:{
        flag:true //为true隐藏导航， false显示导航
    }
}
```

## 别名

alias 别名

## router-link

当前匹配的路由自动有两个类`router-link-exact-active` `router-link-active`

## 正向代理

通过正向代理的方式完成跨域

项目在根目录的建立一个配置文件

Vue.config.js

文件内容如下：

```js
module.exports = {
    derServer:{
        proxy:{
            "/my":{
                target:"http://m.maoyan.com",
                chageOrigin:true,
                pathRewrite:{
                    "^/my":"/"
                }
            }
        }
    }
}
```


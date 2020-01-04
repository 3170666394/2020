# day0104

## render

`render(组件/标签,标签属性,HTML内容(相当于插槽))`

## 图片路径问题

### 第一种解决方式

    如果图片路径存在变量中，要放在public里。public里图片不会进行打包，assets会进行打包

### 第二种解决方式

    变量里存 require(图片路径)

## 样式问题

### scoped

    在style写scoped，则该样式只对本组件生效

### sass

    如若创建项目的时候没有选择sass的选项，则需要安装两个插件 sass-loader 和 node-sass
    在style中开启scss要写<style lang="scss">

## scss用法小结

### 继承

```scss
.bj{
    background:red;
}
p{
    color : blue;
    @extend .bj;
}
```

### 变量的使用

```scss
$cl:red;
p{
    color:$cl;
}
```

### 混合

```scss
@mixin bj($bj:yellow){
    background:$bj;
}

p{
    @include bj(red);
}
```


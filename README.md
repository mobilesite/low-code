# 笔记

## 集成react-router-dom

```
npm i react-router-dom -S
```

react-router-dom比react-router多了 <Link> <BrowserRouter> 这样的 DOM 类组件。因此，我们只需引用 react-router-dom 这个包就行了。

例如：Link组件，会渲染一个a标签。

BrowserRouter和HashRouter组件，前者使用pushState和popState事件构建路由，后者使用window.location.hash和hashchange事件构建路由。

关于react-router-dom的使用，可以参考这篇文章：https://zhuanlan.zhihu.com/p/431389907

## 集成redux

```
npm i redux react-redux -S
```

1. 按feature规整目录，对应调整路由

2. 按feature编写action、reducer和相关hook（每一组拆成一个文件），编写辅助文件constants、initialState，将action、reducer、hook集中到统一的出口。

3. 编写store和将所有reducer收集成rootReducer

4. 编写Counter组件，测试redux的集成效果

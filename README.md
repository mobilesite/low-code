# 笔记

react-router-dom比react-router多了 <Link> <BrowserRouter> 这样的 DOM 类组件。因此，我们只需引用 react-router-dom 这个包就行了。

例如：Link组件，会渲染一个a标签。

BrowserRouter和HashRouter组件，前者使用pushState和popState事件构建路由，后者使用window.location.hash和hashchange事件构建路由。


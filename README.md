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

参考：
redux中文文档：https://www.redux.org.cn/docs/basics/Reducers.html
Rekit: http://rekit.js.org/docs/one-action-one-file.html

## 设计样式文件的组织结构

### 使用normalize.css进行样式初始化

注意：如果后续引入了ant-design库，需要注意样式是否覆盖的问题，因为它也使用了normalize.css，见：https://github.com/ant-design/ant-design/blob/master/components/style/core/global.less

将样式单独归口进行导出，不体现页面样式对组件样式的依赖关系的原因是什么呢？好像不是特别好，以后做组件懒加载的时候，可能不能做到样式懒加载，因此，这个处理有待进一步考虑清楚（TODO）。

### 为什么选用Less

其实Sass挺好的。考虑使用Less的原因在于，以后估计会需要用到Ant Design，而它的样式目前是用Less实现的，所以，后续在引用其抛出的一些文件的时候，会比较方便。

### 添加对Less打包的支持：

#### 1、失败的尝试

通过React默认脚手架(create-react-app)创建出的项目默认是不支持less作为css预编译工具的。

如需支持有两种方式：

1、通过执行命令 npm eject 将脚手架预先封闭的Webpack等配置工具的源文件暴露出来自行修改。

2、使用customize-cra、react-app-rewired对配置进行扩展。

3、采用@craco/craco对配置进行扩展。

这里采用大家比较熟知的第二种方式。

```
npm i customize-cra react-app-rewired less less-loader -D
```

具体做法为：

参见：https://github.com/arackaf/customize-cra/blob/HEAD/api.md#addlessloaderloaderoptions

在项目根目录下创建config-overrides.js文件：

```js
const {
  override,
  addLessLoader,
} = require('customize-cra');

module.exports = override(
  addLessLoader({
    // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
    lessOptions: {
      javascriptEnabled: true,
      ModifyVars: { '@primary-color': '#eee' },
      sourceMap: true,
    }
  }),
);
```

然后将package.json中的scripts节点中start和build改成：

```
"start": "react-app-rewired start",
"build": "react-app-rewired build",
```

然而，发现不行，报错如下：
> options has an unknown property 'plugins'. These properties are valid:
   object { postcssOptions?, execute?, sourceMap?, implementation? }

查了多个方法，比如将less-loader限制在5.0.0版本，或者将postcss-loader降低至3.0.0版本，均有不同的报错，无奈放弃。

全部回滚：

删除package-lock.json
删除package.json中新加的 customize-cra react-app-rewired、less、less-loader等依赖。并重新执行npm i。

#### 2、改用@craco/craco

参见：
https://ant.design/docs/react/use-with-create-react-app-cn#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE

```
npm i @craco/craco craco-less -D
```

修改package.json：

```
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```
然后在项目根目录创建一个 craco.config.js 用于修改默认配置。

```js
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
```

真是分分钟搞定，回看customize-cra react-app-rewired的各种报错，太浪费时间了。真是得给Ant Design一个大大的赞。

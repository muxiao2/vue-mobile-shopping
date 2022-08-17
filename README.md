# vue_m_parctice

### 一、初始化

#### 1.初始化项目

```shell
vue init webpack vue_m_parctice
```

配置文件，进入项目目录运行

#### 2.关闭ESLint语法检测规则

### 二、顶部导航栏

#### 使用 Mint UI 的 Header

### 三、底部选项卡

#### 使用 MUI 的 NavBar

**GitHub：**https://github.com/dcloudio/mui

内置图标直接复制类名，拓展图标复制类名后还要导入

### 四、页面切换动画

transition + 动画钩子

- 处理滚动条
- 处理离场动画

### 五、Home

#### 1.使用 Mint UI 的 Swipe（轮播）

#### 2.使用 MUI 的 Grid（九宫格）

### 六、新闻列表

#### 1.使用 MUI 的 MediaList

#### 2.使用 axios 请求数据

##### 2.5 遍历渲染新闻列表

##### 2.6 处理样式

##### 2.7 使用 Moment.js 格式化时间
## 七、Vue-devtools

#### 1.应用商店安装

https://devtools.vuejs.org/guide/installation.html

https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

#### 2.本地安装

谷歌拓展程序解压本地文件

Chrome_Extensions文件

【右上角三个点】→【设置】→【扩展程序】

### 八、新闻列表

#### 1.路由配置id参数

#### 2.根据id1请求数据

#### 3.渲染

### 九、封装公共【评论】组件

#### 1.common目录下新建Comment.vue

#### 2.NewsList中导入Comment并注册

#### 3.使用Comment组件

#### 4.Comment

##### 4.1 发表评论 --- 非空校验

##### 4.2 加载更多

### 十、图文列表

#### 1.使用 MUI 的 TabBar 及 Scroll(看文档)
**报错原因：**caller、callee、grguments和严格模式冲突

移出严格模式要在没用脚手架的情况下

**解决：**利用 `.bablerc` 配置忽略文件

```json
"ignore": ["./src/lib/mui/js/mui.js"]
```

点击下方NavBar报错：

**报错原因：**chrome为了提高页面滑动流畅度搞出来的一个东西

**解决：**App.vue阻止默认事件

```css
body {
    touch-action: none;
}
```

阻止默认事件后点击下方NavBar不会切换路由

**原因：**MUI 自己的css类名冲突

**解决：**修改类名 mui-tab-item 为自定义类名并复制原样式到新类名下

#### 2.渲染分类列表

注意：请求数据要拼接全部分类

lazy预缓存

缩略图

```shell
npm i vue-preview -S
```

渲染标题

请求数据

 十一、商品详情

本地存储vuex

安装

```shell
npm i vuex@3
```

滚动行为设置


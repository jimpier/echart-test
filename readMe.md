#商帆3.0前端框架文档


#技术选型

Element-UI https://element.faas.ele.me/#/zh-CN/component/installation
VUE https://cn.vuejs.org/

其他相关：
Node http://nodejs.cn/api/documentation.html
Webpack https://webpack.docschina.org/


# 环境要求
- node@8.11.0+
- npm@5.6.0+


## 安装环境
```
  # 安装依赖包
  $ npm i

  建议启用淘宝镜像，使用cnpm i
```

## 测试环境
```
  # 启动测试环境
  $ npm run dev

  将启动webpack.config中的配置，如果需要局域网内浏览，修改devServer中的host为本地IP
```

## 生产环境
```
  # 打包生产环境
  $ npm run build

  npm run build后会自动生成，建议每次打包前删除out文件
```

## 目录结构

```
.
├── /out/                         # 构建输出
├── /node_modules/                # 第三方类库和工具
├── /src/                         # 应用源码
│ ├── /api/                       # api接口文档
│ ├── /resources/                 # 静态资源
│ ├── /components/                # 项目组件
│ ├── /pages/                     # 页面
│ ├── /router/                    # 路由配置
│ ├── /store/                     # 数据状态管理
│ ├── /util/                      # 工具函数
| ├── index.js                     # app 入口文件
| ├── index.html                  # app 模板文件
├── webpack.config.js             # 测试配置文件
├── webpack.prod.js               # 生产配置文件
└── package.json                  # 配置入口文件、依赖和 scripts
```


## 注意事项

* 测试和生产配置文件，无特殊情况不要修改。如需局域网内浏览，改完devServer后不要上传git。
* api文件夹内，http.js为axios的拓展功能。各个页面的路由写在对应的js文件内(建议按二级路由命名区分)
* 字体图标在resources/font内，Element-UI中没有的字体图标，会由设计添加在阿里iconfont的项目内。

### 路由配置以及页面层级关系

* 路由配置见router，index为一级路由。二级路由写在对应文件夹内，引入进来。如有三级路由，注意一下路由视图和children的关系。

```
.
├── /router/                      # 路由文件夹
│ ├── /index.js                   # 一级路由
│ ├── /coupon/index.js            # 一级栏目--优惠劵
│ ├── /enterprise/index.js        # 一级栏目--企业管理
│ ├── ……                          # 其他一级栏目文件夹

```

* 路由按一级栏目来分文件夹，子栏目在对应文件夹内。由于中台一般只有二级路由，因此子栏目的路由可以新建文件夹或者写在单独JS内，这里不做限制。
* 页面和接口文件的文件层级关系，与路由的保持一致。


## 项目列表
商帆中控平台-centercontro
商帆营销中台-centerstage


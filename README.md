# requirejs-backbone

### 一、目录结构

![目录结构](https://github.com/yunhailu/ImagesService/blob/master/requirejs-backbone/94884BC9-5B8D-4635-A939-15EB61EB5190.jpg "项目的目录结构")
      
#### 1. src目录
* 里面是项目的源码，包括入口的index.html文件，项目的js、样式和模版都在其中，见上图，此目录后面会详细说明
      
#### 2. images目录
* 用于放置项目的所以图片，考虑到cdn，所以专门把图片单独放置，在less和js加载的时候，都有分别的配置（src/styles/base.less和src/scripts/base/config.js）
      
#### 3. node_modules目录
* 执行`npm install`之后产生的node模块依赖目录
      
#### 4. dist目录
* 执行`grunt`之后，产出代码的目录
      
#### 5. Gruntfile.js文件
* grunt的配置文件，可以根据自己的项目需要进行相应的更改
      
#### 6. package.json文件
* nodejs配置文件


### 二、环境部署
  复制代码到服务器，此代码依赖nodejs，需要用grunt去进行打包压缩和对less的编译（根据操作系统的版本，自行安装node，不做赘述）
* 首先，要cd到项目根目录，执行`npm install`，去安装nodejs的依赖包
* 然后，执行grunt进行编译和打包代码，根目录下新生产的dist目录，就是打包好的代码（也可以根据自己的需要修改Gruntfile.js，来配置你所需要的目录结构），里面的index.html是项目的入口文件。当然调试的时候，可以直接执行`grunt dev`，此命令只会打包文件、编译less，并一直监听修改的文件，自动修改产出dist
* 最后，开启你的服务器，比如nginx，执行访问`<Your Service>/requirejs-backbone/dist`即可


### 三、原代码结构
![src目录](https://github.com/yunhailu/ImagesService/blob/master/requirejs-backbone/9395CDEF-1D94-41D8-8BE1-689E27B2494E.jpg "src目录")
#### 1. scripts目录
* main.js文件， 入口js文件，提供requirejs的所有配置项
* base目录
    目录下为项目的基础模块js文件，包括路由、配置等，主要模块如下，其余不做赘述：
    * boot.js，项目的boot入口，开始执行和加载js
    * app.js
        * 路由的配置和初始化
        * 页面初始化viewport
    * router.js
        * 根据路径`#`后面的路由执行相应的controller(比如#style)，不存在的路由会执行`*defaultAction`
    * view.js
        * 暴露了一个createview的方法，需要传递一些配置项(如下图)。通过view.js会自动加载对应的模版和样式（默认模版名和样式名一致），返回值为一个promise对象。
![view.js中createView参数](https://github.com/yunhailu/ImagesService/blob/master/requirejs-backbone/BB46E3E2-0312-4FEB-BE8D-A9AD1EFF367E.jpg "view.js中createView参数")
* controllers目录
    * 项目模块的controller的js文件
    * 复杂路由，会先执行`*defaultAction`，再去查找相应的controller。比如，`#style/page`，先通过defaultAction.js去分发，然后找到`controllers/style.js`，再把page当作附带参数传给`controllers/style.js`，最后执行style的对应逻辑
* models目录
    项目模块的model的js文件
* views目录
    项目模块的view的js文件
* vendors目录
    * jquery目录
        jquery的库和相关插件
    * require目录
        require库和样式、文件加载的插件
    * underscore.js
    * backbone.js
    * bootstrap.min.js
* local目录
    多语言设置

#### 2. styles目录
* 里面是所有的样式文件(.less)，包括每个页面模块的样式(eg: charging.less)和一些功能模块的样式(eg: slider.less)，此目录最后会通过grunt编译成css文件，供html加载

#### 3. templates目录
* 放置所有的html模版(underscore模版)

#### 4. index.html文件
* 整个页面的入口，单页面应用

# requirejs-backbone

## 一、目录结构

      ![目录结构](https://github.com/yunhailu/ImagesService/blob/master/requirejs-backbone/94884BC9-5B8D-4635-A939-15EB61EB5190.jpg "项目的目录结构")
      
      ### 1. src目录
      里面是项目的源码，包括入口的index.html文件，项目的js、样式和模版都在其中，见上图，此目录后面会详细说明
      
      ### 2. images目录
      用于放置项目的所以图片，考虑到cdn，所以专门把图片单独放置，在less和js加载的时候，都有分别的配置（src/styles/base.less和src/scripts/base/config.js）
      
      ### 3. node_modules目录
      执行`npm install`之后产生的node模块依赖目录
      
      ### 4. dist目录
      执行`grunt`之后，产出代码的目录
      
      ### 5. Gruntfile.js文件
      grunt的配置文件，可以根据自己的项目需要进行相应的更改
      
      ### 6. package.json文件
      nodejs配置文件

## 二、环境部署
      复制代码到服务器，此代码依赖nodejs，需要用grunt去进行打包压缩和对less的编译（根据操作系统的版本，自行安装node，不做赘述）
      * 首先，要cd到项目根目录，执行`npm install`，去安装nodejs的依赖包
      * 然后，执行grunt进行编译和打包代码，根目录下新生产的dist目录，就是打包好的代码（也可以根据自己的需要修改Gruntfile.js，来配置你所需要的目录结构），里面的index.html是项目的入口文件。当然调试的时候，可以直接执行`grunt dev`，此命令只会打包文件、编译less，并一直监听修改的文件，自动修改产出dist
      * 最后，开启你的服务器，比如nginx，执行访问`<Your Service>/requirejs-backbone/dist`即可

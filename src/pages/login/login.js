console.log("login.js执行了，接下来，准备加载配置文件！");

//先加载config配置文件

// require() 来加载所有你需要运行的scripts，这可以确保你所有的scripts都是在这里加载的

require(["../../js/config"], function(){
    require(["jquery"],function($){	//define([],function(){})来定义模块，每个单独的js文件就是一个模块
        console.log($);
        console.log($.prototype);
    })
});


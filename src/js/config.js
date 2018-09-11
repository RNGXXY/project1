console.log("config配置文件加载了！");

//配置文件，给访问路径起名
requirejs.config({
    baseUrl : "localhost:8080",		//本地域名，测试的时候用
    paths : {
       "jquery" : "https://cdn.bootcss.com/jquery/2.2.4/jquery",	//路径不写.js
       "hover" : "/js/lib/my.jquery.hover"
    }
});


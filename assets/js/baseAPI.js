
//每次调用$.get()或$.post()或$.ajax()的时候
//会先调用ajaxPrefilter这个函数，可以拿到给Ajax提供的配置对象
$.ajaxPrefilter(function(options){
    //在发起真正的Ajax请求前，统一拼接请求的根路径
    options.url = 'http://127.0.0.1:3007'+options.url
})
$(function(){

  getUserInfo()

  var layer = layui.layer

  $('#btnLogout').on('click', function(){
      //提示用户是否退出
    layer.confirm('确定退出登录', {icon: 3, title:'提示'}, function(index){
      
        //清空本地存储中的token
        localStorage.removeItem('token')
        //跳转到登录页
        location.href = '/login.html'
        //关闭confirm询问框
        layer.close(index);
      });
  })
})


function getUserInfo(){
      $.ajax({
          method: 'get',
          url: '/my/userinfo',
          success: function(res){
        if(res.status !== 0){
            return layui.layer.msg('获取用户信息失败！')
            
          }
          renderAvatar(res.data)
        },
        //无论成功还是失败，都会调用
        
        
      })  
}

function renderAvatar(user){
    var name = user.nickname || user.username
    //设置欢迎文本
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    //按需渲染用户头像
    if(user.user_pic !== null){
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    }else{
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}
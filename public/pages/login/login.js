window.addEventListener('load', function () {
  var event = {
    loginBtn: function (target, username, pwd) {
      target.addEventListener('click', function () {
        router.login({
          username: username.value,
          pwd: pwd.value
        }, function (data) {
          if (data.state === true) {
            tools.redirectTo('../home/home.html')
          } else {
            alert('用户名或密码错误！')
          }
        }, function (err) {
          alert(err)
        })
      }, false)
    }
  }

  var router = {
    login: function (body, success, error) {
      tools.post('/api/login', body, success, error)
    }
  }

  var username = document.getElementById('username')
  var pwd = document.getElementById('pwd')
  var commit = document.getElementById('login-btn')
  // init login btn event
  event.loginBtn(commit, username, pwd)
})

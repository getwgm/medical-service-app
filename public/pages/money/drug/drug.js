window.addEventListener('load', function () {
  components.initBackEvent()
})


window.onload = function () {
  components.initBackEvent()
  tools.get('/api/money', undefined, function (data) {
    // 确定字段的顺序
    var columns = ['drug', 'price']
    components.loadDataToTable('tbody', columns, data)
  }, function (err) {
    console.log(err)
  })
}

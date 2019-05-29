window.onload = function () {
  components.initBackEvent()
  tools.get('/api/history', undefined, function (data) {
    // 确定字段的顺序
    var columns = ['date', 'medicine', 'cost']
    components.loadDataToTable('tbody', columns, data)
  }, function (err) {
    console.log(err)
  })
}

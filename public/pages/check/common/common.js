page.check = {}

page.check.load = function (option) {
  var apiPath = '/api/check/' + option
  tools.get(apiPath, undefined, function (data) {
    var id = '', el
    for (id in data) {
      el = document.getElementById(id)
      el.innerText = data[id]
    }
  }, function (err) {
    console.log(err)
  })
}

// components namespace
var components = {}
// init back btn event
components.initBackEvent = function () {
  var backBtn = document.getElementById('back-btn')
  backBtn.addEventListener('click', function () {
    window.history.back()
  })
}

// init c-list
components.initList = function (id, data) {
  var list = document.getElementById(id)
  data.forEach(function (item) {
    var curItem = createItem(item, 'c-list-item')
    list.appendChild(curItem)
  })

  function createItem (curItem, className) {
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.innerText = curItem.text
    a.href = curItem.href || '##'
    li.className = className
    li.appendChild(a)
    return li
  }
}

components.loadDataToTable = function (tBodySelector, columns, data) {
  var tbody = document.querySelector(tBodySelector)
  function createRow(item) {
    var tr = document.createElement('tr')
    columns.forEach(function (column) {
      var td = document.createElement('td')
      td.innerText = item[column]
      tr.appendChild(td)
    })
    return tr
  }
  data.forEach(function (item) {
    tbody.appendChild(createRow(item))
  })
}

// tools namespace
var tools = {}

// redirect address
tools.redirectTo = function (href) {
  window.location.href = href
}

tools.get = function (url, params, success, error) {
  axios.get(url, {
    params: params
  }).then(function (res) {
    success(res.data)
  }).catch(function (err) {
    error(err)
  })
}

// post
tools.post = function (url, body, success, error) {
  axios.post(url, body).then(function (res) {
    success(res.data)
  }).catch(function (err) {
    error(err)
  })
}

// page common script
var page = {}

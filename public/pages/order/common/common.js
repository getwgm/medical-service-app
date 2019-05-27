components.order = {}

components.order.initTab = function (data) {
    var tab = document.getElementById('tab')
    var tabNav = tab.children[0]
    var tabContent = tab.children[1]
    var navLis = tabNav.children
    var navArchors = []
    // 初始化tabContent
    changeTabContent(data[0])
    Array.prototype.forEach.call(navLis, function (navLi) {
        var navArchor = navLi.children[0]
        navArchors.push(navArchor)
        navArchor.addEventListener('click', function (e) {
            e.preventDefault()
            var href = e.target.href.substring(e.target.href.indexOf('#') + 1)
            var idx = getCurIdx(href)
            var curData = data[idx]
            changeTabArchor(e.target)
            changeTabContent(curData)
        })
    })
    function changeTabArchor(el) {
        var i, len, navArchor
        for (i = 0, len = navArchors.length; i < len; i++) {
            navArchor = navArchors[i]
            // 找到当前选中的nav，将它移除
            if (navArchor.classList.contains('active')) {
                if (navArchor === el) return
                navArchor.classList.remove('active')
            }
        }
        // 给当前nav添加active
        el.classList.add('active')
    }
    // 改变tabContent的内容
    function changeTabContent(data) {
        var h3 = document.createElement('h3')
        var am = createBlock(data.am, data.ticket[0])
        var pm = createBlock(data.pm, data.ticket[1])
        h3.innerText = data.doctor
        tabContent.innerHTML = ''
        tabContent.appendChild(h3)
        tabContent.appendChild(am)
        tabContent.appendChild(pm)
        function createBlock(time, ticket) {
            var block = document.createElement('div')
            var timeDiv = document.createElement('p')
            var ticketWrap = document.createElement('div')
            var checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            var span = document.createElement('span')
            block.className = 'block'
            timeDiv.className = 'time'
            ticketWrap.className = 'ticket-wrap'
            checkbox.className = 'checkbox'
            timeDiv.innerText = time
            span.innerText = '剩余号数：' + ticket
            ticketWrap.appendChild(span)
            ticketWrap.appendChild(checkbox)
            block.appendChild(timeDiv)
            block.appendChild(ticketWrap)
            return block
        }
    }
    // 获取当前数据对应的idx
    function getCurIdx(href) {
        switch (href) {
            case 'Mon': return 0;
            case 'Tues': return 1;
            case 'Wed': return 2;
            case 'Thurs': return 3;
            case 'Fri': return 4;
        }
    }
}

tools.order = {}

tools.order.getOrderSelected = function (subject) {
    function getOrderTime () {
        var i, len, checkboxs = document.querySelectorAll('.checkbox')
        for (i = 0, len = checkboxs.length; i < len; i++) {
            if (checkboxs[i].checked) {
                return i === 0 ? 'am' : 'pm'
            }
        }
    }
    var day = document.querySelector('#tab .active').innerText
    var time = getOrderTime()
    return { subject, day, time }
}

page.order = {}

page.order.load = function (subject) {
    var certain = document.querySelector('.certain')
    components.initBackEvent()
    tools.get('/api/order/info', { subject }, (data) => {
        components.order.initTab(data.result)
    }, (err) => {
        console.log(err)
    })
    certain.addEventListener('click', function () {
        var httpBody = tools.order.getOrderSelected(subject)
        tools.post('/api/order', httpBody, function (data) {
            alert('预约成功！')
        }, function (err) {
            console.log(err)
        })
    })
}

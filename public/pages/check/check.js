window.onload = function () {
    components.initBackEvent()
    components.initList('checks-list', [
        {
            text: '血常规',
            href: './blood/blood.html'
        },
        {
            text: '血糖',
            href: './sugar/sugar.html'
        },
        {
            text: '乙肝',
            href: './liver/liver.html'
        }
    ])
}
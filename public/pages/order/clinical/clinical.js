window.addEventListener('load', function () {
    var data = [
        {
            doctor: '陈医生',
            am: '8:00 - 11:00',
            pm: '14:00 - 17:00',
            ticket: [20, 40]
        },
        {
            doctor: '陈医生',
            am: '8:00 - 11:00',
            pm: '14:00 - 17:00',
            ticket: [30, 50]
        },
        {
            doctor: '陈医生',
            am: '8:00 - 11:00',
            pm: '14:00 - 17:00',
            ticket: [25, 50]
        },
        {
            doctor: '陈医生',
            am: '8:00 - 11:00',
            pm: '14:00 - 17:00',
            ticket: [40, 45]
        },
        {
            doctor: '陈医生',
            am: '8:00 - 11:00',
            pm: '14:00 - 17:00',
            ticket: [45, 50]
        }
    ]
    components.initBackEvent()
    components.order.initTab(data)
})
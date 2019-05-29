window.onload = function () {
  components.initBackEvent()
  components.initList('costs-list', [
    {
      text: '医疗药品缴费',
      href: './drug/drug.html'
    },
    {
      text: '医疗检查缴费',
      href: './inspection/inspection.html'
    }
  ])
}

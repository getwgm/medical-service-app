window.addEventListener('load', function () {
  components.initBackEvent()
  components.initList('offices-list', [
    {
      text: '内科',
      href: 'internal/internal.html'
    },
    {
      text: '外科',
      href: 'surgery/surgery.html'
    },
    {
      text: '检验科',
      href: 'clinical/clinical.html'
    }
  ])
})

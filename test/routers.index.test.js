const routersAsync = require('../routers/index')

const routersPromise = routersAsync()

test('the length of routers array whether is true', () => {
  routersPromise.then(routers => {
    expect(routers.length).toBe(2)
  })
})

test('the type of the router must be a function', () => {
  routersPromise.then(routers => {
    routers.forEach(router => {
      expect(typeof router).toBe('function')
    })
  })
})

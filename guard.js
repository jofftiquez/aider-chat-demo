import { ref } from 'vue'

export const user = ref(null)

export function guard(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user.value) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
}

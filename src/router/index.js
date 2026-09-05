import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/karya/:slug',
      name: 'project-detail',
      component: ProjectDetailView,
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    // Anchor dalam halaman (mis. navbar/footer Karya/Tentang/Kontak).
    // Bisa berasal dari home ke section, maupun dari halaman detail
    // -> kembali ke home lalu scroll ke section yang diminta.
    // Tunggu sebentar sampai elemen target benar-benar ada di DOM.
    if (to.hash) {
      return new Promise((resolve) => {
        let tries = 0
        const wait = () => {
          const el = document.querySelector(to.hash)
          if (el || tries >= 25) {
            resolve(
              el
                ? { el: to.hash, top: 88, behavior: 'smooth' }
                : { top: 0, behavior: 'smooth' },
            )
          } else {
            tries += 1
            setTimeout(wait, 40)
          }
        }
        wait()
      })
    }

    // Navigasi antar-halaman tanpa hash: selalu kembali ke atas.
    if (to.path !== from.path) return { top: 0, behavior: 'smooth' }

    return null
  },
})

export default router

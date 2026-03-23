const menus = [
  { label: 'About', path: 'about' },
  { label: 'Artists', path: 'artists' },
  { label: 'Events', path: 'events', new: false },
  { label: 'Media', path: 'media', new: 'true' },

  // { label: 'OpenPM - Blog', path: 'blog' },
  { label: 'Contact', path: 'contact' },
]
const routes = [
  {
    path: '/',
    component: () => import('layouts/WebsiteLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'artists', component: () => import('pages/ArtistsPage.vue') },
      { path: 'artists/:artistHandle', component: () => import('pages/ArtistPage.vue') },
      { path: 'media', component: () => import('pages/MediaPage.vue') },
      { path: 'blog', component: () => import('pages/BlogPage.vue') },
      { path: 'events', component: () => import('pages/EventsPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'qiao', component: () => import('pages/QiaoPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes

export { menus }

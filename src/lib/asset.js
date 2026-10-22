// Resolve a file in /public against Vite's base URL so it works on GitHub Pages.
// asset('img/logo-176.webp') -> './img/logo-176.webp'
export const asset = (p) => {
  if (!p || /^(https?:)?\/\//.test(p) || p.startsWith('data:')) return p
  return import.meta.env.BASE_URL + p.replace(/^\/+/, '')
}

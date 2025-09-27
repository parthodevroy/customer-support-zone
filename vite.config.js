import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
//  https://vite.dev/config/
// export default defineConfig({
//    base: '/customer-support-zone/',
//   plugins: [react(),tailwindcss()],
// })

export default defineConfig({
  base: '/customer-support-zone/',
  plugins: [react(), tailwindcss()],
});

// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // export default defineConfig({
// //   base: '/customer-support-zone/', // GitHub Pages repo name
// //   plugins: [react()],
// // })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/customer-support-zone/', // repo-name
//   plugins: [react()],
// })

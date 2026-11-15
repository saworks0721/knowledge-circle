import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// ローカル開発用：Azure Static Web Apps のログイン機能（/.auth/*）のまねをする。
// 本番（Azure）ではこのコードは使われず、Azure 自身が /.auth/* を処理する。
function devAuth() {
  const COOKIE = 'dev_auth_provider'
  return {
    name: 'dev-auth',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, 'http://localhost')
        const redirect = (cookie) => {
          res.statusCode = 302
          res.setHeader('Set-Cookie', cookie)
          res.setHeader('Location', '/')
          res.end()
        }
        const login = url.pathname.match(/^\/\.auth\/login\/(aad|github)$/)
        if (login) return redirect(`${COOKIE}=${login[1]}; Path=/`)
        if (url.pathname === '/.auth/logout') return redirect(`${COOKIE}=; Path=/; Max-Age=0`)
        if (url.pathname === '/.auth/me') {
          const provider = (req.headers.cookie || '').match(new RegExp(`${COOKIE}=(\\w+)`))?.[1]
          const clientPrincipal = provider
            ? {
                identityProvider: provider,
                userId: 'dev-user-0001',
                userDetails: provider === 'github' ? 'dev-user' : 'dev-user@example.com',
                userRoles: ['anonymous', 'authenticated'],
              }
            : null
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify({ clientPrincipal }))
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devAuth()],
})

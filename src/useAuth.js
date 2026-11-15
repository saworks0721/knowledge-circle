import { useEffect, useState } from 'react'

// Azure Static Web Apps の組み込みログインから、サインイン中の利用者を取得する。
// 戻り値: { loading: true/false, user: null または { provider, userId, name } }
export function useAuth() {
  const [state, setState] = useState({ loading: true, user: null })

  useEffect(() => {
    let cancelled = false
    fetch('/.auth/me')
      .then((res) => res.json())
      .then((data) => {
        const p = data?.clientPrincipal
        const user = p
          ? { provider: p.identityProvider, userId: p.userId, name: p.userDetails }
          : null
        if (!cancelled) setState({ loading: false, user })
      })
      .catch(() => {
        if (!cancelled) setState({ loading: false, user: null })
      })
    return () => {
      cancelled = true
    }
  }, [])

  return state
}

import './App.css'
import HomePage from './HomePage.jsx'
import LoginPage from './LoginPage.jsx'
import { useAuth } from './useAuth.js'

function App() {
  const { loading, user } = useAuth()

  if (loading) return <p className="loading">読み込み中…</p>
  if (!user) return <LoginPage />
  return <HomePage user={user} />
}

export default App

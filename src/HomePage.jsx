function HomePage({ user }) {
  return (
    <>
      <header className="topbar">
        <span className="brand">Knowledge Circle</span>
        <span className="account">
          <span className="user-name">{user.name}</span>
          <a href="/.auth/logout?post_logout_redirect_uri=/">サインアウト</a>
        </span>
      </header>
      <main className="page">
        <h1>ようこそ</h1>
        <p className="lead">
          サインインできました。グループと投稿の機能は準備中です。
        </p>
      </main>
    </>
  )
}

export default HomePage

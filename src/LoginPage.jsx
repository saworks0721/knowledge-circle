function LoginPage() {
  return (
    <main className="page login">
      <h1>Knowledge Circle</h1>
      <p className="lead">
        組織の外のつながりで、経験と知恵を共有する招待制の場所。
      </p>
      <p className="lead-en" lang="en">
        An invite-only space for sharing experience and wisdom with the people
        you know beyond your organization.
      </p>

      <div className="login-buttons">
        <a className="button" href="/.auth/login/aad?post_login_redirect_uri=/">
          Microsoft アカウントでサインイン
        </a>
        <a className="button" href="/.auth/login/github?post_login_redirect_uri=/">
          GitHub アカウントでサインイン
        </a>
      </div>

      <p className="notice">
        個人のアカウントでサインインしてください。会社のアカウントは使わないでください。
      </p>
      <p className="hint">
        Gmail をお使いの方は、Gmail アドレスで Microsoft
        アカウントを無料で作成できます。
      </p>
      <p className="footnote">招待された方だけが利用できます。</p>
    </main>
  )
}

export default LoginPage

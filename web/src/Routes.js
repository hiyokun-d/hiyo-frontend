import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/card" page={CardPage} name="card" />
      <Route path="/loading-style" page={LoadingPage} name="loading" />
      <Route path="/login-style" page={LoginPage} name="login" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

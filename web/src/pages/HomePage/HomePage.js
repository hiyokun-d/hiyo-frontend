import { Link, routes } from "@redwoodjs/router"

const HomePage = () => {
  return (
    <>
      <h1>Welcome!</h1>

      <p>
        this page is under construction so type on the url like
        &quot;/test&quot;
      </p>

      <Link to={routes.card()}>card</Link>
      <br/>
      <Link to={routes.loading()}>loading</Link>
      <br/>
      <Link to={routes.login()}>login</Link>
    </>
  )
}

export default HomePage

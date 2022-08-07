import { Facebook, GitHub, Google, Login, Person } from '@mui/icons-material'
import { Button } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'
import '../../styles/LoginStyle.css'
const LoginPage = () => {
  return (
    <>
      <MetaTags title="LOGIN" description="by hiyo" />

      <div className="main">
        <div className="card">
          <div className="header">
            <Login className="Login-icon" />
            <h1 className="Login-title">Login</h1>
          </div>

          <div className="Login-button">
            <h4 className="Login-title">Login With: </h4>
            <Button
              startIcon={<Google />}
              variant={'contained'}
              className={'Login-eb'}
            >
              Login with Google
            </Button>
            <br />
            <Button
              startIcon={<GitHub />}
              variant={'contained'}
              className={'Login-eb'}
            >
              Login with GitHub
            </Button>
            <br />
            <Button
              startIcon={<Facebook />}
              variant={'contained'}
              className={'Login-eb'}
            >
              Login with Facebook
            </Button>
            <br />
            <Button
              startIcon={<Person />}
              variant={'contained'}
              className={'Login-eb'}
            >
              Guess
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage

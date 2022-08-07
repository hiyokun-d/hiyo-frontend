import { Avatar, Stack, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import { Box, Container } from '@mui/system'
import { MetaTags } from '@redwoodjs/web'

import "../../styles/CardStyle.css"
const CardPage = () => {
  const [open, setOpen] = React.useState(false);
  const [answer, setAnswer] = React.useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const yes = () => {
    setOpen(true);
    setAnswer("Yes i did");
  }

  const no = () => {
    setOpen(true);
    setAnswer("No you are freak, that's my face if you say no => :(");
  }

  return (
    <>
      <MetaTags title="Card" description="Card page" />

      <Container sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: "url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maxWidth: '100%',
        minWidth: '100%',
        overflow: 'hidden',
      }} fixed>

          <Stack direction="row">
            <Box className="box">
      <Typography variant="h4">
              be my girlfriend/boyfriend
            </Typography>

            <Avatar src='https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000'
              sx={{
                width: '100px',
                height: '100px',
                margin: '0 auto',
                marginTop: '10px',
              }}
            />
            <Typography variant="caption"
              sx={{
                margin: '0 auto',
                marginTop: '10px',
              }}

            >
              we just have so much time to hang out and talk with you,
              and i kinda have so much feelings to you.
              i don't know if what i feel is scare or i will died so before some terrible happens,
              do you want to be my girlfriend/boyfriend? or maybe do you wanna marry me? (just kidding okay that's to fast before marry)
              <br/>
              <br/>
              <br />
              <Typography variant='h5'>
                you just have 2 options
                <br />
                <Stack direction={"row"} spacing={3}>

                <Button variant="contained" onClick={yes}>YES</Button>
                <Button variant="contained" onClick={no}>NO</Button>
                  <Button variant="contained" onClick={no}>BIG NO</Button>

                      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"THE ANSWER IS:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                        {answer},
                        pls take a screenshot to this answer
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
              done
          </Button>
        </DialogActions>
      </Dialog>
                </Stack>
              </Typography>
            </Typography>
        </Box>

          </Stack>
      </Container>
    </>
  )
}

export default CardPage

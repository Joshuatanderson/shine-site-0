import type { NextPage } from 'next'
import Head from 'next/head'
import classNames from 'classnames'

import { Box, Card, CardContent, Container, CssBaseline, Grid, ScopedCssBaseline, ThemeProvider, Typography } from '@mui/material'
import {darkTheme, yellowTheme } from '../styles/theme'

const Home: NextPage = () => {

  return (
   
    <>
      <Head>
        <title>ShineMine</title>
        <meta name="description" content="A new way to mine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline>
          <Container>
            <Grid container >
              <Grid item xs={12}>
              <Typography variant="h1" align="center">
                A NEW WAY TO MINE
                </Typography>
                </Grid>
                <Card>
                  <CardContent/>
                </Card>
              </Grid>
          </Container>
        </ScopedCssBaseline>
      </ThemeProvider>
      <ThemeProvider theme={yellowTheme}>
        <ScopedCssBaseline>
          <Container>
            <Grid container >
              <Grid item xs={12}>
              <Typography variant="h1" align="center">
                A NEW WAY TO MINE
                </Typography>
                </Grid>
                <Card>
                  <CardContent/>
                </Card>
              </Grid>
          </Container>
        </ScopedCssBaseline>
      </ThemeProvider>
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'

import styles from '../styles/Home.module.scss'
import { Card, CardContent, Container, Grid, ThemeProvider, Typography } from '@mui/material'
import {darkTheme, yellowTheme } from '../styles/theme'

const Home: NextPage = () => {

  return (
   
    <div className={classNames(styles.container)}>
      <Head>
        <title>ShineMine</title>
        <meta name="description" content="A new way to mine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Grid container >
            <Grid item xs={12}>
            <Typography variant="h1">
              A NEW WAY TO MINE
              </Typography>
              </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Home

import React from 'react'
import {Grid, Col} from 'react-bootstrap'

export default class StartView extends React.Component {
  render() {
    return (
        <Grid>
          <Col lg={6} lgPush={3} xs={12} sm={12} md={6} mdPush={3} style={{textAlign: "center"}}>
            <h1>Witaj w naszej aplikacji!</h1>
            <h3>By przejść do wyszukiwarki życzeń, wybierz <b>Życzenia</b> z menu nawigacji</h3>
          </Col>
        </Grid>
    )
  }
}
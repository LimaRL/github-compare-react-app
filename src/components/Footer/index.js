import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import { Container } from './styles'

const FooterComponent = ({ count }) => (
  <Container>
    <p>Você possui {count} favoritos</p>
  </Container>
)

FooterComponent.propTypes = {
  count: propTypes.number.isRequired
}

const mapStateToProps = state => ({
  count: state.favorites.data.length
})

export default connect(mapStateToProps)(FooterComponent)

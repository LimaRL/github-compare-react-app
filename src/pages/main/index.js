import React, { Component } from 'react'
import { Container, Row, Col } from '../../styles/grid'
import { Alert } from '../../styles/alert'
import { Form } from './style'

import propTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FavoritesActions } from '../../store/ducks/favorites'

/**
 * components
 */
import FavoritesList from '../../components/FavoritesList'

class MainComponent extends Component {
  static propTypes = {
    addFavoriteRequest: propTypes.func.isRequired,
    favorites: propTypes.shape({
      loading: propTypes.bool,
      error: propTypes.oneOfType([null, propTypes.string]),
      data: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.number,
          name: propTypes.string,
          description: propTypes.string,
          url: propTypes.string
        })
      )
    }).isRequired
  }

  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: ''
  }

  handleChangeInput = e => {
    this.setState({ repositoryInput: e.target.value })
  }

  handleAddRepository = e => {
    e.preventDefault()
    const { addFavoriteRequest } = this.props
    const { repositoryInput } = this.state
    addFavoriteRequest(repositoryInput)
    this.setState({
      repositoryInput: ''
    })
  }

  render () {
    const { repositoryInput } = this.state
    const {
      favorites: { data, loading, error }
    } = this.props

    return (
      <Container>
        <Row>
          <Col span={12}>
            <Form
              onSubmit={this.handleAddRepository}
              withError={!!error && error}
            >
              <input
                type="text"
                placeholder="usuário/repositório"
                value={repositoryInput}
                onChange={this.handleChangeInput}
              />
              <button type="submit">
                {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}
              </button>
            </Form>
          </Col>
          <Col span={12}>{!!error && <Alert type="error">{error}</Alert>}</Col>
          <Col>
            <FavoritesList favorites={data} />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)

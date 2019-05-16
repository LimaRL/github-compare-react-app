import React from 'react'
import propTypes from 'prop-types'

import { List } from './styles'

const FavoritesList = ({ favorites }) => (
  <List>
    {favorites.map(favorite => (
      <li key={favorite.id}>
        <div>
          <div>
            <img src={favorite.avatar} alt="" srcset="" />
            <strong>{favorite.name}</strong>
          </div>
          <p>{favorite.description}</p>
        </div>
        <a href={favorite.url}>Acessar</a>
      </li>
    ))}
  </List>
)

FavoritesList.propTypes = {
  favorites: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      description: propTypes.string,
      url: propTypes.string,
      avatar: propTypes.string
    })
  ).isRequired
}

export default FavoritesList

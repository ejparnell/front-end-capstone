import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class Hero extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: [],
      deleted: false
    }
  }
  async componentDidMount () {
    const response = await axios(`${apiUrl}/heros/${this.props.match.params.id}`)
    this.setState({ hero: response.data.hero })
  }
  deleteHero = async () => {
    await axios.delete(`${apiUrl}/heros/${this.props.match.params.id}`)
    this.setState({ deleted: true })
  }
  render () {
    const { hero, deleted } = this.state
    if (!hero) {
      return (
        <p>Loading....</p>
      )
    }
    if (deleted) {
      return <Redirect to={'/heros'} />
    }
    return (
      <div>
        <h3>{hero.name}</h3>
        <p>{hero.alignment}</p>
        <p>{hero.age}</p>
      </div>
    )
  }
}

export default Hero

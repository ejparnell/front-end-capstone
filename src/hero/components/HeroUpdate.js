import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'
import HeroForm from './HeroForm'

class HeroUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: null
    }
  }
  reloadState = async () => {
    const { user } = this.props
    const response = await axios({
      url: apiUrl + '/heros',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
    const hero = response.data.heros.find(hero => user._id === hero.owner && hero._id === this.props.match.params.id)
    this.setState({ hero: hero })
  }
  componentDidMount () {
    this.reloadState()
  }
  handleSubmit = async (event) => {
    const { user } = this.props
    event.preventDefault()
    await axios({
      url: apiUrl + `/heros/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: {
        hero: this.state.hero
      }
    })
    this.props.history.push('/')
  }
  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const editedHero = Object.assign(this.state.hero, updatedField)
    this.setState({ hero: editedHero })
  }
  render () {
    const { hero } = this.state
    return hero ? (
      <HeroForm
        hero={hero}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    ) : <h1>Loading...⏳</h1>
  }
}

export default withRouter(HeroUpdate)

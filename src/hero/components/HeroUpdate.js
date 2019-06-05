import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import HeroForm from './HeroForm'

class HeroUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: {
        name: '',
        kin: '',
        alignment: '',
        specialty: '',
        age: '',
        owner: ''
      },
      updatedHeroId: null
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    await axios({
      url: apiUrl + `/heros/${this.props.match.params.id}`,
      method: 'PATCH',
      data: {
        hero: this.state.hero
      }
    })
    this.setState({ updatedHeroId: true })
  }
  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const editedHero = Object.assign(this.state.hero, updatedField)
    this.setState({ hero: editedHero })
  }
  render () {
    const { updatedHeroId, hero } = this.state
    if (updatedHeroId) {
      return <Redirect to={'/heros'} />
    }
    return (
      <HeroForm
        hero={hero}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default HeroUpdate

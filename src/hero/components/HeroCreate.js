import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'
import HeroForm from './HeroForm'

class HeroCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: {
        name: '',
        kin: '',
        alignment: '',
        specialty: '',
        age: '',
        owner: this.props.user
      }
    }
  }
  handleSubmit = async event => {
    event.preventDefault()
    const { user } = this.props
    await axios({
      url: apiUrl + '/heros',
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: {
        hero: this.state.hero
      }
    })
    this.props.history.push('/heros')
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
    return (
      <HeroForm
        hero={hero}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(HeroCreate)

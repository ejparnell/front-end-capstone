import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
// import HeroForm from './HeroUpdate'

class HeroUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: {
        name: '',
        bag: '',
        alignment: '',
        specialty: '',
        owner: ''
      },
      updatedHeroId: null
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    console.log('==============')
    console.log(event.target.form.name)
    console.log('==============')
    const response = await axios({
      url: apiUrl + `/heros/${this.props.match.params.id}`,
      method: 'POST',
      data: {
        hero: this.state.hero
      }
    })
    this.setState({ createdHeroId: response.data.hero.id })
  }
  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const editedHero = Object.assign(this.state.hero, updatedField)
    this.setState({ hero: editedHero })
  }
  render () {
    const { createdHeroId, hero } = this.state
    if (createdHeroId) {
      return <Redirect to={'/heros'} />
    }
    return (
      <form onSubmit={this.handleSubmit} name={hero._id}>
        <lable>Hero Name</lable>
        <input
          name="name"
          placeholder="Hero Name"
          value={hero.name}
          onChange={this.handleChange}
        />
        <lable>Potion of Healing
          <input
            type="radio"
            name="bag"
            checked={hero.bag === '5cf520e3915098b0f339e365'}
            value="5cf520e3915098b0f339e365"
            onChange={this.handleChange}
          />
        </lable>
        <lable>Fighter
          <input
            type="radio"
            name="specialty"
            checked={hero.specialty === '5cf3e94d38aed4ae3c413fe5'}
            value="5cf3e94d38aed4ae3c413fe5"
            onChange={this.handleChange}
          />
        </lable>
        <lable>Chaotic Good
          <input
            type="radio"
            name="alignment"
            checked={hero.alignment === 'Chaotic Good'}
            value="Chaotic Good"
            onChange={this.handleChange}
          />
        </lable>
        <button name={hero._id} type='submit'>Submit</button>
      </form>
    )
  }
}

export default HeroUpdate

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
    const response = await axios(`${apiUrl}/heros/${this.props.match.params._id}`)
    console.log(this)
    this.setState({ hero: response.data.hero })
  }
  deleteHero = async () => {
    await axios.delete(`${apiUrl}/heros/${this.props.match.params.id}`)
    this.setState({ deleted: true })
  }
  render () {
    const { hero, deleted } = this.state
    console.log(hero)
    if (deleted) {
      return <Redirect to={'/heros'} />
    }
    console.log(this.state.hero.specialty)
    return (
      <div>
      </div>
    )
  }
}

export default Hero

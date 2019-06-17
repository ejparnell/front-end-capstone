import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

class Hero extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hero: [],
      deleted: false,
      kin: [],
      specialty: []
    }
  }
  async componentDidMount () {
    const response = await axios(`${apiUrl}/heros/${this.props.match.params.id}`)
    this.setState({ hero: response.data.hero, kin: response.data.hero.kin, specialty: response.data.hero.specialty })
  }
  deleteHero = async (event) => {
    const { user } = this.props
    await axios({
      url: apiUrl + `/heros/${event.target.name}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
    this.setState({ deleted: true })
  }
  render () {
    const { hero, deleted, kin, specialty } = this.state
    if (!hero && !kin && !specialty) {
      return (
        <p>Loading....</p>
      )
    }
    if (deleted) {
      return <Redirect to={'/'} />
    }
    return (
      <div>
        <h3>{hero.name}</h3>
        <p>{hero.alignment}</p>
        <p>{hero.age}</p>
        <h5>{specialty.name}</h5>
        <ul>
          <li>Health: {specialty.health}</li>
          <li>Damage: {specialty.hitDice}</li>
          <li>Weapon: {specialty.weapon}</li>
          <li>Armor: {specialty.armor}</li>
        </ul>
        <h5>{kin.name}</h5>
        <ul>
          <li>Size: {kin.size}</li>
          <li>Ability: {kin.ability}</li>
          <li>Walking Speed: {kin.speed}</li>
        </ul>
        <Button variant="danger" name={hero._id} onClick={this.deleteHero}>Remove Hero</Button>
        <Link to={`/heros/${hero._id}/update`}><Button variant="warning">Update Hero</Button></Link>
      </div>
    )
  }
}

export default Hero

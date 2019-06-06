import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Heros extends Component {
  constructor (props) {
    super(props)
    this.state = {
      heros: [],
      deleted: false
    }
  }
  async componentDidMount () {
    const { user } = this.props
    const response = await axios({
      url: apiUrl + '/heros',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
    const heroArr = []
    response.data.heros.filter(hero => {
      if (user._id === hero.owner) {
        heroArr.push(hero)
      }
    })
    this.setState({ heros: heroArr })
  }
  deleteHero = async (event) => {
    await axios.delete(`${apiUrl}/heros/${event.target.name}`)
    this.setState({ deleted: true })
  }
  render () {
    const { deleted } = this.state
    if (deleted) {
      return <Redirect to={'/'} />
    }
    let { heros } = this.state
    heros = this.state.heros.map(hero => (
      <div className='hero-cards' key={hero._id}>
        <h3>{hero.name}</h3>
        <p>Alignment: {hero.alignment}</p>
        <p>Age: {hero.age}</p>
        <h5>{hero.specialty.name}</h5>
        <ul>
          <li>Health: {hero.specialty.health}</li>
          <li>Damage: {hero.specialty.hitDice}</li>
          <li>Weapon: {hero.specialty.weapon}</li>
          <li>Armor: {hero.specialty.armor}</li>
        </ul>
        <h5>{hero.kin.name}</h5>
        <ul>
          <li>Size: {hero.kin.size}</li>
          <li>Ability: {hero.kin.ability}</li>
          <li>Walking Speed: {hero.kin.speed}</li>
        </ul>
        <Button variant="danger" name={hero._id} onClick={this.deleteHero}>Remove Hero</Button>
        <Link to={`/heros/${hero._id}/update`}><Button variant="warning">Update Hero</Button></Link>
      </div>
    ))
    return (
      <div>
        <div className='hero-container'>
          {heros}
        </div>
        <div className='create-hero-button'>
          <Link to='./heros/create'><Button variant="primary">Create New Player</Button></Link>
        </div>
      </div>
    )
  }
}

export default Heros

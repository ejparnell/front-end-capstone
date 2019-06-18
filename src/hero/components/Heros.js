import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Heros extends Component {
  constructor (props) {
    super(props)
    this.state = {
      heros: [],
      deleted: false
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
    const heroArr = []
    response.data.heros.filter(hero => {
      if (user._id === hero.owner) {
        heroArr.push(hero)
      }
    })
    this.setState({ heros: heroArr })
  }
  componentDidMount () {
    return this.reloadState()
  }
  render () {
    let { heros } = this.state
    heros = this.state.heros.map(hero => {
      hero.specialty = hero.specialty || {}
      hero.kin = hero.kin || {}
      return (<div className='hero-cards' key={hero._id}>
        <h3>{hero.name}</h3>
        <p><strong>Alignment:</strong> {hero.alignment}</p>
        <p><strong>Age:</strong> {hero.age}</p>
        <p><strong>Class:</strong> {hero.specialty.name}</p>
        <p><strong>Race:</strong> {hero.kin.name}</p>
        <Link to={`/heros/${hero._id}/detail`}><Button className="hero-button" variant="primary">Visit Hero</Button></Link>
      </div>)
    })
    return (
      <div>
        <div className='hero-container'>
          {heros}
        </div>
        <div className='create-hero-button'>
          <Link to='/heros/create'><Button variant="primary">Create New Player</Button></Link>
        </div>
      </div>
    )
  }
}

export default Heros

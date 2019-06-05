import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

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
    let { heros } = this.state
    heros = this.state.heros.map(hero => (
      <div key={hero._id}>
        <h3>{hero.name}</h3>
        <p>{hero.alignment}</p>
        <p>{hero.specialty.name}</p>
        <button name={hero._id} onClick={this.deleteHero}>Remove Hero</button>
        <Link to={`/heros/${hero._id}/update`}><button name={hero._id}>Update Hero</button></Link>
      </div>
    ))
    return (
      <div>
        {heros}
        <Link to='./heros/create'><button>Create New Player</button></Link>
      </div>
    )
  }
}

export default Heros

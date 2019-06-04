import React from 'react'

const HeroForm = ({ handleSubmit, handleChange, hero }) => (
  <form onSubmit={handleSubmit}>
    <lable>Hero Name</lable>
    <input
      name="name"
      placeholder="Hero Name"
      value={hero.name}
      onChange={handleChange}
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
        onChange={handleChange}
      />
    </lable>
    <lable>Chaotic Good
      <input
        type="radio"
        name="alignment"
        checked={hero.alignment === 'Chaotic Good'}
        value="Chaotic Good"
        onChange={handleChange}
      />
    </lable>
    <button name={hero._id} type='submit'>Submit</button>
  </form>
)

export default HeroForm

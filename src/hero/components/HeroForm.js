import React from 'react'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const HeroForm = ({ handleSubmit, handleChange, hero }) => (
  <form onSubmit={handleSubmit}>
    <h4>Create Your Hero</h4>
    <div className='hero-trait-options'>
      <label>Hero Name
        <input
          required
          name="name"
          placeholder="Hero Name"
          value={hero.name}
          onChange={handleChange}
        />
      </label><br />
      <label>Hero Age
        <input
          required
          name="age"
          placeholder="Hero Age"
          value={hero.age}
          onChange={handleChange}
        />
      </label><br />
      <div className='hero-alignment container'>
        <h3>Select Alignment</h3>
        <div className="row">
          <label className="col-4">Lawful Good
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'Lawful Good'}
              value="Lawful Good"
              onChange={handleChange}
            />
          </label>
          <label className="col-4">Neutral Good
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'Neutral Good'}
              value="Neutral Good"
              onChange={handleChange}
            />
          </label>
          <label className="col-4">Chaotic Good
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'Chaotic Good'}
              value="Chaotic Good"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="row">
          <label className="col-4">Lawful Neutral
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'Lawful Neutral'}
              value="Lawful Neutral"
              onChange={handleChange}
            />
          </label>
          <label className="col-4">True Neutral
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'True Neutral'}
              value="True Neutral"
              onChange={handleChange}
            />
          </label>
          <label className="col-4">Chaotic Neutral
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'Chaotic Neutral'}
              value="Chaotic Neutral"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="row">
          <label className="col-4">Lawful Evil
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'Lawful Evil'}
              value="Lawful Evil"
              onChange={handleChange}
            />
          </label>
          <label className="col-4">Neutral Evil
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'Neutral Evil'}
              value="Neutral Evil"
              onChange={handleChange}
            />
          </label>
          <label className="col-4">Chaotic Evil
            <input
              type="radio"
              required
              name="alignment"
              checked={hero.alignment === 'Chaotic Evil'}
              value="Chaotic Evil"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </div>
    <div className='hero-kin-options container'>
      <h3>Select Race</h3>
      <div className="row">
        <label className="col-4">Drawf
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7c44c8945940017d42d1d'}
            value="5cf7c44c8945940017d42d1d"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Elf
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7ca698945940017d42d1e'}
            value="5cf7ca698945940017d42d1e"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Halfling
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7cab58945940017d42d1f'}
            value="5cf7cab58945940017d42d1f"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="row">
        <label className="col-4">Human
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7cb258945940017d42d20'}
            value="5cf7cb258945940017d42d20"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Dragonborn
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7cb938945940017d42d21'}
            value="5cf7cb938945940017d42d21"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Gnome
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7cc068945940017d42d22'}
            value="5cf7cc068945940017d42d22"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="row">
        <label className="col-4">Half-Elf
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7d17a8945940017d42d23'}
            value="5cf7d17a8945940017d42d23"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Half-Orc
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7d1e78945940017d42d24'}
            value="5cf7d1e78945940017d42d24"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Tiefling
          <input
            type="radio"
            required
            name="kin"
            checked={hero.kin === '5cf7d3288945940017d42d25'}
            value="5cf7d3288945940017d42d25"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
    <div className='hero-specialty-options container'>
      <h3>Select Class</h3>
      <div className="row">
        <label className="col-4">Barbarian
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d5700bf04900171368e3'}
            value="5cf7d5700bf04900171368e3"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Bard
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d5f80bf04900171368e4'}
            value="5cf7d5f80bf04900171368e4"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Cleric
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d6820bf04900171368e5'}
            value="5cf7d6820bf04900171368e5"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="row">
        <label className="col-4">Druid
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d7480bf04900171368e6'}
            value="5cf7d7480bf04900171368e6"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Fighter
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d7b10bf04900171368e7'}
            value="5cf7d7b10bf04900171368e7"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Monk
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d8160bf04900171368e8'}
            value="5cf7d8160bf04900171368e8"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="row">
        <label className="col-4">Paladin
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d8700bf04900171368e9'}
            value="5cf7d8700bf04900171368e9"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Ranger
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d8ce0bf04900171368ea'}
            value="5cf7d8ce0bf04900171368ea"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Rogue
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d9430bf04900171368eb'}
            value="5cf7d9430bf04900171368eb"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="row">
        <label className="col-4">Sorcerer
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7d9d00bf04900171368ec'}
            value="5cf7d9d00bf04900171368ec"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Warlock
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7da440bf04900171368ed'}
            value="5cf7da440bf04900171368ed"
            onChange={handleChange}
          />
        </label>
        <label className="col-4">Wizard
          <input
            type="radio"
            required
            name="specialty"
            checked={hero.specialty === '5cf7daa50bf04900171368ee'}
            value="5cf7daa50bf04900171368ee"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
    <Button variant="primary" type='submit'>Submit</Button>
  </form>
)

export default HeroForm

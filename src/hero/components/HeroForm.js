import React from 'react'

const HeroForm = ({ handleSubmit, handleChange, hero }) => (
  <form onSubmit={handleSubmit}>
    <div className='hero-trait-options'>
      <lable>Hero Name
        <input
          name="name"
          placeholder="Hero Name"
          value={hero.name}
          onChange={handleChange}
        />
      </lable>
      <lable>Hero Age
        <input
          name="age"
          placeholder="Hero Age"
          value={hero.age}
          onChange={handleChange}
        />
      </lable><br />
      <lable>Lawful Good
        <input
          type="radio"
          name="alignment"
          checked={hero.alignment === 'Lawful Good'}
          value="Lawful Good"
          onChange={handleChange}
        />
      </lable>
      <lable>Neutral Good
        <input
          type="radio"
          name="alignment"
          checked={hero.alignment === 'Neutral Good'}
          value="Neutral Good"
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
      </lable><br />
      <lable>Lawful Neutral
        <input
          type="radio"
          name="alignment"
          checked={hero.alignment === 'Lawful Neutral'}
          value="Lawful Neutral"
          onChange={handleChange}
        />
      </lable>
      <lable>True Neutral
        <input
          type="radio"
          name="alignment"
          checked={hero.alignment === 'True Neutral'}
          value="True Neutral"
          onChange={handleChange}
        />
      </lable>
      <lable>Chaotic Neutral
        <input
          type="radio"
          name="alignment"
          checked={hero.alignment === 'Chaotic Neutral'}
          value="Chaotic Neutral"
          onChange={handleChange}
        />
      </lable><br />
      <lable>Lawful Evil
        <input
          type="radio"
          name="alignment"
          checked={hero.alignment === 'Lawful Evil'}
          value="Lawful Evil"
          onChange={handleChange}
        />
      </lable>
      <lable>Neutral Evil
        <input
          type="radio"
          name="alignment"
          checked={hero.alignment === 'Neutral Evil'}
          value="Neutral Evil"
          onChange={handleChange}
        />
      </lable>
      <lable>Chaotic Evil
        <input
          type="radio"
          name="alignment"
          checked={hero.alignment === 'Chaotic Evil'}
          value="Chaotic Evil"
          onChange={handleChange}
        />
      </lable>
    </div>
    <div className='hero-kin-options'>
      <lable>Drawf
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7c44c8945940017d42d1d'}
          value="5cf7c44c8945940017d42d1d"
          onChange={handleChange}
        />
      </lable>
      <lable>Elf
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7ca698945940017d42d1e'}
          value="5cf7ca698945940017d42d1e"
          onChange={handleChange}
        />
      </lable>
      <lable>Halfling
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7cab58945940017d42d1f'}
          value="5cf7cab58945940017d42d1f"
          onChange={handleChange}
        />
      </lable>
      <lable>Human
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7cb258945940017d42d20'}
          value="5cf7cb258945940017d42d20"
          onChange={handleChange}
        />
      </lable>
      <lable>Dragonborn
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7cb938945940017d42d21'}
          value="5cf7cb938945940017d42d21"
          onChange={handleChange}
        />
      </lable>
      <lable>Gnome
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7cc068945940017d42d22'}
          value="5cf7cc068945940017d42d22"
          onChange={handleChange}
        />
      </lable>
      <lable>Half-Elf
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7d17a8945940017d42d23'}
          value="5cf7d17a8945940017d42d23"
          onChange={handleChange}
        />
      </lable>
      <lable>Half-Orc
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7d1e78945940017d42d24'}
          value="5cf7d1e78945940017d42d24"
          onChange={handleChange}
        />
      </lable>
      <lable>Tiefling
        <input
          type="radio"
          name="kin"
          checked={hero.kin === '5cf7d3288945940017d42d25'}
          value="5cf7d3288945940017d42d25"
          onChange={handleChange}
        />
      </lable>
    </div>
    <div className='hero-specialty-options'>
      <lable>Barbarian
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d5700bf04900171368e3'}
          value="5cf7d5700bf04900171368e3"
          onChange={handleChange}
        />
      </lable>
      <lable>Bard
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d5f80bf04900171368e4'}
          value="5cf7d5f80bf04900171368e4"
          onChange={handleChange}
        />
      </lable>
      <lable>Cleric
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d6820bf04900171368e5'}
          value="5cf7d6820bf04900171368e5"
          onChange={handleChange}
        />
      </lable>
      <lable>Druid
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d7480bf04900171368e6'}
          value="5cf7d7480bf04900171368e6"
          onChange={handleChange}
        />
      </lable>
      <lable>Fighter
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d7b10bf04900171368e7'}
          value="5cf7d7b10bf04900171368e7"
          onChange={handleChange}
        />
      </lable>
      <lable>Monk
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d8160bf04900171368e8'}
          value="5cf7d8160bf04900171368e8"
          onChange={handleChange}
        />
      </lable>
      <lable>Paladin
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d8700bf04900171368e9'}
          value="5cf7d8700bf04900171368e9"
          onChange={handleChange}
        />
      </lable>
      <lable>Ranger
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d8ce0bf04900171368ea'}
          value="5cf7d8ce0bf04900171368ea"
          onChange={handleChange}
        />
      </lable>
      <lable>Rogue
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d9430bf04900171368eb'}
          value="5cf7d9430bf04900171368eb"
          onChange={handleChange}
        />
      </lable>
      <lable>Sorcerer
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7d9d00bf04900171368ec'}
          value="5cf7d9d00bf04900171368ec"
          onChange={handleChange}
        />
      </lable>
      <lable>Warlock
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7da440bf04900171368ed'}
          value="5cf7da440bf04900171368ed"
          onChange={handleChange}
        />
      </lable>
      <lable>Wizard
        <input
          type="radio"
          name="specialty"
          checked={hero.specialty === '5cf7daa50bf04900171368ee'}
          value="5cf7daa50bf04900171368ee"
          onChange={handleChange}
        />
      </lable>
    </div>
    <button type='submit'>Submit</button>
  </form>
)

export default HeroForm

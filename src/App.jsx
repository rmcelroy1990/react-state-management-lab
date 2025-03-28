import { useState } from 'react';


const App = () => {
  const [isTeam, setTeam] = useState([]);
  const [isMoney, setMoney] = useState(100);
  const [isZombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]
  )

  const handleAddFighter = (fighter) => {
    const fighterToAdd = isZombieFighters.find(fighter => fighter.id === fighterId);
    setTeam([...isTeam, fighter]);
      if (money < fighter.price);
    console.log('Not enough money!')

    const updatedZombieFighters = isZombieFighters.filter((f) => f.id !== fighter.id);
    setZombieFighters(updatedZombieFighters);
  };

  const totalStrength = isTeam.reduce((total, fighter) => total + fighter.strength, 0);
  const totalAgility = isTeam.reduce((total, fighter) => total + fighter.agility, 0);

  const handleRemoveFighter = (fighter) => {
    const fighterToRemove = isTeam.filter((f) => f.id !== fighter.id);
    setTeam(updatedTeam);
    const updatedZombieFighters = [...isZombieFighters, fighter];
    setZombieFighters(updateZombieFighters);
    setMoney(money + fighter.price);
  }

    return (
    <div className="zombieFighters">
      <h1>Zombie Fighters</h1>
      <h2>Money: ${100}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {0}</h2>
      <ul>
        {isZombieFighters.map(fighter => (
          <li key={fighter.id} >
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <img src={fighter.img} alt={fighter.name} />
            <button onClick={() => handleAddFighter(fighter)}>
              ADD
            </button>
            <button onClick={() => handleRemoveFighter(fighter)}>
              Remove from Team
            </button>
          </li>
        ))}
      </ul>
      <h2>Team</h2>
      {isTeam.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {isTeam.map((fighter, index) => (
            <li key={index} className="team-item">
              <h3>Fighters</h3>
              <p>Price: ${fighter.price}</p>
             <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <img src={fighter.img} alt={fighter.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App
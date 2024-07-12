import React, {useState} from 'react';
import cl from './MySearch.module.css'
import {useNicks} from '../hooks/useNicks'

const MySearch = () => {
    let nickNames = [
        "Kracken234",
        "aRbuz",
        "ShadowMaster",
        "NightHawk",
        "FireStorm",
        "IceQueen",
        "Thunderbolt",
        "StarGazer",
        "PhoenixRising",
        "LunaWolf",
        "SilverArrow",
        "CrimsonFang",
        "DarkKnight",
        "EmeraldDragon",
        "MysticSphinx",
        "ScarletWitch",
        "SteelSamurai",
        "GoldenEagle",
        "NebulaWhisper",
        "OceanSoul"
    ];

    const [query, setQuery] = useState('')

    const searchedNicks = useNicks(nickNames, query)

    return (
        <div>
            <input
                className={cl.searchInput}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search"
            />
            {searchedNicks.length > 0 ? (
                searchedNicks.map((nick, index) => (
                    <p key={index}>{nick}</p>
                ))
            ) : (
                <p>No results found!</p>
            )}
        </div>
    );
};

export default MySearch;
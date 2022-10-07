import { Character } from "../pages"
import { CharacterItem } from "./character-item";
import styles from "../styles/character-list.module.css";

export interface CharacterListProps {
    characters: Character[]
}

export const CharacterList = ({ characters } : CharacterListProps) => {
    return (
        <ul className={styles.list_container}>
            {
                characters.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).map((character, index) => (
                    <CharacterItem key={index + character.name} character={character}/>
                ))
            }
        </ul>
    )
}
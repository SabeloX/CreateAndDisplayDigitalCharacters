import React from "react";
import { Character } from "../pages";
import styles from "../styles/character-item.module.css";

export interface QuoteTileProps {
    character: Character
}

export const CharacterItem = ({
    character,
}: QuoteTileProps) => {
    return (
        <li className={styles.item}>
            <p className={styles.discription}>{character.description}</p>
            <>
                <p className={styles.name}>{character.name}</p>
                <p className={styles.date}>{character.date.toDateString()}</p>
            </>
        </li>
    )
}
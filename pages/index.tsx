import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react'
import { CharacterList } from '../components/character-list'
import styles from '../styles/Home.module.css'

export type Character = {
  description: string;
  name: string;
  date: Date;
}

const characterList: Character[] = [
  {
    name: "Sky Fury",
    description: "I turn rain into wine. Stars into dust. Sun into lava.",
    date: new Date(2022, 9, 10)
  },
  {
    name: "Ankh Man",
    description: "I balance order and chaos in the realm.",
    date: new Date(2022, 9, 13)
  }
]

const Home: NextPage = () => {
  const [characterDescription, setCharacterDescription] = useState<string>("");
  const [characterName, setCharacterName] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setCharacters(characterList);
  }, []);

  const submitCharacter = (event: FormEvent) => {
    event.preventDefault()
    if (characterName === "" && characterDescription !== "") {
      setError("Please enter your character name.");
    }
    else if (characterDescription === "" && characterName !== "") {
      setError("Please enter a description of your character.");
    }
    else if (characterName === "" && characterDescription === "") {
      setError("Please enter your character details.");
    }
    else {
      setCharacters([{ name: characterName, description: characterDescription, date: new Date() }, ...characters]);
    }
    setCharacterDescription("");
    setCharacterName("");
    setError("");
  }

  return (
    <div>
      <Head>
        <title>Characters</title>
        <meta name="description" content="An application for adding Avatar ID." />
      </Head>
      <div className={styles.container}>
        <div className={styles.input}>
          <h2>Digital Characters</h2>
          <p>Add your character identity. Be creative.</p>
          <form className={styles.form} onSubmit={(event: FormEvent<HTMLFormElement>) =>submitCharacter(event)}>
            <input
              className={styles.name}
              placeholder='Your name goes here...'
              value={characterName}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setCharacterName(event.target.value)}
            />
            <textarea
              className={styles.description}
              placeholder='Description of your character (e.g., I turn rain into wine. Stars into dust. Sun into lava.)'
              value={characterDescription}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setCharacterDescription(event.target.value)}
            />
            <button
              type='submit'
              className={styles.submit}
            >
              Publish
            </button>
          </form>
        </div>
        <div className={styles.characters_container}>
          <h3>Characters that currently exist</h3>
          <CharacterList characters={characters}/>
        </div>
      </div>
    </div>
  )
}

export default Home

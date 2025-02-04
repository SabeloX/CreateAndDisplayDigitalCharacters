import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { CharacterList } from '../components/character-list'
import styles from '../styles/Home.module.css'
const domain = process.env.DOMAIN || "https://create-and-display-digital-characters.vercel.app/"


export type Character = {
  description: string;
  name: string;
  date: Date;
}

interface HomeProps {
  characters: Character[]
}

const Home: NextPage<HomeProps> = ({ characters }) => {
  const [characterDescription, setCharacterDescription] = useState<string>("");
  const [characterName, setCharacterName] = useState<string>("");
  // const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string>("");
  const [characterList, setCharacterList] = useState<Character[]>([]);

  useEffect(() => {
    setCharacterList(characters);
  }, []);

  const submitCharacter = async (event: FormEvent) => {
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
      try { 
        const response = await fetch(`/api/characters/new`,
          {
            method: "POST",
            body: JSON.stringify({ name: characterName, description: characterDescription }),
          }
        );
        const data = await response.json();
        setCharacterList([data.character as Character, ...characterList]);
        setCharacterDescription("");
        setCharacterName("");
        setError("");
      }
      catch (error) {
        setError("Error saving new character. Please try again.")
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Characters</title>
        <meta name="description" content="An application for adding Avatar ID." />
      </Head>
      <div className={styles.root}>
        <Image
          width={300}
          height={300}
          src="/images/—Pngtree—color highlights abstract light effects_5528945.png"
        />
        <h2 className={styles.title}>Digital Characters</h2>
        <div className={styles.container}>
          <div className={styles.input}>
            <h3 className={styles.heading}>Add your character identity. Be creative.</h3>
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
              {error !== "" && <p className={styles.error}>{error}</p> }
              <button
                type='submit'
                className={styles.submit}
              >
                Create
              </button>
            </form>
          </div>
          <div className={styles.characters_container}>
            <h3>Characters in realm</h3>
            <CharacterList characters={characterList}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${domain}/api/characters`);
  const data = await response.json();

  return {
    props: {
      characters: data ? data.characters as Character[] : []
    }
  }
}

export default Home

import React, { useState } from 'react'
import { PeopleType } from '../questions/People'

type Props = {
  people: PeopleType['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<Props> = ({ people, setPeople }: Props) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
  })

  const handleClick = (): void => {}

  return (
    <div>
      {people.map((person) => {
        return person.name
      })}
      <input type='text' placeholder='name' value={input.name} />
      <input type='text' placeholder='age' value={input.age} />
      <input type='button' value='submit' onClick={handleClick} />
    </div>
  )
}

export default AddToList

import React from 'react'

type Props = {
  person: {
    name: string
    age: number
  }
}

const List: React.FC<Props> = ({ person }) => {
  return (
    <li>
      {person.name} - {person.age}
    </li>
  )
}

export default List

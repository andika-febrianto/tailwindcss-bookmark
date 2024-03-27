import { useState } from 'react'
import List from '../components/List'
import AddToList from '../components/AddToList'

export type PeopleType = {
  people: {
    name: string
    age: number
  }[]
}

const People = () => {
  const [people, setPeople] = useState<PeopleType['people']>([
    {
      name: 'Andika Febrianto',
      age: 48,
    },
    {
      name: 'Junita Duwi Purwandari',
      age: 38,
    },
  ])

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return <List person={person} />
    })
  }

  return (
    <div>
      <ul>{renderList()}</ul>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default People

import React from 'react'
import Person from './Person'
function NameList() {

    const persons = [
        {
            id: 1,
            Name: 'Asif',
            Age: 27,
            Skill: 'C#'
        },
        {
            id: 2,
            Name: 'Rakib',
            Age: 23,
            Skill: 'bokbok#'
        },
        {
            id: 3,
            Name: 'Talat',
            Age: 17,
            Skill: 'Fazlami'
        }
    ]
    const personList = persons.map( person => <Person key={person.id} person={person}></Person>)
    return <div>{personList}</div>
}

export default NameList

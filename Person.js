import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
             I'm {person.Name}. I'm {person.Age} years old. My skill is {person.Skill}
            </h2>
        </div>
    )
}

export default Person

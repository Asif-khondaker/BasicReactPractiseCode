import React from 'react'

const UserContex = React.createContext('Codevolution')

const UserProvider = UserContex.Provider
const UserConsumer = UserContex.Consumer


export default UserContex

export { UserProvider, UserConsumer }
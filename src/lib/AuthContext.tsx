import React, { useState, useEffect, useContext, createContext } from 'react'

// import fetch from 'node-fetch'
// global.fetch = global.fetch || fetch

import Auth from '@aws-amplify/auth'
import Amplify from '@aws-amplify/core'
import aws from 'config/aws'

Amplify.configure(aws)

//

type AuthState = {
	user: Object,
	signIn: Function,
	signUp: Function,
	signOut: Function,
	verifyCode: Function,
	sendPasswordResetEmail: Function,
	confirmPasswordReset: Function,
}

// Create a context that will hold the values that we are going to expose to our components.
// Don't worry about the `null` value. It's gonna be *instantly* overriden by the component below 
export const AuthContext = createContext({})

// Expose the interface that we want to use in  our other components

export const AuthProvider = ({ children }) => {

	const auth = useAuth()

	return (
		<AuthContext.Provider value={auth}>
			{children}
		</AuthContext.Provider>
	)

}

// Create a "controller" component that will calculate all the data that we need to give to our
// components below via the `authContext.Provider` component. This is where the Amplify will be
// mapped to a different interface, the one that we are going to expose to the rest of the app.
export const useAuth = () => {

	const [user, setUser] = useState(null)

	React.useEffect(() => {
		
		// Configure the keys needed for the Auth module. Essentially this is 
		// like calling `Amplify.configure` but only for `Auth`.
		Auth.configure(aws)
		
		// attempt to fetch the info of the user that was already logged in
		Auth.currentAuthenticatedUser()
			.then( user => setUser( user ) )
			.catch( () => setUser( null ) )
	}, [])

	// We make sure to handle the user update here, but return the resolve value in order for our components to be
	// able to chain additional `.then()` logic. Additionally, we `.catch` the error and "enhance it" by providing
	// a message that our React components can use. 
	const signIn = ( username: string, password: string ) =>
		Auth.signIn( username, password )
		.then( cognitoUser => {
			setUser(cognitoUser)
			return cognitoUser
		})
		.catch( response => {
			if (response.code === 'UserNotFoundException') {
				response.message = 'Invalid username or password'
			}
			throw response
		})

	const signOut = () =>
		Auth.signOut()
		.then( () => setUser(null) )

	const signUp = ( username: string, password: string ) =>
		Auth.signUp({
			username: username,
			password: password
		})
		.then(() => {
			console.log(' ok ')
			return { response: { message: 'login successful.' } }
		})
		.catch( response  => {
			throw response
		})

	// const verifyCode = ( authCode: string, username: string, password: string ) =>
	// 	Auth.confirmSignUp( username, authCode )
	// 	.then(() => {
	// 		signIn( username, password )
	// 	})
	// 	.catch( response => {
	// 		throw response
	// 	})
	// }	

	const verifyCode = () => null
	
	const sendPasswordResetEmail = ( email: string ) =>
		Auth.forgotPassword( email )
		.then(() => {
			return { response: { message: 'message sent.' } }
		})
		.catch( response => {
			throw response
		})


	const confirmPasswordReset = () => null

	// Make sure to not force a re-render on the components that are reading these values,
	// unless the `user` value has changed. This is an optimisation that is mostly needed in cases
	// where the parent of the current component re-renders and thus the current component is forced
	// to re-render as well. If it does, we want to make sure to give the `AuthContext.Provider` the 
	// same value as long as the user data is the same. If you have multiple other "controller"
	// components or Providers above this component, then this will be a performance booster.
	const values = React.useMemo(() => ({
		user,
		signIn,
		signUp,
		signOut,
		verifyCode,
		sendPasswordResetEmail,
		confirmPasswordReset
	}), [user])
	
	// Finally, return the interface that we want to expose to our other components
	return values

}

// We also create a simple custom hook to read these values from. We want our React components
// to know as little as possible on how everything is handled, so we are not only abstracting them from
// the fact that we are using React's context, but we also skip some imports.
export const useAuthProvider = () => {
	
	const context = useContext( AuthContext )

	if(context === undefined) {
		throw new Error('`useAuthProvider` hook must be used within a `AuthenticationProvider` component')
	}
	return context

}

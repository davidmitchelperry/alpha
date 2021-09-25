import React from 'react'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Header from '../components/Header'
import DemoPageLinks from '../components/DemoPageLinks'

const styles = {
    content: {
        padding: 32,
    },
    infoTextContainer: {
        marginBottom: 32,
    },
}


const Demo = () => {
    const AuthUser = useAuthUser()

    const createTicketSale = async event => {
        event.preventDefault()
        //console.log(event.target.name.value)
    }

    return (
        <div>
            <Header email={AuthUser.email} signOut={AuthUser.signOut}/>
            <div style={styles.content}>
                <div style={styles.infoTextContainer}>
                    <h3>MyHome</h3>
                    <p>
                        This page does not require authentication, so it won't redirect to
                        the login page if you are not signed in.
                    </p>
                    <p>
                        If you remove `getServerSideProps` from this page, it will be static
                        and load the authed user only on the client side.
                    </p>
                    <form onSubmit={createTicketSale}>
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" autoComplete="name" required/>
                        <button type="submit">Register</button>
                    </form>
                </div>
                <DemoPageLinks/>
            </div>
        </div>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()(
    console.log('getServerSideProps')
)

export default withAuthUser()(Demo)

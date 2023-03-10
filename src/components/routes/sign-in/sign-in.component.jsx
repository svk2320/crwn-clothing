// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { signInWithGooglePopup, 
         createUserDocumentFromAuth,
        //  signInWithGoogleRedirect,
        //  auth
         } from '../../../services/firebase/firebase.services';

import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {
    // useEffect(() => {
    //     (async () => {
    //         const response = await getRedirectResult(auth);

    //         if (response) {
    //             const UserDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //         console.log(response);
    //     })();
    // }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // eslint-disable-next-line
        const userDocRef =  await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>
                Sign in with GooglePopup
            </button>
            {/* <button onClick={ signInWithGoogleRedirect }>
                Sign in with Google Redirect
            </button> */}
            <SignUpForm/>
        </div>
    );
};

export default SignIn;
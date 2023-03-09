// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { signInWithGooglePopup, 
         createUserDocumentFromAuth,
         signInWithGoogleRedirect,
        //  auth
         } from '../../../utils/firebase/firebase.utils';

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
        </div>
    );
};

export default SignIn;
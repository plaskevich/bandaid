import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = (email: string, password: string) => {
  //   const email = 'jopa@dot.com';
  //   const password = 'jopahui';

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

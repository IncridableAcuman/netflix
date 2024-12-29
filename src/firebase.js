import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAhtPB61cqBQDIi7J9ttfz51GytKCQTeQ4",
  authDomain: "netflix-clone-bb6f3.firebaseapp.com",
  projectId: "netflix-clone-bb6f3",
  storageBucket: "netflix-clone-bb6f3.firebasestorage.app",
  messagingSenderId: "345166266042",
  appId: "1:345166266042:web:5219f0413af0a166be4c83"
};
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const db=getFirestore(app)

const signup=async (name,email,password)=>{
  try {
    const res=await createUserWithEmailAndPassword(auth,email,password)
    const user=res.user;
    await addDoc(collection(db,'user'),{
      uid:user.uid,
      name,
      authProvider:'local',
      email,
    })
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}
const login= async (email,password)=>{
  try {
   await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}
const logout=()=>{
  signOut(auth)
}
export {auth,db,signup,login,logout}
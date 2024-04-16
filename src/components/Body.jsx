import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in

        const { uid, email, displayName } = user;

        // dispatch the action
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out

        dispatch(removeUser());
      }
    });
  }, []);

  return <div></div>;
};

export default Body;

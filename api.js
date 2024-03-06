import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  where,
  documentId,
  addDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Refactoring the fetching functions below
const vehiclesCollectionRef = collection(db, "vehicles");

export async function getVans() {
  // const snapshot = host ? await getDocs(vehiclesCollectionRef) : await getDocs(usersCollectionRef)
  const snapshot = await getDocs(vehiclesCollectionRef);
  const vehicles = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(vehicles);
  return vehicles;
}

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getVan(id, context) {
  if (context) {
    const hostId = getCollectionName(context);
    const docRef = doc(db, hostId, id);
    const snapshot = await getDoc(docRef);
    return {
      ...snapshot.data(),
      id: snapshot.id,
    };
  }

  const docRef = doc(db, "vehicles", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

/* 
This 👇 isn't normally something you'd need to do. Instead, you'd 
set up Firebase security rules so only the currently logged-in user 
could edit their vans.

https://firebase.google.com/docs/rules

I'm just leaving this here for educational purposes, as it took
me a while to find the `documentId()` function that allows you
to use a where() filter on a document's ID property. (Since normally
it only looks at the data() properties of the document, meaning you
can't do `where("id", "==", id))`

It also shows how you can chain together multiple `where` filter calls
*/

// export async function getHostVan(id) {
//     const q = query(
//         vehiclesCollectionRef,
//         where(documentId(), "==", id),
//         where("hostId", "==", "123")
//     )
//     const snapshot = await getDocs(q)
//     const vans = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     return vans[0]
// }

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

function getCollectionName(authUser) {
  const pre = authUser.displayName
    ? authUser.displayName.split(" ")[0]
    : authUser.email.substring(0, 6);
  return `${pre}col`;
}

export const createCollection = async (authUser, data) => {
  const usersCollectionRef = collection(db, getCollectionName(authUser));

  const document = await addDoc(usersCollectionRef, {
    name: data.name,
    description: data.description,
    vehicleId: data.vehicleId,
    imageUrl: data.imageUrl,
    price: data.price,
    type: data.type,
    createdAt: Timestamp.now(),
  });

  localStorage.setItem(document.id, JSON.stringify(document.id));
  // const newCollectionRef = collection(db, 'users', document.id, 'name of new subcollection')

  // await addDoc(newCollectionRef, {
  //     data: 'Hello there World',
  // })
};

// export async function getHostVans() {
//   const q = query(vehiclesCollectionRef, where("hostId", "==", "123"));
//   const snapshot = await getDocs(q);
//   const vans = snapshot.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));
//   return vans;
// }

export async function getHostVehicle(authUser) {
  const usersCollectionRef = collection(db, getCollectionName(authUser));

  const q = query(usersCollectionRef, orderBy("createdAt", "asc"));
  const snapshot = await getDocs(q);
  // const snapshot = await getDocs(
  //   orderBy(usersCollectionRef, "createdAt", "desc")
  // );

  const vehicles = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(vehicles);
  return vehicles;
}

export const deleteDocument = async (authUser, documentId) => {
  try {
    const documentRef = doc(db, getCollectionName(authUser), documentId);
    await deleteDoc(documentRef);
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

import {useState, useEffect} from 'react';
import {projectFirestore, timestamp} from '../firebase/config';

const collectionRef = projectFirestore.collection("users");
const createdAt = timestamp();

//collectionRef.add({email: "test@mail,com", createdAt});
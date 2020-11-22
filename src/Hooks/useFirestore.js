import {useState, useEffect} from 'react';
import {projectFirestore, timestamp} from '../firebase/config';

const collectionRef = projectFirestore.collection("users");
const createdAt = timestamp();

const addToFirestore = async () => {
    const res = await collectionRef.add({email: "test@mail.com", createdAt})
    console.log(res.id);
}

export {addToFirestore}
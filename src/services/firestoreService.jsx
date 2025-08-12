// src/services/firestoreService.jsx
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // ✅ correct import

/**
 * Submits a lead to the "leads" collection in Firestore
 * @param {Object} leadData - Object containing user inputs: name, email, etc.
 * @returns {Promise<Object>} - Firestore doc ref or error
 */
export const submitLead = async (leadData) => {
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      ...leadData,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};

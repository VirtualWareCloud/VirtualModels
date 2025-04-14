import { db, auth, provider } from '../src/firebaseConfig.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';
import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

document.getElementById('modelForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const profileImage = document.getElementById('profileImage').files[0];

  // Google Sign-in
  await signInWithPopup(auth, provider);

  // Save data to Firestore
  const docRef = await addDoc(collection(db, "models"), {
    name,
    email,
    profileImageUrl: profileImage.name, // Placeholder for actual upload logic
    createdAt: new Date()
  });

  alert(`Model registered successfully: ${docRef.id}`);
});

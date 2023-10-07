const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const couponCodes = [
  'A1B2C3D4', 'E5F6G7H8', 'I9J0K1L2', 'M3N4O5P6', 'Q7R8S9T0', 'U1V2W3X4', 'Y5Z6A7B8',
  'C9D0E1F2', 'G3H4I5J6', 'K7L8M9N0', 'O1P2Q3R4', 'S5T6U7V8', 'W9X0Y1Z2', 'A3B4C5D6',
  'E7F8G9H0', 'I1J2K3L4', 'M5N6O7P8', 'Q9R0S1T2', 'U3V4W5X6', 'Y7Z8A9B0', 'C1D2E3F4',
  'G5H6I7J8', 'K9L0M1N2', 'O3P4Q5R6', 'S7T8U9V0', 'W1X2Y3Z4', 'A5B6C7D8', 'E9F0G1H2',
  'I3J4K5L6', 'M7N8O9P0', 'Q1R2S3T4', 'U5V6W7X8', 'Y9Z0A1B2', 'C3D4E5F6', 'G7H8I9J0',
  'K1L2M3N4', 'O5P6Q7R8', 'S9T0U1V2', 'W3X4Y5Z6', 'A7B8C9D0', 'E1F2G3H4', 'I5J6K7L8',
  'M9N0O1P2', 'Q3R4S5T6', 'U7V8W9X0', 'Y1Z2A3B4', 'C5D6E7F8', 'G9H0I1J2'
];

async function addCouponCodes() {
  const batch = db.batch();

  couponCodes.forEach((code) => {
    const docRef = db.collection('couponCodes').doc(code);
    batch.set(docRef, { used: false });
  });

  await batch.commit();
  console.log('Coupon codes added successfully');
}

addCouponCodes().catch(console.error);

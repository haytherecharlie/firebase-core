import { https } from 'firebase-functions'
import { db } from 'services/firebase'

const newMessage = async (req, res) => {
  try {
    // const decodedIdToken = await admin.auth().verifyIdToken(idToken)
    const communityId = req.query.c

  } catch (err) {
    res.status(400).send(err)
  }
}

export default https.onRequest(newMessage)

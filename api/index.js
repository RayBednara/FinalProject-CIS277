import db from "./db";

export default {
  async index() {
    const querySnapshot = await db.collection("bloodsugars").get();

    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
  },

  async create(sugarLevel) {
    return db.collection("bloodsugars").add(sugarLevel);
  },

};
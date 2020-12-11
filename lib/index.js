// TODO: Add 'librarr/utility' functions here.
import api from "/api";
import store from "/store"

const addSugarLevel = async ({ sugarLevel, comment}) => {
  const { id } = await api.create({ sugarLevel, comment});
  store.setData({ id, sugarLevel, comment});
  return true
};

const processForm = (form) => Object.fromEntries (new FormData(form));

export default () =>
  new Promise((res, rej) => {
    document.querySelector("form").addEventListener("submit", async(event)=> {
      event.preventDefault();
      if(await addSugarLevel(processForm(event.target))) {
        res();
      }
      rej(new Error("Error adding to DB"));
    })
  })
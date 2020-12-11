import { Main } from "./components";
import api from "./api";
import formHandler from "./lib";
import store from "./store"

const root = document.getElementById("root");

const render = () => {
  root.innerHTML = Main();
  formHandler()
    .then(()=>{
      render();
    })
    .catch((error)=>{
      console.error(error.msg);
    });
};

api.index().then((sugarLevelData) => {
  store.setData(sugarLevelData);
  render();
});

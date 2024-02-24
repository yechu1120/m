import VMusicList from "./musicList.js";
import VSearch from "./search.js";
import Vtip from "./tip.js";

const { createApp } = Vue;

const App = {
  components: {
    VSearch,
    VMusicList,
    Vtip
  },
  setup() {
  },

  template: `
    <section class="user-info">
      <img src="./assets/userImg.jpg" alt="userImg">
      <p>叶初</p>
      <p>我该用什么拿下你？用我的极品少女音吗！</p>
    </section>
    <VSearch />
    <VMusicList />
    <Vtip />
  `
};

export const init = () => {
  createApp(App).mount('.app');
};
import { musicListObject, showMusicListType, musicListfilterSize } from "../data/index.js";
import { addTip } from "./tip.js";

const { ref } = Vue;

const VMusicList = {
  setup() {
    const { filterSize } = musicListfilterSize;
    /** 
    * @param {string} name
    * @param {string} atrist
    */
    const copyMusicName = (name, atrist) => {
      let text = `点歌 ${name} ${atrist}`;
      if (text.length > 20) {
        text = `点歌 ${name.slice(0, 17)}`;
      }

      addTip("copy " + text.slice(3));
      navigator.clipboard.writeText(text.trimEnd()).then(() => { });
    };

    const currentIndex = ref();
    const updateCurrentIndex = (value) => {
      if (currentIndex.value === value) {
        currentIndex.value = undefined;
        return;
      }
      currentIndex.value = value;
    };
    return {
      musicListObject,
      show: showMusicListType,
      updateCurrentIndex,
      currentIndex,
      filterSize,
      copyMusicName
    };
  },
  template: `
  <ul class="musicList-box">
    <template v-for="(value) in musicListObject">
      <li v-for="(item,index) of value" class="list-item-visibility" @click="updateCurrentIndex(item)"
      :class="{ 'even':filterSize.musicKey[item.name],'current':item === currentIndex,'display-none':!(item.isShow && ( show.category === 'ALL' || show.category === item.category)) }">
       <div>
        <p v-html="item.name"></p>
        <p>
        <div v-html="item.atrist"></div>
        <svg @click.stop="copyMusicName(item._name,item.atrist)" t="1708768883656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19037" width="28" height="28"><path d="M254.4 462.6h371.8v64.1H254.4zM254.4 634.5h371.8v64.1H254.4z" fill="#231815" p-id="19038"></path><path d="M719.7 284.7H160.8c-9.1 0-16.4 7.3-16.4 16.4V860c0 9.1 7.3 16.4 16.4 16.4h558.9c9.1 0 16.4-7.3 16.4-16.4V301.1c0-9-7.3-16.4-16.4-16.4zM672 671.3v141H208.5V348.8H672v322.5z" fill="#231815" p-id="19039"></path><path d="M861.9 148.3H312.5c-8.9 0-16.1 7.2-16.1 16.1v84.8h64.1v-36.8H814v453.5h-37.2V730H862c8.9 0 16.1-7.2 16.1-16.1V164.4c0-8.9-7.3-16.1-16.2-16.1z" fill="#231815" p-id="19040"></path></svg>
        </p>
       </div>
       <div>
        <p v-html="item.category"></p>
        <p>{{item.describe}}</p>
       </div>
      </li>
    </template>
  </ul>
  `
};

export default VMusicList;
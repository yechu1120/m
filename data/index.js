import MusicListData from "../assets/list.json"  assert { type: "json" };
import { search } from "./search.js";

const { reactive, computed } = Vue;

/** @typedef {import("./types.js").Music} Music */

/** @type {Record<string, Music[]>} */
export const musicListObject = reactive(MusicListData);

export const categoryFilter = ["ALL", ...Object.keys(musicListObject)];

/** @type {{type:string;value:string}} */
export const searchvalue = reactive({
  type: "name",
  value: "",
});
/** @type {{lang:string,category:string}} */
export const showMusicListType = reactive({
  lang: "ALL",
  category: 'ALL'
});

export const musicListfilterSize = (() => {
  const musicList = Object.values(musicListObject).flat(1);

  /** @type {{value:{ len: number; musicKey: Record<string,boolean>;}}} */
  const filterSize = computed(() => {
    let newList = musicList;

    const filterSize = (key, value) => {
      newList = newList.filter((p) => {
        if (p[key] === value) return p;
      }, 0);
    };

    if (showMusicListType.category !== "ALL") {
      filterSize("category", showMusicListType.category);
    }
    filterSize("isShow", true);
    
    const musicKey = newList.reduce((result, currentValue, index) => {
      result[currentValue.name] = index % 2;
      return result;
    }, {});

    return { len: newList.length, musicKey };
  });

  return { total: musicList.length, filterSize: filterSize };
})();

export const updateShowMusicList = {
  lang: (lang) => {
    showMusicListType.lang = lang;
  },
  category: (category) => {
    showMusicListType.category = category;
  }
};

export const toSearch = search(musicListObject);
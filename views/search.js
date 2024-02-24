import {
  toSearch, categoryFilter, musicListfilterSize,
  searchvalue, updateShowMusicList, showMusicListType
} from "../data/index.js";
import { addTip } from "./tip.js";

const VSearch = {
  setup() {
    const { total, filterSize } = musicListfilterSize;

    const copy = () => {
      const text = `点歌 随机一首(${showMusicListType.category})`;
      addTip("copy " + text);
      navigator.clipboard.writeText(text.trimEnd()).then(() => { });
    };


    const search = () => {
      toSearch(searchvalue.value);
    };
    return {
      total,
      filterSize,
      searchvalue,
      categoryFilter,
      showMusicListType,
      search,
      copy,
      updateShowMusicList
    };
  },
  template: `
  <article class="search">
    <div class="search-input">
      <input id="search" type="search" value="" required  @keyup.enter="search" v-model="searchvalue.value">
      <label>search</label>
      <div class="button search-button" @click="search"></div>
    </div>
    <ul class="filter">
      <li v-for="p of categoryFilter" @click="updateShowMusicList.category(p)" :class="{'text-highlight':p===showMusicListType.category}">{{p}}</li>
      <li @click="copy">随机</li>
    </ul>
    <div class="filter-size" v-if="filterSize.len === total">ALL - {{ filterSize.len }}</div>
    <div class="filter-size" v-else>{{ filterSize.len }} / {{ total }}</div>
  </article>
  `
};

export default VSearch;
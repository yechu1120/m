import list from "./assets/list.json" assert {type: "json"};
// import list1 from "./list1.json" assert {type: "json"};

export const logList = () => {
  // const newList = list.map((p) => {
  //   return {
  //     "name": p,
  //     "atrist": "",
  //     "category": "流行",
  //     "describe": "",
  //   };
  // });
  // Object.values(list1).flat(1).forEach(p => {
  //   const item = newList.find(v => v.name === p.name);
  //   if (item) {
  //     item.name = p.name;
  //     item.atrist = p.atrist;
  //     item.category = p.category;
  //     item.describe = p.describe;
  //   }
  // });

  // console.log(newList);

  const newList = list.reduce((result, value) => {
    (result[value.category] ??= []).push(value);
    return result;
  }, {});
  console.log(newList);
}; 
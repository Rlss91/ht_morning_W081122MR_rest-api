window.addEventListener("load", async () => {
  try {
    let { data } = await axios.get("https://rickandmortyapi.com/api/character");
    display(data.results);
    // let { data: data2 } = await axios.get(
    //   "https://rickandmortyapi.com/api/character"
    // );
    /*
    let obj = {
        name:"kenny",
        age:8
    }
    let { name } = obj
    let name = obj.name // מאחורי הקלעים
    let { name: name2 } = obj
    let name2 = obj.name // מאחורי הקלעים
*/
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

const createItem = (img, name) => {
  return `
    <div class="col">
        <div class="card">
            <img src="${img}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
            </div>
        </div>
    </div>
    `;
};

const display = (arrayOfItems) => {
  let innerStr = "";
  const cardsDiv = document.getElementById("cardsDiv");
  for (let item of arrayOfItems) {
    innerStr += createItem(item.image, item.name);
  }
  cardsDiv.innerHTML = innerStr;
};

let cardsDiv;
let nextUrl = null,
  prevUrl = null;
window.addEventListener("load", () => {
  cardsDiv = document.getElementById("cardsDiv");
  getData("https://rickandmortyapi.com/api/character");
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (!nextUrl) return;
    getData(nextUrl);
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (!prevUrl) return;
    getData(prevUrl);
  });
});

const getData = async (url) => {
  try {
    let { data } = await axios.get(url);
    nextUrl = data.info.next;
    prevUrl = data.info.prev;
    display(data.results);
    // console.log("data", data);
  } catch (err) {
    console.log(err);
  }
};

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
  // const cardsDiv = document.getElementById("cardsDiv");
  for (let item of arrayOfItems) {
    innerStr += createItem(item.image, item.name);
  }
  cardsDiv.innerHTML = innerStr;
};

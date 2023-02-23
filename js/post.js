document.getElementById("form").addEventListener("submit", async (ev) => {
  try {
    ev.preventDefault();
    let { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      }
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

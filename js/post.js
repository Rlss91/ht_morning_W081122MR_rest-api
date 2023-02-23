document.getElementById("form").addEventListener("submit", async (ev) => {
  try {
    ev.preventDefault(); // stop refresh
    let { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      }
    ); // sending post request to the server with data and wait for server response
    console.log(data); // display the response from server
  } catch (err) {
    // if error happens then it will display the error in the console
    console.log(err);
  }
});

import React from "react";

class App extends React.Component {
  Post = e => {
    e.preventDefault();
    const file = document.getElementById("inputGroupFile01").files;
    const formData = new FormData();

    formData.append("wav", file[0]);

    fetch("http://localhost:5000/", {
      method: "POST",
      body: formData
    }).then(r => {
      console.log(r);
    });

    document
      .getElementById("img")
      .setAttribute("src", `http://localhost:5000/${file[0].name}`);
    console.log(file[0]);
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Create New Playlist</h1>
        </div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.Post}>
          Upload
        </button>
        <img
          id="img"
          style={{
            display: "block"
          }}
        ></img>
      </div>
    );
  }
}

export default App;

import NotesComponent from "./NotesComponent";

const Home = () => {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center form-div">
      <form className="container ">
        <div className="container mb-3 w-25" style={{minWidth:'300px'}}>
          <label for="exampleInputEmail1" className="form-label">
            You know what comes here
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="container mb-3 w-25" style={{minWidth:'300px'}}>
          <label for="exampleInputPassword1" className="form-label">
            Here too...
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="container mb-3 w-25 form-check" style={{minWidth:'300px'}}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember Me😘
          </label>
        </div>
        <div className="container mb-3 text-center">
          <button
            type="submit"
            className="w-25 btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
      <NotesComponent/>
    </div>
  );
};

export default Home;

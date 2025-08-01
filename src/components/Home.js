import NotesComponent from "./NotesComponent";

const Home = (props) => {
  const {showAlert} = props;
  return (
    <>
      <NotesComponent showAlert={showAlert} />
    </>
  );
};

export default Home;

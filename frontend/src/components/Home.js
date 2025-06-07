import Notes from './Notes';

const Home = ({ setAlert }) => {
    return (
        <>
            <Notes showAlert={setAlert} />
        </>
    );
}

export default Home;
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-sm mx-auto p-5 sm:max-w-3xl">
        <Form/>
      </main>
      
    </>
  );
}

export default App;

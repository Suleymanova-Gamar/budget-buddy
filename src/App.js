import Home from "./components/Home";
import { imgs } from './content/home';
// import { AuthFormHeightProvider } from "./context/AuthFormHeightContext";
function App() {
  return (
    // <AuthFormHeightProvider>
      <Home imgs={imgs} />
    // </AuthFormHeightProvider>
    
  );
}

export default App;

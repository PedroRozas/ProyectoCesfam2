import Header from "./components/header.js";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Meds from "./components/Meds.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import Singup from "./components/singup";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

/*
function App() {
  return (
    <>
      <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <Users/>
      </div>
      </ApolloProvider>
    </>
  );
}
*/

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <>
        <ApolloProvider client={client}>
          <Header />
          <Routes>
            {token && <Route path="/" exact element={<Main />} />}
            <Route path="/login" exact element={<Login/>} />
            <Route path="/signup"exact element={<Singup/>} />
            <Route path="/" exact element={<Navigate to="/login" />} />
            <Route path="/home" exact element={<Meds />} />
          </Routes>
        </ApolloProvider>
      </>
    );
  }
  else
  {
    return (
      <>
        <ApolloProvider client={client}>
          <Header />
          <Routes>
            <Route path="/login" exact element={<Login/>} />
            <Route path="/signup"exact element={<Singup/>} />
            <Route path="/" exact element={<Navigate to="/login" />} />
            <Route path="/home" exact element={<Navigate to="/login" />} />
          </Routes>
        </ApolloProvider>
      </>
    );
  }
 
}
export default App;

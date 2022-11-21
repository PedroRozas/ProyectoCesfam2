import Header from "./components/header.js";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Meds from "./components/Meds.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import Singup from "./components/singup";
import Header2 from "./components/header2";
import Recipes from "./components/recipes/recipes";
import NewMeds from "./components/newmed/index.jsx";
import Stock from "./components/stockpage/index";


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});



function App() {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <>
        <ApolloProvider client={client}>
          <Header2 />
          <Routes>
            {token && <Route path="/" exact element={<Main />} />}
            <Route path="/login" exact element={<Login/>} />
            <Route path="/signup"exact element={<Singup/>} />
            <Route path="/" exact element={<Navigate to="/login" />} />
            <Route path="/home" exact element={<Meds />} />
            <Route path="/recipes" exact element={<Recipes />} />
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
          <Header2 />
          <Routes>
            <Route path="/login" exact element={<Login/>} />
            <Route path="/signup"exact element={<Singup/>} />
            <Route path="/" exact element={<Navigate to="/login" />} />
            <Route path="/home" exact element={<Navigate to="/login" />} />
            <Route path="/recipes" exact element={<Recipes />} />
            <Route path="/newmed" exact element={<NewMeds />} />
            <Route path="/stock" exact element={<Stock />} />
          </Routes>
        </ApolloProvider>
      </>
    );
  }
 
}


export default App;

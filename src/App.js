import routes from "../src/routes/Routes";
import { useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/userSession";
import axios from "axios";
import NavigationBar from "./components/layout/NavigationBar";
import { Container } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector(
    (state) => state.persistedReducer.userSession.value
  );
  const { jwtToken } = useSelector(
    (state) => state.persistedReducer.userSession.value
  );

  (function () {
    const token = jwtToken;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
      /*if setting null does not remove `Authorization` header then try     
          delete axios.defaults.headers.common['Authorization'];
        */
    }
    axios.defaults.baseURL = "http://localhost:8080/api";
  })();

  function checkUserLoggedIn() {
    axios.get("/auth/testLogin").catch((err) => {
      console.log(err);
      dispatch(logout());
      navigate("/login");
    });
  }

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const routing = useRoutes(routes(isLoggedIn));

  return (
    <>
      <NavigationBar isLoggedIn={isLoggedIn} />
      <Container className="mt-3">{routing}</Container>
    </>
  );
}

export default App;

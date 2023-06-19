import { Flex, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import HomePage from "./pages";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer/> */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route
              path="*"
              element={
                <Flex
                  w="100%"
                  h="100vh"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text size="xl">404</Text>
                  <Text>page Not Found</Text>
                </Flex>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

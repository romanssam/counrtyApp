import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Controls from "./components/Controls/Controls";


export const App = () => {
  return (
    <>
      <Header/>
        <Main>
            <Controls/>
        </Main>
    </>
  )
}
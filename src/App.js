import TopBar from "./components/TopBar";
import AddButton from "./components/AddButton";
import ToDoList from "./components/ToDoList";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {


 
  return (
    <Provider store={store} >
      <div >
          <header>
            <TopBar />
          < AddButton />
        </header>
          <ToDoList />
      </div>
    </Provider>
    
  );
}

export default App;

import './App.css';
import Table from './component/Table';
function App() {
  return (
    <>  
    <h1>
      Jsonplaceholder Table
    </h1>
     <Table
     c1="Id"
     c2="Post title"
     c3="Post Body"
     />
     </>

  );
}

export default App;

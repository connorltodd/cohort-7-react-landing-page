
import './App.css';
import Header from './components/Header';
import Card from './components/Card/Card';

function App() {
  return (
    // HTML like elements are known as JSX
    // JSX - Javascript and XML

    // the keyword class is reserved in react so 
    //we need to use className for styles
    <div className="App">
      <header></header>
      <Header />
      {/* To send dynamic info we need to use props (properties) */}
      <div className="product-container">
        <Card productName='washing up liquid' price={5} />
        <Card productName='hairspray' price={2}/>
        <Card productName='dog food' price={1} />
      </div>


    </div>
  );
}

export default App;

import Component from "./Component";
import Card from "./Card";

const card1 = {
  username: "Marco",
  price: 2.50,
  url: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b13305_1.jpg",
  title: "200€ Airbnb +400P"
}

const card2 = {
  username: "Lucia",
  price: 5.50,
  url: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b17471_1.jpg",
  title: "20€ PS Store +40P"
}

function App() {
  return (
    <div className="App">
      <h1>Ciao a tutti</h1>
      <Component />
      <div className="d-flex justify-content-evenly row">

        <Card 
        username = { card1.username}
        price = { card1.price}
        url = { card1.url}
        title = { card1.title}
        />
        <Card 
        username = { card2.username}
        price = { card2.price}
        url = { card2.url}
        title = { card2.title}
        />

      </div>
    </div>
  );
}

export default App;

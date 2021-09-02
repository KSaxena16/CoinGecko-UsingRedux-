import Navbar from "./Components/Navbar";
import Table from "./Components/Table";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coin</th>
            <th scope="col">Price</th>
            <th scope="col">1h</th>
            <th scope="col">24h</th>
            <th scope="col">7d</th>
            <th scope="col">24h Volume</th>
            <th scope="col">Mkt Cap</th>
            <th scope="col">Last 7 Days</th>
          </tr>
        </thead>
        <Table />
      </table>
</div>
    </>
  );
}

export default App;

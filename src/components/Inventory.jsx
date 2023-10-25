import { Component } from 'react';
import AddFishForm from './AddFishForm';
import EditInventory from './EditInventory';

class Inventory extends Component {
  render() {
    const { addFish, loadSampleFishes, fishes, updateFish, deleteFish } =
      this.props;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(fishes).map(key => (
          <EditInventory
            key={key}
            index={key}
            fish={fishes[key]}
            updateFish={updateFish}
            deleteFish={deleteFish}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;

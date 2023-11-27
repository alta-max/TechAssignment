import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

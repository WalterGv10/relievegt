import { Routes, Route } from 'react-router-dom';
import Iridescence from './components/Iridescence/Iridescence';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="relative w-full min-h-screen font-sans antialiased text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <Iridescence
        color={[0.5, 0.6, 0.8]}
        mouseReact={true}
        amplitude={0.1}
        speed={1}
      />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

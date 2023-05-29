import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { MainLayout } from './layout/MainLayout/MainLayout';

export const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;

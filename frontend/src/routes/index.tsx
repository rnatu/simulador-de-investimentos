import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResultContextProvider } from '../contexts/ResultContext';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ResultContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ResultContextProvider>
    </BrowserRouter>
  );
}

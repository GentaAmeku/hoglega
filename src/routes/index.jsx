import { Routes, Route, Navigate } from 'react-router-dom';

import FinalTouches from '../pages/Collection/FinalTouches/container';

const IndexRoutes = () => (
  <Routes>
    <Route path="collection">
      <Route path="final-touches" element={<FinalTouches />} />
    </Route>
    <Route
      path="*"
      element={<Navigate to="/collection/final-touches" replace />}
    />
  </Routes>
);

export default IndexRoutes;

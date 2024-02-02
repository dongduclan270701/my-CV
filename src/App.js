import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CV from 'components/CV'
import Page from 'components/Page'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  const page = [
    { path: "/", location: Page },
    { path: "/my-cv", location: CV }
  ]
  return (
    <Router>
      <Routes>
        {page.map((item, index) => {
          const TagName1 = item.location
          return <Route key={index} path={item.path} element={<TagName1 />}
          />
        })}
      </Routes>
    </Router>
  );
}

export default App;

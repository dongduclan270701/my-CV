import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CVEn from 'components/en/CV'
import Homepage from 'components/en/Page/Homepage'
import CVVi from 'components/vi/CV'
import PageEn from 'components/en/Page'
import PageVi from 'components/vi/Page'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  const page = [
    { path: "/", location: Homepage },
    { path: "/en-US/", location: PageEn },
    { path: "/vi-VN/", location: PageVi },
    { path: "/en-US/my-cv", location: CVEn },
    { path: "/vi-VN/my-cv", location: CVVi }
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

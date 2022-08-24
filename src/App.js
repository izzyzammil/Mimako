import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Loading from "./pages/loading/Loading";
import Home from "pages/home/Home";
import Kurva from "pages/kurva/Kurva";
import Guide from "pages/guide/Guide";
import About from "pages/about/About";
import Glosarium from "pages/glosarium/Glosarium";
import Material from "pages/material/Material";
import MaterialPermintaan from "pages/material-permintaan/MaterialPermintaan";
import MaterialSubPermintaan1 from "pages/material-sub-permintaan1/MaterialSubPermintaan1";
import MaterialSubPermintaan2 from "pages/material-sub-permintaan2/MaterialSubPermintaan2";
import MaterialSubPermintaan3 from "pages/material-sub-permintaan3/MaterialSubPermintaan3";
import MaterialSubPermintaan4 from "pages/material-sub-permintaan4/MaterialSubPermintaan4";
import MaterialSubPermintaan5 from "pages/material-sub-permintaan5/MaterialSubPermintaan5";
import MaterialPenawaran from "pages/material-penawaran/MaterialPenawaran";
import MaterialSubPenawaran1 from "pages/material-sub-penawaran1/MaterialSubPenawaran1";
import MaterialSubPenawaran2 from "pages/material-sub-penawaran2/MaterialSubPenawaran2";
import MaterialSubPenawaran3 from "pages/material-sub-penawaran3/MaterialSubPenawaran3";
import MaterialSubPenawaran4 from "pages/material-sub-penawaran4/MaterialSubPenawaran4";
import MaterialSubPenawaran5 from "pages/material-sub-penawaran5/MaterialSubPenawaran5";
import MaterialKeseimbangan from "pages/material-keseimbangan/MaterialKeseimbangan";
import MaterialSubKeseimbangan1 from "pages/material-sub-keseimbangan1/MaterialSubKeseimbangan1";
import MaterialSubKeseimbangan2 from "pages/material-sub-keseimbangan2/MaterialSubKeseimbangan2";
import MaterialSubKeseimbangan3 from "pages/material-sub-keseimbangan3/MaterialSubKeseimbangan3";
import MaterialStruktur from "pages/material-struktur/MaterialStruktur";
import MaterialSubStruktur1Page1 from "pages/material-sub-struktur1/MaterialSubStruktur1Page1";
import MaterialSubStruktur1Page2 from "pages/material-sub-struktur1/MaterialSubStruktur1Page2";
import MaterialSubStruktur2Page1 from "pages/material-sub-struktur2/MaterialSubStruktur2Page1";
import MaterialSubStruktur2Page2 from "pages/material-sub-struktur2/MaterialSubStruktur2Page2";
import EvaluationHome from "pages/evaluation/EvaluationHome";
import EvaluationInstructions from "pages/evaluation-instructions/EvaluationInstructions";
import EvaluationExam from "pages/evaluation-exam/EvaluationExam";
import EvaluationScorePage from "pages/evaluation-score-page/EvaluationScorePage";

const MyApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kurva" element={<Kurva />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<About />} />
        <Route path="/glosarium" element={<Glosarium />} />
        <Route path="/material" element={<Material />} />
        <Route path="/materialpermintaan" element={<MaterialPermintaan />} />
        <Route
          path="/materialsubpermintaan1"
          element={<MaterialSubPermintaan1 />}
        />
        <Route
          path="/materialsubpermintaan2"
          element={<MaterialSubPermintaan2 />}
        />
        <Route
          path="/materialsubpermintaan3"
          element={<MaterialSubPermintaan3 />}
        />
        <Route
          path="/materialsubpermintaan4"
          element={<MaterialSubPermintaan4 />}
        />
        <Route
          path="/materialsubpermintaan5"
          element={<MaterialSubPermintaan5 />}
        />
        <Route path="/materialpenawaran" element={<MaterialPenawaran />} />
        <Route
          path="/materialsubpenawaran1"
          element={<MaterialSubPenawaran1 />}
        />
        <Route
          path="/materialsubpenawaran2"
          element={<MaterialSubPenawaran2 />}
        />
        <Route
          path="/materialsubpenawaran3"
          element={<MaterialSubPenawaran3 />}
        />
        <Route
          path="/materialsubpenawaran4"
          element={<MaterialSubPenawaran4 />}
        />
        <Route
          path="/materialsubpenawaran5"
          element={<MaterialSubPenawaran5 />}
        />
        <Route
          path="/materialkeseimbangan"
          element={<MaterialKeseimbangan />}
        />
        <Route
          path="/materialsubkeseimbangan1"
          element={<MaterialSubKeseimbangan1 />}
        />
        <Route
          path="/materialsubkeseimbangan2"
          element={<MaterialSubKeseimbangan2 />}
        />
        <Route
          path="/materialsubkeseimbangan3"
          element={<MaterialSubKeseimbangan3 />}
        />
        <Route path="/materialstruktur" element={<MaterialStruktur />} />
        <Route
          path="/materialsubstruktur1page1"
          element={<MaterialSubStruktur1Page1 />}
        />
        <Route
          path="/materialsubstruktur1page2"
          element={<MaterialSubStruktur1Page2 />}
        />
        <Route
          path="/materialsubstruktur2page1"
          element={<MaterialSubStruktur2Page1 />}
        />
        <Route
          path="/materialsubstruktur2page2"
          element={<MaterialSubStruktur2Page2 />}
        />
        <Route path="/evaluationhome" element={<EvaluationHome />} />
        <Route
          path="/evaluationinstructions"
          element={<EvaluationInstructions />}
        />
        <Route path="/evaluationexam" element={<EvaluationExam />} />
        <Route path="/evaluationscorepage" element={<EvaluationScorePage />} />
      </Routes>
    </Router>
  );
};

function App() {
  return <MyApp />;
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ROUTES as R } from "./lib/links";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import TelthEcosystem from "./pages/TelthEcosystem";
import TechnologyScreen from "./pages/TechnologyScreen";
import TechnologyDevicesLandingPage from "./pages/TechnologyDevicesLandingPage";
import TechnologyDevicesExplorePage from "./pages/TechnologyDevicesExplorePage";
import HealthConnect360Page from "./pages/HealthConnect360Page";
import Careers from "./pages/Careers";
import OurRD from "./pages/OurRD";
import CareCommunityScreen from "./pages/CareCommunityScreen";
import CareHome from "./pages/CareHome";
import PersonalCare from "./pages/PersonalCare";
import IntelligentCareEconomyPage from "./pages/IntelligentCareEconomyPage";
import CarePlanPage from "./pages/CarePlanPage";
import Partners from "./pages/Partners";
import THOS from "./pages/THOS";
import ThosV1Page from "./pages/ThosV1Page";
import ThosV2Page from "./pages/ThosV2Page";
import ThosV3Page from "./pages/ThosV3Page";
import ThosV4Page from "./pages/ThosV4Page";
import TDocScreen from "./pages/TDocScreen";
import CmCcmScreen from "./pages/CmCcmScreen";
import ContactScreen from "./pages/ContactScreen";
import CmApplicationFormScreen from "./pages/CmApplicationFormScreen";
import BookOrientationScreen from "./pages/BookOrientationScreen";
import EnquirySubmittedScreen from "./pages/EnquirySubmittedScreen";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path={R.home} element={<HomePage />} />
          <Route path={R.about} element={<AboutUsPage />} />
          <Route path={R.ecosystem} element={<TelthEcosystem />} />
          <Route path={R.technology} element={<TechnologyScreen />} />
          <Route path={R.technologyDevices} element={<TechnologyDevicesLandingPage />} />
          <Route path={R.technologyDevicesExplore} element={<TechnologyDevicesExplorePage />} />
          <Route path={R.healthConnect} element={<HealthConnect360Page />} />
          <Route path={R.careers} element={<Careers />} />
          <Route path={R.rd} element={<OurRD />} />
          <Route path={R.careCommunity} element={<CareCommunityScreen />} />
          <Route path={R.careHome} element={<CareHome />} />
          <Route path={R.personalCare} element={<PersonalCare />} />
          <Route path={R.intelligentCareEconomy} element={<IntelligentCareEconomyPage />} />
          <Route path={R.carePlan} element={<CarePlanPage />} />
          <Route path={R.partnership} element={<Partners />} />
          <Route path={R.thos} element={<THOS />} />
          <Route path={R.thosV1} element={<ThosV1Page />} />
          <Route path={R.thosV2} element={<ThosV2Page />} />
          <Route path={R.thosV3} element={<ThosV3Page />} />
          <Route path={R.thosV4} element={<ThosV4Page />} />
          <Route path={R.tdoc} element={<TDocScreen />} />
          <Route path={R.cmccm} element={<CmCcmScreen />} />
          <Route path={R.enquiry} element={<ContactScreen />} />
          <Route path={R.cmApplication} element={<CmApplicationFormScreen />} />
          <Route path={R.bookOrientation} element={<BookOrientationScreen />} />
          <Route path="/orientation" element={<Navigate to={R.bookOrientation} replace />} />
          <Route path={R.enquirySubmitted} element={<EnquirySubmittedScreen />} />
          {[R.privacy, R.terms, R.hipaa, R.security, R.cookiePreferences, R.accessibility, R.regulatoryInformation, R.productAvailability, R.corporateGovernance].map((p) => (
            <Route key={p} path={p} element={<LegalPage />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
    </Routes>
  );
}



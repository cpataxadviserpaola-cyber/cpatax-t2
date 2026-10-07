import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import TaxSeason from './pages/TaxSeason.jsx';
import Industries from './pages/Industries.jsx';
import Resources from './pages/Resources.jsx';
import Guides from './pages/Guides.jsx';
import GettingMarried from './components/Guides/LifeEvents/GettingMarried/GettingMarried.jsx';
import GettingMarriedGuidelines from './components/Guides/LifeEvents/GettingMarried/FinancialGuidelines.jsx';
import LifeInsurance from './components/Guides/LifeEvents/GettingMarried/LifeInsurance.jsx';
import YourFinancialPlan from './components/Guides/LifeEvents/GettingMarried/YourFinancialPlan.jsx';
import DocumentLocator from './components/Guides/LifeEvents/GettingMarried/DocumentLocator.jsx';
import Budgeting from './components/Guides/LifeEvents/GettingMarried/Budgeting.jsx';
import CreditReports from './components/Guides/LifeEvents/GettingMarried/CreditReports.jsx';
import PostMortemLetter from './components/Guides/LifeEvents/GettingMarried/PostMortemLetter.jsx';
import RetirementDistributionsWhen from './components/Guides/LifeEvents/GettingMarried/RetirementDistributionsWhen.jsx';
import RetirementDistributionsHow from './components/Guides/LifeEvents/GettingMarried/RetirementDistributionsHow.jsx';
import EstatePlanning from './components/Guides/LifeEvents/GettingMarried/EstatePlanning.jsx';
import Funerals from './components/Guides/LifeEvents/GettingMarried/Funerals.jsx';
import YourRetirementPlan from './components/Guides/LifeEvents/GettingMarried/YourRetirementPlan.jsx';
import SavingMoney from './components/Guides/LifeEvents/GettingMarried/SavingMoney.jsx';
import DisabilityInsurance from './components/Guides/LifeEvents/GettingMarried/DisabilityInsurance.jsx';
import DisabilityBenefits from './components/Guides/LifeEvents/GettingMarried/DisabilityBenefits.jsx';
import HomeownersInsurance from './components/Guides/LifeEvents/GettingMarried/HomeownersInsurance.jsx';
import AssetAllocation from './components/Guides/LifeEvents/GettingMarried/AssetAllocation.jsx';
import SocialSecurityBenefits from './components/Guides/LifeEvents/GettingMarried/SocialSecurityBenefits.jsx';
import InvestmentBasics from './components/Guides/LifeEvents/GettingMarried/InvestmentBasics.jsx';
import MutualFunds from './components/Guides/LifeEvents/GettingMarried/MutualFunds.jsx';
import SurvivorBenefits from './components/Guides/LifeEvents/GettingMarried/SurvivorBenefits.jsx';
import DeathOfALovedOne from './components/Guides/LifeEvents/DeathOfALovedOne/DeathOfALovedOne.jsx';
import DeathOfASpouse from './components/Guides/LifeEvents/DeathOfALovedOne/DeathOfASpouse.jsx';
import FinancialPlanning from './pages/FinancialPlanning.jsx';
import Privacy from './pages/Privacy.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import NotFound from './pages/NotFound.jsx';
import { services } from './data/services.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        {services
          .filter((service) => service.slug)
          .map((service) => (
            <Route key={service.id} path={service.slug} element={<ServiceDetail id={service.id} />} />
          ))}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tax-season" element={<TaxSeason />} />
        {/* The Tax Season page used to be called the Client Center. */}
        <Route path="client-center" element={<Navigate to="/tax-season" replace />} />
        <Route path="industries" element={<Industries />} />
        <Route path="resources" element={<Resources />} />
        <Route path="guides" element={<Guides />} />
        <Route path="guides/life-events/getting-married" element={<GettingMarried />} />
        <Route path="guides/life-events/getting-married/financial-guidelines" element={<GettingMarriedGuidelines />} />
        <Route path="guides/life-events/getting-married/life-insurance" element={<LifeInsurance />} />
        <Route path="guides/life-events/getting-married/your-financial-plan" element={<YourFinancialPlan />} />
        <Route path="guides/life-events/getting-married/document-locator" element={<DocumentLocator />} />
        <Route path="guides/life-events/getting-married/budgeting" element={<Budgeting />} />
        <Route path="guides/life-events/getting-married/credit-reports" element={<CreditReports />} />
        <Route path="guides/life-events/getting-married/post-mortem-letter" element={<PostMortemLetter />} />
        <Route path="guides/life-events/getting-married/retirement-distributions-when" element={<RetirementDistributionsWhen />} />
        <Route path="guides/life-events/getting-married/retirement-distributions-how" element={<RetirementDistributionsHow />} />
        <Route path="guides/life-events/getting-married/estate-planning" element={<EstatePlanning />} />
        <Route path="guides/life-events/getting-married/funerals" element={<Funerals />} />
        <Route path="guides/life-events/getting-married/your-retirement-plan" element={<YourRetirementPlan />} />
        <Route path="guides/life-events/getting-married/saving-money" element={<SavingMoney />} />
        <Route path="guides/life-events/getting-married/disability-insurance" element={<DisabilityInsurance />} />
        <Route path="guides/life-events/getting-married/disability-benefits" element={<DisabilityBenefits />} />
        <Route path="guides/life-events/getting-married/homeowners-insurance" element={<HomeownersInsurance />} />
        <Route path="guides/life-events/getting-married/asset-allocation" element={<AssetAllocation />} />
        <Route path="guides/life-events/getting-married/social-security-benefits" element={<SocialSecurityBenefits />} />
        <Route path="guides/life-events/getting-married/investment-basics" element={<InvestmentBasics />} />
        <Route path="guides/life-events/getting-married/investing-in-mutual-funds" element={<MutualFunds />} />
        <Route path="guides/life-events/getting-married/survivor-benefits" element={<SurvivorBenefits />} />
        <Route path="guides/life-events/death-of-a-loved-one" element={<DeathOfALovedOne />} />
        <Route path="guides/life-events/death-of-a-loved-one/death-of-a-spouse" element={<DeathOfASpouse />} />
        {/* The guide library's address on the previous site. */}
        <Route path="reports.php" element={<Navigate to="/guides" replace />} />
        <Route path="financial-planning" element={<FinancialPlanning />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

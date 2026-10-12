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
import BecomingAParent from './components/Guides/LifeEvents/BecomingAParent/BecomingAParent.jsx';
import DealingWithYourBank from './components/Guides/LifeEvents/DealingwithYourBank/DealingWithYourBank.jsx';
import ImprovingYourCredit from './components/Guides/LifeEvents/CreditImproving/ImprovingYourCredit.jsx';
import ChoosingAProfessional from './components/Guides/LifeEvents/ChoosingAProfessional/ChoosingAProfessional.jsx';
import BuyingInsurance from './components/Guides/LifeEvents/BuyingInsurance/BuyingInsurance.jsx';
import GettingALoan from './components/Guides/LifeEvents/GettingALoan/GettingALoan.jsx';
import PlanningForRetirement from './components/Guides/LifeEvents/Retirementplan/PlanningForRetirement.jsx';
import PlanningYourEstate from './components/Guides/LifeEvents/PlanningYourEstate/PlanningYourEstate.jsx';
import MakingCharitableContributions from './components/Guides/LifeEvents/MakingCharitableContributions/MakingCharitableContributions.jsx';
import GivingWisely from './components/Guides/LifeEvents/MakingCharitableContributions/GivingWisely.jsx';
import ContributionsOfProperty from './components/Guides/LifeEvents/MakingCharitableContributions/ContributionsOfProperty.jsx';
import RecordsToKeep from './components/Guides/LifeEvents/MakingCharitableContributions/RecordsToKeep.jsx';
import AdvancedCharityTechniques from './components/Guides/LifeEvents/MakingCharitableContributions/AdvancedCharityTechniques.jsx';
import FraudulentCharities from './components/Guides/LifeEvents/MakingCharitableContributions/FraudulentCharities.jsx';
import CharitableContributionsFaq from './components/Guides/LifeEvents/MakingCharitableContributions/CharitableContributionsFaq.jsx';
import CharitableDeductionsFaq from './components/Guides/LifeEvents/MakingCharitableContributions/CharitableDeductionsFaq.jsx';
import AvoidingScams from './components/Guides/LifeEvents/AvoidingScams/AvoidingScams.jsx';
import ConArtists from './components/Guides/LifeEvents/AvoidingScams/ConArtists.jsx';
import AvoidingScamsFaq from './components/Guides/LifeEvents/AvoidingScams/AvoidingScamsFaq.jsx';
import GettingDivorcedOrBecomingWidowed from './components/Guides/LifeEvents/GettingDivorcedorBecomingWidowed/GettingDivorcedOrBecomingWidowed.jsx';
import GettingDivorcedFaq from './components/Guides/LifeEvents/GettingDivorcedorBecomingWidowed/GettingDivorcedFaq.jsx';
import CopingWithMajorIllness from './components/Guides/LifeEvents/CopingwithMajorillness/CopingWithMajorIllness.jsx';
import ImprovingYourRetirement from './components/Guides/LifeEvents/ImprovingYourRetirement/ImprovingYourRetirement.jsx';
import YourPension from './components/Guides/LifeEvents/ImprovingYourRetirement/YourPension.jsx';
import TapRetirementMoneyEarly from './components/Guides/LifeEvents/ImprovingYourRetirement/TapRetirementMoneyEarly.jsx';
import HandlingOtherSituations from './components/Guides/LifeEvents/HandlingOtherSituations/HandlingOtherSituations.jsx';
import RecordkeepingGuide from './components/Guides/LifeEvents/HandlingOtherSituations/RecordkeepingGuide.jsx';
import OtherSituationsFaq from './components/Guides/LifeEvents/HandlingOtherSituations/OtherSituationsFaq.jsx';
import StartingABusiness from './components/Guides/BusinessStrategies/StartingABusiness/StartingABusiness.jsx';
import RunningYourBusiness from './components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/RunningYourBusiness.jsx';
import GrowingYourBusiness from './components/Guides/BusinessStrategies/GrowingYourBusiness/GrowingYourBusiness.jsx';
import SecuringBusinessLoans from './components/Guides/BusinessStrategies/SecuringBusinessLoans/SecuringBusinessLoans.jsx';
import SellingExitingYourBusiness from './components/Guides/BusinessStrategies/SellingExitingYourBusiness/SellingExitingYourBusiness.jsx';
import BusinessSuccession from './components/Guides/BusinessStrategies/SellingExitingYourBusiness/BusinessSuccession.jsx';
import PassingOnFamilyBusiness from './components/Guides/BusinessStrategies/SellingExitingYourBusiness/PassingOnFamilyBusiness.jsx';
import WinningExitPlan from './components/Guides/BusinessStrategies/SellingExitingYourBusiness/WinningExitPlan.jsx';
import ShowMeTheMoney from './components/Guides/BusinessStrategies/SecuringBusinessLoans/ShowMeTheMoney.jsx';
import EvaluatingYourMarket from './components/Guides/BusinessStrategies/GrowingYourBusiness/EvaluatingYourMarket.jsx';
import PricingProductsAndServices from './components/Guides/BusinessStrategies/GrowingYourBusiness/PricingProductsAndServices.jsx';
import AdvertisingProgram from './components/Guides/BusinessStrategies/GrowingYourBusiness/AdvertisingProgram.jsx';
import Referrals from './components/Guides/BusinessStrategies/GrowingYourBusiness/Referrals.jsx';
import CustomerTrust from './components/Guides/BusinessStrategies/GrowingYourBusiness/CustomerTrust.jsx';
import CustomerAppreciation from './components/Guides/BusinessStrategies/GrowingYourBusiness/CustomerAppreciation.jsx';
import UniqueSellingProposition from './components/Guides/BusinessStrategies/GrowingYourBusiness/UniqueSellingProposition.jsx';
import CustomerLifetimeValue from './components/Guides/BusinessStrategies/GrowingYourBusiness/CustomerLifetimeValue.jsx';
import GrowWithLessStress from './components/Guides/BusinessStrategies/GrowingYourBusiness/GrowWithLessStress.jsx';
import MarketingPricingFaq from './components/Guides/BusinessStrategies/GrowingYourBusiness/MarketingPricingFaq.jsx';
import TravelEntertainmentFaq from './components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/TravelEntertainmentFaq.jsx';
import EmployeeBenefitsFaq from './components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/EmployeeBenefitsFaq.jsx';
import CashFlow from './components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/CashFlow.jsx';
import TravelEntertainment from './components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/TravelEntertainment.jsx';
import EmployeeBenefits from './components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/EmployeeBenefits.jsx';
import FinancialPlanningTips from './components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/FinancialPlanningTips.jsx';
import ThreeThingsYouMustKnow from './components/Guides/BusinessStrategies/StartingABusiness/ThreeThingsYouMustKnow.jsx';
import FormOfBusinessOrganization from './components/Guides/BusinessStrategies/StartingABusiness/FormOfBusinessOrganization.jsx';
import AdvantagesOfIncorporating from './components/Guides/BusinessStrategies/StartingABusiness/AdvantagesOfIncorporating.jsx';
import AdvantagesOfLlcs from './components/Guides/BusinessStrategies/StartingABusiness/AdvantagesOfLlcs.jsx';
import BusinessPlans from './components/Guides/BusinessStrategies/StartingABusiness/BusinessPlans.jsx';
import HomeBasedBusiness from './components/Guides/BusinessStrategies/StartingABusiness/HomeBasedBusiness.jsx';
import RaisingCapital from './components/Guides/BusinessStrategies/StartingABusiness/RaisingCapital.jsx';
import BusinessFormsFaq from './components/Guides/BusinessStrategies/StartingABusiness/BusinessFormsFaq.jsx';
import IncorporatingFaq from './components/Guides/BusinessStrategies/StartingABusiness/IncorporatingFaq.jsx';
import LimitedLiabilityCompaniesFaq from './components/Guides/BusinessStrategies/StartingABusiness/LimitedLiabilityCompaniesFaq.jsx';
import SmallBusinessFaq from './components/Guides/BusinessStrategies/StartingABusiness/SmallBusinessFaq.jsx';
import RecordkeepingFaq from './components/Guides/BusinessStrategies/StartingABusiness/RecordkeepingFaq.jsx';
import LivingTrustsFaq from './components/Guides/LifeEvents/PlanningYourEstate/LivingTrustsFaq.jsx';
import WillsFaq from './components/Guides/LifeEvents/PlanningYourEstate/WillsFaq.jsx';
import EstateAndTaxesFaq from './components/Guides/LifeEvents/PlanningYourEstate/EstateAndTaxesFaq.jsx';
import RetirementSavingTips from './components/Guides/LifeEvents/Retirementplan/RetirementSavingTips.jsx';
import CountOnSocialSecurity from './components/Guides/LifeEvents/Retirementplan/CountOnSocialSecurity.jsx';
import RothIras from './components/Guides/LifeEvents/Retirementplan/RothIras.jsx';
import SimplePlan from './components/Guides/LifeEvents/Retirementplan/SimplePlan.jsx';
import FinancialPlanFaq from './components/Guides/LifeEvents/Retirementplan/FinancialPlanFaq.jsx';
import SocialSecurityBenefitsFaq from './components/Guides/LifeEvents/Retirementplan/SocialSecurityBenefitsFaq.jsx';
import RetirementDistributionsFaq from './components/Guides/LifeEvents/Retirementplan/RetirementDistributionsFaq.jsx';
import RetirementAssetsFaq from './components/Guides/LifeEvents/Retirementplan/RetirementAssetsFaq.jsx';
import TraditionalVsRothIrasFaq from './components/Guides/LifeEvents/Retirementplan/TraditionalVsRothIrasFaq.jsx';
import BuyingMaintainingACar from './components/Guides/LifeEvents/Buying&MaintainingACar/BuyingMaintainingACar.jsx';
import BuyingSellingAHome from './components/Guides/LifeEvents/Buying&SellingAHome/BuyingSellingAHome.jsx';
import BuyingAHome from './components/Guides/LifeEvents/Buying&SellingAHome/BuyingAHome.jsx';
import BuyingAHomeFaq from './components/Guides/LifeEvents/Buying&SellingAHome/BuyingAHomeFaq.jsx';
import HomeownersInsuranceFaq from './components/Guides/LifeEvents/Buying&SellingAHome/HomeownersInsuranceFaq.jsx';
import MortgagesFaq from './components/Guides/LifeEvents/Buying&SellingAHome/MortgagesFaq.jsx';
import HomeownersInsuranceGuide from './components/Guides/LifeEvents/Buying&SellingAHome/HomeownersInsurance.jsx';
import HomeMortgageInterestDeductions from './components/Guides/LifeEvents/Buying&SellingAHome/HomeMortgageInterestDeductions.jsx';
import DeductibilityOfPoints from './components/Guides/LifeEvents/Buying&SellingAHome/DeductibilityOfPoints.jsx';
import SellingYourHomeEffectively from './components/Guides/LifeEvents/Buying&SellingAHome/SellingYourHomeEffectively.jsx';
import SellingYourHomeFaq from './components/Guides/LifeEvents/Buying&SellingAHome/SellingYourHomeFaq.jsx';
import SellingYourHomeMinimizeTax from './components/Guides/LifeEvents/Buying&SellingAHome/SellingYourHomeMinimizeTax.jsx';
import PlanningYourMoveFaq from './components/Guides/LifeEvents/Buying&SellingAHome/PlanningYourMoveFaq.jsx';
import WhichMovingExpensesAreDeductible from './components/Guides/LifeEvents/Buying&SellingAHome/WhichMovingExpensesAreDeductible.jsx';
import DeductionForRealEstateTaxes from './components/Guides/LifeEvents/Buying&SellingAHome/DeductionForRealEstateTaxes.jsx';
import YourNextCar from './components/Guides/LifeEvents/Buying&MaintainingACar/YourNextCar.jsx';
import CarInsurance from './components/Guides/LifeEvents/Buying&MaintainingACar/CarInsurance.jsx';
import BuyingOrLeasingFaq from './components/Guides/LifeEvents/Buying&MaintainingACar/BuyingOrLeasingFaq.jsx';
import CarInsuranceFaq from './components/Guides/LifeEvents/Buying&MaintainingACar/CarInsuranceFaq.jsx';
import MortgageAlternatives from './components/Guides/LifeEvents/GettingALoan/MortgageAlternatives.jsx';
import MortgageLockIns from './components/Guides/LifeEvents/GettingALoan/MortgageLockIns.jsx';
import RefinancingYourMortgage from './components/Guides/LifeEvents/GettingALoan/RefinancingYourMortgage.jsx';
import HomeEquityLoans from './components/Guides/LifeEvents/GettingALoan/HomeEquityLoans.jsx';
import ReverseMortgages from './components/Guides/LifeEvents/GettingALoan/ReverseMortgages.jsx';
import FinancingQuestionsFaq from './components/Guides/LifeEvents/GettingALoan/FinancingQuestionsFaq.jsx';
import LongTermCareInsurance from './components/Guides/LifeEvents/BuyingInsurance/LongTermCareInsurance.jsx';
import Annuities from './components/Guides/LifeEvents/BuyingInsurance/Annuities.jsx';
import AffordableCareAct from './components/Guides/LifeEvents/BuyingInsurance/AffordableCareAct.jsx';
import DisabilityInsuranceFaq from './components/Guides/LifeEvents/BuyingInsurance/DisabilityInsuranceFaq.jsx';
import LongTermCareInsuranceFaq from './components/Guides/LifeEvents/BuyingInsurance/LongTermCareInsuranceFaq.jsx';
import AnnuitiesFaq from './components/Guides/LifeEvents/BuyingInsurance/AnnuitiesFaq.jsx';
import Lawyers from './components/Guides/LifeEvents/ChoosingAProfessional/Lawyers.jsx';
import GoodFinancialAdvice from './components/Guides/LifeEvents/ChoosingAProfessional/GoodFinancialAdvice.jsx';
import ChoosingAProfessionalFaq from './components/Guides/LifeEvents/ChoosingAProfessional/ChoosingAProfessionalFaq.jsx';
import CreditCards from './components/Guides/LifeEvents/CreditImproving/CreditCards.jsx';
import CreditReports from './components/Guides/LifeEvents/CreditImproving/CreditReports.jsx';
import MerchantAbuses from './components/Guides/LifeEvents/CreditImproving/MerchantAbuses.jsx';
import CreditCardRights from './components/Guides/LifeEvents/CreditImproving/CreditCardRights.jsx';
import CreditCardsFaq from './components/Guides/LifeEvents/CreditImproving/CreditCardsFaq.jsx';
import CreditReportsFaq from './components/Guides/LifeEvents/CreditImproving/CreditReportsFaq.jsx';
import FinancialTroubleFaq from './components/Guides/LifeEvents/CreditImproving/FinancialTroubleFaq.jsx';
import CreditRatingFaq from './components/Guides/LifeEvents/CreditImproving/CreditRatingFaq.jsx';
import FinancialTrouble from './components/Guides/LifeEvents/CreditImproving/FinancialTrouble.jsx';
import DevelopingAFinancialPlan from './components/Guides/LifeEvents/DevelopingAFinancialPlan/DevelopingAFinancialPlan.jsx';
import InvestmentOptionsFaq from './components/Guides/LifeEvents/DevelopingAFinancialPlan/InvestmentOptionsFaq.jsx';
import BankAccountsGuide from './components/Guides/LifeEvents/DealingwithYourBank/BankAccounts.jsx';
import BankAccountsFaq from './components/Guides/LifeEvents/DealingwithYourBank/BankAccountsFaq.jsx';
import AtmTransactionsFaq from './components/Guides/LifeEvents/DealingwithYourBank/AtmTransactionsFaq.jsx';
import ApplyingForALoan from './components/Guides/LifeEvents/DealingwithYourBank/ApplyingForALoan.jsx';
import GettingALoanFaq from './components/Guides/LifeEvents/DealingwithYourBank/GettingALoanFaq.jsx';
import LoanQuestionsFaq from './components/Guides/LifeEvents/DealingwithYourBank/LoanQuestionsFaq.jsx';
import PreparingForCollege from './components/Guides/LifeEvents/PreparingforCollege/PreparingForCollege.jsx';
import BankAccounts from './components/Guides/LifeEvents/PreparingforCollege/BankAccounts.jsx';
import GettingMarried from './components/Guides/LifeEvents/GettingMarried/GettingMarried.jsx';
import GettingMarriedFaq from './components/Guides/LifeEvents/GettingMarried/GettingMarriedFaq.jsx';
import GettingMarriedGuidelines from './components/Guides/LifeEvents/GettingMarried/FinancialGuidelines.jsx';
import LifeInsurance from './components/Guides/LifeEvents/GettingMarried/LifeInsurance.jsx';
import LifeInsuranceFaq from './components/Guides/LifeEvents/GettingMarried/LifeInsuranceFaq.jsx';
import YourFinancialPlan from './components/Guides/LifeEvents/GettingMarried/YourFinancialPlan.jsx';
import DocumentLocator from './components/Guides/LifeEvents/GettingMarried/DocumentLocator.jsx';
import Budgeting from './components/Guides/LifeEvents/GettingMarried/Budgeting.jsx';
import PostMortemLetter from './components/Guides/LifeEvents/GettingMarried/PostMortemLetter.jsx';
import RetirementDistributionsWhen from './components/Guides/LifeEvents/GettingMarried/RetirementDistributionsWhen.jsx';
import RetirementDistributionsHow from './components/Guides/LifeEvents/GettingMarried/RetirementDistributionsHow.jsx';
import EstatePlanning from './components/Guides/LifeEvents/GettingMarried/EstatePlanning.jsx';
import Funerals from './components/Guides/LifeEvents/GettingMarried/Funerals.jsx';
import YourRetirementPlan from './components/Guides/LifeEvents/Retirementplan/YourRetirementPlan.jsx';
import SavingMoney from './components/Guides/LifeEvents/GettingMarried/SavingMoney.jsx';
import DisabilityInsurance from './components/Guides/LifeEvents/GettingMarried/DisabilityInsurance.jsx';
import DisabilityBenefits from './components/Guides/LifeEvents/GettingMarried/DisabilityBenefits.jsx';
import HomeownersInsurance from './components/Guides/LifeEvents/GettingMarried/HomeownersInsurance.jsx';
import AssetAllocation from './components/Guides/LifeEvents/GettingMarried/AssetAllocation.jsx';
import SocialSecurityBenefits from './components/Guides/LifeEvents/GettingMarried/SocialSecurityBenefits.jsx';
import InvestmentBasics from './components/Guides/LifeEvents/GettingMarried/InvestmentBasics.jsx';
import SurvivorBenefits from './components/Guides/LifeEvents/GettingMarried/SurvivorBenefits.jsx';
import BuyingOnMargin from './components/Guides/InvestmentStrategies/BuyingOnMargin.jsx';
import FinancialPlanningChecklist from './components/Guides/InvestmentStrategies/FinancialPlanningChecklist.jsx';
import InvestmentClubs from './components/Guides/InvestmentStrategies/InvestmentClubs.jsx';
import SwapTactic from './components/Guides/InvestmentStrategies/SwapTactic.jsx';
import ChangingJobs401k from './components/Guides/InvestmentStrategies/ChangingJobs401k.jsx';
import HowBrokersExecuteTrades from './components/Guides/InvestmentStrategies/HowBrokersExecuteTrades.jsx';
import MutualFunds from './components/Guides/InvestmentStrategies/MutualFunds.jsx';
import MutualFundTaxation from './components/Guides/InvestmentStrategies/MutualFundTaxation.jsx';
import PennyStocks from './components/Guides/InvestmentStrategies/PennyStocks.jsx';
import MutualFundsFaq from './components/Guides/InvestmentStrategies/MutualFundsFaq.jsx';
import StocksFaq from './components/Guides/InvestmentStrategies/StocksFaq.jsx';
import BondsFaq from './components/Guides/InvestmentStrategies/BondsFaq.jsx';
import TaxPlanningForSmallBusiness from './components/Guides/TaxStrategies/TaxPlanningForSmallBusiness.jsx';
import BiggestMisconceptions from './components/Guides/TaxStrategies/BiggestMisconceptions.jsx';
import SevenWaysToSaveTaxes from './components/Guides/TaxStrategies/SevenWaysToSaveTaxes.jsx';
import HomeOfficeDeduction from './components/Guides/TaxStrategies/HomeOfficeDeduction.jsx';
import VacationTaxDeduction from './components/Guides/TaxStrategies/VacationTaxDeduction.jsx';
import RetirementPlanOptions from './components/Guides/TaxStrategies/RetirementPlanOptions.jsx';
import BusinessRecordkeepingFaq from './components/Guides/TaxStrategies/BusinessRecordkeepingFaq.jsx';
import DeathOfALovedOne from './components/Guides/LifeEvents/DeathOfALovedOne/DeathOfALovedOne.jsx';
import DeathOfASpouse from './components/Guides/LifeEvents/DeathOfALovedOne/DeathOfASpouse.jsx';
import DeathOfALovedOneFaq from './components/Guides/LifeEvents/CopingwithDeathofaLovedOne/DeathOfALovedOneFaq.jsx';
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
        <Route path="guides/life-events/becoming-a-parent" element={<BecomingAParent />} />
        <Route path="guides/life-events/dealing-with-your-bank/bank-accounts" element={<BankAccountsGuide />} />
        <Route path="guides/life-events/dealing-with-your-bank/bank-accounts-faq" element={<BankAccountsFaq />} />
        <Route path="guides/life-events/dealing-with-your-bank/atm-transactions-faq" element={<AtmTransactionsFaq />} />
        <Route path="guides/life-events/dealing-with-your-bank/applying-for-a-loan" element={<ApplyingForALoan />} />
        <Route path="guides/life-events/dealing-with-your-bank/getting-a-loan-faq" element={<GettingALoanFaq />} />
        <Route path="guides/life-events/dealing-with-your-bank/loan-questions-faq" element={<LoanQuestionsFaq />} />
        <Route path="guides/life-events/dealing-with-your-bank" element={<DealingWithYourBank />} />
        <Route path="guides/life-events/improving-your-credit" element={<ImprovingYourCredit />} />
        <Route path="guides/life-events/choosing-a-professional" element={<ChoosingAProfessional />} />
        <Route path="guides/life-events/buying-insurance" element={<BuyingInsurance />} />
        <Route path="guides/life-events/getting-a-loan" element={<GettingALoan />} />
        <Route path="guides/life-events/planning-for-retirement" element={<PlanningForRetirement />} />
        <Route path="guides/life-events/planning-your-estate" element={<PlanningYourEstate />} />
        <Route path="guides/life-events/making-charitable-contributions" element={<MakingCharitableContributions />} />
        <Route path="guides/life-events/making-charitable-contributions/giving-wisely" element={<GivingWisely />} />
        <Route path="guides/life-events/making-charitable-contributions/contributions-of-property" element={<ContributionsOfProperty />} />
        <Route path="guides/life-events/making-charitable-contributions/records-to-keep" element={<RecordsToKeep />} />
        <Route path="guides/life-events/making-charitable-contributions/advanced-charity-techniques" element={<AdvancedCharityTechniques />} />
        <Route path="guides/life-events/making-charitable-contributions/fraudulent-charities" element={<FraudulentCharities />} />
        <Route path="guides/life-events/making-charitable-contributions/charitable-contributions-faq" element={<CharitableContributionsFaq />} />
        <Route path="guides/life-events/making-charitable-contributions/charitable-deductions-faq" element={<CharitableDeductionsFaq />} />
        <Route path="guides/life-events/avoiding-scams" element={<AvoidingScams />} />
        <Route path="guides/life-events/avoiding-scams/con-artists" element={<ConArtists />} />
        <Route path="guides/life-events/avoiding-scams/avoiding-scams-faq" element={<AvoidingScamsFaq />} />
        <Route path="guides/life-events/getting-divorced-or-becoming-widowed" element={<GettingDivorcedOrBecomingWidowed />} />
        <Route path="guides/life-events/getting-divorced-or-becoming-widowed/getting-divorced-faq" element={<GettingDivorcedFaq />} />
        <Route path="guides/life-events/coping-with-major-illness" element={<CopingWithMajorIllness />} />
        <Route path="guides/life-events/improving-your-retirement" element={<ImprovingYourRetirement />} />
        <Route path="guides/life-events/improving-your-retirement/your-pension" element={<YourPension />} />
        <Route path="guides/life-events/improving-your-retirement/tap-retirement-money-early" element={<TapRetirementMoneyEarly />} />
        <Route path="guides/life-events/handling-other-situations" element={<HandlingOtherSituations />} />
        <Route path="guides/life-events/handling-other-situations/recordkeeping-guide" element={<RecordkeepingGuide />} />
        <Route path="guides/life-events/handling-other-situations/other-situations-faq" element={<OtherSituationsFaq />} />
        <Route path="guides/business-strategies/starting-a-business" element={<StartingABusiness />} />
        <Route path="guides/business-strategies/running-your-business" element={<RunningYourBusiness />} />
        <Route path="guides/business-strategies/growing-your-business" element={<GrowingYourBusiness />} />
        <Route path="guides/business-strategies/securing-business-loans" element={<SecuringBusinessLoans />} />
        <Route path="guides/business-strategies/selling-exiting-your-business" element={<SellingExitingYourBusiness />} />
        <Route path="guides/business-strategies/selling-exiting-your-business/business-succession" element={<BusinessSuccession />} />
        <Route path="guides/business-strategies/selling-exiting-your-business/passing-on-family-business" element={<PassingOnFamilyBusiness />} />
        <Route path="guides/business-strategies/selling-exiting-your-business/winning-exit-plan" element={<WinningExitPlan />} />
        <Route path="guides/business-strategies/securing-business-loans/show-me-the-money" element={<ShowMeTheMoney />} />
        <Route path="guides/business-strategies/growing-your-business/evaluating-your-market" element={<EvaluatingYourMarket />} />
        <Route path="guides/business-strategies/growing-your-business/pricing-products-and-services" element={<PricingProductsAndServices />} />
        <Route path="guides/business-strategies/growing-your-business/advertising-program" element={<AdvertisingProgram />} />
        <Route path="guides/business-strategies/growing-your-business/referrals" element={<Referrals />} />
        <Route path="guides/business-strategies/growing-your-business/customer-trust" element={<CustomerTrust />} />
        <Route path="guides/business-strategies/growing-your-business/customer-appreciation" element={<CustomerAppreciation />} />
        <Route path="guides/business-strategies/growing-your-business/unique-selling-proposition" element={<UniqueSellingProposition />} />
        <Route path="guides/business-strategies/growing-your-business/customer-lifetime-value" element={<CustomerLifetimeValue />} />
        <Route path="guides/business-strategies/growing-your-business/grow-with-less-stress" element={<GrowWithLessStress />} />
        <Route path="guides/business-strategies/growing-your-business/marketing-pricing-faq" element={<MarketingPricingFaq />} />
        <Route path="guides/business-strategies/running-your-business/travel-entertainment-faq" element={<TravelEntertainmentFaq />} />
        <Route path="guides/business-strategies/running-your-business/employee-benefits-faq" element={<EmployeeBenefitsFaq />} />
        <Route path="guides/business-strategies/running-your-business/cash-flow" element={<CashFlow />} />
        <Route path="guides/business-strategies/running-your-business/travel-entertainment" element={<TravelEntertainment />} />
        <Route path="guides/business-strategies/running-your-business/employee-benefits" element={<EmployeeBenefits />} />
        <Route path="guides/business-strategies/running-your-business/financial-planning-tips" element={<FinancialPlanningTips />} />
        <Route path="guides/business-strategies/starting-a-business/three-things-you-must-know" element={<ThreeThingsYouMustKnow />} />
        <Route path="guides/business-strategies/starting-a-business/form-of-business-organization" element={<FormOfBusinessOrganization />} />
        <Route path="guides/business-strategies/starting-a-business/advantages-of-incorporating" element={<AdvantagesOfIncorporating />} />
        <Route path="guides/business-strategies/starting-a-business/advantages-of-llcs" element={<AdvantagesOfLlcs />} />
        <Route path="guides/business-strategies/starting-a-business/business-plans" element={<BusinessPlans />} />
        <Route path="guides/business-strategies/starting-a-business/home-based-business" element={<HomeBasedBusiness />} />
        <Route path="guides/business-strategies/starting-a-business/raising-capital" element={<RaisingCapital />} />
        <Route path="guides/business-strategies/starting-a-business/business-forms-faq" element={<BusinessFormsFaq />} />
        <Route path="guides/business-strategies/starting-a-business/incorporating-faq" element={<IncorporatingFaq />} />
        <Route path="guides/business-strategies/starting-a-business/limited-liability-companies-faq" element={<LimitedLiabilityCompaniesFaq />} />
        <Route path="guides/business-strategies/starting-a-business/small-business-faq" element={<SmallBusinessFaq />} />
        <Route path="guides/business-strategies/starting-a-business/recordkeeping-faq" element={<RecordkeepingFaq />} />
        <Route path="guides/life-events/planning-your-estate/living-trusts-faq" element={<LivingTrustsFaq />} />
        <Route path="guides/life-events/planning-your-estate/wills-faq" element={<WillsFaq />} />
        <Route path="guides/life-events/planning-your-estate/estate-and-taxes-faq" element={<EstateAndTaxesFaq />} />
        <Route path="guides/life-events/planning-for-retirement/your-retirement-plan" element={<YourRetirementPlan />} />
        <Route path="guides/life-events/planning-for-retirement/retirement-saving-tips" element={<RetirementSavingTips />} />
        <Route path="guides/life-events/planning-for-retirement/count-on-social-security" element={<CountOnSocialSecurity />} />
        <Route path="guides/life-events/planning-for-retirement/roth-iras" element={<RothIras />} />
        <Route path="guides/life-events/planning-for-retirement/simple-plan" element={<SimplePlan />} />
        <Route path="guides/life-events/planning-for-retirement/financial-plan-faq" element={<FinancialPlanFaq />} />
        <Route path="guides/life-events/planning-for-retirement/social-security-benefits-faq" element={<SocialSecurityBenefitsFaq />} />
        <Route path="guides/life-events/planning-for-retirement/retirement-plan-distributions-faq" element={<RetirementDistributionsFaq />} />
        <Route path="guides/life-events/planning-for-retirement/retirement-assets-faq" element={<RetirementAssetsFaq />} />
        <Route path="guides/life-events/planning-for-retirement/traditional-vs-roth-iras-faq" element={<TraditionalVsRothIrasFaq />} />
        <Route path="guides/life-events/buying-and-maintaining-a-car" element={<BuyingMaintainingACar />} />
        <Route path="guides/life-events/buying-and-selling-a-home" element={<BuyingSellingAHome />} />
        <Route path="guides/life-events/buying-and-selling-a-home/buying-a-home" element={<BuyingAHome />} />
        <Route path="guides/life-events/buying-and-selling-a-home/buying-a-home-faq" element={<BuyingAHomeFaq />} />
        <Route path="guides/life-events/buying-and-selling-a-home/homeowners-insurance-faq" element={<HomeownersInsuranceFaq />} />
        <Route path="guides/life-events/buying-and-selling-a-home/mortgages-faq" element={<MortgagesFaq />} />
        <Route path="guides/life-events/buying-and-selling-a-home/selling-your-home-faq" element={<SellingYourHomeFaq />} />
        <Route path="guides/life-events/buying-and-selling-a-home/planning-your-move-faq" element={<PlanningYourMoveFaq />} />
        <Route path="guides/life-events/buying-and-selling-a-home/homeowners-insurance" element={<HomeownersInsuranceGuide />} />
        <Route path="guides/life-events/buying-and-selling-a-home/home-mortgage-interest-deductions" element={<HomeMortgageInterestDeductions />} />
        <Route path="guides/life-events/buying-and-selling-a-home/the-deductibility-of-points" element={<DeductibilityOfPoints />} />
        <Route path="guides/life-events/buying-and-selling-a-home/selling-your-home-effectively" element={<SellingYourHomeEffectively />} />
        <Route path="guides/life-events/buying-and-selling-a-home/selling-your-home-minimize-tax" element={<SellingYourHomeMinimizeTax />} />
        <Route path="guides/life-events/buying-and-selling-a-home/which-moving-expenses-are-deductible" element={<WhichMovingExpensesAreDeductible />} />
        <Route path="guides/life-events/buying-and-selling-a-home/the-deduction-for-real-estate-taxes" element={<DeductionForRealEstateTaxes />} />
        <Route path="guides/life-events/buying-and-maintaining-a-car/buy-or-lease" element={<YourNextCar />} />
        <Route path="guides/life-events/buying-and-maintaining-a-car/car-insurance" element={<CarInsurance />} />
        <Route path="guides/life-events/buying-and-maintaining-a-car/buying-or-leasing-faq" element={<BuyingOrLeasingFaq />} />
        <Route path="guides/life-events/buying-and-maintaining-a-car/car-insurance-faq" element={<CarInsuranceFaq />} />
        <Route path="guides/life-events/getting-a-loan/mortgage-alternatives" element={<MortgageAlternatives />} />
        <Route path="guides/life-events/getting-a-loan/mortgage-lock-ins" element={<MortgageLockIns />} />
        <Route path="guides/life-events/getting-a-loan/refinancing-your-mortgage" element={<RefinancingYourMortgage />} />
        <Route path="guides/life-events/getting-a-loan/home-equity-loans" element={<HomeEquityLoans />} />
        <Route path="guides/life-events/getting-a-loan/reverse-mortgages" element={<ReverseMortgages />} />
        <Route path="guides/life-events/getting-a-loan/financing-questions-faq" element={<FinancingQuestionsFaq />} />
        {/* The Car Insurance guide's earlier addresses, before it moved to Buying & Maintaining A Car. */}
        <Route
          path="guides/life-events/buying-insurance/car-insurance"
          element={<Navigate to="/guides/life-events/buying-and-maintaining-a-car/car-insurance" replace />}
        />
        <Route path="guides/life-events/buying-insurance/long-term-care-insurance" element={<LongTermCareInsurance />} />
        <Route path="guides/life-events/buying-insurance/annuities" element={<Annuities />} />
        <Route path="guides/life-events/buying-insurance/the-affordable-care-act" element={<AffordableCareAct />} />
        <Route
          path="guides/life-events/buying-insurance/homeowners-insurance-faq"
          element={<Navigate to="/guides/life-events/buying-and-selling-a-home/homeowners-insurance-faq" replace />}
        />
        {/* The Car Insurance FAQ's earlier address, before it moved to Buying & Maintaining A Car. */}
        <Route
          path="guides/life-events/buying-insurance/car-insurance-faq"
          element={<Navigate to="/guides/life-events/buying-and-maintaining-a-car/car-insurance-faq" replace />}
        />
        <Route path="guides/life-events/buying-insurance/disability-insurance-faq" element={<DisabilityInsuranceFaq />} />
        <Route path="guides/life-events/buying-insurance/long-term-care-insurance-faq" element={<LongTermCareInsuranceFaq />} />
        <Route path="guides/life-events/buying-insurance/annuities-faq" element={<AnnuitiesFaq />} />
        <Route path="guides/life-events/choosing-a-professional/lawyers" element={<Lawyers />} />
        <Route path="guides/life-events/choosing-a-professional/good-financial-advice" element={<GoodFinancialAdvice />} />
        <Route path="guides/life-events/choosing-a-professional/choosing-a-professional-faq" element={<ChoosingAProfessionalFaq />} />
        <Route path="guides/life-events/improving-your-credit/credit-cards" element={<CreditCards />} />
        <Route path="guides/life-events/improving-your-credit/credit-reports" element={<CreditReports />} />
        <Route path="guides/life-events/improving-your-credit/merchant-credit-card-abuses" element={<MerchantAbuses />} />
        <Route path="guides/life-events/improving-your-credit/credit-card-rights" element={<CreditCardRights />} />
        <Route path="guides/life-events/improving-your-credit/credit-cards-faq" element={<CreditCardsFaq />} />
        <Route path="guides/life-events/improving-your-credit/credit-reports-faq" element={<CreditReportsFaq />} />
        <Route path="guides/life-events/improving-your-credit/financial-trouble-faq" element={<FinancialTroubleFaq />} />
        <Route path="guides/life-events/improving-your-credit/credit-rating-faq" element={<CreditRatingFaq />} />
        <Route path="guides/life-events/improving-your-credit/getting-out-of-financial-trouble" element={<FinancialTrouble />} />
        <Route path="guides/life-events/developing-a-financial-plan" element={<DevelopingAFinancialPlan />} />
        {/* The Developing a Financial Plan FAQ's earlier address, before it moved to Planning For Retirement. */}
        <Route
          path="guides/life-events/developing-a-financial-plan/financial-plan-faq"
          element={<Navigate to="/guides/life-events/planning-for-retirement/financial-plan-faq" replace />}
        />
        <Route path="guides/life-events/developing-a-financial-plan/investment-options-faq" element={<InvestmentOptionsFaq />} />
        <Route path="guides/life-events/preparing-for-college" element={<PreparingForCollege />} />
        {/* The Refinancing and Home Equity guides' earlier addresses, before they moved to Getting a Loan. */}
        <Route
          path="guides/life-events/preparing-for-college/refinancing-your-mortgage"
          element={<Navigate to="/guides/life-events/getting-a-loan/refinancing-your-mortgage" replace />}
        />
        <Route
          path="guides/life-events/preparing-for-college/home-equity-loans"
          element={<Navigate to="/guides/life-events/getting-a-loan/home-equity-loans" replace />}
        />
        {/* The Credit Cards guide's earlier address, before it moved to Improving Your Credit. */}
        <Route
          path="guides/life-events/preparing-for-college/credit-cards"
          element={<Navigate to="/guides/life-events/improving-your-credit/credit-cards" replace />}
        />
        <Route path="guides/life-events/preparing-for-college/bank-accounts" element={<BankAccounts />} />
        <Route
          path="guides/life-events/preparing-for-college/car-insurance"
          element={<Navigate to="/guides/life-events/buying-and-maintaining-a-car/car-insurance" replace />}
        />
        <Route path="guides/life-events/getting-married" element={<GettingMarried />} />
        <Route path="guides/life-events/getting-married/getting-married-faq" element={<GettingMarriedFaq />} />
        <Route path="guides/life-events/getting-married/financial-guidelines" element={<GettingMarriedGuidelines />} />
        <Route path="guides/life-events/getting-married/life-insurance" element={<LifeInsurance />} />
        <Route path="guides/life-events/getting-married/life-insurance-faq" element={<LifeInsuranceFaq />} />
        <Route path="guides/life-events/getting-married/your-financial-plan" element={<YourFinancialPlan />} />
        <Route path="guides/life-events/getting-married/document-locator" element={<DocumentLocator />} />
        <Route path="guides/life-events/getting-married/budgeting" element={<Budgeting />} />
        {/* The Credit Reports guide's earlier address, before it moved to Improving Your Credit. */}
        <Route
          path="guides/life-events/getting-married/credit-reports"
          element={<Navigate to="/guides/life-events/improving-your-credit/credit-reports" replace />}
        />
        <Route path="guides/life-events/getting-married/post-mortem-letter" element={<PostMortemLetter />} />
        <Route path="guides/life-events/getting-married/retirement-distributions-when" element={<RetirementDistributionsWhen />} />
        <Route path="guides/life-events/getting-married/retirement-distributions-how" element={<RetirementDistributionsHow />} />
        <Route path="guides/life-events/getting-married/estate-planning" element={<EstatePlanning />} />
        <Route path="guides/life-events/getting-married/funerals" element={<Funerals />} />
        {/* The Your Retirement Plan guide's earlier address, before it moved to Planning For Retirement. */}
        <Route
          path="guides/life-events/getting-married/your-retirement-plan"
          element={<Navigate to="/guides/life-events/planning-for-retirement/your-retirement-plan" replace />}
        />
        <Route path="guides/life-events/getting-married/saving-money" element={<SavingMoney />} />
        <Route path="guides/life-events/getting-married/disability-insurance" element={<DisabilityInsurance />} />
        <Route path="guides/life-events/getting-married/disability-benefits" element={<DisabilityBenefits />} />
        <Route path="guides/life-events/getting-married/homeowners-insurance" element={<HomeownersInsurance />} />
        <Route path="guides/life-events/getting-married/asset-allocation" element={<AssetAllocation />} />
        <Route path="guides/life-events/getting-married/social-security-benefits" element={<SocialSecurityBenefits />} />
        <Route path="guides/life-events/getting-married/investment-basics" element={<InvestmentBasics />} />
        {/* The Investing In Mutual Funds guide's earlier address, before it moved to Investment Strategies. */}
        <Route
          path="guides/life-events/getting-married/investing-in-mutual-funds"
          element={<Navigate to="/guides/investment-strategies/investing-in-mutual-funds" replace />}
        />
        <Route path="guides/life-events/getting-married/survivor-benefits" element={<SurvivorBenefits />} />
        <Route path="guides/investment-strategies/buying-on-margin" element={<BuyingOnMargin />} />
        <Route path="guides/investment-strategies/financial-planning-checklist" element={<FinancialPlanningChecklist />} />
        <Route path="guides/investment-strategies/investment-clubs" element={<InvestmentClubs />} />
        <Route path="guides/investment-strategies/swap-tactic-lets-you-defer-capital-gains-tax" element={<SwapTactic />} />
        <Route path="guides/investment-strategies/changing-jobs-401k" element={<ChangingJobs401k />} />
        <Route path="guides/investment-strategies/how-brokers-execute-trades" element={<HowBrokersExecuteTrades />} />
        <Route path="guides/investment-strategies/investing-in-mutual-funds" element={<MutualFunds />} />
        <Route path="guides/investment-strategies/mutual-fund-taxation" element={<MutualFundTaxation />} />
        <Route path="guides/investment-strategies/penny-stocks" element={<PennyStocks />} />
        <Route path="guides/investment-strategies/mutual-funds-faq" element={<MutualFundsFaq />} />
        <Route path="guides/investment-strategies/stocks-faq" element={<StocksFaq />} />
        <Route path="guides/investment-strategies/bonds-faq" element={<BondsFaq />} />
        <Route path="guides/tax-strategies/tax-planning-for-small-business-owners" element={<TaxPlanningForSmallBusiness />} />
        <Route path="guides/tax-strategies/7-biggest-misconceptions" element={<BiggestMisconceptions />} />
        <Route path="guides/tax-strategies/7-ways-to-save-even-more-income-taxes" element={<SevenWaysToSaveTaxes />} />
        <Route path="guides/tax-strategies/home-office-deduction" element={<HomeOfficeDeduction />} />
        <Route path="guides/tax-strategies/turn-your-vacation-into-a-tax-deduction" element={<VacationTaxDeduction />} />
        <Route path="guides/tax-strategies/retirement-plan-options-for-small-businesses" element={<RetirementPlanOptions />} />
        <Route path="guides/tax-strategies/recordkeeping-faq" element={<BusinessRecordkeepingFaq />} />
        <Route path="guides/life-events/death-of-a-loved-one" element={<DeathOfALovedOne />} />
        <Route path="guides/life-events/death-of-a-loved-one/death-of-a-spouse" element={<DeathOfASpouse />} />
        <Route path="guides/life-events/death-of-a-loved-one/death-of-a-loved-one-faq" element={<DeathOfALovedOneFaq />} />
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

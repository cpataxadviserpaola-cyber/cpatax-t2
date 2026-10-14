import { lazy } from 'react';
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
import Newsletter from './pages/Newsletter.jsx';
import FinancialPlanning from './pages/FinancialPlanning.jsx';
import Privacy from './pages/Privacy.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import NotFound from './pages/NotFound.jsx';
import { services } from './data/services.js';

// Each guide's code downloads when the guide is first opened, so a visit doesn't load all of them.
const BecomingAParent = lazy(() => import('./components/Guides/LifeEvents/BecomingAParent/BecomingAParent.jsx'));
const DealingWithYourBank = lazy(() => import('./components/Guides/LifeEvents/DealingwithYourBank/DealingWithYourBank.jsx'));
const ImprovingYourCredit = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/ImprovingYourCredit.jsx'));
const ChoosingAProfessional = lazy(() => import('./components/Guides/LifeEvents/ChoosingAProfessional/ChoosingAProfessional.jsx'));
const BuyingInsurance = lazy(() => import('./components/Guides/LifeEvents/BuyingInsurance/BuyingInsurance.jsx'));
const GettingALoan = lazy(() => import('./components/Guides/LifeEvents/GettingALoan/GettingALoan.jsx'));
const PlanningForRetirement = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/PlanningForRetirement.jsx'));
const PlanningYourEstate = lazy(() => import('./components/Guides/LifeEvents/PlanningYourEstate/PlanningYourEstate.jsx'));
const MakingCharitableContributions = lazy(() => import('./components/Guides/LifeEvents/MakingCharitableContributions/MakingCharitableContributions.jsx'));
const GivingWisely = lazy(() => import('./components/Guides/LifeEvents/MakingCharitableContributions/GivingWisely.jsx'));
const ContributionsOfProperty = lazy(() => import('./components/Guides/LifeEvents/MakingCharitableContributions/ContributionsOfProperty.jsx'));
const RecordsToKeep = lazy(() => import('./components/Guides/LifeEvents/MakingCharitableContributions/RecordsToKeep.jsx'));
const AdvancedCharityTechniques = lazy(() => import('./components/Guides/LifeEvents/MakingCharitableContributions/AdvancedCharityTechniques.jsx'));
const FraudulentCharities = lazy(() => import('./components/Guides/LifeEvents/MakingCharitableContributions/FraudulentCharities.jsx'));
const CharitableContributionsFaq = lazy(() => import('./components/Guides/LifeEvents/MakingCharitableContributions/CharitableContributionsFaq.jsx'));
const CharitableDeductionsFaq = lazy(() => import('./components/Guides/LifeEvents/MakingCharitableContributions/CharitableDeductionsFaq.jsx'));
const AvoidingScams = lazy(() => import('./components/Guides/LifeEvents/AvoidingScams/AvoidingScams.jsx'));
const ConArtists = lazy(() => import('./components/Guides/LifeEvents/AvoidingScams/ConArtists.jsx'));
const AvoidingScamsFaq = lazy(() => import('./components/Guides/LifeEvents/AvoidingScams/AvoidingScamsFaq.jsx'));
const GettingDivorcedOrBecomingWidowed = lazy(() => import('./components/Guides/LifeEvents/GettingDivorcedorBecomingWidowed/GettingDivorcedOrBecomingWidowed.jsx'));
const GettingDivorcedFaq = lazy(() => import('./components/Guides/LifeEvents/GettingDivorcedorBecomingWidowed/GettingDivorcedFaq.jsx'));
const CopingWithMajorIllness = lazy(() => import('./components/Guides/LifeEvents/CopingwithMajorillness/CopingWithMajorIllness.jsx'));
const ImprovingYourRetirement = lazy(() => import('./components/Guides/LifeEvents/ImprovingYourRetirement/ImprovingYourRetirement.jsx'));
const YourPension = lazy(() => import('./components/Guides/LifeEvents/ImprovingYourRetirement/YourPension.jsx'));
const TapRetirementMoneyEarly = lazy(() => import('./components/Guides/LifeEvents/ImprovingYourRetirement/TapRetirementMoneyEarly.jsx'));
const HandlingOtherSituations = lazy(() => import('./components/Guides/LifeEvents/HandlingOtherSituations/HandlingOtherSituations.jsx'));
const RecordkeepingGuide = lazy(() => import('./components/Guides/LifeEvents/HandlingOtherSituations/RecordkeepingGuide.jsx'));
const OtherSituationsFaq = lazy(() => import('./components/Guides/LifeEvents/HandlingOtherSituations/OtherSituationsFaq.jsx'));
const StartingABusiness = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/StartingABusiness.jsx'));
const RunningYourBusiness = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/RunningYourBusiness.jsx'));
const GrowingYourBusiness = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/GrowingYourBusiness.jsx'));
const SecuringBusinessLoans = lazy(() => import('./components/Guides/BusinessStrategies/SecuringBusinessLoans/SecuringBusinessLoans.jsx'));
const SellingExitingYourBusiness = lazy(() => import('./components/Guides/BusinessStrategies/SellingExitingYourBusiness/SellingExitingYourBusiness.jsx'));
const BusinessSuccession = lazy(() => import('./components/Guides/BusinessStrategies/SellingExitingYourBusiness/BusinessSuccession.jsx'));
const PassingOnFamilyBusiness = lazy(() => import('./components/Guides/BusinessStrategies/SellingExitingYourBusiness/PassingOnFamilyBusiness.jsx'));
const WinningExitPlan = lazy(() => import('./components/Guides/BusinessStrategies/SellingExitingYourBusiness/WinningExitPlan.jsx'));
const ShowMeTheMoney = lazy(() => import('./components/Guides/BusinessStrategies/SecuringBusinessLoans/ShowMeTheMoney.jsx'));
const EvaluatingYourMarket = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/EvaluatingYourMarket.jsx'));
const PricingProductsAndServices = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/PricingProductsAndServices.jsx'));
const AdvertisingProgram = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/AdvertisingProgram.jsx'));
const Referrals = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/Referrals.jsx'));
const CustomerTrust = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/CustomerTrust.jsx'));
const CustomerAppreciation = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/CustomerAppreciation.jsx'));
const UniqueSellingProposition = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/UniqueSellingProposition.jsx'));
const CustomerLifetimeValue = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/CustomerLifetimeValue.jsx'));
const GrowWithLessStress = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/GrowWithLessStress.jsx'));
const MarketingPricingFaq = lazy(() => import('./components/Guides/BusinessStrategies/GrowingYourBusiness/MarketingPricingFaq.jsx'));
const TravelEntertainmentFaq = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/TravelEntertainmentFaq.jsx'));
const EmployeeBenefitsFaq = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/EmployeeBenefitsFaq.jsx'));
const CashFlow = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/CashFlow.jsx'));
const TravelEntertainment = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/TravelEntertainment.jsx'));
const EmployeeBenefits = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/EmployeeBenefits.jsx'));
const FinancialPlanningTips = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RunningYourBusiness/FinancialPlanningTips.jsx'));
const ThreeThingsYouMustKnow = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/ThreeThingsYouMustKnow.jsx'));
const FormOfBusinessOrganization = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/FormOfBusinessOrganization.jsx'));
const AdvantagesOfIncorporating = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/AdvantagesOfIncorporating.jsx'));
const AdvantagesOfLlcs = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/AdvantagesOfLlcs.jsx'));
const BusinessPlans = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/BusinessPlans.jsx'));
const HomeBasedBusiness = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/HomeBasedBusiness.jsx'));
const RaisingCapital = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RaisingCapital.jsx'));
const BusinessFormsFaq = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/BusinessFormsFaq.jsx'));
const IncorporatingFaq = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/IncorporatingFaq.jsx'));
const LimitedLiabilityCompaniesFaq = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/LimitedLiabilityCompaniesFaq.jsx'));
const SmallBusinessFaq = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/SmallBusinessFaq.jsx'));
const RecordkeepingFaq = lazy(() => import('./components/Guides/BusinessStrategies/StartingABusiness/RecordkeepingFaq.jsx'));
const LivingTrustsFaq = lazy(() => import('./components/Guides/LifeEvents/PlanningYourEstate/LivingTrustsFaq.jsx'));
const WillsFaq = lazy(() => import('./components/Guides/LifeEvents/PlanningYourEstate/WillsFaq.jsx'));
const EstateAndTaxesFaq = lazy(() => import('./components/Guides/LifeEvents/PlanningYourEstate/EstateAndTaxesFaq.jsx'));
const RetirementSavingTips = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/RetirementSavingTips.jsx'));
const CountOnSocialSecurity = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/CountOnSocialSecurity.jsx'));
const RothIras = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/RothIras.jsx'));
const SimplePlan = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/SimplePlan.jsx'));
const FinancialPlanFaq = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/FinancialPlanFaq.jsx'));
const SocialSecurityBenefitsFaq = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/SocialSecurityBenefitsFaq.jsx'));
const RetirementDistributionsFaq = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/RetirementDistributionsFaq.jsx'));
const RetirementAssetsFaq = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/RetirementAssetsFaq.jsx'));
const TraditionalVsRothIrasFaq = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/TraditionalVsRothIrasFaq.jsx'));
const BuyingMaintainingACar = lazy(() => import('./components/Guides/LifeEvents/Buying&MaintainingACar/BuyingMaintainingACar.jsx'));
const BuyingSellingAHome = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/BuyingSellingAHome.jsx'));
const BuyingAHome = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/BuyingAHome.jsx'));
const BuyingAHomeFaq = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/BuyingAHomeFaq.jsx'));
const HomeownersInsuranceFaq = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/HomeownersInsuranceFaq.jsx'));
const MortgagesFaq = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/MortgagesFaq.jsx'));
const HomeownersInsuranceGuide = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/HomeownersInsurance.jsx'));
const HomeMortgageInterestDeductions = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/HomeMortgageInterestDeductions.jsx'));
const DeductibilityOfPoints = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/DeductibilityOfPoints.jsx'));
const SellingYourHomeEffectively = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/SellingYourHomeEffectively.jsx'));
const SellingYourHomeFaq = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/SellingYourHomeFaq.jsx'));
const SellingYourHomeMinimizeTax = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/SellingYourHomeMinimizeTax.jsx'));
const PlanningYourMoveFaq = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/PlanningYourMoveFaq.jsx'));
const WhichMovingExpensesAreDeductible = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/WhichMovingExpensesAreDeductible.jsx'));
const DeductionForRealEstateTaxes = lazy(() => import('./components/Guides/LifeEvents/Buying&SellingAHome/DeductionForRealEstateTaxes.jsx'));
const YourNextCar = lazy(() => import('./components/Guides/LifeEvents/Buying&MaintainingACar/YourNextCar.jsx'));
const CarInsurance = lazy(() => import('./components/Guides/LifeEvents/Buying&MaintainingACar/CarInsurance.jsx'));
const BuyingOrLeasingFaq = lazy(() => import('./components/Guides/LifeEvents/Buying&MaintainingACar/BuyingOrLeasingFaq.jsx'));
const CarInsuranceFaq = lazy(() => import('./components/Guides/LifeEvents/Buying&MaintainingACar/CarInsuranceFaq.jsx'));
const MortgageAlternatives = lazy(() => import('./components/Guides/LifeEvents/GettingALoan/MortgageAlternatives.jsx'));
const MortgageLockIns = lazy(() => import('./components/Guides/LifeEvents/GettingALoan/MortgageLockIns.jsx'));
const RefinancingYourMortgage = lazy(() => import('./components/Guides/LifeEvents/GettingALoan/RefinancingYourMortgage.jsx'));
const HomeEquityLoans = lazy(() => import('./components/Guides/LifeEvents/GettingALoan/HomeEquityLoans.jsx'));
const ReverseMortgages = lazy(() => import('./components/Guides/LifeEvents/GettingALoan/ReverseMortgages.jsx'));
const FinancingQuestionsFaq = lazy(() => import('./components/Guides/LifeEvents/GettingALoan/FinancingQuestionsFaq.jsx'));
const LongTermCareInsurance = lazy(() => import('./components/Guides/LifeEvents/BuyingInsurance/LongTermCareInsurance.jsx'));
const Annuities = lazy(() => import('./components/Guides/LifeEvents/BuyingInsurance/Annuities.jsx'));
const AffordableCareAct = lazy(() => import('./components/Guides/LifeEvents/BuyingInsurance/AffordableCareAct.jsx'));
const DisabilityInsuranceFaq = lazy(() => import('./components/Guides/LifeEvents/BuyingInsurance/DisabilityInsuranceFaq.jsx'));
const LongTermCareInsuranceFaq = lazy(() => import('./components/Guides/LifeEvents/BuyingInsurance/LongTermCareInsuranceFaq.jsx'));
const AnnuitiesFaq = lazy(() => import('./components/Guides/LifeEvents/BuyingInsurance/AnnuitiesFaq.jsx'));
const Lawyers = lazy(() => import('./components/Guides/LifeEvents/ChoosingAProfessional/Lawyers.jsx'));
const GoodFinancialAdvice = lazy(() => import('./components/Guides/LifeEvents/ChoosingAProfessional/GoodFinancialAdvice.jsx'));
const ChoosingAProfessionalFaq = lazy(() => import('./components/Guides/LifeEvents/ChoosingAProfessional/ChoosingAProfessionalFaq.jsx'));
const CreditCards = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/CreditCards.jsx'));
const CreditReports = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/CreditReports.jsx'));
const MerchantAbuses = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/MerchantAbuses.jsx'));
const CreditCardRights = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/CreditCardRights.jsx'));
const CreditCardsFaq = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/CreditCardsFaq.jsx'));
const CreditReportsFaq = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/CreditReportsFaq.jsx'));
const FinancialTroubleFaq = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/FinancialTroubleFaq.jsx'));
const CreditRatingFaq = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/CreditRatingFaq.jsx'));
const FinancialTrouble = lazy(() => import('./components/Guides/LifeEvents/CreditImproving/FinancialTrouble.jsx'));
const DevelopingAFinancialPlan = lazy(() => import('./components/Guides/LifeEvents/DevelopingAFinancialPlan/DevelopingAFinancialPlan.jsx'));
const InvestmentOptionsFaq = lazy(() => import('./components/Guides/LifeEvents/DevelopingAFinancialPlan/InvestmentOptionsFaq.jsx'));
const BankAccountsGuide = lazy(() => import('./components/Guides/LifeEvents/DealingwithYourBank/BankAccounts.jsx'));
const BankAccountsFaq = lazy(() => import('./components/Guides/LifeEvents/DealingwithYourBank/BankAccountsFaq.jsx'));
const AtmTransactionsFaq = lazy(() => import('./components/Guides/LifeEvents/DealingwithYourBank/AtmTransactionsFaq.jsx'));
const ApplyingForALoan = lazy(() => import('./components/Guides/LifeEvents/DealingwithYourBank/ApplyingForALoan.jsx'));
const GettingALoanFaq = lazy(() => import('./components/Guides/LifeEvents/DealingwithYourBank/GettingALoanFaq.jsx'));
const LoanQuestionsFaq = lazy(() => import('./components/Guides/LifeEvents/DealingwithYourBank/LoanQuestionsFaq.jsx'));
const PreparingForCollege = lazy(() => import('./components/Guides/LifeEvents/PreparingforCollege/PreparingForCollege.jsx'));
const BankAccounts = lazy(() => import('./components/Guides/LifeEvents/PreparingforCollege/BankAccounts.jsx'));
const GettingMarried = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/GettingMarried.jsx'));
const GettingMarriedFaq = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/GettingMarriedFaq.jsx'));
const GettingMarriedGuidelines = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/FinancialGuidelines.jsx'));
const LifeInsurance = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/LifeInsurance.jsx'));
const LifeInsuranceFaq = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/LifeInsuranceFaq.jsx'));
const YourFinancialPlan = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/YourFinancialPlan.jsx'));
const DocumentLocator = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/DocumentLocator.jsx'));
const Budgeting = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/Budgeting.jsx'));
const PostMortemLetter = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/PostMortemLetter.jsx'));
const RetirementDistributionsWhen = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/RetirementDistributionsWhen.jsx'));
const RetirementDistributionsHow = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/RetirementDistributionsHow.jsx'));
const EstatePlanning = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/EstatePlanning.jsx'));
const Funerals = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/Funerals.jsx'));
const YourRetirementPlan = lazy(() => import('./components/Guides/LifeEvents/Retirementplan/YourRetirementPlan.jsx'));
const SavingMoney = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/SavingMoney.jsx'));
const DisabilityInsurance = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/DisabilityInsurance.jsx'));
const DisabilityBenefits = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/DisabilityBenefits.jsx'));
const HomeownersInsurance = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/HomeownersInsurance.jsx'));
const AssetAllocation = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/AssetAllocation.jsx'));
const SocialSecurityBenefits = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/SocialSecurityBenefits.jsx'));
const InvestmentBasics = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/InvestmentBasics.jsx'));
const SurvivorBenefits = lazy(() => import('./components/Guides/LifeEvents/GettingMarried/SurvivorBenefits.jsx'));
const BuyingOnMargin = lazy(() => import('./components/Guides/InvestmentStrategies/BuyingOnMargin.jsx'));
const FinancialPlanningChecklist = lazy(() => import('./components/Guides/InvestmentStrategies/FinancialPlanningChecklist.jsx'));
const InvestmentClubs = lazy(() => import('./components/Guides/InvestmentStrategies/InvestmentClubs.jsx'));
const SwapTactic = lazy(() => import('./components/Guides/InvestmentStrategies/SwapTactic.jsx'));
const ChangingJobs401k = lazy(() => import('./components/Guides/InvestmentStrategies/ChangingJobs401k.jsx'));
const HowBrokersExecuteTrades = lazy(() => import('./components/Guides/InvestmentStrategies/HowBrokersExecuteTrades.jsx'));
const MutualFunds = lazy(() => import('./components/Guides/InvestmentStrategies/MutualFunds.jsx'));
const MutualFundTaxation = lazy(() => import('./components/Guides/InvestmentStrategies/MutualFundTaxation.jsx'));
const PennyStocks = lazy(() => import('./components/Guides/InvestmentStrategies/PennyStocks.jsx'));
const MutualFundsFaq = lazy(() => import('./components/Guides/InvestmentStrategies/MutualFundsFaq.jsx'));
const StocksFaq = lazy(() => import('./components/Guides/InvestmentStrategies/StocksFaq.jsx'));
const BondsFaq = lazy(() => import('./components/Guides/InvestmentStrategies/BondsFaq.jsx'));
const TaxPlanningForSmallBusiness = lazy(() => import('./components/Guides/TaxStrategies/TaxPlanningForSmallBusiness.jsx'));
const BiggestMisconceptions = lazy(() => import('./components/Guides/TaxStrategies/BiggestMisconceptions.jsx'));
const SevenWaysToSaveTaxes = lazy(() => import('./components/Guides/TaxStrategies/SevenWaysToSaveTaxes.jsx'));
const HomeOfficeDeduction = lazy(() => import('./components/Guides/TaxStrategies/HomeOfficeDeduction.jsx'));
const VacationTaxDeduction = lazy(() => import('./components/Guides/TaxStrategies/VacationTaxDeduction.jsx'));
const RetirementPlanOptions = lazy(() => import('./components/Guides/TaxStrategies/RetirementPlanOptions.jsx'));
const BusinessRecordkeepingFaq = lazy(() => import('./components/Guides/TaxStrategies/BusinessRecordkeepingFaq.jsx'));
const DeathOfALovedOne = lazy(() => import('./components/Guides/LifeEvents/DeathOfALovedOne/DeathOfALovedOne.jsx'));
const DeathOfASpouse = lazy(() => import('./components/Guides/LifeEvents/DeathOfALovedOne/DeathOfASpouse.jsx'));
const DeathOfALovedOneFaq = lazy(() => import('./components/Guides/LifeEvents/CopingwithDeathofaLovedOne/DeathOfALovedOneFaq.jsx'));
// Calculators load the same way.
const BonusNetAfterTaxes = lazy(() => import('./components/Calculators/BonusNetAfterTaxes.jsx'));
const PlanContributionIncrease = lazy(() => import('./components/Calculators/PlanContributionIncrease.jsx'));
const PlanValue = lazy(() => import('./components/Calculators/PlanValue.jsx'));
const PayrollAdjustments = lazy(() => import('./components/Calculators/PayrollAdjustments.jsx'));
const SalaryToHourly = lazy(() => import('./components/Calculators/SalaryToHourly.jsx'));
const HourlyToSalary = lazy(() => import('./components/Calculators/HourlyToSalary.jsx'));
const StockOptionValue = lazy(() => import('./components/Calculators/StockOptionValue.jsx'));
const StockOptionExercise = lazy(() => import('./components/Calculators/StockOptionExercise.jsx'));
const EstateTax = lazy(() => import('./components/Calculators/EstateTax.jsx'));
const ItemizeOrStandard = lazy(() => import('./components/Calculators/ItemizeOrStandard.jsx'));
const TaxEquivalentYield = lazy(() => import('./components/Calculators/TaxEquivalentYield.jsx'));
const TaxRefundEstimator = lazy(() => import('./components/Calculators/TaxRefundEstimator.jsx'));
const TaxFreedomDay = lazy(() => import('./components/Calculators/TaxFreedomDay.jsx'));
const FederalIncomeTax = lazy(() => import('./components/Calculators/FederalIncomeTax.jsx'));
const PayrollWithholdings = lazy(() => import('./components/Calculators/PayrollWithholdings.jsx'));
const InvestmentInterest = lazy(() => import('./components/Calculators/InvestmentInterest.jsx'));
const SelfEmploymentTax = lazy(() => import('./components/Calculators/SelfEmploymentTax.jsx'));
const CapitalGainsTax = lazy(() => import('./components/Calculators/CapitalGainsTax.jsx'));
const InvestmentGrowth = lazy(() => import('./components/Calculators/InvestmentGrowth.jsx'));
const SocialSecurityTax = lazy(() => import('./components/Calculators/SocialSecurityTax.jsx'));
const InterestDeductions = lazy(() => import('./components/Calculators/InterestDeductions.jsx'));

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
        <Route path="resources/calculators/bonus-net-after-taxes" element={<BonusNetAfterTaxes />} />
        <Route path="resources/calculators/457-plan-contribution" element={<PlanContributionIncrease plan="457" />} />
        <Route path="resources/calculators/403b-contribution" element={<PlanContributionIncrease plan="403b" />} />
        <Route path="resources/calculators/401k-contribution" element={<PlanContributionIncrease plan="401k" />} />
        <Route path="resources/calculators/403b-plan-value" element={<PlanValue plan="403b" />} />
        <Route path="resources/calculators/401k-plan-value" element={<PlanValue plan="401k" />} />
        <Route path="resources/calculators/457-plan-value" element={<PlanValue plan="457" />} />
        <Route path="resources/calculators/payroll-adjustments" element={<PayrollAdjustments />} />
        <Route path="resources/calculators/salary-to-hourly" element={<SalaryToHourly />} />
        <Route path="resources/calculators/hourly-to-salary" element={<HourlyToSalary />} />
        <Route path="resources/calculators/stock-options" element={<StockOptionValue />} />
        <Route path="resources/calculators/exercise-stock-options" element={<StockOptionExercise />} />
        <Route path="resources/calculators/estate-tax" element={<EstateTax />} />
        <Route path="resources/calculators/itemize-or-standard" element={<ItemizeOrStandard />} />
        <Route path="resources/calculators/tax-equivalent-yield" element={<TaxEquivalentYield />} />
        <Route path="resources/calculators/tax-refund-estimator" element={<TaxRefundEstimator />} />
        <Route path="resources/calculators/tax-freedom-day" element={<TaxFreedomDay />} />
        <Route path="resources/calculators/federal-income-tax" element={<FederalIncomeTax />} />
        <Route path="resources/calculators/payroll-withholdings" element={<PayrollWithholdings />} />
        <Route path="resources/calculators/investment-interest" element={<InvestmentInterest />} />
        <Route path="resources/calculators/self-employment-tax" element={<SelfEmploymentTax />} />
        <Route path="resources/calculators/capital-gains-tax" element={<CapitalGainsTax />} />
        <Route path="resources/calculators/compare-investment-growth" element={<InvestmentGrowth />} />
        <Route path="resources/calculators/social-security-tax" element={<SocialSecurityTax />} />
        <Route path="resources/calculators/interest-tax-implications" element={<InterestDeductions />} />
        <Route path="guides" element={<Guides />} />
        <Route path="newsletter" element={<Newsletter />} />
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

import { Navigate, Outlet } from "react-router-dom";
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import { Home } from "../components/Home";
import Profile from "../components/profile/Profile";
import UserProfileForm from "../forms/UserProfileForm";
import { FitnessProgrammePage } from "../components/programmes/FitnessProgrammePage";
import { FitnessProgrammeDetailPage } from "../components/programmes/FitnessProgrammeDetailPage";
import ChooseSurveyTypeForm from "../forms/wellbeing/ChooseSurveyTypeForm";
import WellbeingSurveyForm from "../forms/wellbeing/WellbeingSurveyForm";
import { ConfirmEnrolment } from "../components/programmes/ConfirmEnrolment";
import { CurrentEnrolmentPage } from "../components/programmes/CurrentEnrolmentPage";
import WellbeingSummary from "../components/profile/WellbeingSummary";
import RegistrationForm from "../forms/RegistrationForm";

const routes = (isLoggedIn) => [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  {
    path: "/register",
    element: isLoggedIn ? <Profile /> : <RegistrationForm />,
  },
  {
    path: "/profile",
    element: isLoggedIn ? <Profile /> : <Navigate to="/login" />,
  },
  {
    path: "/profile/update",
    element: isLoggedIn ? <UserProfileForm /> : <Navigate to="/login" />,
  },
  {
    path: "/profile/wellbeing-summary",
    element: isLoggedIn ? <WellbeingSummary /> : <Navigate to="/login" />,
  },
  {
    path: "/profile/current-enrolment",
    element: isLoggedIn ? <CurrentEnrolmentPage /> : <Navigate to="/login" />,
  },
  {
    path: "wellbeing/programmes",
    element: isLoggedIn ? <FitnessProgrammePage /> : <Navigate to="/login" />,
  },
  {
    path: "wellbeing/programmes/:programmeId",
    element: isLoggedIn ? (
      <FitnessProgrammeDetailPage />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "wellbeing/programmes/:programmeId/confirm",
    element: isLoggedIn ? <ConfirmEnrolment /> : <Navigate to="/login" />,
  },
  {
    path: "wellbeing/survey/choose",
    element: isLoggedIn ? <ChooseSurveyTypeForm /> : <Navigate to="/login" />,
  },
  {
    path: "wellbeing/survey/:wellbeingSurveyType",
    element: isLoggedIn ? <WellbeingSurveyForm /> : <Navigate to="/login" />,
  },
];

export default routes;

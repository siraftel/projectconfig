import { Link } from "react-router-dom";
import styles from "../../Styling/Pages/Error/ErrorPage.module.css";
import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
const ErrorPage = () => {
  return (
    <>
      <UserNavbar />
      <div className={styles.error_container}>
        <h1 className={styles.error_h1}>404</h1>
        <p className={styles.error_text}>Oops! Something is wrong.</p>
        <Link to="/" className={styles.error_button}>
          We Cannot find the Destination. Go back?
        </Link>
      </div>
    </>
  );
};
export default ErrorPage;

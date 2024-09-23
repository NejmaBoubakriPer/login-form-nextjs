import Head from 'next/head';
import styles from '../styles/Home.module.css'; // Importing the CSS module

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/1ab94d0eba.js"
          crossOrigin="anonymous"
        ></script>
        <title>Login Form</title>
      </Head>
      <main className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.formContainer}>  
          <div className={styles.inputField}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Username"
              className={styles.input}
            />
            <div className={styles.underline}></div>
          </div>
          <div className={styles.inputField}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              className={styles.input}
            />
            <div className={styles.underline}></div>
          </div>

          <input type="submit" value="Continue" className={styles.submitButton} />
        </form>

        <div className={styles.footer}>
          <span>Or Connect With: </span>
          <div className={styles.socialFields}>
            <div className={`${styles.socialField} ${styles.twitter}`}>
              <a href="/.auth/login/aad?post_login_redirect_uri=/loggindin">
                <i className="fab fa-twitter"></i> Log in with Microsoft Entra
              </a>
            </div>
            <div className={`${styles.socialField} ${styles.facebook}`}>
              <a href="/.auth/login/google?post_login_redirect_uri=/loggindin">
                <i className="fab fa-facebook-f"></i> Log in with Google
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

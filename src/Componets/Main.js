import styles from './Main.module.css';

function App() {
  return (
    <div className={styles.all_main}>
      <main>
        <section>
          <div className={styles.images}>
            <img src="/home-phones-2x.png" width={'420rem'} alt='Telefone1' />
          </div>

          <div className={styles.divAlignBox}>
            <div className={styles.inputsForm}>
              <h1>Instagram</h1>
              <form action="#">
                <div className={styles.alignInputs}>
                  <input type="text" placeholder="Telefone, nome de usuário ou email" required />
                  <input type="password" placeholder="Senha" />
                  <button className={styles.btnClassEnter} id="btnIdEnter" type="submit">Entrar</button>
                </div>
              </form>

              <div className={styles.alignOr}>
                <hr />
                <p>OU</p>
                <hr />
              </div>

              <div className={styles.alignRememberMe}>
                <a href="##">Entrar com Facebook</a>
                <a href="##">Esqueceu a senha?</a>
              </div>
            </div>

            <div className={styles.divBoxNewAccount}>
              <p>Não tem uma conta?<span><a href="##"> Cadastre-se</a></span></p>
            </div>

            <p>Obtenha o aplicativo</p>
            <div className={styles.alignAppsBtns}>
              <img src="/googleplay.png" width={'120rem'} alt="GooglePlay" />
              <img src="/microsoft.png" width={'100rem'} alt="Microsoft" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

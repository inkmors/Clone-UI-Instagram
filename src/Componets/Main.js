//import logo from './logo.svg';
import './Main.css';

function App() {
  return (
    <div class="all_main">
        <main>
        <section>
            <div class="images">
                <img src='' alt='Telefone1' />
                <img src='' alt='Telefone2' />
            </div>

            <div class='divAlignBox'>
                <div class="inputs-form">
                    <h1>Instagram</h1>
                    <form action="#">
                        <div class="alignInputs">
                            <input type="text" placeholder="Telefone, nome de usuário ou email" required/>
                            <input type="password" id="" placeholder="Senha"/>
                            <button class="btnClassEnter" id="btnIdEnter" type="submit">Entrar</button>
                        </div>
                    </form>
    
                    <div class="alignOr">
                        <hr/>
                        <p>OU</p>
                        <hr/>
                    </div>
    
                    <div class="alignRememberMe">
                        <a href="##">Entrar com Facebook</a>
                        <a href="##">Esqueceu a senha?</a>
                    </div>
                </div>
    
                <div class="divBoxNewAccount">
                    <p>Não tem uma conta?<span><a href="##">Cadastre-se</a></span></p>
                </div>
    
                <p>Obtenha o aplicativo</p>
                <div class='alignAppsBtns'>
                    <img src="" alt="GooglePlay"/>
                    <img src="" alt="Microsoft"/>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;

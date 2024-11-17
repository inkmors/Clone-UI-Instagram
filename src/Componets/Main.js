//import logo from './logo.svg';
import './Main.css';

function App() {
  return (
    <div class="all_main">
        <main>
        <section>
            <div class="images">
                <img src="/home-phones-2x.png" width={'420rem'} alt='Telefone1'/>
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
                    <p>Não tem uma conta?<span><a href="##"> Cadastre-se</a></span></p>
                </div>
    
                <p>Obtenha o aplicativo</p>
                <div class='alignAppsBtns'>
                    <img src="/googleplay.png" width={'120rem'} alt="GooglePlay"/>
                    <img src="/microsoft.png" width={'100rem'} alt="Microsoft"/>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;

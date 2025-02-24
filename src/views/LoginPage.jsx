import FullPageLoader from '../components/FullPageLoader.jsx';
import {useState} from 'react';


function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState('login');

  
    return (
      <>
        { isLoading && <FullPageLoader></FullPageLoader> }
        
        <div className="container login-page">
          <section>
            <h1>Etec Albert Einstein</h1>
            <p>Entre ou crie uma conta para continuar.</p>
            <div className="login-type">
              <button 
                className={`btn ${loginType == 'login' ? 'selected' : ''}`}
                onClick={()=>setLoginType('login')}>
                  Entrar
              </button>
              <button 
                className={`btn ${loginType == 'signup' ? 'selected' : ''}`}
                onClick={()=>setLoginType('signup')}>
                  Criar Conta
              </button>
            </div>
            <form className="add-form login">
                  <div className="form-control">
                      <label>E-mail *</label>
                      <input type="text" name="email" placeholder="Informe seu email" />
                  </div>
                  <div className="form-control">
                      <label>Senha *</label>
                      <input type="password" name="password" placeholder="Informe a senha" />
                  </div>
                  {
                    loginType == 'login' ?
                    <button className="active btn btn-block">Entrar</button>
                    : 
                    <button className="active btn btn-block">Criar Conta</button>
                  }

                  <p className="forgot-password">Esqueci minha senha.</p>
                  
              </form>
          </section>
        </div>
      </>
    )
  }
  
  export default LoginPage
  
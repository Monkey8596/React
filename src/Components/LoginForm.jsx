const LoginForm = ({handleClick}) => {
  return (
    <div>
      <h1>Debe Loguearse</h1>
      <input type="email" role="email" />
      <input type="passsword" data-testid = 'password' />
      <button onClick={handleClick} >Enviar</button>
    </div>
  );
};

export default LoginForm;

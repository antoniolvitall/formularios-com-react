import './MyForm.css';
import {useState} from 'react';

const MyForm = () => {
  // 3 - gerenciamento de dados
  const[name, setName] = useState()
  const[email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulario");
    console.log(name, email)
  };


  return (
    <div>
      {/* 5 - envio de form */}
        {/* 1- criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
            </div>
            {/* 2 - label envolvendo imput */}
            <label>
              <span>E-mail:</span>
              {/* 4 - simplicacao de manipulacao de state */}
              <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input type="submit" value="Enviar" />
        </form>    
    </div>
  )
}

export default MyForm
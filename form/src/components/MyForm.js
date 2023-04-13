import './MyForm.css';
import {useState} from 'react';

const MyForm = ({user}) => {
  // 6 - controlled inputs


  // 3 - gerenciamento de dados
  const[name, setName] = useState(user ? user.name: "")
  const[email, setEmail] = useState(user ? user.email: "")

  const [bio, setBio] = useState("")

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulario");
    console.log(name, email, bio)

    // validacao
    // envio

    // 7 - limpar formulario
    setName("");
    setEmail("");
    setBio("");
  };


  return (
    <div>
      {/* 5 - envio de form */}
        {/* 1- criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
            </div>
            {/* 2 - label envolvendo imput */}
            <label>
              <span>E-mail:</span>
              {/* 4 - simplicacao de manipulacao de state */}
              <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            {/* 8 - textarea */}
            <label>
              <span>Bio:</span>
              <textarea name="bio" placeholder='Descricao do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <input type="submit" value="Enviar" />
        </form>    
    </div>
  )
}

export default MyForm
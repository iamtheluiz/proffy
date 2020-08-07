import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/32724000?s=460&u=9d601b606b06effe5fbb48e668e693af158804e8&v=4" alt="Luiz Gustavo" />
        <div>
          <strong>Luiz Gustavo</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Um exímio pensador de piadas ruins.
        <br /><br />
        Adora as matérias de exatas, tendo uma paixão especial por computação e matemática aplicada.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
      </footer>
    </article>
  )
}

export default TeacherItem;

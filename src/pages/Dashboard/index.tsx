import React from 'react';

// Images
import logoImg from '../../assets/logo.svg';

// Styles
import { Title, Form, Repositories } from './styles';
import Repository from '../repository';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Header Container */}
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no GitHub!</Title>

      {/* Search box Container */}
      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      {/* Repositories/Page content Container */}
      <Repositories>
        <a href="">
          <img src="https://avatars2.githubusercontent.com/u/53566373?s=460&u=8fcb0053a67405818a52bfcbfdaab00f4eb08d6d&v=4" alt="João Medeiros"/>
          <div>
            <strong>Zappts/iClubs</strong>
            <p>An easy way to help ONGs</p>
          </div>
          <FiChevronRight/>
        </a>

        <a href="">
          <img src="https://avatars2.githubusercontent.com/u/53566373?s=460&u=8fcb0053a67405818a52bfcbfdaab00f4eb08d6d&v=4" alt="João Medeiros"/>
          <div>
            <strong>Zappts/iClubs</strong>
            <p>An easy way to help ONGs</p>
          </div>
          <FiChevronRight/>
        </a>

        <a href="">
          <img src="https://avatars2.githubusercontent.com/u/53566373?s=460&u=8fcb0053a67405818a52bfcbfdaab00f4eb08d6d&v=4" alt="João Medeiros"/>
          <div>
            <strong>Zappts/iClubs</strong>
            <p>An easy way to help ONGs</p>
          </div>
          <FiChevronRight/>
        </a>

      </Repositories>
    </>
  );
};


export default Dashboard;

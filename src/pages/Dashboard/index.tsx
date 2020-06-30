import React from 'react';

// Images
import logoImg from '../../assets/logo.svg';

// Styles
import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no GitHub!</Title>

      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};


export default Dashboard;

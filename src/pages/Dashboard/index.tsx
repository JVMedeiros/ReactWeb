import React , { useState, FormEvent } from 'react';

// API
import api from '../../services/api';

// Images
import logoImg from '../../assets/logo.svg';

// Styles
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';


interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };

}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>,): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('')
  }

  return (
    <>
      {/* Header Container */}
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github!</Title>

      {/* Search box Container */}
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={ (e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {/* Repositories/Page content Container */}
      <Repositories>
        {repositories.map(repository => (
        <a key={repository.full_name} href="teste">
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight/>
        </a>
        ))}
      </Repositories>
      </>
  );
};


export default Dashboard;

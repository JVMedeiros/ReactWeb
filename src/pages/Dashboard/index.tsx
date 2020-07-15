import React , { useState, useEffect, FormEvent } from 'react';

// API/Routes
import api from '../../services/api';
import { Link } from 'react-router-dom';

// Images
import logoImg from '../../assets/logo.svg';

// Styles
import { Title, Form, Repositories, Error } from './styles';
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
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {

    const response = await api.get(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
    } catch (err) {
      setInputError('Repositório não encontrado');
      setNewRepo('');
    }
  }

  return (
    <>
      {/* Header Container */}
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github!</Title>

      {/* Search box Container */}
      <Form hasError={!! inputError}onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={ (e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {/* Conditional in case of error at finding repo */}
      { inputError && <Error>{inputError}</Error>}

      {/* Repositories/Page content Container */}
      <Repositories>
        {repositories.map(repository => (
        <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight/>
        </Link>
        ))}
      </Repositories>
      </>
  );
};


export default Dashboard;

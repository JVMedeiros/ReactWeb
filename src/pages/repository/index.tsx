import React, { useEffect, useState } from 'react';

//Images
import logoImg from '../../assets/logo.svg';

//Routes/API
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

//Styles
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository>(null);
  const [issues, setIssues] = useState([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {

    api.get(`repos/${params.repository}`).then((response) => {
      console.log(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      console.log(response.data);
    });

//    The code below is a way to make a requisition from API
//
//    async function loadData(): Promise<void> {
//    const [repository, issues] = await Promise.all([
//        api.get(`repos/${params.repository}`),
//        api.get(`repos/${params.repository}/issues`)
//      ]);
//    }

      loadData();
  }, [params.repository]);

  return (
    <>
      {/* Logo and back container */}
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      {/* Repository's header */}
      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="RocketSeat" />
          <div>
            <strong>RocketSeat/Unform</strong>
            <p>Descirção do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>47</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>60</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="huashua" >
          <div>
            <strong>BOM DIA</strong>
            <p>O SOL JÁ NASCEU LÁ NA FAZENDINHA</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );

};


export default Repository;

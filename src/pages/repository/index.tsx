import React from 'react';

//Images
import logoImg from '../../assets/logo.svg';

//Routes/API
import { useRouteMatch, Link } from 'react-router-dom';

//Styles
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

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
          <strong>BOMDIA</strong>
          <p>O SOL JÁ NASCEU LÁ NA FAZENDINHA</p>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </Issues>
  </>
);

};


export default Repository;

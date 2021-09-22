import React from 'react';
import { FiStar, FiUnlock, FiArrowLeft, FiLock } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { Container, Header, Card, CardContainer } from './styles';

import { useData } from '../../hooks/DataContext';
import TitleIndicator from '../../components/TitleIndicator';
import MenuNavegationBar from '../../components/MenuNavegationBar';

const Repositories: React.FC = () => {
  const { data } = useData();

  return (
    <>
      <Container>
        <Link to="user">
          <Header>
            <FiArrowLeft size={22} color="#fff" />
            <h1>
              {`${data.userData.public_repos === 1
                  ? `${data.userData.public_repos} Repositório`
                  : `${data.userData.public_repos}  Repositórios`
                }`}{' '}
            </h1>
          </Header>
        </Link>
        {data.reposData.map(repository => (
          <Card key={repository.name}>
            <a href={repository.html_url} target="_blank" rel="noreferrer">
              <TitleIndicator title={repository.name} titleSize={20} />
              <CardContainer>
                <p>{repository.description}</p>
                <div>
                  <FiStar size={20} color="#FFCE00" />
                  <p>{repository.stargazers_count}</p>

                  {repository.private ? (
                    <FiLock size={20} color="#CC042A" />
                  ) : (
                    <FiUnlock size={20} color="#63BF1F" />
                  )}

                  {repository.fork && (
                    <BiGitRepoForked size={20} color="#8B949E" />
                  )}
                </div>
              </CardContainer>
            </a>
          </Card>
        ))}
      </Container>
      <MenuNavegationBar />
    </>
  );
};

export default Repositories;

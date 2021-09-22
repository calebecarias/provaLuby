import React, { useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';
import {
  IoBusinessOutline,
  IoLocationOutline,
  IoMailOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Container, Header, MiddleContent, Content } from './styles';

import { useData } from '../../hooks/DataContext';

import TitleIndicator from '../../components/TitleIndicator';
import MenuNavegationBar from '../../components/MenuNavegationBar';
import LoadingBox from '../../components/LoadingBox';

const User: React.FC = () => {
  const { data, signOut } = useData();

  const handleClick = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <LoadingBox>
        <Container>
          <Header>
            <a target="_blank" rel="noreferrer" href={data.userData.html_url}>
              <h1>{`#${data.userData.login}`}</h1>
            </a>
            <Link to="/" onClick={handleClick}>
              Sair <FiLogOut size={20} color="#D03434" />
            </Link>
          </Header>

          <img src={data.userData.avatar_url} alt="Avatar Logo" />

          <TitleIndicator
            title={data.userData.name ? data.userData.name : `-`}
            titleSize={26}
            isTitleUppercase
          />
          <Content>
            <p>
              {data.userData.email && <IoMailOutline />}
              {data.userData.email}
            </p>
            <p>
              {data.userData.location && <IoLocationOutline />}
              {data.userData.location}
            </p>
            <p>
              {data.userData.company && <IoBusinessOutline />}
              {data.userData.company}
            </p>
          </Content>

          <MiddleContent>
            <Link to="followers">
              <h1>{data.userData.followers}</h1>
              <p>Seguidores</p>
            </Link>

            <Link to="following">
              <h1>{data.userData.following}</h1>
              <p>Seguindo</p>
            </Link>

            <Link to="repos">
              <h1>{data.userData.public_repos}</h1>
              <p>Repos</p>
            </Link>
          </MiddleContent>
          {data.userData.bio && (
            <>
              <TitleIndicator title="Bio" titleSize={26} isTitleUppercase />
              <Content>
                <p>{data.userData.bio}</p>
              </Content>
            </>
          )}
        </Container>
      </LoadingBox>
      <MenuNavegationBar />
    </>
  );
};

export default User;

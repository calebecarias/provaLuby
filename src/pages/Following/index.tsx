import React, { useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Header, Card } from './styles';

import ImgNotFound from '../../assets/imgNotFound.png';

import TitleIndicator from '../../components/TitleIndicator';
import MenuNavegationBar from '../../components/MenuNavegationBar';
import { useData } from '../../hooks/DataContext';

const Following: React.FC = () => {
  const { data, showFollowerUser } = useData();

  const handleClick = useCallback(
    loginName => {
      showFollowerUser(loginName);
    },
    [showFollowerUser],
  );
  return (
    <>
      <Container>
        <Link to="user">
          <Header>
            <FiArrowLeft size={22} color="#FFF" />
            <h1>
              {`${data.userData.following === 1}`
                ? `Seguindo ${data.userData.following}`
                : `Seguindo ${data.userData.following}`}
            </h1>
          </Header>
        </Link>

        {data.followingData?.map(following => (
          <Card key={following.login}>
            <Link
              to="userFollower"
              onClick={() => handleClick(following.login)}
            >
              <TitleIndicator
                title={following.login}
                titleSize={16}
                image={
                  following.avatar_url ? following.avatar_url : ImgNotFound
                }
              />

              <FiArrowRight size={25} color="#fff" />
            </Link>
          </Card>
        ))}
      </Container>
      <MenuNavegationBar />
    </>
  );
};

export default Following;

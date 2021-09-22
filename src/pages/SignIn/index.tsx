import React, { useRef, useCallback } from 'react';
import { FiArrowRight, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useData } from '../../hooks/DataContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import { Container, Content } from './styles';

interface SignInFormData {
  user: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn, error } = useData();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          user: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          loginName: data.user,
        });

        if (error) {
          formRef.current?.setErrors({ user: error.message });
          return;
        }

        history.push('/user');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn, error, history],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Github Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="user" icon={FiUser} type="text" placeholder="Usuário" />
          <button type="submit">
            ENTRAR
            <FiArrowRight size={24} />
          </button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;

import { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        p: 4,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Button
          variant={isLogin ? 'contained' : 'outlined'}
          onClick={() => setIsLogin(true)}
        >
          Login
        </Button>
        <Button
          variant={!isLogin ? 'contained' : 'outlined'}
          onClick={() => setIsLogin(false)}
        >
          Register
        </Button>
      </Box>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </Container>
  );
}

export default AuthContainer;

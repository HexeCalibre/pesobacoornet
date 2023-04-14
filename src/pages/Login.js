import { Navbar } from "../components/Navbar";
import { Container } from '@mui/material'
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <LoginForm/>
      </Container>
    </>
  );
};

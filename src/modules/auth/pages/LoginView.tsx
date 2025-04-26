import {
  Box,
  Typography,
  Paper,
  Button,
  AppBar,
  Toolbar,
  Container,
} from '@mui/material';
import { LoginForm } from '../components/LoginForm';
import { useLoginViewModel } from '../view-models/useLoginViewModel';
import { useNavigate } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export function LoginView() {
  const { error, loading, handleLogin } = useLoginViewModel();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <RocketLaunchIcon fontSize="large" />
            <Typography variant="h6" fontWeight="bold">
              WellcomeHub
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2, // padding para telas menores
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={4}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <RocketLaunchIcon fontSize="large" color="primary" />
              <Typography variant="h4" fontWeight={600} mt={1}>
                Bem-vindo
              </Typography>
            </Box>

            <Box sx={{ width: '100%' }}>
              <LoginForm
                onSubmit={handleLogin}
                error={error}
                loading={loading}
              />
            </Box>

            <Button fullWidth onClick={handleBack}>
              Voltar
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GoogleIcon from "@mui/icons-material/Google";
import WindowIcon from '@mui/icons-material/Window';
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const LandingPage = () => {
  return (
    <Box sx={{
      color: "background",
      minHeight: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RocketLaunchIcon fontSize="large" />
            <Typography variant="h6">WellcomeHub</Typography>
          </Box>
          <Stack direction="row" alignItems="center">
            <Button key={"About"} component={Link} to={"/about"} >
              Sobre
            </Button>
            <Button key={"Login"} component={Link} to={"/login"} >
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h2" gutterBottom>
          Automatize a integração de seus colaboradores
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Transforme a integração dos seus funcionários com treinamento interativo.
        </Typography>
        <Button variant="contained" size="large">
          Comece agora
        </Button>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Tudo o que você precisa para uma integração perfeita
        </Typography>
        <Grid container  >
          {[
            {
              title: "Treinamento Interativo",
              subtitle: "Módulos e cursos envolventes, adaptados à cultura e aos processos da sua empresa.",
              icon: <IntegrationInstructionsIcon fontSize="large" />,
            },
            {
              title: "Integração de vídeo",
              subtitle: "Crie e compartilhe vídeos de boas-vindas e tutoriais profissionais.",
              icon: <OndemandVideoIcon fontSize="large" />,
            },
          ].map((f) => (
            <Grid key={f.title} size={12}>
              <Card elevation={1}>
                <CardContent sx={{ textAlign: "center" }}>
                  {f.icon}
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >
                    {f.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ py: 6, backgroundColor: "grey.100" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Integre com suas ferramentas favoritas
        </Typography>
        <Stack direction="row" justifyContent="center" >
          <WindowIcon fontSize="large" />
          <IntegrationInstructionsIcon fontSize="large" />
          <GoogleIcon fontSize="large" />
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", backgroundColor: "text.primary", color: "common.white" }}>
        <Typography variant="h4" gutterBottom>
          Pronto para transformar sua integração?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Junte-se a milhares de empresas que já utilizam o OnboardFlow
        </Typography>

      </Box>

      <Box component="footer" sx={{ py: 4, backgroundColor: "grey.700", color: "common.white" }}>
        <Container>
          <Grid container >
            <Grid size={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <RocketLaunchIcon />
                <Typography variant="h6">WellcomeHub</Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Simplificando a integração de funcionários para equipes modernas.
              </Typography>
            </Grid>

          </Grid>
          <Typography variant="caption" display="block" align="center" sx={{ mt: 4 }}>
            © {new Date().getFullYear()} WellcomeHub. Todos os direitos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;

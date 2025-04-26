import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginFormData } from '../models/AuthTypes';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  error?: string;
  loading: boolean;
}

export function LoginForm({ onSubmit, error, loading }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(!!error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <TextField
        error={!!error}
        fullWidth
        label="E-mail"
        variant="outlined"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <TextField
        error={!!error}
        fullWidth
        label="Senha"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={toggleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button fullWidth type="submit" variant="contained" disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </Button>

      <Snackbar
        open={!!error && openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setOpenSnackbar(false)}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

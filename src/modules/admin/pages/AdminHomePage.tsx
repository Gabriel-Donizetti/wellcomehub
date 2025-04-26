// src/modules/admin/pages/AdminHomePage.tsx
import { Box, Grid, Paper, Typography, Button, Avatar } from '@mui/material';
import { useAuth } from '../../../shared/contexts/AuthContext';
import PersonIcon from '@mui/icons-material/Person';
import PieChartIcon from '@mui/icons-material/PieChart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function AdminHomePage() {
    const { user } = useAuth();

    const atividadesMock = [
        {
            id: 1,
            name: 'Sarah Miller',
            avatarUrl: '/avatars/sarah.png',
            atividade: 'completed Company Introduction',
            tempo: '2 hours ago',
        },
        {
            id: 2,
            name: 'John Smith',
            avatarUrl: '/avatars/john.png',
            atividade: 'finished Security Training',
            tempo: '1 hour ago',
        },
        {
            id: 3,
            name: 'Emily Johnson',
            avatarUrl: '/avatars/emily.png',
            atividade: 'completed Onboarding Quiz',
            tempo: 'just now',
        },
    ];

    return (
        <Box
            sx={{
                minHeight: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Bem-vindo, {user?.name}!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Gerencie o processo de integração da sua empresa
            </Typography>


            <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid >
                    <Paper sx={{ p: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Colaboradores ativos
                            </Typography>
                            <PersonIcon fontSize="small" color="action" />
                        </Box>
                        <Typography variant="h3" fontWeight="bold" sx={{ mt: 1 }}>
                            {user?.company.activeEmployers}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            +3 este mês
                        </Typography>
                    </Paper>
                </Grid>

                <Grid >
                    <Paper sx={{ p: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Taxa de conclusão
                            </Typography>
                            <PieChartIcon fontSize="small" color="action" />
                        </Box>
                        <Typography variant="h3" fontWeight="bold" sx={{ mt: 1 }}>
                            87%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            +5% desde mês passado
                        </Typography>
                    </Paper>
                </Grid>

                <Grid >
                    <Paper sx={{ p: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Cursos ativos
                            </Typography>
                            <MenuBookIcon fontSize="small" color="action" />
                        </Box>
                        <Typography variant="h3" fontWeight="bold" sx={{ mt: 1 }}>
                            12
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            2 precisam de atenção
                        </Typography>
                    </Paper>
                </Grid>

                <Grid >
                    <Paper sx={{ p: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Sucesso nos quizzes
                            </Typography>
                            <CheckCircleIcon fontSize="small" color="action" />
                        </Box>
                        <Typography variant="h3" fontWeight="bold" sx={{ mt: 1 }}>
                            92%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Taxa média de aprovação
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>


            <Grid container spacing={2} mt={4}>
                <Grid >
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" fontWeight="medium" gutterBottom>
                            Atividades Recentes
                        </Typography>
                        <Box
                            sx={{
                                overflowY: 'auto',
                                pr: 1,
                            }}
                        >
                            {atividadesMock.map((item) => (
                                <Box key={item.id} display="flex" alignItems="center" gap={2} mb={2}>
                                    <Avatar src={item.avatarUrl} alt={item.name} />
                                    <Box>
                                        <Typography>
                                            <strong>{item.name}</strong> {item.atividade}
                                        </Typography>
                                        <Typography color="text.secondary" fontSize={14}>
                                            {item.tempo}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>

                <Grid >
                    <Paper
                        sx={{
                            p: 2,
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h6" fontWeight="medium" gutterBottom>
                            Ações Rápidas
                        </Typography>

                        <Button >Adicionar Colaborador</Button>
                        <Button >Criar Novo Curso</Button>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
}

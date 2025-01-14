import { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Psychology,
  Timeline,
  Devices,
  Speed,
  TouchApp,
  Settings,
} from '@mui/icons-material';

const LandingPage: FC = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Smart Learning',
      description: 'Adaptive algorithms that focus on what you need to learn most',
      icon: <Psychology sx={{ fontSize: 48 }} />,
    },
    {
      title: 'Track Progress',
      description: 'Detailed insights into your learning journey and improvements',
      icon: <Timeline sx={{ fontSize: 48 }} />,
    },
    {
      title: 'Study Anywhere',
      description: 'Access your flashcards on any device, anytime',
      icon: <Devices sx={{ fontSize: 48 }} />,
    },
  ];

  const benefits = [
    {
      title: 'Efficient Learning',
      description: 'Learn more in less time with our spaced repetition system',
      icon: <Speed sx={{ fontSize: 56 }} />,
    },
    {
      title: 'Easy to Use',
      description: 'Intuitive interface designed for seamless learning experience',
      icon: <TouchApp sx={{ fontSize: 56 }} />,
    },
    {
      title: 'Customizable',
      description: 'Create and organize flashcards your way',
      icon: <Settings sx={{ fontSize: 56 }} />,
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 12,
          pb: 8,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 4,
            }}
          >
            Master Any Subject with Mnemoniac
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 6, opacity: 0.9 }}
          >
            The intelligent flashcard app that adapts to your learning style
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
                px: 4,
                py: 1.5,
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 12 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
                elevation={2}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 3 }}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 12 }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Choose Mnemoniac?
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 3 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;

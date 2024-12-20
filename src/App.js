import { Card, CardContent, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card sx={{ maxWidth: 300, margin: '1rem', textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Pretoria
            </Typography>
            <Typography variant="h2" color="primary">
              20°C
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Cool Day
            </Typography>
          </CardContent>
        </Card>
    </div>
  );
}

export default App;

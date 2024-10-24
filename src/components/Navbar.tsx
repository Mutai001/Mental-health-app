import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Case Studies</Button>
          <Button color="inherit">Testimonials</Button>
          <Button color="inherit">Team</Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">About</Button>
        </Box>
        <Button variant="outlined" color="primary">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

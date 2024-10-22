import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg">
      <Toolbar className="flex justify-between">
        <div className="text-3xl font-extrabold text-white">MindThera</div>
        <div className="hidden md:flex space-x-6">
          <Button className="text-white hover:underline">Home</Button>
          <Button className="text-white hover:underline">About</Button>
          <Button className="text-white hover:underline">Services</Button>
          <Button className="text-white hover:underline">Contact</Button>
        </div>
        <IconButton className="md:hidden" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

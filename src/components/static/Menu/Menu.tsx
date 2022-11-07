import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import { Link } from 'react-router-dom';
import './Menu.css'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
}}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
    }}
    {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
    '&:focus': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
    },
    },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
    <div>
        <Button
        disableElevation
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        style={{backgroundColor:'white'}}
        onClick={handleClick}
        >
        <MenuIcon fontSize="large" />
        </Button>
        <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <Link to='/basic-table' className='link'>
        <StyledMenuItem>
            <ListItemIcon>
                <Filter1Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Basic" className='menu-text'/>
        </StyledMenuItem>
        </Link>
        <Link to='/essential-table' className='link'>
        <StyledMenuItem>
            <ListItemIcon>
                <Filter2Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Essential" className='menu-text'/>
        </StyledMenuItem>
        </Link>
        <Link to='/additional-table' className='link'>
        <StyledMenuItem>
            <ListItemIcon>
                <Filter3Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Additional" className='menu-text'/>
        </StyledMenuItem>
        </Link>
        </StyledMenu>
    </div>
    );
}
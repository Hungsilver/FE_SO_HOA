import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FolderIcon from '@mui/icons-material/Folder';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const drawerWidth = 240;



const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

function getHrefByText(text: string): string {
    switch (text) {
        case 'Trang chủ':
            return '/dashboard';
        case 'Công việc':
            return '/job-list';
        case 'Công việc đã nhận':
            return '/received-job';
        case 'Lịch sử':
            return '/history';
        case 'Thiết lập tài khoản':
            return '/manage-account';
        case 'Thêm sách đã có PDF':
            return '/book-pdf';
        default:
            return '/';
    }
}


export default function MiniDrawer({ isOpen, toggleUser }: { isOpen: boolean, toggleUser: () => void }
) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            {pathname !== "/login" && (
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar className="fixed bg-blue-300" open={open}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                SỐ HÓA SÁCH
                            </Typography>
                            <div className="ml-auto flex items-center space-x-3">
                                <button className="size-6">
                                    <NotificationsIcon />
                                </button>
                                <p>Hi, VELT</p>
                                <button onClick={toggleUser} className="flex items-center">
                                    <Image
                                        src="/image/anh-avatar.png"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full border-r-4 border-gray-500"
                                    />
                                    <ExpandMoreIcon />
                                </button>
                                {isOpen && (
                                    <div className="absolute right-0 mt-20 w-40 p-2 bg-white rounded-lg h-auto text-black transition-transform transform translate-x-0 shadow-lg z-50">
                                        <Link href="/login" onClick={toggleUser}>
                                            Đăng xuất
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            {['Trang chủ', 'Công việc', 'Công việc đã nhận', 'Lịch sử'].map(
                                (text, index) => (
                                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                        <Link href={getHrefByText(text)} passHref>
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 48,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2.5,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {text === 'Trang chủ' ? (
                                                        <HomeIcon />
                                                    ) : text === 'Công việc' ? (
                                                        <WorkIcon />
                                                    ) : text === 'Công việc đã nhận' ? (
                                                        <FolderIcon />
                                                    ) : text === 'Lịch sử' ? (
                                                        <WorkHistoryIcon />
                                                    ) : null}
                                                </ListItemIcon>
                                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                )
                            )}
                        </List>

                        <List>
                            {['Thiết lập tài khoản', 'Thêm sách đã có PDF'].map((text, index) => (
                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                    <Link href={getHrefByText(text)} passHref>
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 'auto',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {index % 2 === 0 ? (
                                                    <ManageAccountsIcon />
                                                ) : (
                                                    <PictureAsPdfIcon />
                                                )}
                                            </ListItemIcon>
                                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
            )}
        </>
    )
};

import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const ClippedDrawer: React.FC = ({ children }) => {
  const classes = useStyles();

  const routes: Array<{ text: string; url: string }> = [
    { text: 'home', url: '/' },
    { text: 'svg-components', url: '/svg-components' },
    { text: 'with-next-sass', url: '/with-next-sass' },
    { text: 'with-next-seo', url: '/with-next-seo' },
    { text: 'with-next-sitemap', url: '/with-next-sitemap' },
    { text: 'with-tailwindcss', url: '/with-tailwindcss' },
    { text: 'with-why-did-you-render', url: '/with-why-did-you-render' },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            next-demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {routes.map((route) => (
              <Link href={route.url} key={route.text}>
                <ListItem button>
                  <ListItemText primary={route.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default ClippedDrawer;

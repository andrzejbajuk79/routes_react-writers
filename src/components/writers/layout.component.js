import React, { Component } from 'react';
import {AppBar,Toolbar,IconButton,Typography,Hidden,Drawer,Divider} from `@material-ui/core`

export default class Layuot extends Component {
state = {
mobileOpen: false
}
 handleDrawerToggle = () => {
  this.setState({mobileOpen =!this.state.mobileOpen})
};

render() {
 const {classes} = this.props;
 const {mobileOpen} = this.state

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
       <p>hello world</p>
      </div>
    );
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Responsive drawer
						</Typography>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label="mailbox folders">
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
						<Drawer
							container={container}
							variant="temporary"
							
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
							ModalProps={{
								keepMounted: true // Better open performance on mobile.
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Typography paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do rbi
						tincidunt. Lorem donec massa sapien faucibus et molestie ac.
					</Typography>
					<Typography paragraph>
						Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
						eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
						Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
					</Typography>
				</main>
			</div>
		);
	}
}

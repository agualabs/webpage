import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/augualabs_boat.svg'
import typo from '../img/augualabs_typo.svg'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  image_logo: {
    height: 30
  },
  image_typo: {
    height: 20,
    marginLeft: 20
  }
}

const Navbar = ({
  classes
}) => (
  <div className={classes.root}>
    <AppBar position='sticky' color='inherit'>
      <Toolbar>
        <Link to='/'>
          <figure>
            <img src={logo} alt='AguaLabs Logo' className={classes.image_logo} />
          </figure>
        </Link>
        <Link to='/' className={classes.flex}>
          <figure>
            <img src={typo} alt='AguaLabs Typography' className={classes.image_typo} />
          </figure>
        </Link>
        <Button>
          <Link to='/products'>
            Services
          </Link>
        </Button>
        <Button color='primary'>
          <Link to='/about'>
            Imprint
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(styles)(Navbar)

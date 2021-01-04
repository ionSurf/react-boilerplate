import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';

import './styles.css'

const ListItems = ({ items, visible, onClick, classes }) => (
  <Collapse in={visible}>
    {items
      .filter(({ hidden }) => !hidden)
      .map(({ label, disabled, Icon, to }, i) => (
        
          <ListItem
            key={i}
            button
            disabled={disabled}
            onClick={onClick(label, to)}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText
               >
                {label}
            </ListItemText>
          </ListItem>
        
      ))}
  </Collapse>
);

const ListItemGroup = ({ classes, sectionId, sectionName, isSectionVisible, items, onClickCallback, onToggleSectionCallback }) => (<>
  <ListSubheader>
    <Button
      disableRipple
      classes={{ root: classes.listSubheader }}
      onClick={onToggleSectionCallback( sectionId )}
    >
      { sectionName }
    </Button>
  </ListSubheader>
  <ListItems
    visible={ isSectionVisible }
    items={ items }
    onClick={ onClickCallback }
    classes={ classes }
  />
</>)

const SideMenuView = withStyles(styles)(({ classes, content, open, setOpen, toggleSection, sections, onClick, items, navItems }) => (
  <Grid container justify="space-between">
    {/* <Grid item className={classes.alignContent}>
      <Typography>{content}</Typography>
    </Grid> */}
    <Grid item>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          { navItems.map( ( navItem, i ) => (
            <ListItemGroup
              key={i}
              classes={{ root: classes.listSubheader }}
              sectionId={ navItem.id }
              sectionName={ navItem.label }
              isSectionVisible={ sections[ navItem.id ] }
              items={ navItem.items }
              onClickCallback={ onClick }
              onToggleSectionCallback={ toggleSection }
              />
          ) ) }
        </List>
      </Drawer>
    </Grid>

    <Grid item>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Show'} Drawer
        </Button>
    </Grid>
  </Grid>
))

export default SideMenuView
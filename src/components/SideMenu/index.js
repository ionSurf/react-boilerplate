import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import SideMenuView from './view'

import navItems from './helpers/navItems'

import { useNavigation } from 'react-navi'

const LeftMenu = _ => {
  const [ open, setOpen ] = useState(false);
  const [ content, setContent ] = useState('Home');
  const [ items ] = useState({
    cpu: [
      { label: 'Add CPU', Icon: AddIcon },
      { label: 'Remove CPU', Icon: RemoveIcon },
      { label: 'Usage', Icon: ShowChartIcon }
    ],
    memory: [
      { label: 'Add Memory', Icon: AddIcon },
      { label: 'Usage', Icon: ShowChartIcon }
    ],
    storage: [
      { label: 'Add Storage', Icon: AddIcon },
      { label: 'Usage', Icon: ShowChartIcon }
    ],
    network: [
      { label: 'Add Network', Icon: AddIcon, disabled: true },
      { label: 'Usage', Icon: ShowChartIcon }
    ]
  });
  const [sections, setSections] = useState({
    cpu: true,
    memory: false,
    storage: false,
    network: false
  });
  const navigation = useNavigation()

  const onClick = (content, uri) => () => {
    setOpen( false) ;
    setContent( content );
    navigation.navigate( uri )
  };

  const toggleSection = name => () => {
    setSections({ ...sections, [name]: !sections[name] });
  };

  return <SideMenuView
    open={ open }
    setOpen={ setOpen }
    content={ content }
    navItems={ navItems }
    items={ items }
    sections={sections}
    onClick={ onClick }
    toggleSection={ toggleSection } />
}

export default LeftMenu;
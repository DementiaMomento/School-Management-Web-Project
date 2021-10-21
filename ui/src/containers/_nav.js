import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info'
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Math Browser',
    to: '/browser',
    icon: <CIcon name="cil-dog" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Annotatable Calendar',
    to: '/calendar',
    icon: <CIcon name="cil-dog" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Digital Notebook',
    to: '/notebook',
    icon: <CIcon name="cil-dog" customClasses="c-sidebar-nav-icon"/>
  }
]

export default _nav

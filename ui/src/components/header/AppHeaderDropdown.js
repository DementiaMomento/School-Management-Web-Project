import React, { Component } from 'react'
import AuthService from "../../services/auth.service";
import { withRouter } from "react-router-dom";

import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

class AppHeaderDropdown extends Component {
  constructor(props) {
    super(props);
    
    this.logout = this.logout.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  actualDisplay = user => {
    if (!user) {
      return (
        <>Account</>
      );
    } else {
      return (
        <>{user.username}</>
      );
    }
  };

  actualOptions = user => {
    if (!user) {
      return (
        <>
        <CDropdownItem href="#/login">
          Login
        </CDropdownItem>
        <CDropdownItem href="#/register">
          Register
        </CDropdownItem>
        </>
      );
    } else {
      return (
        <>
        <CDropdownItem href='#/login' onClick={(e) => {this.logout(e)}}>
          Logout
        </CDropdownItem>
        </>
      );
    }
  };

  logout = (e) => {
    e.preventDefault();

    AuthService.logout();
    this.props.history.push("/");
    window.location.reload();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        {this.actualDisplay(currentUser)}
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          {this.actualOptions(currentUser)}
        </CDropdownMenu>
      </CDropdown>
    )
  }
}

export default withRouter(AppHeaderDropdown)
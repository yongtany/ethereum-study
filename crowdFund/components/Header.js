import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <Menu>
      <Menu.Item>
        CrowdFund
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>CrowdFund</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

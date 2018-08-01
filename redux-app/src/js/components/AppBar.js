import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
injectTapEventPlugin();
const FlatButtonExampleSimple = () => (
  <MuiThemeProvider>
  <div>
    <FlatButton label="Default" />
    <FlatButton label="Primary" primary={true} />
    <FlatButton label="Secondary" secondary={true} />
    <FlatButton label="Disabled" disabled={true} />
    <br />
    <br />
    <FlatButton label="Full width" fullWidth={true} />
  </div>
  </MuiThemeProvider>
);

export default FlatButtonExampleSimple;

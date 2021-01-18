import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";

export const Switcher = ({ auth, onChange }) => {
    return <FormGroup>
        <FormControlLabel
            control={<Switch checked={auth} onChange={onChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
        />
    </FormGroup>
};
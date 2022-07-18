import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { handleSignInSubmit } from './SignInSubmit';

function SignIn() {
    return (
    <Box component="main" sx={{ 
            p: 2, 
            margin: '5% auto 0'
        }}>
            <Box component="form" onSubmit={handleSignInSubmit}>
                <Grid 
                    container 
                    direction="column" 
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sx={{fontSize:'50px', padding:'0 0 40px 0'}}>
                        Hello REACT!
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="outlined-required"
                            label="id"
                            name='id'
                            autoFocus
                            sx={{width:'400px'}}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="outlined-required"
                            label="pw"
                            name='pw'
                            sx={{width:'400px', padding:'0 0 10px 0'}}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" type="submit">Sign In</Button>
                    </Grid>
                    {/* <Grid item>
                        <Link to="/">
                            Don't have an account? Sign Up"
                        </Link>
                    </Grid> */}
                </Grid>
            </Box>
    </Box>
    );
}

export {SignIn};
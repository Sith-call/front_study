import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { handleSignUpSubmit } from './signUpSubmit';

function Signup() {
    return (
        <Box component="main" sx={{ 
                p: 2, 
                margin: '5% auto 0'
            }}>
                <Box component="form" onSubmit={handleSignUpSubmit}>
                    <Grid 
                        container 
                        direction="column" 
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sx={{fontSize:'50px', padding:'0 0 40px 0'}}>
                            REGISTER
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="outlined-required"
                                label="ID"
                                name='id'
                                autoFocus
                                sx={{width:'400px'}}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                name='password'
                                sx={{width:'400px', padding:'0 0 10px 0'}}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="outlined-required"
                                label="Retype Password"
                                name='password_validation'
                                sx={{width:'400px', padding:'0 0 10px 0'}}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" type="submit">Sign Up</Button>
                        </Grid>
                        <Grid item>
                            {/* <Link to="/"> */}
                                Already have an account? Sign in
                            {/* </Link> */}
                        </Grid>
                    </Grid>
                </Box>
        </Box>
    );
}

export {Signup};
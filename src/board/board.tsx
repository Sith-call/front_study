import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Board() {
    return (
    <Box component="main">
        <Box sx={{fontSize:'50px', padding:'0 0 40px 0', textAlign:"center", borderBottom:"1px solid black"}}>
            <Box>BOARD</Box>
            <Box sx={{fontSize:'20px', textAlign:"left", ml:'20px'}}>
                <Link to="/">Log out</Link> 
            </Box>
        </Box>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item sx={{width:"33%", height:"500px"}}>
                <Box sx={{fontSize:"20px", textAlign:"center", borderBottom:"1px solid black" , height:"30px"}}>WRITE</Box>
                <Box component="form">
                    <TextField
                        id="standard-multiline-static"
                        label="COTNENT"
                        name="content"
                        multiline
                        rows={10}
                        variant="standard"
                        sx={{width:"100%"}}
                    />
                    <Button>WRITE</Button>
                </Box>
            </Grid>
            <Grid item sx={{width:"33%", height:"500px",borderLeft:"1px solid black", borderRight:"1px solid black"}}>
                <Grid container direction="column">
                    <Box sx={{fontSize:"20px", textAlign:"center", borderBottom:"1px solid black", height:"30px"}}>LIST</Box>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </Grid>
            </Grid>
            <Grid item sx={{width:"33%", height:"500px"}}>
                <Grid container direction="column">
                    <Box sx={{fontSize:"20px", textAlign:"center", borderBottom:"1px solid black", height:"30px"}}>READ</Box>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    );
}

export {Board};
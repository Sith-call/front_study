import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UpdateInterface } from "./board";

function Update( { read, articleList, updateArticleList }:UpdateInterface ) {
    const [update, setUpdate] = useState({
        newSubject:'',
        newContent:''
    });

    const { newSubject, newContent} = update;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setUpdate({
            ...update,
            [name]:value
        });
    };

    const onUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newArticle = {
            id:read.id,
            subject:newSubject,
            content:newContent
        }
        const newArticleList = JSON.parse(JSON.stringify(articleList));
        let idx;
        for( idx = 0 ; idx < newArticleList.length ; idx++){
            if( (newArticleList[idx]).id == read.id ){
                (newArticleList[idx]).subject = newSubject;
                (newArticleList[idx]).content = newContent;
            }
        }
        updateArticleList(newArticleList);
    }

    const debug = () => {
        console.log(update);
    }

    return (
        <>
            <Box sx={{fontSize:"20px", textAlign:"center", borderBottom:"1px solid black" , height:"30px"}}>UPDATE</Box>
            <Box component="form">
                <TextField
                    label="NEW SUBJECT"
                    name="newSubject"
                    variant="standard"
                    sx={{width:"100%"}}
                    value={newSubject}
                    onChange={onChange}
                />
                <TextField
                    id="standard-multiline-static"
                    label="NEW COTNENT"
                    name="newContent"
                    multiline
                    rows={10}
                    variant="standard"
                    sx={{width:"100%"}}
                    value={newContent}
                    onChange={onChange}
                />
                <Button onClick={onUpdate}>UPDATE</Button>
                <Button onClick={debug}>DEBUG</Button>
            </Box>
        </>
    );
};
export {Update};
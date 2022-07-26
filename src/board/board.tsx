import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ArticleItem } from './articleItem';
import { ReadItem } from './readItem';
import { Update } from './update';

export interface Article {
    id: number;
    subject:string;
    content : string;
}

export interface ArticleInterface{
    article:Article;
    id:number;
    onReadable(e: React.MouseEvent<HTMLButtonElement>):void;
    onRemove(e: React.MouseEvent<HTMLButtonElement>):void;
}

export interface Read {
    id: number;
    subject:string;
    content:string;
}

export interface ReadInterface{
    read:Read;
    isModify:boolean;
    onModify(e: React.MouseEvent<HTMLButtonElement>):void;
}

export interface UpdateInterface{
    read:Read;
    articleList:Article[];
    updateArticleList(array:Article[]):void;
}

function Board() {
    const [article, setArticle] = useState<Article>({
        id:0,
        subject:'',
        content:''
    });
    const { id, subject, content} = article;

    const [articleList, setArticleList] = useState<Article[]>([]);

    const [read, setRead] = useState<Read>({
        id:0,
        subject:'',
        content:''
    });

    const nextId = useRef(1);

    const [isReadable, setIsReadable] = useState<boolean>(false);
    const [isModify, setIsModify] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setArticle({
            ...article,
            [name]:value
        });
    };

    const onCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newArticle = {
            id:nextId.current,
            subject:subject,
            content:content
        }
        setArticleList(prev => [...articleList, newArticle]);
        nextId.current +=1;
    }

    const onReadable = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsReadable(isReadable => !isReadable);
        const tempId:number = parseInt(e.currentTarget.id);
        const tempArray:Article[] = articleList.filter(article => article.id == tempId);
        const { id, subject, content } = tempArray[0];
        setRead({
            id:tempId,
            subject:tempArray[0].subject,
            content:tempArray[0].content
        });
    }

    const onRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = parseInt(e.currentTarget.id)
        setArticleList(articleList.filter(article => article.id !== id));
        setIsReadable(false);
    };

    const onModify = (e: React.MouseEvent<HTMLButtonElement>) =>{
        setIsModify(prev => !prev);
    }

    const updateArticleList = (array:Article[]) => {
        setArticleList(array);
    }

    useEffect(()=>{
        if(!isReadable){
            setIsModify(false);
        }
    },[isReadable]);

    const debug = () => {
        console.log(articleList);
        console.log(read);
        console.log(isReadable);
    }

    return (
    <Box component="main">
        <Box sx={{fontSize:'50px', padding:'0 0 40px 0', textAlign:"center", borderBottom:"1px solid black"}}>
            <Box>REACT BOARD</Box>
            <Box sx={{fontSize:'20px', textAlign:"left", ml:'20px'}}>
                <Link to="/">Log out</Link> 
            </Box>
        </Box>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item sx={{width:"33%", height:"500px"}}>
                <Box sx={{fontSize:"20px", textAlign:"center", borderBottom:"1px solid black" , height:"30px"}}>WRITE</Box>
                <Box component="form">
                    <TextField
                        label="SUBJECT"
                        name="subject"
                        variant="standard"
                        sx={{width:"100%"}}
                        value={subject}
                        onChange={onChange}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="COTNENT"
                        name="content"
                        multiline
                        rows={10}
                        variant="standard"
                        sx={{width:"100%"}}
                        value={content}
                        onChange={onChange}
                    />
                    <Button onClick={onCreate}>WRITE</Button>
                    <Button onClick={debug}>DEBUG</Button>
                </Box>
            </Grid>
            <Grid item sx={{width:"33%", height:"500px",borderLeft:"1px solid black", borderRight:"1px solid black"}}>
                <Grid container direction="column">
                    <Box sx={{fontSize:"20px", textAlign:"center", borderBottom:"1px solid black", height:"30px"}}>LIST</Box>
                    {articleList.map( (article) => (
                        <ArticleItem 
                            key={article.id}
                            id={article.id} 
                            article={article}
                            onReadable={onReadable}
                            onRemove={onRemove}
                        />    
                    ))}
                </Grid>
            </Grid>
            <Grid item sx={{width:"33%", height:"500px"}}>
                <Grid container direction="column">
                    <Box sx={{fontSize:"20px", textAlign:"center", borderBottom:"1px solid black", height:"30px"}}>READ</Box>
                        {isReadable ? <ReadItem isModify={isModify} read={read} onModify={onModify} /> : null}
                        {isModify ? <Update read={read} articleList={articleList} updateArticleList={updateArticleList} /> : null}
                </Grid>
            </Grid>
        </Grid>
    </Box>
    );
}

export {Board};
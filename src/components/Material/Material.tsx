import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Material(props) {
    const { image, title, pdf, bookName } = props;

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(pdf).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = bookName;
                alink.click();
            })
        })
    }

    return(
        <Grid container style={{ padding: 24 }}>
            <Card>
                <CardActionArea>
                    
                    <CardMedia> 
                        <img src={image} alt='book cover'/>
                    </CardMedia>

                    <CardContent style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}>
                        <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>
                            {title}
                        </Typography>
                    </CardContent>

                </CardActionArea>

                <CardActions style={{ display: 'flex', justifyContent: 'center', paddingBottom: 16 }}>
                    <Button onClick={onButtonClick}
                        style={{
                            backgroundColor: 'black',
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 8 
                        }}>
                        <Typography style={{ fontSize: 14, color: 'white' }}>
                            Download
                        </Typography>
                        
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Material;
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
// @ts-ignore
import Material from '../../components/Material/Material.tsx';
// @ts-ignore
import Book1 from '../../assets/book-arts/1.png';
// @ts-ignore
import Book2 from '../../assets/book-arts/2.png';
// @ts-ignore
import Book3 from '../../assets/book-arts/3.png';
// @ts-ignore
import Book4 from '../../assets/book-arts/4.png';
// @ts-ignore
import Issunboushi from '../../assets/pdf/01.Issunboushi.pdf';
// @ts-ignore
import Urashima from '../../assets/pdf/02.Urashimatarou.pdf';
// @ts-ignore
import Kororin from '../../assets/pdf/03.OmusubiKororin.pdf';
// @ts-ignore
import Kaguya from '../../assets/pdf/04.Kaguyahime.pdf';

function Books() {
    return(
        <Grid container style={{ paddingTop: 48}}>
            
            <Grid style={{ display: 'grid', justifyContent: 'center', paddingLeft: 300, paddingRight: 300}}>
                <Typography style={{ fontSize: 48, fontWeight: 'bold' }}>
                    Books
                </Typography>
            </Grid>

            <Grid style={{ display: 'flex', justifyContent: 'center', paddingTop: 40 }}>
                <Material 
                    title='Little One Inch'
                    image={Book1}
                    pdf={Issunboushi}
                    bookName='Little One Inch.pdf'
                />
                <Material 
                    title='Urashima Tarou'
                    image={Book2}
                    pdf={Urashima}
                    bookName='Urashima Tarou.pdf'
                />
                <Material 
                    title='Kororin Rice Ball'
                    image={Book3}
                    pdf={Kororin}
                    bookName='Kororin Rice Ball.pdf'
                />
                <Material 
                    title='Princess Kaguya'
                    image={Book4}
                    pdf={Kaguya}
                    bookName='Princess Kaguya.pdf'
                />
            </Grid>
        </Grid>
    )
}

export default Books;
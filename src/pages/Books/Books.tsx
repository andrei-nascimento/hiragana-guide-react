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
import Book5 from '../../assets/book-arts/5.png';
// @ts-ignore
import Book6 from '../../assets/book-arts/6.png';
// @ts-ignore
import Book7 from '../../assets/book-arts/7.png';
// @ts-ignore
import Book8 from '../../assets/book-arts/8.png';
// @ts-ignore
import Book9 from '../../assets/book-arts/9.png';
// @ts-ignore
import Book10 from '../../assets/book-arts/10.png';
// @ts-ignore
import Book11 from '../../assets/book-arts/11.png';

// @ts-ignore
import Issunboushi from '../../assets/pdf/01.Issunboushi.pdf';
// @ts-ignore
import Urashima from '../../assets/pdf/02.Urashimatarou.pdf';
// @ts-ignore
import Kororin from '../../assets/pdf/03.OmusubiKororin.pdf';
// @ts-ignore
import Kaguya from '../../assets/pdf/04.Kaguyahime.pdf';
// @ts-ignore
import Kasazizou from '../../assets/pdf/05.Kasazizou.pdf';
// @ts-ignore
import Sarukani from '../../assets/pdf/06.SarukaniGassen.pdf';
// @ts-ignore
import Suzume from '../../assets/pdf/07.ShitarakiriSuzume.pdf';
// @ts-ignore
import Tsuruno from '../../assets/pdf/08.TsurunoOngaeshi.pdf';
// @ts-ignore
import Yomeiri from '../../assets/pdf/09.NezuminoYomeiri.pdf';
// @ts-ignore
import Hansaka from '../../assets/pdf/10.HansakaJiisan.pdf';
// @ts-ignore
import Momotaro from '../../assets/pdf/11.Momotaro.pdf';


function Books() {
    return(
        <Grid container style={{ paddingTop: 48, paddingLeft: 48, paddingRight: 48}}>
            
            <Grid item xs={12} style={{ display: 'grid', justifyContent: 'center', paddingLeft: 300, paddingRight: 300}}>
                <Typography style={{ fontSize: 54, fontWeight: 'bold' }}>
                    Books
                </Typography>
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop: 40, paddingBottom: 32 }}>
                <Material 
                    title='Little One Inch'
                    image={Book1}
                    pdf={Issunboushi}
                    bookName='Little One Inch.pdf'
                />
                <Material 
                    title='Urashima Tarō'
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
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', paddingBottom: 32 }}>
                <Material 
                    title='Jizō with Hat'
                    image={Book5}
                    pdf={Kasazizou}
                    bookName='Jizō with Hat.pdf'
                />
                <Material 
                    title='Crab and Monkey'
                    image={Book6}
                    pdf={Sarukani}
                    bookName='The Crab and the Monkey.pdf'
                />
                <Material 
                    title='Tongue-Cut Sparrow'
                    image={Book7}
                    pdf={Suzume}
                    bookName='Tongue-Cut Sparrow.pdf'
                />
                <Material 
                    title='The Crane`s Grace'
                    image={Book8}
                    pdf={Tsuruno}
                    bookName='The Crane`s Grace.pdf'
                />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', paddingBottom: 32 }}>
                <Material 
                    title='Mouse`s Marriage'
                    image={Book9}
                    pdf={Yomeiri}
                    bookName='Mouse`s Marriage.pdf'
                />
                <Material 
                    title='Grandpa Hanasaka'
                    image={Book10}
                    pdf={Hansaka}
                    bookName='Grandpa Hanasaka.pdf'
                />
                <Material 
                    title='Peach Boy'
                    image={Book11}
                    pdf={Momotaro}
                    bookName='Peach Boy.pdf'
                />
            </Grid>
        </Grid>
    )
}

export default Books;
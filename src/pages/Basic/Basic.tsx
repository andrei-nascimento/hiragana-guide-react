import React from "react";
import './Basic.css';
import { Grid, Paper, Typography } from '@material-ui/core';

// @ts-ignore 
import Audios from "../../components/static/AudioLogic/Audios.tsx";
// @ts-ignore 
import AudioA from "../../assets/audios/assets_audios_a.mp3";
// @ts-ignore 
import AudioI from "../../assets/audios/assets_audios_i.mp3";
// @ts-ignore 
import AudioU from "../../assets/audios/assets_audios_u.mp3";
// @ts-ignore 
import AudioE from "../../assets/audios/assets_audios_e.mp3";
// @ts-ignore 
import AudioO from "../../assets/audios/assets_audios_o.mp3";
// @ts-ignore 
import AudioKA from "../../assets/audios/assets_audios_ka.mp3";
// @ts-ignore 
import AudioKI from "../../assets/audios/assets_audios_ki.mp3";
// @ts-ignore 
import AudioKU from "../../assets/audios/assets_audios_ku.mp3";
// @ts-ignore 
import AudioKE from "../../assets/audios/assets_audios_ke.mp3";
// @ts-ignore 
import AudioKO from "../../assets/audios/assets_audios_ko.mp3";
// @ts-ignore 
import AudioSA from "../../assets/audios/assets_audios_sa.mp3";
// @ts-ignore 
import AudioSHI from "../../assets/audios/assets_audios_shi.mp3";
// @ts-ignore 
import AudioSU from "../../assets/audios/assets_audios_su.mp3";
// @ts-ignore 
import AudioSE from "../../assets/audios/assets_audios_se.mp3";
// @ts-ignore 
import AudioSO from "../../assets/audios/assets_audios_so.mp3";
// @ts-ignore 
import AudioTA from "../../assets/audios/assets_audios_ta.mp3";
// @ts-ignore 
import AudioCHI from "../../assets/audios/assets_audios_chi.mp3";
// @ts-ignore 
import AudioTSU from "../../assets/audios/assets_audios_tsu.mp3";
// @ts-ignore 
import AudioTE from "../../assets/audios/assets_audios_te.mp3";
// @ts-ignore 
import AudioTO from "../../assets/audios/assets_audios_to.mp3";
// @ts-ignore 
import AudioNA from "../../assets/audios/assets_audios_na.mp3";
// @ts-ignore 
import AudioNI from "../../assets/audios/assets_audios_ni.mp3";
// @ts-ignore 
import AudioNU from "../../assets/audios/assets_audios_nu.mp3";
// @ts-ignore 
import AudioNE from "../../assets/audios/assets_audios_ne.mp3";
// @ts-ignore 
import AudioNO from "../../assets/audios/assets_audios_no.mp3";
// @ts-ignore 
import AudioHA from "../../assets/audios/assets_audios_ha.mp3";
// @ts-ignore 
import AudioHI from "../../assets/audios/assets_audios_hi.mp3";
// @ts-ignore 
import AudioFU from "../../assets/audios/assets_audios_fu.mp3";
// @ts-ignore 
import AudioHE from "../../assets/audios/assets_audios_he.mp3";
// @ts-ignore 
import AudioHO from "../../assets/audios/assets_audios_ho.mp3";
// @ts-ignore 
import AudioMA from "../../assets/audios/assets_audios_ma.mp3";
// @ts-ignore 
import AudioMI from "../../assets/audios/assets_audios_mi.mp3";
// @ts-ignore 
import AudioMU from "../../assets/audios/assets_audios_mu.mp3";
// @ts-ignore 
import AudioME from "../../assets/audios/assets_audios_me.mp3";
// @ts-ignore 
import AudioMO from "../../assets/audios/assets_audios_mo.mp3";
// @ts-ignore 
import AudioYA from "../../assets/audios/assets_audios_ya.mp3";
// @ts-ignore 
import AudioYU from "../../assets/audios/assets_audios_yu.mp3";
// @ts-ignore 
import AudioYO from "../../assets/audios/assets_audios_yo.mp3";
// @ts-ignore 
import AudioRA from "../../assets/audios/assets_audios_ra.mp3";
// @ts-ignore 
import AudioRI from "../../assets/audios/assets_audios_ri.mp3";
// @ts-ignore 
import AudioRU from "../../assets/audios/assets_audios_ru.mp3";
// @ts-ignore 
import AudioRE from "../../assets/audios/assets_audios_re.mp3";
// @ts-ignore 
import AudioRO from "../../assets/audios/assets_audios_ro.mp3";
// @ts-ignore 
import AudioWA from "../../assets/audios/assets_audios_wa.mp3";
// @ts-ignore 
import AudioN from "../../assets/audios/assets_audios_n.mp3";
// @ts-ignore 
import AudioWO from "../../assets/audios/assets_audios_wo.mp3";


function Basic() {
    return(
        <Grid container className='container-basic'>
            <Grid item xs={12}>
                <Typography className='title-basic'>
                    Hiragana Table - Basic
                </Typography>
            </Grid>
            <Grid container xs={8} className='container-basic-paper'>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none-dash' elevation={0}>-</Paper>
                    <Paper className='paper-none' elevation={0}>A</Paper>
                    <Paper className='paper-none' elevation={0}>I</Paper>
                    <Paper className='paper-none' elevation={0}>U</Paper>
                    <Paper className='paper-none' elevation={0}>E</Paper>
                    <Paper className='paper-none' elevation={0}>O</Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none-dash'elevation={0}>-</Paper>
                    <Paper className='paper'><p className="jp">あ</p><p className='silaba'>a</p>
                    <Audios audio={AudioA} /></Paper>
                    <Paper className='paper'><p className="jp">い</p><p className='silaba'>i</p>
                    <Audios audio={AudioI} /></Paper>
                    <Paper className='paper'><p className="jp">う</p><p className='silaba'>u</p>
                    <Audios audio={AudioU} /></Paper>
                    <Paper className='paper'><p className="jp">え</p><p className='silaba'>e</p>
                    <Audios audio={AudioE} /></Paper>
                    <Paper className='paper'><p className="jp">お</p><p className='silaba'>o</p>
                    <Audios audio={AudioO} /></Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>K</Paper>
                    <Paper className='paper'><p className="jp">か</p><p className='silaba'>ka</p>
                    <Audios audio={AudioKA} /></Paper>
                    <Paper className='paper'><p className="jp">き</p><p className='silaba'>ki</p>
                    <Audios audio={AudioKI} /></Paper>
                    <Paper className='paper'><p className="jp">く</p><p className='silaba'>ku</p>
                    <Audios audio={AudioKU} /></Paper>
                    <Paper className='paper'><p className="jp">け</p><p className='silaba'>ke</p>
                    <Audios audio={AudioKE} /></Paper>
                    <Paper className='paper'><p className="jp">こ</p><p className='silaba'>ko</p>
                    <Audios audio={AudioKO} /></Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>S</Paper>
                    <Paper className='paper'><p className="jp">さ</p><p className='silaba'>sa</p>
                    <Audios audio={AudioSA} /></Paper>
                    <Paper className='paper'><p className="jp">し</p><p className='silaba'>shi</p>
                    <Audios audio={AudioSHI} /></Paper>
                    <Paper className='paper'><p className="jp">す</p><p className='silaba'>su</p>
                    <Audios audio={AudioSU} /></Paper>
                    <Paper className='paper'><p className="jp">せ</p><p className='silaba'>se</p>
                    <Audios audio={AudioSE} /></Paper>
                    <Paper className='paper'><p className="jp">そ</p><p className='silaba'>so</p>
                    <Audios audio={AudioSO} /></Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>T</Paper>
                    <Paper className='paper'><p className="jp">た</p><p className='silaba'>ta</p>
                    <Audios audio={AudioTA} /></Paper>
                    <Paper className='paper'><p className="jp">ち</p><p className='silaba'>chi</p>
                    <Audios audio={AudioCHI} /></Paper>
                    <Paper className='paper'><p className="jp">つ</p><p className='silaba'>tsu</p>
                    <Audios audio={AudioTSU} /></Paper>
                    <Paper className='paper'><p className="jp">て</p><p className='silaba'>te</p>
                    <Audios audio={AudioTE} /></Paper>
                    <Paper className='paper'><p className="jp">と</p><p className='silaba'>to</p>
                    <Audios audio={AudioTO} /></Paper>
                    </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>N</Paper>
                    <Paper className='paper'><p className="jp">な</p><p className='silaba'>na</p>
                    <Audios audio={AudioNA} /></Paper>
                    <Paper className='paper'><p className="jp">に</p><p className='silaba'>ni</p>
                    <Audios audio={AudioNI} /></Paper>
                    <Paper className='paper'><p className="jp">ぬ</p><p className='silaba'>nu</p>
                    <Audios audio={AudioNU} /></Paper>
                    <Paper className='paper'><p className="jp">ね</p><p className='silaba'>ne</p>
                    <Audios audio={AudioNE} /></Paper>
                    <Paper className='paper'><p className="jp">の</p><p className='silaba'>no</p>
                    <Audios audio={AudioNO} /></Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>H</Paper>
                    <Paper className='paper'><p className="jp">は</p><p className='silaba'>ha</p>
                    <Audios audio={AudioHA} /></Paper>
                    <Paper className='paper'><p className="jp">ひ</p><p className='silaba'>hi</p>
                    <Audios audio={AudioHI} /></Paper>
                    <Paper className='paper'><p className="jp">ふ</p><p className='silaba'>fu</p>
                    <Audios audio={AudioFU} /></Paper>
                    <Paper className='paper'><p className="jp">へ</p><p className='silaba'>he</p>
                    <Audios audio={AudioHE} /></Paper>
                    <Paper className='paper'><p className="jp">ほ</p><p className='silaba'>ho</p>
                    <Audios audio={AudioHO} /></Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>M</Paper>
                    <Paper className='paper'><p className="jp">ま</p><p className='silaba'>ma</p>
                    <Audios audio={AudioMA} /></Paper>
                    <Paper className='paper'><p className="jp">み</p><p className='silaba'>mi</p>
                    <Audios audio={AudioMI} /></Paper>
                    <Paper className='paper'><p className="jp">む</p><p className='silaba'>mu</p>
                    <Audios audio={AudioMU} /></Paper>
                    <Paper className='paper'><p className="jp">め</p><p className='silaba'>me</p>
                    <Audios audio={AudioME} /></Paper>
                    <Paper className='paper'><p className="jp">も</p><p className='silaba'>mo</p>
                    <Audios audio={AudioMO} /></Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>Y</Paper>
                    <Paper className='paper'><p className="jp">や</p><p className='silaba'>ya</p>
                    <Audios audio={AudioYA} /></Paper>
                    <Paper className='paper-none-dash' elevation={0}>-</Paper>
                    <Paper className='paper'><p className="jp">ゆ</p><p className='silaba'>yu</p>
                    <Audios audio={AudioYU} /></Paper>
                    <Paper className='paper-none-dash' elevation={0}>-</Paper>
                    <Paper className='paper'><p className="jp">よ</p><p className='silaba'>yo</p>
                    <Audios audio={AudioYO} /></Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>R</Paper>
                    <Paper className='paper'><p className="jp">ら</p><p className='silaba'>ra</p>
                    <Audios audio={AudioRA} /></Paper>
                    <Paper className='paper'><p className="jp">り</p><p className='silaba'>ri</p>
                    <Audios audio={AudioRI} /></Paper>
                    <Paper className='paper'><p className="jp">る</p><p className='silaba'>ru</p>
                    <Audios audio={AudioRU} /></Paper>
                    <Paper className='paper'><p className="jp">れ</p><p className='silaba'>re</p>
                    <Audios audio={AudioRE} /></Paper>
                    <Paper className='paper'><p className="jp">ろ</p><p className='silaba'>ro</p>
                    <Audios audio={AudioRO} /></Paper>
                </Grid>
                <Grid item className='papers-basic'>
                    <Paper className='paper-none' elevation={0}>W</Paper>
                    <Paper className='paper'><p className="jp">わ</p><p className='silaba'>wa</p>
                    <Audios audio={AudioWA} /></Paper>
                    <Paper className='paper-none-dash' elevation={0}>-</Paper>
                    <Paper className='paper'><p className="jp">ん</p><p className='silaba'>n</p>
                    <Audios audio={AudioN} /></Paper>
                    <Paper className='paper-none-dash' elevation={0}>-</Paper>
                    <Paper className='paper'><p className="jp">を</p><p className='silaba'>wo</p>
                    <Audios audio={AudioWO} /></Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Basic;
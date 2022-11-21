import React from 'react';
import useSound from 'use-sound';
import './Audios.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// @ts-ignore
import AudioA from '../assets/audios/assets_audios_a.mp3';


function ButtonAudioA(){
    const [playSound] = useSound(AudioA)
    
    return (
        <button className='audio-button' onClick={() => playSound()}>
            <PlayArrowIcon className='play-icon'/>
        </button>
    )
}

export default ButtonAudioA;



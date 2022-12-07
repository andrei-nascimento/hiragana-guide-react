import React from 'react';
import useSound from 'use-sound';
import './Audios.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function ButtonAudioA(props){
    const { audio } = props;
    const [playSound] = useSound(audio)

    return (
        <>
            <button className='audio-button' onClick={() => playSound(audio)}>
                <PlayArrowIcon className='play-icon'/>
            </button>
        </>
    )
}

export default ButtonAudioA;

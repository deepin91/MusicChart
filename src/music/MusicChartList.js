import MusicChartEach from "./MusicChartEach";
import React from "react";

const music = [
    {
        number: '1.',
        musicTitle: 'Ditto',
        artistName: 'NewJeans',
        albumTitle: "'OMG'",
        image: '/img/ditto.jpg'
    },

    {
        number: '2.',
        musicTitle: '파이팅 해야지(Feat. 이영지)',
        artistName: '부석순 (SEVENTEEN)',
        albumTitle: '부석순 1st Single Album SECOND WIND',
        image: '/img/bss.jpg'
    },

    {
        number: '3.',
        musicTitle: 'LOVE DIVE',
        artistName: 'IVE(아이브)',
        albumTitle: 'After LIKE',
        image: '/img/lovedive.jpg'
    }
];

function MusicChartList(props) {
    return(
        <>
        {
        music.map((msc => <MusicChartEach number={msc.number} musicTitle={msc.musicTitle} artistName={msc.artistName} image={msc.image} albumTitle={msc.albumTitle} />)
        )}
        </>
    );
}

export default MusicChartList;
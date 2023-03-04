import React from "react";

//여긴 각각의 뮤직 차트
function MusicChartEach(props) {
    const styles = {
        wrapper: {
            display: 'flex', 
            flexDirection: 'row', 
            border: '1px solid gray', 
            // borderRadius: 16, 
            borderRadius: 0,
            padding: 8, 
            margin: 8
        }, 
        image: {
            width: 35, 
            height: 35, 
            // borderRadius: 25
            borderRadius: 0
        }, 
        contentContainer: {
            marginLeft: 10, 
            display: 'flex', 
            flexDirection: 'column'
        }, 
        musicTitle: {
            color: 'black', 
            fontSize: 13, 
            fontWeight: 'bold', 
            marginBottom: 5,
            cursor: 'pointer'
        }, 
        artistName: {
            color: 'gray', 
            fontSize: 10
        },

        nameAndTitle: {
            marginRight: 10,
            color: 'gray', 
            fontSize: 10,
        },

        wrapper2: {
            display: 'flex', 
            flexDirection: 'row', 
            // border: '1px solid gray', 
            // borderRadius: 16, 
            borderRadius: 0,
            padding: 15, 
            marginRight: 10
        },

        number:{
            color: 'black', 
            fontSize: 13, 
            fontWeight: 'bold', 
            marginBottom: 5 
        },

        // checkBox:{
        //     width: , 
        //     height: 15, 
        //     // borderRadius: 25
        //     borderRadius: 0
        //     // left: 3.4,
        //     // top: 1,
        //     // width: 5,
        //     // height: 5
        // }
    };

    return (
        <div style={styles.wrapper}>
            <input type="checkbox"/>
            <span>{props.number}</span>

            {/*각 차트의 이미지*/}
            <div>
                <img style={styles.image} src={props.image}/>
            </div>

            {/* 노래 제목, 가수명 */}
            <div style={styles.contentContainer}>
            <span style={styles.musicTitle} title={props.musicTitle+'곡정보'}>{props.musicTitle}</span>
            <span style={styles.artistName}>{props.artistName}</span>
            </div>

            <div style={styles.wrapper2}>
            <span style={styles.nameAndTitle}>{props.artistName + " " + props.albumTitle}</span>     
            </div>    

        </div>
    );
}

export default MusicChartEach;
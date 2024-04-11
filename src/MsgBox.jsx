
function MsgBox({user,textColor}){
   let styles = {color: textColor};
    return(
            <h2 style={styles}> Hello,{user} </h2>

    )
}

export default MsgBox;
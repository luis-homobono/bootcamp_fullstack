const Description = (props) => {
    console.log(props)
    return <p style={{ color: props.color }} >Descripcion importada desde modulo externo { props.message }</p>
}

export default Description;
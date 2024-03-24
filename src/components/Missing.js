import { useMediaQuery } from "react-responsive"
import grumpy from "../data/grumpy_404.jpg"

const Missing = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <>
        <div style={containerStyle}>
            <img src={grumpy} style={isMobile ? small : big}/>
        </div>
        </>
    )
}

const containerStyle = {
    height: "100vh",
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    border: "2px solid fuschia"
}

const small = {
    margin: "0 auto",
    width: "100vw"
}

const big = {
    height: "60vh"
}


export default Missing
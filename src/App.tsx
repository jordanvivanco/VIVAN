import { Box, Typography, Divider, IconButton, Chip } from "@mui/material"
import { Link, BrowserRouter as Router } from "react-router-dom"
import qr from "./assets/qr.png"
function App() {
  return (
    <Box>
      <center>
      <Box>
        <Typography variant="h1" sx={{fontFamily: "Hind Siliguri", fontWeight: "700", marginTop: "20px"}}>Dona ahora con Yape</Typography>
        <Typography variant="h4">Escanea este QR para donar</Typography>
        <Typography variant="h6">Y podrás tener tu propio sitio web gratis, hazlo ahora.</Typography>
        <Typography variant="body1" sx={{fontFamily: "Josefin Sans", fontWeight: "700", fontSize: "20px", marginTop: "20px"}}>
          922-179-863
        </Typography>
          <Box sx={{height: "350px", width: "350px", background: "rgb(114, 14,158)", borderRadius: "20px", marginTop: "5px"}}>
            <center>
              <img src={qr} alt="qr" style={{width: "300px", height: "300px", marginTop: "25px", borderRadius: "10px"}} draggable="false" />
            </center>
          </Box>
      </Box>
      <Box sx={{marginTop: "100px", width: "100%", background: "#281E5D"}}>
        <Typography variant="h1" sx={{fontFamily: "Josefin Sans", fontWeight: "700", fontSize: "15vw", color: "white", paddingTop: "100px"}}>
          VIVAN
        </Typography>
        <Typography variant="h3" sx={{fontFamily: "Josefin Sans", fontWeight: "600", marginTop: "50px", color: "white"}}>
          Nos adaptamos a presupuestos limitados ofreciendo soluciones web de calidad a precios asequibles
        </Typography>
        <Box sx={{width : "90%", marginTop: "20px"}}>
          <Typography variant="h6" sx={{textAlign: "justify", fontFamily: "Josefin Sans", paddingBottom: "100px", color: "white" }}>
            En nuestra empresa VIVAN, entendemos que no todos cuentan con grandes recursos económicos. 
            Por eso, nos especializamos en ofrecer soluciones web asequibles y de calidad para aquellos con presupuestos limitados. 
            Nuestro objetivo es proporcionar opciones accesibles que aún cumplan con los estándares de diseño y funcionalidad, ayudando a los clientes a tener presencia en línea sin comprometer su presupuesto. 
            Trabajamos de manera eficiente y enfocada, optimizando los recursos disponibles para ofrecer un excelente valor por el dinero invertido.
          </Typography>
        </Box>
      </Box>
      <Box sx={{width: "100%", height : "250px", background: "#281E5D"}}>
        <Divider sx={{fontFamily: "Josefin Sans", fontWeight: "300"}}>
          <Chip label="CONTACTANOS" />
        </Divider>
        <Box sx={{marginTop: "40px"}}>
          <Router>
          <Link to="mailto:jhonnyvivanco.em@gmail.com">
            <IconButton sx={{color: "white"}} size="large">
              <i className="bi bi-envelope-fill"></i>
            </IconButton>
          </Link>
          <Link to="https://wa.me/51922179863">
            <IconButton sx={{color: "white"}} size="large">
              <i className="bi bi-whatsapp"></i>
            </IconButton>
          </Link>
          <Link to="https://instagram.com/jhon.viv?igshid=MzNINGNkZWQ4Mg==">
            <IconButton sx={{color: "white"}} size="large">
              <i className="bi bi-instagram"></i>
            </IconButton>
          </Link>
          
          <IconButton sx={{color: "white"}} size="large">
            <i className="bi bi-facebook"></i>
          </IconButton>
          </Router>
        </Box>
        <Box sx={{marginTop: "20px"}}>
          <Typography sx={{fontFamily: "Josefin Sans", fontWeight: "700", color: "white", fontSize: "20px"}}>
            Copyright ©  2022-{new Date().getFullYear()} · VIVAN
          </Typography>
        </Box>
      </Box>
      </center>
    </Box>
  )
}

export default App

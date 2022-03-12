// import "./Footer.css";
import { Typography } from "@material-ui/core";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./Footer.css";

export default function Footer() {
  

  return (
    <div className="Footer">
      <footer style={{ textAlign: "center", color: "white", paddingTop: "28px", alignItems:"center"}}>
        <div>
          <div className= "icon" disabled="disabled">
            <a href="#" ><i class="bi bi-envelope"></i></a>
            <a href="#"><i class="bi bi-discord"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-github"></i></a>
          </div>
          <div>
            <Typography>&copy; Powered By @Ritsu 2022. All Rights Reserved. </Typography>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

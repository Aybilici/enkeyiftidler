import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import './App.css';
import './css/util.css';
import './css/mainf1.css';

import tid from "./images.png";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const baslik = {
  color: "orange",
  textAlign: "center",
  fontFamily: "Avenir Next",
  fontSize: "23px"
};


class formMain extends Component {
    
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
      <header className="App-header">
        <img src={tid} className="App-logo" alt="logo" />
        <div className="example2">
          <p>
            Dem Derneği’nin Türk İşaret Dili (TİD) ile Tanışma Eğitimi’ne
            katılmak için grubunu seç ve başvur.
          </p>
        </div>
      </header>

      <div className="kutu">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={baslik}
                  >
                    TİD ile Tanışma Eğitimi <br />
                    Grup 1
                  </Typography>
                  5 Ekim - 30 Kasım 2019 tarihlerinde Dem Derneği’nin
                  İstanbul’daki merkez ofisinde her cumartesi{" "}
                  <span style={{ fontWeight: "bold" }}>
                    11:00 - 14:00{" "}
                  </span>
                  saatlerinde gerçekleştirilecektir.
                </CardContent>
                <CardActions>
                  <div className="butici">
                    <Link to={"/form"} className="buykay">
                      <button className="butkay">
                        <span className="kayit1">BAŞVUR</span>
                      </button>
                    </Link>
                  </div>
                </CardActions>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={baslik}
                  >
                    TİD ile Tanışma Eğitimi <br />
                    Grup 2
                  </Typography>
                  5 Ekim - 30 Kasım 2019 tarihlerinde Dem Derneği’nin
                  İstanbul’daki merkez ofisinde her cumartesi{" "}
                  <span style={{ fontWeight: "bold" }}>
                    15:00 - 18:00{" "}
                  </span>
                  saatlerinde gerçekleştirilecektir.
                </CardContent>

                <CardActions>
                  <div className="butici">
                    <Link to={"/form2"} className="buykay">
                      <button className="butkay2">
                        <span className="kayit2">BAŞVUR</span>
                      </button>
                    </Link>
                  </div>
                </CardActions>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footers">
        <div className="row">
          <div
            className="col-md-6"
            style={{
              paddingBottom: "15px"
            }}
          >
         
            Tomtom Mah. Yeniçarşı Cad. <br/>No:68 D:21
             Beyoğlu / İstanbul
          </div>
          <div
            className="col-md-6"
            style={{ paddingBottom: "5px", paddingTop: "5px" }}
          >
           
            info@demdernek.org
            <br /> +90 530 136 02 17
          </div>
        </div>
        <div
          style={{
            marginBottom: "5px",
            paddingTop: "8px"
          }}
        >
          Bu internet sitesi Abdulhak Yusuf Bilici tarafından Dem Derneği için
          hazırlanmıştır.
        </div>
      </div>
    </div>
  

    )
}
}

export default formMain;

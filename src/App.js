import React from "react";
import tid from "./images.png";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form1 from "./form1";
import Form2 from "./form2";
import header from "./header";

const baslik = {
  color: "orange",
  textAlign: "center",
  fontFamily: "Avenir Next",
  fontSize: "23px"
};

export default function index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/form" component={Form1} />
        <Route exact path="/form2" component={Form2} />
        <Route exact path="/header" component={header} />
        <Route>
          <div style={{ backgroundColor: "white" }}>
            <header className="App-header">
              <img src={tid} className="App-logo" alt="logo" />
              <div className="example2">
                <p>
                  Dem Derneği’nin Türk İşaret Dili ile Tanışma Eğitimi’ne
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
                        İstabul’daki merkez ofisinde her cumartesi{" "}
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
                        İstabul’daki merkez ofisinde her cumartesi{" "}
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
                  <div
                    style={{
                      borderLeft: "20px #3b4b59 solid",
                      width: "20px",
                      height: "25px",
                      marginRight: "10px",
                      marginTop: "28px",
                      float: "left"
                    }}
                  ></div>
                  Tomtom Mah. <br /> Yeniçarşı Cad. No:68 D:21
                  <br /> Beyoğlu / İstanbul
                </div>
                <div
                  className="col-md-6"
                  style={{ paddingBottom: "15px", paddingTop: "15px" }}
                >
                  <div
                    style={{
                      borderLeft: "20px #3b4b59 solid",
                      width: "20px",
                      height: "25px",
                      marginTop: "12px",
                      marginRight: "10px",
                      float: "left"
                    }}
                  ></div>
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
                Bu websitesi Abdulhak Yusuf Bilici tarafından Dem Derneği için
                hazırlanmıştır.
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

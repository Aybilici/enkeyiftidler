import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./App";
import Kosullar from "./kosullar";
import Form1 from "./form1";
import "./App.css";
import "./css/util.css";
import "./css/mainf1.css";
import Background from "./isaret.jpg";

var imagesection = {
  backgroundImage: `url(${Background})`
};

export default function form1() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form1" component={Form1} />
        <Route>
          <div className="App2">
            <div className="menu">
              <Link to={"/"}>
                <button className="butlar">Geri dön</button>
              </Link>
              <Link to={"/form1"}>
                <button className="butlar">1.Gruba katıl!</button>
              </Link>
            </div>
            <div className="container-contact100">
              <div className="wrap-contact100">
                <div
                  className="contact100-more flex-col-c-m"
                  style={imagesection}
                >
                  <div className="dis-flex size1 p-b-47">
                    <div className="flex-col size2">
                      <span className="txt1 p-b-20">
                        2.grup (Tanışma Eğitimleri 15:00 - 18:00)
                      </span>

                      <span className="txt3">
                        Formu doldurmadan önce eğitim ile ilgili şunları
                        bilmenin iyi olacağını düşünüyoruz:
                        <br />
                        <br />
                        <ol>
                          <li>1. Eğitimlerimiz ÜCRETSİZ.</li>
                          <br />
                          <li>
                            2. Eğitimler ………. tarihleri arasında cumartesi
                            günleri olacak.
                          </li>
                          <br />
                          <li>
                            3.Her bir eğitim 3 saat sürecek ve -en keyifli- 8
                            cumartesi görüşeceğiz. Toplam 24 saat birlikteyiz.
                          </li>
                          <br />
                          <li>
                            4. 8 buluşmadan 7&#39;sine katılım çok çok acil bir
                            durum olmadıkça zorunlu olacak.
                          </li>
                          <br />
                          <li>
                            5. Eğitim katılımları kontenjana bağlı olarak
                            belirlendiği için seçim yapmamız gerekecek. Amacımız
                            bu eğitimlerde işitme engelli ve sağırlar alanında
                            hayalleri, projelere ve çözümlere dönüştürebilecek
                            katılımcılar ile buluşmak. Kolektif olarak sizlerin
                            de içinde yer aldığı bir süreçte fikirler seçilecek.
                            Başvuru sonrası seçimin nasıl yapılacağı ile ilgili
                            bizden detaylı bir e-posta alacaksın.
                          </li>
                          <br />
                          <li>
                            6. Değerlendirme sonuçları ……… günü e-posta yoluyla
                            bildirilecek.
                          </li>
                          <br />
                          <li>
                            7. Eğitimler ……………. tarihleri arasında her cumartesi
                            …..’den …..’e Dem Derneği’nin Tomtom Mah. Yeniçarşı
                            Cad. No: 68/21 Beyoğlu/İstanbul adresinde bulunan
                            merkez ofisinde gerçekleştirilecek.
                          </li>
                          <br />
                          <li>
                            8. Formla ilgili sorularınız için Dem Derneği’nden
                            destek alabilirsiniz. (e-posta:
                            diclesonmezoglu@demdernek.org)
                          </li>
                          <br />
                        </ol>
                        <br />
                        Şimdiden tanışmak için pek heyecanlıyız, Dem&#39;den
                        Kocaman Sevgilerle :)
                      </span>
                    </div>
                  </div>
                </div>
                <form className="contact100-form validate-form">
                  <span className="contact100-form-title">
                    Tanışma Eğitimleri
                  </span>

                  <label className="label-input100" htmlFor="isim">
                    İsİm ve SoyİSİm *
                  </label>
                  <div
                    className="wrap-input100 rs1-wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <input
                      id="isim"
                      className="input100"
                      type="text"
                      name="isim"
                      placeholder="İsim"
                      required
                    />
                    <span className="focus-input100" />
                  </div>
                  <div
                    className="wrap-input100 rs2-wrap-input100 validate-input"
                    data-validate="Type last name"
                  >
                    <input
                      id="soyisim"
                      className="input100"
                      type="text"
                      name="soyisim"
                      placeholder="Soyisim"
                      required
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="email">
                    E-Posta *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                  >
                    <input
                      id="email"
                      className="input100"
                      type="email"
                      name="email"
                      placeholder="ornek@email.com"
                      required
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="phone">
                    Cep Telefonu *
                  </label>
                  <div className="wrap-input100">
                    <input
                      id="phone"
                      className="input100"
                      type="tel"
                      name="phone"
                      placeholder="Örnek Numara : 0523 434 43 54"
                      required
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="sec1">
                    Daha önce TİD EĞİTİMİ aldın mı? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <select required className="input100" id="sec1" name="sec1">
                      <option value="">Seç</option>
                      <option value="120">Evet, İSMEK (120 saat)</option>
                      <option value="200">Evet, İSMEK (200 saat)</option>
                      <option value="halk">Evet, Halk Eğitim Merkezi</option>
                      <option value="özel">Evet, özel bir kurs</option>
                      <option value="hayır">Hayır</option>
                      <option value="diger" htmlFor="diger">
                        Diğer
                      </option>
                    </select>

                    <input
                      id="diger"
                      className="input100"
                      type="diger"
                      name="diger"
                      placeholder="Diğer varsa yaz"
                    />
                  </div>
                  <label className="label-input100" htmlFor="soru1">
                    Neden TİD öğrenmek İSTİyorsun? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                  >
                    <input
                      id="soru1"
                      className="input100"
                      name="soru1"
                      type="text"
                      placeholder="Yazınız"
                      maxLength="250"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="soru2">
                    EĞİTİM sonrasında gerçekleştİrmek İSTEDİĞİN bİr fİkrİn var
                    mı? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                  >
                    <input
                      id="soru2"
                      type="text"
                      className="input100"
                      name="soru2"
                      placeholder="Yazınız"
                      maxLength="250"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label className="label-input100" htmlFor="sec3">
                    Dem Derneğİnİ nereden duydun? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <select
                      required
                      className="input100"
                      id="sec3"
                      type="sec3"
                      name="sec3"
                    >
                      <option value="">Seç</option>
                      <option value="arkadas">Arkadaş çevresi</option>
                      <option value="face">Facebook</option>
                      <option value="insta">Instagram</option>
                      <option value="arama">Arama Motoru</option>
                      <option value="diger">Diğer</option>
                    </select>

                    <input
                      id="diger1"
                      className="input100"
                      type="diger1"
                      name="diger1"
                      placeholder="Diğer varsa yaz"
                    />
                  </div>
                  <label className="label-input100" htmlFor="sec2">
                    Aİlende ve/veya yakın çevrende sağır ve/veya İşİtme engellİ
                    var mı? *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Type first name"
                    style={{ marginBottom: "15px" }}
                  >
                    <select
                      required
                      className="input100"
                      id="sec2"
                      type="sec2"
                      name="sec2"
                    >
                      <option value="">Seç</option>
                      <option value="volvo">Var</option>
                      <option value="saab">Yok</option>
                    </select>
                  </div>
                  <label htmlFor="checkbox_id" className="label-input101">
                    <input
                      type="checkbox"
                      title="Kabul ediyorum"
                      id="checkbox_id"
                      style={{
                        maxwidth: "35px",
                        maxheight: "35px",
                        margin: "10px 10px 10px 0px",
                        background: "orange"
                      }}
                      required
                    />
                    <br />
                    <Kosullar />
                  </label>

                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn" id="sendNewSms">
                      Gönder
                    </button>
                  </div>
                </form>
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
                  marginBottom: "10px",
                  paddingTop: "15px"
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

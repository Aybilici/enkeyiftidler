import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './App';
import Kosullar from './kosullar';
import Form1 from './form1';
import './App.css';
import './css/util.css';
import './css/mainf1.css';
import Background from './hand2.jpg';
import axios from 'axios';
import { stringify } from 'querystring';

var imagesection = {
  backgroundImage: `url(${Background})`
};

class form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isim: '',
      soyisim: '',
      email: '',
      phone: '',
      beforeTID: '',
      beforeTIDOther: '',
      whyTID: '',
      description: '',
      whereYouHeard: '',
      whereYouHeardOther: '',
      deafComminity: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const Employee = {
      FirstName: this.state.isim,
      LastName: this.state.soyisim,
      Email: this.state.email,
      MobilePhone: this.state.phone,
      BeforeTID: this.state.beforeTID,
      BeforeTIDOther: this.state.beforeTIDOther,
      WhyTID: this.state.whyTID,
      Description: this.state.description,
      WhereYouHeard: this.state.whereYouHeard,
      WhereYouHeardOther: this.state.whereYouHeardOther,
      DeafCominity: this.state.deafComminity,
      KVKK: true,
      Type: 'Learning2'
    };

    axios
      .post(
        'http://www.enkeyiflitid.com/api/api/Employees/post',
        stringify(Employee)
      )
      .then(function(response) {
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        alert('Başvurunuz alınmıştır. Teşekkür Ederiz.');
      })
      .catch(function(err) {
        console.log(err);
      });
      event.preventDefault();

      this.setState({
        isim: '',
        soyisim: '',
        email: '',
        phone: '',
        beforeTID: '',
        beforeTIDOther: '',
        whyTID: '',
        description: '',
        whereYouHeard: '',
        whereYouHeardOther: '',
        deafComminity: ''
      })
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/form1' component={Form1} />
          <Route>
            <div className='App2'>
              <div className='menu'>
                <Link to={'/'}>
                  <button className='butlar'>Geri dön</button>
                </Link>
                <Link to={'/form1'}>
                  <button className='butlar'>1. Gruba katıl!</button>
                </Link>
              </div>
              <div className='container-contact100'>
                <div className='wrap-contact100'>
                  <div
                    className='contact100-more flex-col-c-m'
                    style={imagesection}
                  >
                    <div className='dis-flex size1 p-b-47'>
                      <div className='flex-col size2'>
                        <span className='txt1 p-b-20'>
                          2. Grup (15:00 - 18:00)
                        </span>

                        <span className='txt3'>
                          Formu doldurmadan önce Türk İşaret Dili (TİD) ile
                          Tanışma Eğitimi ile ilgili şunları bilmenin iyi
                          olacağını düşündük:
                          <br />
                          <br />
                          <ol>
                            <li>1. Tanışma eğitimi ÜCRETSİZ.</li>
                            <br />
                            <li>
                              2. Tanışma eğitimi 5 Ekim - 30 Kasım tarihleri
                              arasında her cumartesi 15:00 - 18:00 arasında
                              olacak.
                            </li>
                            <br />
                            <li>
                              3.Her bir buluşma 3 saat sürecek ve -en keyifli- 8
                              cumartesi görüşeceğiz. Toplam 24 saat birlikteyiz.
                            </li>
                            <br />
                            <li>
                              4. 8 buluşmadan 7&#39;sine katılım çok çok acil
                              bir durum olmadıkça zorunlu.
                            </li>
                            <br />
                            <li>
                              5. Eğitim katılımları kontenjana bağlı olarak
                              belirlendiği için seçim yapmamız gerekecek.
                              Amacımız bu eğitimlerde işitme engelli ve sağırlar
                              alanında hayalleri, projelere ve çözümlere
                              dönüştürebilecek katılımcılar ile buluşmak.
                              Başvuru sonrası seçimin nasıl yapılacağı ile
                              ilgili bizden detaylı bir e-posta alacaksın.
                            </li>
                            <br />
                            <li>
                              6. Başvurular için son tarih 23 Eylül Pazartesi. Değerlendirme sonuçları ise 30 Eylül Pazartesi günü
                              e-posta yoluyla bildirilecek.
                            </li>
                            <br />
                            <li>
                              7. Buluşmalar, Dem Derneği’nin Tomtom Mah.
                              Yeniçarşı Cad. No: 68/21 Beyoğlu/İstanbul
                              adresinde bulunan merkez ofisinde
                              gerçekleştirilecek.
                            </li>
                            <br />
                            <li>
                              8. Formla ilgili soruların için Dem Derneği’nden
                              her zaman destek alabilirsin. (e-posta:
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
                  <form id="form1" onSubmit={this.handleSubmit}  className='contact100-form validate-form'>
                    <span className='contact100-form-title'>
                      Tanışma Eğitimleri
                    </span>

                    <label className='label-input100' htmlFor='isim'>
                      İsİm ve SoyİSİm *
                    </label>
                    <div
                      className='wrap-input100 rs1-wrap-input100 validate-input'
                      data-validate='Type first name'
                    >
                      <input
                        id='isim'
                        className='input100'
                        type='text'
                        name='isim'
                        placeholder='İsim'
                        required
                        value={this.state.isim}
                        onChange={this.handleInputChange}
                      />
                      <span className='focus-input100' />
                    </div>
                    <div
                      className='wrap-input100 rs2-wrap-input100 validate-input'
                      data-validate='Type last name'
                    >
                      <input
                        id='soyisim'
                        className='input100'
                        type='text'
                        name='soyisim'
                        placeholder='Soyisim'
                        required
                        value={this.state.soyisim}
                        onChange={this.handleInputChange}
                      />
                      <span className='focus-input100' />
                    </div>
                    <label className='label-input100' htmlFor='email'>
                      E-Posta *
                    </label>
                    <div
                      className='wrap-input100 validate-input'
                      data-validate='Valid email is required: ex@abc.xyz'
                    >
                      <input
                        id='email'
                        className='input100'
                        type='email'
                        name='email'
                        placeholder='ornek@email.com'
                        required
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                      <span className='focus-input100' />
                    </div>
                    <label className='label-input100' htmlFor='phone'>
                      Cep Telefonu *
                    </label>
                    <div className='wrap-input100'>
                      <input
                        id='phone'
                        className='input100'
                        type='tel'
                        name='phone'
                        placeholder='Örnek Numara : 0523 434 43 54'
                        required
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                      />
                      <span className='focus-input100' />
                    </div>
                    <label className='label-input100' htmlFor='sec1'>
                      Daha önce TİD EĞİTİMİ aldın mı? *
                    </label>
                    <div
                      className='wrap-input100 validate-input'
                      data-validate='Type first name'
                    >
                      <select
                        required
                        className='input100'
                        id='sec1'
                        name='beforeTID'
                        value={this.state.beforeTID}
                        onChange={this.handleInputChange}
                      >
                        <option value=''>Seç</option>
                        <option value='İSMEK (120 saat)'>Evet, İSMEK (120 saat)</option>
                        <option value='İSMEK (200 saat)'>Evet, İSMEK (200 saat)</option>
                        <option value='Halk Eğitim Merkezi'>Evet, Halk Eğitim Merkezi</option>
                        <option value='Özel bir kurs'>Evet, özel bir kurs</option>
                        <option value='Hayır'>Hayır</option>
                        <option value='diger' htmlFor='diger'>
                          Diğer
                        </option>
                      </select>


                      <input
                        id='diger'
                        className='input100'
                        type='diger'
                        name='beforeTIDOther'
                        placeholder='Bize bir notun var mı?'
                        value={this.state.beforeTIDOther}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <label className='label-input100' htmlFor='soru1'>
                      Neden TİD öğrenmek İSTİyorsun? *
                    </label>
                    <div
                      className='wrap-input100 validate-input'
                      data-validate='Message is required'
                    >
                      <input
                        id='soru1'
                        className='input100'
                        name='whyTID'
                        type='text'
                        placeholder='Bize yaz, lütfen.'
                        maxLength='250'                        
                        value={this.state.whyTID}
                        onChange={this.handleInputChange}
                      />
                      <span className='focus-input100' />
                    </div>
                    <label className='label-input100' htmlFor='soru2'>
                      EĞİTİM sonrasında gerçekleştİrmek İSTEDİĞİN bİr fİkrİn var
                      mı? *
                    </label>
                    <div
                      className='wrap-input100 validate-input'
                      data-validate='Message is required'
                    >
                     <input
                        id='soru2'
                        type='text'
                        className='input100'
                        name='description'
                        placeholder='Bize yaz, lütfen.'
                        maxLength='250'
                        value={this.state.description}
                        onChange={this.handleInputChange}
                      />
                      <span className='focus-input100' />
                    </div>
                    <label className='label-input100' htmlFor='sec3'>
                      Dem Derneğİnİ nereden duydun? *
                    </label>
                    <div
                      className='wrap-input100 validate-input'
                      data-validate='Type first name'
                    >
                       <select
                        required
                        className='input100'
                        id='sec3'
                        type='sec3'
                        name='whereYouHeard'
                        value={this.state.whereYouHeard}
                        onChange={this.handleInputChange}
                      >
                        <option value=''>Seç</option>
                        <option value='Arkadaş Çevresi'>Arkadaş Çevresi</option>
                        <option value='Facebook'>Facebook</option>
                        <option value='Instagram'>Instagram</option>
                        <option value='Arama Motoru'>Arama Motoru</option>
                        <option value='Diğer'>Diğer</option>
                      </select>

                      <input
                        id='diger1'
                        className='input100'
                        type='diger1'
                        name='whereYouHeardOther'
                        placeholder='Başka bir yer?'
                        value={this.state.whereYouHeardOther}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <label className='label-input100' htmlFor='sec2'>
                      Aİlende ve/veya yakın çevrende sağır ve/veya İşİtme
                      engellİ var mı? *
                    </label>
                    <div
                      className='wrap-input100 validate-input'
                      data-validate='Type first name'
                      style={{ marginBottom: '15px' }}
                    >
                     <select
                        required
                        className='input100'
                        id='sec2'
                        type='sec2'
                        name='deafComminity'                    
                        value={this.state.deafComminity}
                        onChange={this.handleInputChange}
                      >
                         <option value=''>Seç</option>
                        <option value='Var'>Var</option>
                        <option value='Yok'>Yok</option>
                      </select>
                    </div>
                    <label htmlFor='checkbox_id' className='label-input101'>
                      <input
                        type='checkbox'
                        title='Kabul ediyorum'
                        id='checkbox_id'
                        style={{
                          maxwidth: '35px',
                          maxheight: '35px',
                          margin: '10px 10px 10px 0px',
                          background: 'orange'
                        }}
                        required
                      />
                      <br />
                      <Kosullar />
                    </label>

                    <div className='container-contact100-form-btn'>
                      <button className='contact100-form-btn' id='sendNewSms'>
                        Gönder
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='footers'>
                <div className='row'>
                  <div
                    className='col-md-6'
                    style={{
                      paddingBottom: '15px'
                    }}
                  >
                  
                    Tomtom Mah. <br /> Yeniçarşı Cad. No:68 D:21
                    <br /> Beyoğlu / İstanbul
                  </div>
                  <div
                    className='col-md-6'
                    style={{ paddingBottom: '15px', paddingTop: '15px' }}
                  >
                    
                    info@demdernek.org
                    <br /> +90 530 136 02 17
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: '10px',
                    paddingTop: '15px'
                  }}
                >
                 Bu websitesi işitme engelli  Abdulhak Yusuf Bilici tarafından Dem Derneği için
                  hazırlanmıştır.
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default form2;

import './App.css'
import Header from './components/Header'
import MyCards from './components/MyCards'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header titulo='Adopta un perrito'/>
    <div className='cards'>
    <MyCards img='https://t1.ea.ltmcdn.com/es/posts/2/1/1/el_origen_del_doberman_2112_600.jpg' name='Doby' dsc='Descripción de Doby' text='Doberman' BgColor='warning'/>
    <MyCards img='https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2020-12/Bernese%20Mountain%20Dog1.jpg?itok=dNsA7BEw' name='Berno' dsc='Descripción de Berno' text='Boyero Suizo' BgColor='secondary' />
    <MyCards img='https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2019/11/perro-Dachsund_de_pelo_largo-02.jpg' name='Trini' dsc='Descripción de Trini' text='Salchicha pelo largo' BgColor='danger'/>
    <MyCards img='https://misanimales.com/wp-content/uploads/2018/11/cocker-spaniel.jpg' name='Cocky' dsc='Descripción de Cocky' text='Cocker Spaniel' BgColor='info'/>
    </div>
    <div className='footer'>
    <Footer footer='Explora nuestra galeria de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con 
    diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una
    segunda oportunidad. Encuentra a tu compañero peludo para siempre.' />
    </div>
    </>
  )
}

export default App

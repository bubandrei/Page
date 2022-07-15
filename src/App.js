import './App.css';
import Article from './components/articl/Article';
import Case from './components/case/Case';
import Footer from './components/footer/Footer';
import FootForm from './components/footForm/FootForm';
import MainView from './components/main/MainView';
import Navbar from './components/navbar/Navbar';
import TopInfo from './components/topInfo/TopInfo';
import VideoBlog from './components/videoblog/VideoBlog';


const App = () => {
  return (
    <div>
      <TopInfo />
      <Navbar />
      <MainView />
      <Case />
      <VideoBlog />
      <Article />
      <FootForm/>
      <Footer/>
    </div >
  );
}

export default App;

import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const post = {
    titulo: 'Descobrindo as Praias do Nordeste',
    autor: 'Leo C',
    data: '26 de fevereiro de 2026',
    conteudo: 'Este é um belo registro da praia Muro Alto, em porto de galinhas, localizada no estado de pernambuco. A melhor época para visitar Porto de Galinhas é entre setembro e março...'
  };

  return (
    <div className="container">
      <Header />
      <Navigation />
      <Article
        titulo={post.titulo}
        autor={post.autor}
        data={post.data}
        conteudo={post.conteudo}
      />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  console.log('✅ App loaded'); // This should appear in console

  return (
    <div className="app-container">
      <Header />
      <main>
        <React.Suspense fallback={<h2>Routes Loading...</h2>}>
          <AppRoutes />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;

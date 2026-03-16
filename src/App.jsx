import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Navbar />
      
      {/* Rest of your content */}
      <main className="container mx-auto px-4">
        <h1 style={{ color: 'var(--color-primary)' }} className="text-2xl font-bold mt-8">
          Welcome to Dr. Dinesh Kumar Agarwal's Clinic
        </h1>
        <p style={{ color: 'var(--color-secondary)' }}>
          Spine Surgery & Orthopaedics Specialist
        </p>
      </main>
    </div>
  );
}

export default App;
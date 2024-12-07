import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
      <Header />
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Bem-vindo à Aplicação de Tarefas
      </h1>
      <ListarTarefa />
      <footer style={{ marginTop: "20px", textAlign: "center", color: "#888" }}>
        <p>© 2024 Minha Aplicação</p>
      </footer>
    </div>
  );
}

export default App;

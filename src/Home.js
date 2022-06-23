import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextUrl = `http://localhost:3001/?name=sanyam`;

    window.history.replaceState({}, "", nextUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}

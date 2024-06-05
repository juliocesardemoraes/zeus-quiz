import Image from "next/image";
import Grid from "../components/Grid/Grid";

export default function Home() {
  return (
    <main className="flex flex-col max-w-md m-auto mt-16">
      <h1>Zeus quiz</h1>
      <p className="mb-4">Escolha o quiz que deseja responder abaixo:</p>
      <Grid></Grid>
    </main>
  );
}

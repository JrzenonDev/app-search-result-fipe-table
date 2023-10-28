import { MainLayout } from "./components/Layouts/MainLayout";
import { Form } from "./components/Form";

export default function Home() {
  return (
    <main className="main">
      <MainLayout>
        <Form />
      </MainLayout>
    </main>
  );
}

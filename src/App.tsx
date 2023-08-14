import { DSTechActions } from "./components/actions";
import { Banner } from "./components/banner";
import { AppLayout } from "./components/layout";
import { Services } from "./components/service";

function App() {
  return (
    <AppLayout>
      <DSTechActions />
      <Banner />
      <Services />
    </AppLayout>
  );
}

export default App;

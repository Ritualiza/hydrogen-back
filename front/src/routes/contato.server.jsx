import {Layout} from '../components/index.server';
import Home from '../components/parts/contato/Contato.client';

function ValePresentePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
  //   return <ValePresente />;
  //   return <h1>Teste</h1>;
}

export default ValePresentePage;

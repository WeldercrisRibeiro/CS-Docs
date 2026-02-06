import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Teste() {
  return (
    <Layout title="Página de Teste" description="Exemplo de página em src/pages">
      <main style={{ padding: '2rem' }}>
        <h1>🧪 Página de Teste</h1>
        <p>
          Esta é uma página de exemplo criada em <code>src/pages/teste.js</code>.
        </p>

        <h2>Como funciona</h2>
        <ol>
          <li>Coloque arquivos <code>.js/.jsx/.tsx/.mdx</code> em <code>src/pages</code>.</li>
          <li>O arquivo será servido automaticamente em <code>/NOME_DO_ARQUIVO</code> (ex.: <code>/teste</code>).</li>
          <li>Use <code>@theme/Layout</code> para manter o layout do site e metadados.</li>
        </ol>

        <h2>Exemplos úteis</h2>
        <ul>
          <li><Link to="/">🏠 Voltar para a home</Link></li>
          <li><Link to="/docs/intro">📚 Ir para a documentação</Link></li>
        </ul>

        <h2>Testando localmente</h2>
        <p>
          Execute <code>npm run start</code> ou <code>yarn start</code> e acesse <code>http://localhost:3000/teste</code>.
        </p>

        <h2>Dica</h2>
        <p>
          Para criar páginas estáticas simples também pode usar <code>.mdx</code> em <code>src/pages</code>.
        </p>
      </main>
    </Layout>
  );
}

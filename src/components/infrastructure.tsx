import type { FC } from 'hono/jsx'

const cards = [
  {
    title: 'LLM Inference on GPU',
    body: 'Llama 3.1 8B running via Ollama on NVIDIA L4 GPU. On-premise inference keeps proprietary data in controlled infrastructure and eliminates per-token cost at continuous operating volumes.',
  },
  {
    title: 'GraphRAG Knowledge Graph',
    body: 'PostgreSQL 16 with pgvector. A queryable knowledge graph encoding producer intelligence, vintage data, critic scores, and pricing history. Agents retrieve semantic context, not just rows.',
  },
  {
    title: 'Real-Time Data Pipelines',
    body: 'Continuous polling across platforms on defined cadences. FX normalisation on every cycle. Spread calculation after every data pull. Fully containerised via Docker Compose.',
  },
  {
    title: 'Multi-Agent Orchestration',
    body: 'Three specialised agents coordinated by a forked multi-agent framework. Shared tool registry. Structured handoffs between pipeline stages.',
  },
  {
    title: 'Vector-Powered Search',
    body: 'pgvector enables semantic similarity search across the knowledge graph. Wine identity matching, producer relationship queries, and historical pattern retrieval run on vector embeddings.',
  },
  {
    title: 'Continuous Operation',
    body: 'The system is always on during market hours. Polling, scoring, evaluating, alerting. Not a batch process. Not a nightly job. A continuous intelligence loop.',
  },
]

export const Infrastructure: FC = () => {
  return (
    <section class="section section-gray" id="infrastructure">
      <div class="page-wrap">
        <p class="eyebrow" data-reveal>Infrastructure</p>
        <h2 class="section-h2" data-reveal>
          Built for continuous<br />compute, not occasional use.
        </h2>
        <p class="section-body" data-reveal>
          J10N is not a lightweight web application.
          It runs LLM inference on dedicated GPU hardware,
          maintains a live vector database, and processes
          data pipelines on a continuous cadence.
          The infrastructure is the product.
        </p>

        <div class="grid-3" data-stagger>
          {cards.map((card) => (
            <div class="surface-card" data-stagger-child>
              <h3 class="card-h3">{card.title}</h3>
              <p class="card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

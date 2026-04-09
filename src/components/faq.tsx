import type { FC } from 'hono/jsx'

const faqs = [
  {
    q: 'What is J10N?',
    a: 'J10N is an AI-native intelligence platform for the fine wine market. It monitors pricing across major trading venues, applies a multi-agent reasoning system to identify and evaluate opportunities, and delivers structured recommendations. It is built for people who want systematic, data-driven intelligence in a market that has never had it.',
  },
  {
    q: 'Do I need to physically own or store wine?',
    a: 'No. J10N\u2019s approach operates entirely within the established UK bonded warehouse network. Wine does not move. Ownership transfers are handled administratively through the existing infrastructure of the market.',
  },
  {
    q: 'What markets does J10N cover?',
    a: 'The current system covers the principal UK fine wine trading platforms. Phase 2 expands to the Liv-ex professional exchange and additional international venues. Coverage is determined by where intelligent, systematic monitoring creates the most value.',
  },
  {
    q: 'What AI infrastructure does J10N run on?',
    a: 'The intelligence layer runs on a multi-agent framework built on a GraphRAG knowledge graph, powered by Llama 3.1 8B inference on NVIDIA L4 GPU via Ollama. Data pipelines and vector search run on PostgreSQL 16 with pgvector. The system is designed for continuous operation, not on-demand queries.',
  },
  {
    q: 'Who is J10N for?',
    a: 'J10N is for wine investors and traders who believe that systematic intelligence should exist in this market \u2014 and who want early access to a system built to provide it. We are selectively onboarding early access partners during the current validation phase.',
  },
  {
    q: 'How do I get access?',
    a: 'Request early access via the link below. We review requests individually.',
  },
]

export const FAQ: FC = () => {
  return (
    <section class="section section-gray" id="faq">
      <div class="page-wrap">
        <div style="text-align: center; margin-bottom: var(--space-12);">
          <p class="eyebrow" data-reveal>Questions</p>
          <h2 class="section-h2" data-reveal>What people ask.</h2>
        </div>

        <div class="faq-list">
          {faqs.map((faq) => (
            <div class="faq-item">
              <button class="faq-question">
                <span>{faq.q}</span>
                <span class="faq-icon"></span>
              </button>
              <div class="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

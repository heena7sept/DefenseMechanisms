import { Layout } from '@/components/Layout';

export default function PrivacyPage() {
  return (
    <Layout backButton={{ href: '/', label: 'Back to Home' }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose prose-sm">
          <p>Last updated: April 13, 2025</p>

          <h2>1. Introduction</h2>
          <p>This Privacy Policy describes how the LLM Safety Simulator ("we," "our," or "us") collects, uses, and shares information when you use our educational platform.</p>

          <h2>2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with the simulator, including attack sequences, responses, and simulation results.
            </li>
            <li>
              <strong>API Keys:</strong> If you choose to use the OpenAI API mode, your API key is stored temporarily in memory and is never persisted or sent to our servers.
            </li>
            <li>
              <strong>Local Storage Data:</strong> We use browser local storage to save your preferences and attack sequences.
            </li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve the simulator functionality</li>
            <li>Analyze usage patterns to enhance educational content</li>
            <li>Research and develop better safety measures for language models</li>
          </ul>

          <h2>4. Data Storage and Security</h2>
          <p>
            Attack sequences and simulation data are stored locally in your browser. We implement reasonable security measures to protect any data that may be transmitted to our
            servers.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            When using the OpenAI API mode, your interactions are processed through OpenAI's services. Please refer to OpenAI's privacy policy for information on how they handle
            your data.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the data we have about you</li>
            <li>Delete your saved attack sequences</li>
            <li>Object to the processing of your data</li>
          </ul>

          <h2>7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

          <h2>8. Contact Information</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at group12llmsafetysim@gmail.com.</p>
        </div>
      </div>
    </Layout>
  );
}

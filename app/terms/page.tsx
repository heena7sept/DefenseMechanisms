import { Layout } from '@/components/Layout';

export default function TermsPage() {
  return (
    <Layout backButton={{ href: '/', label: 'Back to Home' }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose prose-sm">
          <p>Last updated: April 13, 2025</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to the LLM Safety Simulator ("we," "our," or "us"). By accessing or using our educational platform, you agree to be bound by these Terms of Service ("Terms").
          </p>

          <h2>2. Educational Purpose</h2>
          <p>
            The LLM Safety Simulator is designed exclusively for educational and research purposes. The platform demonstrates potential vulnerabilities in language models to
            promote understanding and development of robust safety measures.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>You agree to use the LLM Safety Simulator only for its intended educational purpose. You must not:</p>
          <ul>
            <li>Use techniques learned from the simulator to exploit vulnerabilities in production AI systems</li>
            <li>Attempt to bypass safety measures in real-world applications</li>
            <li>Share or distribute attack sequences with the intent to cause harm</li>
            <li>Use the simulator for any illegal or unethical purposes</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the LLM Safety Simulator, including but not limited to text, graphics, logos, and code, are owned by us and are protected by
            intellectual property laws.
          </p>

          <h2>5. Disclaimer</h2>
          <p>The LLM Safety Simulator is provided "as is" without warranties of any kind. We do not guarantee that the simulator will be error-free or uninterrupted.</p>

          <h2>6. Limitation of Liability</h2>
          <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the simulator.</p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of the simulator after such modifications constitutes your acceptance of the revised Terms.
          </p>

          <h2>8. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at group12llmsafetysim@gmail.com.</p>
        </div>
      </div>
    </Layout>
  );
}

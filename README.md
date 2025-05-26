# LLMAttackSim

An app leveraging various LLMs to simulate different attacks for retrieving harmful information, and comparing results.

---

## 🚀 How to Clone, Build, and Deploy

1. **Clone the repository:**

   ```bash
   git clone https://github.com/heena7sept/DefenseMechanisms.git
   cd DefenseMechanisms
   ```

2. **Install dependencies:**  
   You can use `npm`, `yarn`, `pnpm`, or `bun`. Example using `pnpm`:

   ```bash
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   pnpm run dev
   ```

   The app will be available at `http://localhost:3000` by default.

---

## ✅ Functionality

- **Works:**

  - Simulates multi-turn LLM attacks (e.g., Crescendo, iterative jailbreaks, ActorAttack).
  - Supports saving and exporting attack sequences.
  - Allows comparison of attack effectiveness across different models.
  - UI for documenting and sharing findings.
  - Supports both mock LLM responses (for testing/demo) and OpenAI's API (with configuration).

- **Does NOT work / Limitations:**
  - Does not provide real-time access to other proprietary LLM APIs (only OpenAI is supported out-of-the-box).
  - Not intended for production or adversarial use—educational/research only.
  - No built-in user authentication or access control.

---

## 🏺 Multi-turn Attack Archeology

### Foundational Prior Research

Russinovich, M., Salem, A., & Eldan, R. (2024).  
_Great, Now Write an Article About That: The Crescendo Multi-Turn LLM Jailbreak Attack._ arXiv.  
[https://arxiv.org/abs/2404.01833](https://arxiv.org/abs/2404.01833)

### This Project's Foundation

Ren, Q., Li, H., Liu, D., Xie, Z., Lu, X., Qiao, Y., Sha, L., Yan, J., Ma, L., & Shao, J. (2024).  
_Derail Yourself: Multi-turn LLM Jailbreak Attack through Self-discovered Clues._ arXiv.  
[https://paperswithcode.com/paper/derail-yourself-multi-turn-llm-jailbreak](https://paperswithcode.com/paper/derail-yourself-multi-turn-llm-jailbreak)

### Contemporary Work Building on This Study

Yao, Y., Tong, X., Wang, R., Wang, Y., Li, L., Liu, L., Teng, Y., & Wang, Y. (2025).  
_A Mousetrap: Fooling Large Reasoning Models for Jailbreak with Chain of Iterative Chaos._ arXiv.  
[https://arxiv.org/abs/2502.15806](https://arxiv.org/abs/2502.15806)

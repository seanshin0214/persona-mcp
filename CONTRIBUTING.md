# 🤝 Contributing to Persona MCP

Thank you for your interest in contributing to Persona MCP! This document explains how to contribute personas to the community collection.

---

## 📜 Revenue Sharing Promise

**We are committed to sharing revenue with persona creators when the Persona Hub launches.**

### Current Model (GitHub - Free & Open)
- All community personas on GitHub are **free and open source** (MIT License)
- Anyone can use, modify, and share
- No revenue involved currently

### Future Model (Persona Hub - Freemium Platform)
When the Persona Hub web platform launches:

**🎯 Revenue Split: 70% Creator / 30% Platform**

- **Free Tier**: All GitHub personas remain free
- **Premium Tier**: Creators can publish premium personas ($5-10/month suggested)
- **Revenue**: 70% to creator, 30% to platform (hosting, infrastructure, moderation)

**This is a firm promise.** When the Hub launches, all contributors who have personas in the community collection will be eligible for revenue sharing.

### How It Works
1. **Now**: Contribute personas to GitHub (free, open source)
2. **Hub Launch**: You'll be invited to claim your creator account
3. **Premium Option**: Optionally publish premium versions on the Hub
4. **Revenue**: Earn 70% of premium subscription revenue

### Tracking Contributions
- All contributions are tracked via Git commit history
- Your GitHub username will be linked to your Persona Hub creator account
- Attribution is preserved in persona metadata

---

## 🎨 How to Contribute a Persona

### 1. Create Your Persona File

Create a `.txt` file in the `community/` directory:

```
community/your-persona-name.txt
```

**File Naming Convention:**
- Use lowercase with hyphens: `python-expert.txt`, `creative-writer.txt`
- Be descriptive but concise
- Avoid special characters

### 2. Write Your Persona Content

Your persona file should contain clear instructions for Claude's behavior:

**Good Example:**
```
You are a Python programming expert with 10+ years of experience.
You provide clean, well-documented code following PEP 8 standards.
You always explain your reasoning and suggest best practices.
You are patient with beginners and provide step-by-step explanations.
```

**Tips:**
- Be specific about tone, expertise level, and approach
- Include relevant context (years of experience, specialization)
- Define how the persona should respond to questions
- Keep it focused (200-500 words recommended)
- Avoid vague instructions like "be helpful" (Claude already is!)

### 3. Add Metadata (Optional but Recommended)

At the top of your file, you can add metadata comments:

```
# Persona: Python Expert
# Author: @yourusername
# Category: Programming
# Difficulty: Intermediate to Advanced
# Use Cases: Code review, debugging, best practices
# Version: 1.0

You are a Python programming expert...
```

### 4. Test Your Persona

Before contributing, test your persona locally:

```bash
# Copy to your personal persona directory
cp community/your-persona.txt ~/.persona/

# Test with Claude Desktop
# Use: @persona:your-persona test question
```

### 5. Submit a Pull Request

1. Fork the repository
2. Add your persona file to `community/`
3. Create a pull request with:
   - **Title**: "Add [Persona Name] persona"
   - **Description**: Brief explanation of what your persona does
   - **Use Cases**: 2-3 example scenarios

---

## ✅ Quality Guidelines

### Content Requirements
- ✅ Clear, specific instructions
- ✅ Focused on one expertise area
- ✅ Professional and respectful tone
- ✅ No harmful, discriminatory, or unethical content
- ✅ Original work (not copied from other sources)

### Technical Requirements
- ✅ Plain text file (`.txt` extension)
- ✅ UTF-8 encoding
- ✅ Max 1000 words (shorter is often better)
- ✅ No personal information or API keys

### What We Don't Accept
- ❌ Personas promoting illegal activities
- ❌ Discriminatory or hateful content
- ❌ Spam or low-effort submissions
- ❌ Copyrighted material without permission
- ❌ Personas that violate Anthropic's usage policies

---

## 🏆 Popular Persona Categories

We're especially interested in personas for these areas:

### 🧑‍💻 **Programming & Tech**
- Language-specific experts (Python, Rust, Go, etc.)
- DevOps and cloud architecture
- Security and code review specialists
- Frontend/backend specialists

### 📚 **Education & Learning**
- Subject matter teachers (math, science, history)
- Language tutors
- Study coaches
- Research assistants

### 🎨 **Creative & Content**
- Writers (technical, creative, copywriting)
- Designers
- Content strategists
- Storytellers

### 💼 **Business & Professional**
- Business analysts
- Product managers
- Marketing strategists
- Career coaches

### 🔬 **Specialized Experts**
- Legal advisors (general information only)
- Medical information (not diagnosis)
- Financial literacy educators
- Domain-specific consultants

---

## 🚀 Persona Hub Roadmap

### Phase 1: GitHub Collection (Now)
- Open source community personas
- MIT license
- Free for everyone
- Git-based collaboration

### Phase 2: Persona Hub Launch (2025 Q2 - Target)
- Web platform for browsing personas
- One-click installation to Claude Desktop
- Creator profiles and portfolios
- Community ratings and reviews

### Phase 3: Premium Tier (2025 Q3 - Target)
- Premium persona marketplace
- 70/30 revenue split
- Subscription management
- Creator analytics dashboard

### Phase 4: Advanced Features (2025 Q4+)
- Persona Studio (web-based editor)
- Version control for personas
- A/B testing tools
- Enterprise tier for teams

---

## 📞 Questions?

- **Technical Issues**: Open an issue on GitHub
- **Persona Ideas**: Start a discussion in GitHub Discussions
- **Business Questions**: Contact via [email/Discord/etc.]
- **Revenue Sharing**: Check this document for latest terms

---

## 📄 License

All community personas are licensed under the [MIT License](LICENSE).

By contributing, you agree to license your persona under MIT for the GitHub collection, while retaining the right to publish premium versions on the Persona Hub platform.

---

**Thank you for contributing to the Persona MCP community!** 🎉

Your personas help thousands of users get more value from Claude Desktop, and you'll share in the success when the Persona Hub launches.

Fight on! 💪

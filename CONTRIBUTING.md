# Contributing to Radhe Shyam Event Management

Thank you for your interest in contributing to the Radhe Shyam Event Management website! This document provides guidelines for contributing to this project.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/radhe-shyam-events.git
   cd radhe-shyam-events
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Workflow

1. Make your changes in the appropriate files
2. Test your changes locally:
   ```bash
   npm run dev
   ```
3. Run linting to ensure code quality:
   ```bash
   npm run lint
   ```
4. Build the project to ensure it compiles:
   ```bash
   npm run build
   ```

## 📝 Code Style Guidelines

- Use TypeScript for type safety
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Use shadcn/ui components when possible

## 🎨 Design Guidelines

- Maintain consistency with the existing design system
- Use Tailwind CSS classes for styling
- Ensure responsive design for all screen sizes
- Follow accessibility best practices
- Use appropriate color scheme (saffron/orange theme)

## 🔧 Component Structure

When creating new components:
- Place them in the appropriate directory (`src/components/`)
- Use TypeScript interfaces for props
- Include proper JSDoc comments
- Export components as default
- Use meaningful file names

Example:
```typescript
interface ComponentProps {
  title: string;
  description?: string;
}

/**
 * Component description
 * @param props - Component props
 * @returns JSX element
 */
export default function Component({ title, description }: ComponentProps) {
  return (
    <div className="...">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

## 📱 Testing

- Test on different screen sizes
- Verify all links work correctly
- Ensure forms function properly
- Check image loading and optimization
- Test on different browsers

## 🚀 Deployment

- The project is automatically deployed on Vercel
- Ensure your changes work in production environment
- Test the build process before submitting PR

## 📋 Pull Request Process

1. Update documentation if necessary
2. Ensure all tests pass
3. Create a detailed pull request description
4. Reference any related issues
5. Request review from maintainers

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Responsive design verified
- [ ] Cross-browser compatibility checked

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
```

## 🐛 Bug Reports

When reporting bugs, please include:
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots or screen recordings
- Browser and device information
- Console error messages (if any)

## 💡 Feature Requests

When suggesting new features:
- Describe the feature clearly
- Explain why it would be useful
- Provide examples or mockups if possible
- Consider the impact on existing functionality

## 📞 Questions or Help

If you need help or have questions:
- Check existing issues for similar questions
- Create a new issue with the "question" label
- Be specific about what you need help with

## 🙏 Recognition

Contributors will be recognized in the project documentation and release notes.

Thank you for contributing to Radhe Shyam Event Management! 🎉 
import { useState, useEffect } from 'react'
import { marked } from 'marked'
import s from './App.module.css'

export const App = () => {
  const [markdown, setMarkdown] = useState(
`# Welcome to my Markdown Previewer!

## This is a subheading

[Learn more about Markdown](https://www.markdownguide.org)

Inline code: \`console.log('Hello, World!')\`

\`\`\`
// Code block example
function sum(a, b) {
  return a + b;
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**This text is bold** and _italic text_.
`)

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  useEffect(() => {
    setMarkdown(markdown)
  }, [])

  return (
    <div className={s.App}>
      <h1 className={s.header}>Markdown Previewer!</h1>
      <div className={s.container}>
        <div className={s.section}>
          <h2 className={s.sectionTitle}>Editor</h2>
          <textarea
            id="editor"
            className={s.editor}
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div className={s.section}>
          <h2 className={s.sectionTitle}>Preview</h2>
          <div
            id="preview"
            className={s.preview}
            dangerouslySetInnerHTML={{
              __html: marked(markdown, {
                gfm: true,
                breaks: true,
                headerIds: true,
                sanitize: true
              })
            }}
          />
        </div>
      </div>
    </div>
  )
}
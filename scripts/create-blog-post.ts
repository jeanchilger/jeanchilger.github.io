#!/usr/bin/env bun

import fs from 'fs/promises';
import path from 'path';

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Usage: bun run post:new <slug>')
    process.exit(1)
}

const slug = args[0];
if (!/^[a-z0-9-_]+$/.test(slug)) {
    console.error('Slug must contain only lowercase letters, numbers, hyphens or underscores')
    process.exit(1)
}

const date = new Date().toISOString().slice(0, 10);
const dir = path.resolve('src', 'content', 'blog');
await fs.mkdir(dir, { recursive: true });

const filename = `${date}-${slug}.mdx`;
const filepath = path.join(dir, filename);

const frontmatter = `---\ntitle: ""\nsummary: ""\ndate: "${date}"\ntags: [""]\n---\n\n`

try {
    await fs.writeFile(filepath, frontmatter + 'Write your post here.\n', { encoding: 'utf8' })
    console.log('Created', filepath)
} catch (err) {
    console.error('Failed to create post:', err)
    process.exit(1)
}

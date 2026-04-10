const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), 'data', 'events');
const targetDir = path.join(process.cwd(), 'public', 'data', 'events');
const libDir = path.join(process.cwd(), 'src', 'lib');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy all JSON files and generate a TypeScript data file
try {
  const files = fs.readdirSync(sourceDir).filter((file) => file.endsWith('.json'));
  const allData = [];

  files.forEach((file) => {
    const source = path.join(sourceDir, file);
    const target = path.join(targetDir, file);
    fs.copyFileSync(source, target);

    // Load the JSON for the generated file
    const content = fs.readFileSync(source, 'utf-8');
    allData.push(JSON.parse(content));
  });

  // Create a TypeScript file with event data
  const generatedFile = path.join(libDir, 'generatedEventData.ts');
  const tsContent = `import type { RawEventData } from '@/types/event';

export const eventDataList: RawEventData[] = ${JSON.stringify(allData, null, 2)};

export const eventDataMap = eventDataList.reduce(
  (acc, data) => {
    acc[data.id] = data;
    return acc;
  },
  {} as Record<string, RawEventData>
);
`;
  fs.writeFileSync(generatedFile, tsContent, 'utf-8');

  console.log(`✓ Copied ${files.length} event data files to public/data/events`);
  console.log(`✓ Generated event data TypeScript file at ${path.relative(process.cwd(), generatedFile)}`);
} catch (error) {
  console.error('Failed to copy event data:', error);
  process.exit(1);
}

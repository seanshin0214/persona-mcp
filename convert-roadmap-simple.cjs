const fs = require('fs');
const { Document, Packer, Paragraph, HeadingLevel } = require('docx');

async function convert() {
  const content = fs.readFileSync('./Roadmap.md', 'utf-8');
  const lines = content.split('\n');
  const children = [];

  lines.forEach(line => {
    if (line.startsWith('# ')) {
      children.push(new Paragraph({ text: line.replace('# ', ''), heading: HeadingLevel.HEADING_1 }));
    } else if (line.startsWith('## ')) {
      children.push(new Paragraph({ text: line.replace('## ', ''), heading: HeadingLevel.HEADING_2 }));
    } else if (line.startsWith('### ')) {
      children.push(new Paragraph({ text: line.replace('### ', ''), heading: HeadingLevel.HEADING_3 }));
    } else if (line.startsWith('#### ')) {
      children.push(new Paragraph({ text: line.replace('#### ', ''), heading: HeadingLevel.HEADING_4 }));
    } else {
      const clean = line.replace(/\*\*(.+?)\*\*/g, '$1').replace(/`(.+?)`/g, '$1');
      children.push(new Paragraph({ text: clean }));
    }
  });

  const doc = new Document({ sections: [{ children }] });
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync('../Persona_MCP_Roadmap.docx', buffer);
  console.log('✅ Roadmap.docx created');
}

convert();

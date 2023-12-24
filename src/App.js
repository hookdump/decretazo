import React, { useState } from 'react';
import Select from 'react-select';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Paper from '@mui/material/Paper';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer-continued';

const { text } = require('./text')

function renderDiff(delta) {
  return (
    <Accordion elevation={4}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <b>{delta.title}</b>
      </AccordionSummary>
      <AccordionDetails>
        <ReactDiffViewer
          oldValue={delta.removed ?? ''}
          newValue={delta.added ?? ''}
          splitView={true}
          compareMethod={DiffMethod.WORDS}
          codeFoldMessageRenderer={(n) => `Mostrar ${n} líneas más...`}
          hideLineNumbers={true}
          />
      </AccordionDetails>
    </Accordion>
  )
}

function renderArticle(article) {
  return (  
    <div style={{whiteSpace: "pre-wrap"}}>
      <Paper sx={{ p: 2, mb: 4 }} elevation={3}>
        <pre style={{whiteSpace: "pre-wrap"}}>
          {article.text}
        </pre>
        {article.delta && renderDiff(article.delta)}
      </Paper>
    </div>
  )
}

function renderBlock(block) {
  if (block.type === 'text') {
    return (
      <Accordion elevation={2}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {block.title}
        </AccordionSummary>
        <AccordionDetails>
          <div style={{whiteSpace: "pre-wrap"}}>
            {block.blocks.join('\n')}
          </div>
        </AccordionDetails>
      </Accordion>
    )
  }
  if (block.type === 'block') {
    return (
      <div>
        <h3>{block.title}</h3>
        {block.articles.map((a, i) => <div key={i}>{renderArticle(a)}</div>)}
      </div>
    )
  }
  return '';
}

/*
<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    {block.title}
  </AccordionSummary>
  <AccordionDetails>
    {block.articles.map((a, i) => <div key={i}>{renderArticle(a)}</div>)}
  </AccordionDetails>
</Accordion>
*/

function App() {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const handleTitleChange = (selectedOption) => {
    setSelectedTitle(selectedOption.value);
  };
  const options = text.map(block => ({ value: block.title, label: block.title }));
  const selectedBlock = text.find(block => block.title === selectedTitle);

  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ pt: 4, }}>
        <Box display="flex" justifyContent="center">
          <h1>Decreto de Milei del 21/12/23</h1>
        </Box>
        {/*
        <select onChange={handleTitleChange}>
          {text.map((block, i) => <option key={i} value={block.title}>{block.title}</option>)}
        </select>
        */}
        <Select 
          options={options} 
          onChange={handleTitleChange} 
          isSearchable
          placeholder="Seleccione un título"
        />
        {selectedBlock && renderBlock(selectedBlock)}
      </Container>
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        {text.map((block, i) => <div key={i}>{renderBlock(block)}</div>)}
      </Container>
    </div>
  );
}
*/

export default App;

// make it only call snippet when iframe is in view?

// async/await / promisify this
async function codeAlong(config) {
  const markdown = await fetch(config.path)
    .then(resp => resp.text())
    .catch(err => console.log(err))
    .then(parsedMd => parsedMd)
    .catch(err => {
      console.log(err)
      return '```error loading example```';
    });

  const container = config.container instanceof Element
    ? config.container
    : document.getElementById(config.container);
  setTimeout(() => {

    const iframe = document.createElement('iframe');
    iframe.style = 'height:100%;width:100%;';
    iframe.setAttribute('scrolling', 'no');

    iframe.onload = () => {

      const frameContext = iframe.contentWindow;


      ((document) => {

        const ghMdStyle = document.createElement('link');
        ghMdStyle.type = 'text/css';
        ghMdStyle.setAttribute('rel', 'stylesheet');
        ghMdStyle.setAttribute('href', './code-along/github-markdown.css');
        document.head.appendChild(ghMdStyle);

        const markedScript = document.createElement('script');
        markedScript.src = "./code-along/marked.js";
        markedScript.type = "text/javascript";
        markedScript.charset = "utf-8";

        document.head.appendChild(markedScript);


        const aceScript = document.createElement('script');
        aceScript.src = "./code-along/ace/ace.js";
        aceScript.type = "text/javascript";
        aceScript.charset = "utf-8";

        document.head.appendChild(aceScript);


        // promisify this setTimeout
        setTimeout(() => {

          const ace = frameContext.ace;
          const marked = frameContext.marked;

          const editorDiv = document.createElement('div');
          editorDiv.style = 'height:70vh;width:60vw;';

          const editor = ace.edit(editorDiv);

          editor.setTheme('ace/theme/twilight');
          editor.setFontSize(15);
          editor.getSession().setMode('ace/mode/markdown');
          editor.getSession().setTabSize(2);
          editor.setValue(markdown);

          const outputDiv = document.createElement('div');
          outputDiv.id = '\n-- study: markdown rendered as DOM --\n';
          outputDiv.className = 'markdown-body';
          outputDiv.style = 'height: 69vh; width: 40vw; border:solid; padding-left:3%; padding-right:3%;';
          outputDiv.innerHTML = marked(editor.getValue());

          editor.on("change", (e) => {
            outputDiv.innerHTML = marked(editor.getValue());
          });

          document.body.style = 'display:flex; flex-direction:row;';
          document.body.appendChild(editorDiv);
          document.body.appendChild(outputDiv);

        }, 500);

      })(frameContext.document)

    }

    container.appendChild(iframe);
  }, 500)

}

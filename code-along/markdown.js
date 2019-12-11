// make it only call snippet when iframe is in view?
// either make a back button when links are followed, or have them open in new tabs



async function codeAlong(config) {


  const container = config.container instanceof Element
    ? config.container
    : typeof config.container === 'string'
      ? document.getElementById(config.container)
      : document.createElement('div');

  const markdown = await fetch(config.path)
    .then(resp => resp.text())
    .then(parsedMd => parsedMd)
    .catch(err => {
      console.log(err);
      return err;
    });

  if (markdown instanceof Error) {
    const errorEl = document.createElement('code');
    errorEl.innerHTML = markdown.name + ': ' + markdown.message;
    container.appendChild(errorEl);
    return container;
  }

  const iframe = document.createElement('iframe');
  iframe.style = 'height:100vh;width:100%;overflow:hidden;';
  iframe.setAttribute('scrolling', 'no');

  iframe.onload = async () => {
    // const buildCodeAlong = async () => {

    const baseEl = document.createElement('base');
    baseEl.target = '_blank';
    iframe.contentWindow.document.head.appendChild(baseEl);

    const frameDocument = iframe.contentWindow.document;
    const frameWindow = iframe.contentWindow;

    const loadingMdStyles = new Promise((resolve, reject) => {
      const ghMdStyle = document.createElement('link');
      ghMdStyle.type = 'text/css';
      ghMdStyle.setAttribute('rel', 'stylesheet');
      ghMdStyle.setAttribute('href', './code-along/github-markdown.css');

      ghMdStyle.addEventListener('load', () => resolve());
      ghMdStyle.addEventListener('error', (e) => reject(e.message))

      frameDocument.head.appendChild(ghMdStyle);
    });

    const loadingMarked = new Promise((resolve, reject) => {
      const markedScript = document.createElement('script');
      markedScript.src = "./code-along/marked.js";
      markedScript.type = "text/javascript";
      markedScript.charset = "utf-8";

      markedScript.addEventListener('load', () => resolve());
      markedScript.addEventListener('error', (e) => reject(e.message))

      frameDocument.head.appendChild(markedScript);
    });

    const loadingAce = new Promise((resolve, reject) => {
      const aceScript = document.createElement('script');
      aceScript.src = "./code-along/ace/ace.js";
      aceScript.type = "text/javascript";
      aceScript.charset = "utf-8";

      aceScript.addEventListener('load', () => resolve());
      aceScript.addEventListener('error', (e) => reject(e.message))

      frameDocument.head.appendChild(aceScript);
    });


    await Promise.all([loadingMdStyles, loadingMarked, loadingAce])
      .then(function () {

        const ace = frameWindow.ace;
        const marked = frameWindow.marked;

        const editorDiv = document.createElement('div');
        // editorDiv.style = 'height:70vh;width:60vw;';
        editorDiv.style = 'height:90vh;width:100vw;';

        const editor = ace.edit(editorDiv);

        editor.setTheme('ace/theme/twilight');
        editor.setFontSize(15);
        editor.getSession().setMode('ace/mode/markdown');
        editor.getSession().setTabSize(2);
        editor.setValue(markdown);

        const outputDiv = document.createElement('div');
        outputDiv.id = '\n-- study: markdown rendered as DOM --\n';
        outputDiv.className = 'markdown-body';
        // outputDiv.style = 'height: 69vh; width: 40vw; border:solid; padding-left:3%; padding-right:3%;';
        outputDiv.style = 'height: 90vh; width: 100%; border:solid 2px; padding-left:3%; padding-right:3%;';
        outputDiv.innerHTML = marked(editor.getValue());

        editor.on("change", () => {
          outputDiv.innerHTML = marked(editor.getValue());
        });

        frameDocument.body.style = 'display:flex; flex-direction:row;';
        frameDocument.body.appendChild(editorDiv);
        frameDocument.body.appendChild(outputDiv);

      })
      .catch(err => {
        console.log(err);
        frameDocument.innerHTML = ''
        const errorEl = document.createElement('code');
        errorEl.innerHTML = markdown.name + ': ' + markdown.message;
        frameDocument.appendChild(errorEl);
      });


  }

  // // later
  // let built = false;
  // const observer = new IntersectionObserver(() => {
  //   if (!built) {
  //     buildCodeAlong();
  //     built = true;
  //   }
  // });
  // observer.observe(iframe);

  container.appendChild(iframe);

  return container;


}



  // frameContext.addEventListener('popstate',
  //   (function goBack(confirmed) {
  //     return confirmed
  //       ? window.history.back()
  //       : goBack(confirm('go back?'))
  //   })(confirm('go back?')));

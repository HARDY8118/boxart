<script>
  import Output from "./Output.svelte";

  import Toolbar from "./Toolbar.svelte";

  let outputText = "";
  let outputIndex = -1;

  function appendChar(c) {
    if (outputIndex < 0) {
      outputText += c;
    } else {
      outputText =
        outputText.slice(0, outputIndex) + c + outputText.slice(outputIndex);
    }
    outputIndex += c.length;
  }

  function deleteChar() {
    if (outputIndex < 0) {
      outputText = outputText.slice(0, -1);
    } else {
      outputText =
        outputText.slice(0, outputIndex - 1) + outputText.slice(outputIndex);
    }
  }

  function setOutputIndex(i) {
    outputIndex = i;
  }

  function setOutputText(t) {
    outputText = t;
  }
</script>

<main>
  <Toolbar
    {appendChar}
    {deleteChar}
    {outputIndex}
    {setOutputIndex}
    {outputText}
  />

  <Output {outputText} {outputIndex} {setOutputText} {setOutputIndex} />
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    margin: 0;
  }
</style>

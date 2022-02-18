<script>
  export let outputText;
  export let setOutputText;
  export let setOutputIndex;

  let textOutput;
  let buttonText = "Copy to Clipboard";

  function copyOutput() {
    // console.log(textOutput.selectionStart)
    try {
      navigator.clipboard.writeText(textOutput.value);
    } catch (e) {
      textOutput.select();
      textOutput.execCommand("copy");
    } finally {
      buttonText = "Copied !";
      setTimeout(() => {
        buttonText = "Copy to Clipboard";
      }, 1000);
    }
  }

  function adjustIndex(e) {
    setOutputIndex(e.target.selectionStart);
  }

  function adjustText(e) {
    setOutputText(e.target.value);
    adjustIndex(e);
  }
</script>

<div>
  <textarea
    bind:value={outputText}
    placeholder="Output appears here"
    bind:this={textOutput}
    on:focus={adjustIndex}
    on:click={adjustIndex}
    on:keyup={adjustIndex}
    on:change={adjustText}
  />
  <button on:click={copyOutput}>{buttonText}</button>
</div>

<style lang="scss">
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    textarea {
      margin: 1em;
      flex: 1;
      border: solid 1px gray;
      padding: 1em;
      font-size: 1.4em;
      cursor: text;
      font-family: monospace;
    }
    button {
      cursor: pointer;
      display: block;
      color: white;
      border: solid 2px green;
      background-color: darkblue;
      margin: 1em;
    }
  }
</style>

<script>
  export let appendChar;
  export let deleteChar;
  export let outputIndex;
  export let setOutputIndex;
  export let outputText;

  let textInput;

  function handleInput(e) {
    e.preventDefault();
    appendChar(e.target.innerText);
    if (outputIndex != outputText.length && outputIndex != -1) {
      setOutputIndex(outputIndex + 1);
    }
  }

  function addText(e) {
    if (e.charCode === 13) {
      appendChar(textInput.value);
      textInput.value = "";
    }
  }
</script>

<div class="container" on:submit={addText}>
  <table>
    <tr>
      <td><button on:click={handleInput}>&#x2500;</button></td>
      <td><button on:click={handleInput}>&#x2501;</button></td>
      <td><button on:click={handleInput}>&#x2502;</button></td>
      <td><button on:click={handleInput}>&#x2503;</button></td>
      <td><button on:click={handleInput}>&#x2504;</button></td>
      <td><button on:click={handleInput}>&#x2505;</button></td>
      <td><button on:click={handleInput}>&#x2506;</button></td>
      <td><button on:click={handleInput}>&#x2507;</button></td>
      <td><button on:click={handleInput}>&#x2508;</button></td>
      <td><button on:click={handleInput}>&#x2509;</button></td>
      <td><button on:click={handleInput}>&#x250a;</button></td>
      <td><button on:click={handleInput}>&#x250b;</button></td>
      <td><button on:click={handleInput}>&#x250c;</button></td>
      <td><button on:click={handleInput}>&#x250d;</button></td>
      <td><button on:click={handleInput}>&#x250e;</button></td>
      <td><button on:click={handleInput}>&#x250f;</button></td>
    </tr>
    <tr>
      <td><button on:click={handleInput}>&#x2510;</button></td>
      <td><button on:click={handleInput}>&#x2511;</button></td>
      <td><button on:click={handleInput}>&#x2512;</button></td>
      <td><button on:click={handleInput}>&#x2513;</button></td>
      <td><button on:click={handleInput}>&#x2514;</button></td>
      <td><button on:click={handleInput}>&#x2515;</button></td>
      <td><button on:click={handleInput}>&#x2516;</button></td>
      <td><button on:click={handleInput}>&#x2517;</button></td>
      <td><button on:click={handleInput}>&#x2518;</button></td>
      <td><button on:click={handleInput}>&#x2519;</button></td>
      <td><button on:click={handleInput}>&#x251a;</button></td>
      <td><button on:click={handleInput}>&#x251b;</button></td>
      <td><button on:click={handleInput}>&#x251c;</button></td>
      <td><button on:click={handleInput}>&#x251d;</button></td>
      <td><button on:click={handleInput}>&#x251e;</button></td>
      <td><button on:click={handleInput}>&#x251f;</button></td>
    </tr>
    <tr>
      <td><button on:click={handleInput}>&#x2520;</button></td>
      <td><button on:click={handleInput}>&#x2521;</button></td>
      <td><button on:click={handleInput}>&#x2522;</button></td>
      <td><button on:click={handleInput}>&#x2523;</button></td>
      <td><button on:click={handleInput}>&#x2524;</button></td>
      <td><button on:click={handleInput}>&#x2525;</button></td>
      <td><button on:click={handleInput}>&#x2526;</button></td>
      <td><button on:click={handleInput}>&#x2527;</button></td>
      <td><button on:click={handleInput}>&#x2528;</button></td>
      <td><button on:click={handleInput}>&#x2529;</button></td>
      <td><button on:click={handleInput}>&#x252a;</button></td>
      <td><button on:click={handleInput}>&#x252b;</button></td>
      <td><button on:click={handleInput}>&#x252c;</button></td>
      <td><button on:click={handleInput}>&#x252d;</button></td>
      <td><button on:click={handleInput}>&#x252e;</button></td>
      <td><button on:click={handleInput}>&#x252f;</button></td>
    </tr>
    <tr>
      <td><button on:click={handleInput}>&#x2530;</button></td>
      <td><button on:click={handleInput}>&#x2531;</button></td>
      <td><button on:click={handleInput}>&#x2532;</button></td>
      <td><button on:click={handleInput}>&#x2533;</button></td>
      <td><button on:click={handleInput}>&#x2534;</button></td>
      <td><button on:click={handleInput}>&#x2535;</button></td>
      <td><button on:click={handleInput}>&#x2536;</button></td>
      <td><button on:click={handleInput}>&#x2537;</button></td>
      <td><button on:click={handleInput}>&#x2538;</button></td>
      <td><button on:click={handleInput}>&#x2539;</button></td>
      <td><button on:click={handleInput}>&#x253a;</button></td>
      <td><button on:click={handleInput}>&#x253b;</button></td>
      <td><button on:click={handleInput}>&#x253c;</button></td>
      <td><button on:click={handleInput}>&#x253d;</button></td>
      <td><button on:click={handleInput}>&#x253e;</button></td>
      <td><button on:click={handleInput}>&#x253f;</button></td>
    </tr>
    <tr>
      <td><button on:click={handleInput}>&#x2540;</button></td>
      <td><button on:click={handleInput}>&#x2541;</button></td>
      <td><button on:click={handleInput}>&#x2542;</button></td>
      <td><button on:click={handleInput}>&#x2543;</button></td>
      <td><button on:click={handleInput}>&#x2544;</button></td>
      <td><button on:click={handleInput}>&#x2545;</button></td>
      <td><button on:click={handleInput}>&#x2546;</button></td>
      <td><button on:click={handleInput}>&#x2547;</button></td>
      <td><button on:click={handleInput}>&#x2548;</button></td>
      <td><button on:click={handleInput}>&#x2549;</button></td>
      <td><button on:click={handleInput}>&#x254a;</button></td>
      <td><button on:click={handleInput}>&#x254b;</button></td>
      <td><button on:click={handleInput}>&#x254c;</button></td>
      <td><button on:click={handleInput}>&#x254d;</button></td>
      <td><button on:click={handleInput}>&#x254e;</button></td>
      <td><button on:click={handleInput}>&#x254f;</button></td>
    </tr>
    <tr>
      <td><button on:click={handleInput}>&#x2550;</button></td>
      <td><button on:click={handleInput}>&#x2551;</button></td>
      <td><button on:click={handleInput}>&#x2552;</button></td>
      <td><button on:click={handleInput}>&#x2553;</button></td>
      <td><button on:click={handleInput}>&#x2554;</button></td>
      <td><button on:click={handleInput}>&#x2555;</button></td>
      <td><button on:click={handleInput}>&#x2556;</button></td>
      <td><button on:click={handleInput}>&#x2557;</button></td>
      <td><button on:click={handleInput}>&#x2558;</button></td>
      <td><button on:click={handleInput}>&#x2559;</button></td>
      <td><button on:click={handleInput}>&#x255a;</button></td>
      <td><button on:click={handleInput}>&#x255b;</button></td>
      <td><button on:click={handleInput}>&#x255c;</button></td>
      <td><button on:click={handleInput}>&#x255d;</button></td>
      <td><button on:click={handleInput}>&#x255e;</button></td>
      <td><button on:click={handleInput}>&#x255f;</button></td>
    </tr>
    <tr>
      <td><button on:click={handleInput}>&#x2560;</button></td>
      <td><button on:click={handleInput}>&#x2561;</button></td>
      <td><button on:click={handleInput}>&#x2562;</button></td>
      <td><button on:click={handleInput}>&#x2563;</button></td>
      <td><button on:click={handleInput}>&#x2564;</button></td>
      <td><button on:click={handleInput}>&#x2565;</button></td>
      <td><button on:click={handleInput}>&#x2566;</button></td>
      <td><button on:click={handleInput}>&#x2567;</button></td>
      <td><button on:click={handleInput}>&#x2568;</button></td>
      <td><button on:click={handleInput}>&#x2569;</button></td>
      <td><button on:click={handleInput}>&#x256a;</button></td>
      <td><button on:click={handleInput}>&#x256b;</button></td>
      <td><button on:click={handleInput}>&#x256c;</button></td>
      <td><button on:click={handleInput}>&#x256d;</button></td>
      <td><button on:click={handleInput}>&#x256e;</button></td>
      <td><button on:click={handleInput}>&#x256f;</button></td>
    </tr>
    <tr>
      <td><button on:click={handleInput}>&#x2570;</button></td>
      <td><button on:click={handleInput}>&#x2571;</button></td>
      <td><button on:click={handleInput}>&#x2572;</button></td>
      <td><button on:click={handleInput}>&#x2573;</button></td>
      <td><button on:click={handleInput}>&#x2574;</button></td>
      <td><button on:click={handleInput}>&#x2575;</button></td>
      <td><button on:click={handleInput}>&#x2576;</button></td>
      <td><button on:click={handleInput}>&#x2577;</button></td>
      <td><button on:click={handleInput}>&#x2578;</button></td>
      <td><button on:click={handleInput}>&#x2579;</button></td>
      <td><button on:click={handleInput}>&#x257a;</button></td>
      <td><button on:click={handleInput}>&#x257b;</button></td>
      <td><button on:click={handleInput}>&#x257c;</button></td>
      <td><button on:click={handleInput}>&#x257d;</button></td>
      <td><button on:click={handleInput}>&#x257e;</button></td>
      <td><button on:click={handleInput}>&#x257f;</button></td>
    </tr>
  </table>
  <input
    type="text"
    name="text"
    id="text"
    placeholder="Text"
    on:keypress={addText}
    bind:this={textInput}
  />
  <div class="btn-container">
    <button on:click={deleteChar}>&#x2190;</button>
    <button
      on:click={() => {
        appendChar("\n");
      }}>&#x21B5;</button
    >
  </div>
  <div class="help-text">
    Click on button, press space to repeat character.<br />
    Type any text and press enter to insert text.
  </div>
</div>

<style lang="scss">
  div.container {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: auto;

    table {
      margin: auto;
      tr {
        margin: 0;
        td {
          margin: 0.4em;
          button {
            font-size: 1.4em;
            background: none;
            cursor: pointer;
            margin: 0;
            height: 2em;
            width: 2em;
          }
        }
      }
    }

    input {
      font-size: 1.4em;
      border: solid 2px cadetblue;
      border-radius: 4px;
      margin: 1em;
    }

    div.btn-container {
      display: flex;
      flex-direction: row;
      align-content: stretch;
      padding: 1em;
      button {
        flex: 1;
        font-size: 1.4em;
      }
    }

    div.help-text {
      margin: 1em;
    }
  }
</style>

import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useState } from "react";

export default function Home() {
  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleCopyClick = () => {
    copyTextToClipboard(inputText);

    enqueueSnackbar(`${inputText} copiado para área de transferência`, {
      variant: "success",
    });
  };

  //string that will be copied
  const [inputText, setInputText] = useState("");

  return (
    <>
      <header>
        <a href="https://www.youtube.com/@DeveloperALMO">
          <h1>DeveloperAlmo</h1>
          <h2>YouTube Channel</h2>
          <hr />
        </a>
      </header>

      <div className="content">
        <input
          className="main-input"
          placeholder="Type a text"
          onChange={(event) => setInputText(event.target.value)}
        />
        <button className="main-button" onClick={handleCopyClick}>
          Copy
        </button>
        <SnackbarProvider />
      </div>
    </>
  );
}

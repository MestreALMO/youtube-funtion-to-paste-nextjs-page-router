import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { FormEvent, useState } from "react";

export default function Home() {
  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleCopyClick = (event: FormEvent) => {
    event.preventDefault();

    copyTextToClipboard(inputText);

    enqueueSnackbar(`${inputText} copied to clipboard`, {
      variant: "success",
    });
  };

  //string that will be copied
  const [inputText, setInputText] = useState("");

  return (
    <>
      <header>
        <a href="https://www.youtube.com/@DeveloperALMO">
          <h1>DeveloperALMO</h1>
          <h2>YouTube Channel</h2>
          <hr />
        </a>
      </header>

      <form className="content" onSubmit={handleCopyClick}>
        <input
          className="main-input"
          placeholder="Type a text"
          onChange={(event) => setInputText(event.target.value)}
        />
        <button className="main-button" type="submit">
          Copy
        </button>

        {/* display message */}
        <SnackbarProvider />
      </form>
    </>
  );
}

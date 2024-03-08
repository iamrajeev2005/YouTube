import React from "react";

function Profilebuttons() {
  return (
    <div className="flex items-center gap-4">
      <div className="create">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="#fff"
        >
          <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
        </svg>
      </div>
      <div className="notify">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="#fff"
        >
          <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
        </svg>
      </div>
      <div className="profile rounded-full overflow-hidden">
        <img
          height={35}
          width={35}
          src="https://yt3.ggpht.com/gtk4_Qt0VAJsNcP6e0rpjovMZumt9Adkq3LJgsq5XLp5RtuyW8UYYne5rPk19K2CXu1zW3Sr1w=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>
    </div>
  );
}

export default Profilebuttons;
